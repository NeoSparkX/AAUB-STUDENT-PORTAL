import { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useAuth } from "../../context/AuthContext";
import { supabase } from "../../lib/supabase";
import { 
  FileText, 
  UploadCloud, 
  Search, 
  Download, 
  Trash2, 
  File as FileIcon, 
  Image as ImageIcon,
  Loader2
} from "lucide-react";

export function LearningVaultView() {
  const { user } = useAuth();
  const [files, setFiles] = useState<any[]>([]);
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("all");
  
  // Upload state
  const [uploading, setUploading] = useState(false);
  const [uploadCourse, setUploadCourse] = useState("");
  const [uploadTags, setUploadTags] = useState("");

  const fetchVaultFiles = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("vault_metadata")
        .select(`
          *,
          course:courses(code, name),
          uploader:profiles(first_name, last_name)
        `)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setFiles(data || []);
    } catch (err) {
      console.error("Error fetching vault files:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchCourses = async () => {
    try {
      const { data, error } = await supabase
        .from("courses")
        .select("id, code, name")
        .order("code");
      
      if (error) throw error;
      setCourses(data || []);
      if (data && data.length > 0) {
        setUploadCourse(data[0].id);
      }
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
  };

  useEffect(() => {
    fetchCourses();
    fetchVaultFiles();
  }, []);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (!user || !uploadCourse) {
      alert("Please select a course to tag the file.");
      return;
    }
    
    setUploading(true);

    try {
      for (const file of acceptedFiles) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
        const filePath = `${uploadCourse}/${fileName}`;

        // 1. Get Presigned URL from Supabase Edge Function
        const { data: presignData, error: presignError } = await supabase.functions.invoke(
          'r2-presign',
          {
            body: { fileName: file.name, contentType: file.type }
          }
        );

        if (presignError || !presignData?.presignedUrl) {
          throw new Error("Failed to get presigned URL for R2");
        }

        const { presignedUrl, publicUrl, fileKey } = presignData;

        // 2. Upload directly to Cloudflare R2 from the browser
        const uploadRes = await fetch(presignedUrl, {
          method: "PUT",
          body: file,
          headers: {
            "Content-Type": file.type,
          },
        });

        if (!uploadRes.ok) {
          throw new Error("Failed to upload file to Cloudflare R2");
        }

        // 3. Insert metadata using the R2 public URL
        const tags = uploadTags.split(",").map(t => t.trim()).filter(Boolean);
        
        const { error: dbError } = await supabase
          .from("vault_metadata")
          .insert({
            file_name: file.name,
            file_url: publicUrl,
            file_path: fileKey, // Store the R2 key just in case we need to delete later
            file_type: file.type,
            file_size_bytes: file.size,
            course_id: uploadCourse,
            uploader_id: user.id,
            tags: tags.length > 0 ? tags : ["Note"]
          });

        if (dbError) throw dbError;
      }
      
      // Refresh list
      await fetchVaultFiles();
      setUploadTags("");
      alert("File(s) uploaded successfully!");
    } catch (err: any) {
      console.error("Upload error:", err);
      alert("Error uploading file: " + err.message);
    } finally {
      setUploading(false);
    }
  }, [user, uploadCourse, uploadTags]);

  const handleDelete = async (fileId: string, filePath: string) => {
    if (!confirm("Are you sure you want to delete this file?")) return;
    
    try {
      // 1. (Optional) Delete from Cloudflare R2
      // Note: You will need a separate Supabase Edge function (e.g. 'r2-delete') 
      // to securely delete the file from the R2 bucket using AWS SDK.
      
      // 2. Delete metadata from Database
      await supabase.from("vault_metadata").delete().eq("id", fileId);
      
      setFiles(files.filter(f => f.id !== fileId));
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete file.");
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx']
    }
  });

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (type: string) => {
    if (type.startsWith("image/")) return <ImageIcon className="text-blue-500" />;
    if (type === "application/pdf") return <FileText className="text-red-500" />;
    return <FileIcon className="text-gray-500" />;
  };

  // Filter files
  const filteredFiles = files.filter(f => {
    const matchCourse = selectedCourse === "all" || f.course_id === selectedCourse;
    const matchSearch = f.file_name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        (f.course?.code && f.course.code.toLowerCase().includes(searchQuery.toLowerCase())) ||
                        f.tags?.some((t: string) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCourse && matchSearch;
  });

  return (
    <div className="flex flex-col gap-6 h-full font-['Inter',sans-serif]">
      <div className="mb-2">
        <h2 className="text-2xl font-bold text-[#101828] mb-1">Learning Vault</h2>
        <p className="text-[#475467] text-sm">Upload and download peer-reviewed notes, PYQs, and lecture slides.</p>
      </div>

      {/* Upload Zone */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-[#101828] mb-4">Contribute Resources</h3>
        
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-[#475467] mb-1.5">Related Course</label>
            <select 
              value={uploadCourse} 
              onChange={e => setUploadCourse(e.target.value)}
              className="w-full h-10 px-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-[#101828] focus:outline-none focus:ring-2 focus:ring-[#4B68E6]/30"
            >
              {courses.map(c => <option key={c.id} value={c.id}>{c.code} - {c.name}</option>)}
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-[#475467] mb-1.5">Tags (comma separated)</label>
            <input 
              type="text" 
              placeholder="e.g. PYQ, Midterm Notes, Chapter 1" 
              value={uploadTags}
              onChange={e => setUploadTags(e.target.value)}
              className="w-full h-10 px-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-[#101828] focus:outline-none focus:ring-2 focus:ring-[#4B68E6]/30"
            />
          </div>
        </div>

        <div 
          {...getRootProps()} 
          className={`border-2 border-dashed rounded-2xl p-8 text-center transition-colors cursor-pointer ${
            isDragActive ? 'border-[#4B68E6] bg-[#4B68E6]/5' : 'border-gray-200 bg-gray-50 hover:bg-gray-100 hover:border-gray-300'
          }`}
        >
          <input {...getInputProps()} />
          <UploadCloud className={`w-10 h-10 mx-auto mb-3 ${isDragActive ? 'text-[#4B68E6]' : 'text-[#667085]'}`} />
          {uploading ? (
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="w-5 h-5 text-[#4B68E6] animate-spin" />
              <p className="text-sm font-medium text-[#101828]">Uploading...</p>
            </div>
          ) : isDragActive ? (
            <p className="text-sm font-medium text-[#4B68E6]">Drop the files here...</p>
          ) : (
            <div>
              <p className="text-sm font-medium text-[#101828] mb-1">Drag & drop files here, or click to select</p>
              <p className="text-xs text-[#667085]">Supports PDF, PNG, JPG, DOCX, PPTX</p>
            </div>
          )}
        </div>
      </div>

      {/* File Explorer */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 flex-1 flex flex-col min-h-0">
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
          <h3 className="text-lg font-semibold text-[#101828]">Resource Explorer</h3>
          <div className="flex gap-3">
            <select 
              value={selectedCourse} 
              onChange={e => setSelectedCourse(e.target.value)}
              className="h-9 px-3 bg-white border border-gray-200 rounded-xl text-sm text-[#101828] focus:outline-none focus:ring-2 focus:ring-[#4B68E6]/30"
            >
              <option value="all">All Courses</option>
              {courses.map(c => <option key={c.id} value={c.id}>{c.code}</option>)}
            </select>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#475467]" />
              <input 
                type="text" 
                placeholder="Search resources..." 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="h-9 pl-9 pr-4 bg-white border border-gray-200 rounded-xl text-sm text-[#101828] focus:outline-none focus:ring-2 focus:ring-[#4B68E6]/30 w-full sm:w-[240px]"
              />
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex-1 flex items-center justify-center">
            <Loader2 className="w-8 h-8 text-[#4B68E6] animate-spin" />
          </div>
        ) : filteredFiles.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8 bg-gray-50 rounded-xl border border-gray-100 border-dashed">
            <FileText className="w-12 h-12 text-gray-300 mb-3" />
            <p className="text-sm font-medium text-[#101828]">No resources found</p>
            <p className="text-xs text-[#667085] mt-1">Try adjusting your filters or upload a new file.</p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto pr-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredFiles.map((file) => (
                <div key={file.id} className="p-4 bg-white border border-gray-200 rounded-xl hover:border-[#4B68E6]/40 hover:shadow-sm transition-all group flex flex-col">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center shrink-0">
                      {getFileIcon(file.file_type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-[#101828] truncate" title={file.file_name}>
                        {file.file_name}
                      </p>
                      <p className="text-xs text-[#475467] truncate">
                        {file.course?.code} · {formatSize(file.file_size_bytes)}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {file.tags?.map((tag: string, i: number) => (
                      <span key={i} className="text-[10px] font-medium px-2 py-0.5 rounded bg-gray-100 text-[#475467]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div className="text-[11px] text-[#667085]">
                      By {file.uploader?.first_name || "Unknown"}
                    </div>
                    <div className="flex gap-2">
                      {user?.id === file.uploader_id && (
                        <button 
                          onClick={() => handleDelete(file.id, file.file_path)}
                          className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                      <a 
                        href={file.file_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-1.5 text-[#4B68E6] bg-[#4B68E6]/10 hover:bg-[#4B68E6]/20 rounded-lg transition-colors flex items-center gap-1"
                      >
                        <Download className="w-4 h-4" />
                        <span className="text-xs font-semibold sr-only sm:not-sr-only">Open</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
