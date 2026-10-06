-- Module 3: Learning Vault

-- 1. Create the learning_vault storage bucket
INSERT INTO storage.buckets (id, name, public) 
VALUES ('learning_vault', 'learning_vault', true)
ON CONFLICT (id) DO NOTHING;

-- 2. Storage Policies
-- Anyone authenticated can read
CREATE POLICY "Authenticated users can read learning_vault" 
ON storage.objects FOR SELECT 
USING (bucket_id = 'learning_vault' AND auth.role() = 'authenticated');

-- Users can upload files to learning_vault
CREATE POLICY "Users can upload to learning_vault" 
ON storage.objects FOR INSERT 
WITH CHECK (bucket_id = 'learning_vault' AND auth.role() = 'authenticated');

-- Users can update their own files
CREATE POLICY "Users can update their own learning_vault files" 
ON storage.objects FOR UPDATE 
USING (bucket_id = 'learning_vault' AND owner = auth.uid());

-- Users can delete their own files
CREATE POLICY "Users can delete their own learning_vault files" 
ON storage.objects FOR DELETE 
USING (bucket_id = 'learning_vault' AND owner = auth.uid());


-- 3. Create vault_metadata table
CREATE TABLE IF NOT EXISTS public.vault_metadata (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    file_name TEXT NOT NULL,
    file_url TEXT NOT NULL,
    file_path TEXT NOT NULL,
    file_type TEXT NOT NULL,
    file_size_bytes BIGINT NOT NULL,
    course_id UUID REFERENCES public.courses(id) ON DELETE CASCADE,
    uploader_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    tags TEXT[] DEFAULT '{}',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS on vault_metadata
ALTER TABLE public.vault_metadata ENABLE ROW LEVEL SECURITY;

-- Everyone can read metadata
CREATE POLICY "Everyone can read vault metadata." 
ON public.vault_metadata FOR SELECT USING (true);

-- Users can insert metadata for their uploads
CREATE POLICY "Users can insert vault metadata." 
ON public.vault_metadata FOR INSERT 
WITH CHECK (uploader_id = auth.uid());

-- Users can delete their own metadata
CREATE POLICY "Users can delete their own vault metadata." 
ON public.vault_metadata FOR DELETE 
USING (uploader_id = auth.uid());
