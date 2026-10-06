import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { S3Client, PutObjectCommand } from "npm:@aws-sdk/client-s3";
import { getSignedUrl } from "npm:@aws-sdk/s3-request-presigner";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.39.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    // Authenticate the user calling this function
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "Missing Authorization header" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      { global: { headers: { Authorization: authHeader } } }
    );

    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { fileName, contentType } = await req.json();
    
    if (!fileName || !contentType) {
      return new Response(JSON.stringify({ error: "Missing fileName or contentType" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Configure S3 client for Cloudflare R2
    const accountId = Deno.env.get("R2_ACCOUNT_ID");
    const accessKeyId = Deno.env.get("R2_ACCESS_KEY_ID");
    const secretAccessKey = Deno.env.get("R2_SECRET_ACCESS_KEY");
    const bucketName = Deno.env.get("R2_BUCKET_NAME");
    const customDomain = Deno.env.get("R2_CUSTOM_DOMAIN"); // e.g. https://pub-xxxxxxxx.r2.dev

    if (!accountId || !accessKeyId || !secretAccessKey || !bucketName) {
      throw new Error("Missing R2 environment variables in Supabase.");
    }

    const s3Client = new S3Client({
      region: "auto",
      endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
    });

    // Unique file key based on user and timestamp
    const uniqueFileKey = `${user.id}/${Date.now()}_${fileName}`;

    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: uniqueFileKey,
      ContentType: contentType,
    });

    // Generate Presigned URL (valid for 5 minutes)
    const presignedUrl = await getSignedUrl(s3Client, command, { expiresIn: 300 });

    // Public URL to store in DB
    const publicUrl = customDomain 
      ? `${customDomain}/${uniqueFileKey}` 
      : `https://${bucketName}.${accountId}.r2.cloudflarestorage.com/${uniqueFileKey}`;

    return new Response(
      JSON.stringify({
        presignedUrl,
        publicUrl,
        fileKey: uniqueFileKey
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Error generating presigned URL:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
