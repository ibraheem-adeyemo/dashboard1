import { useState, useRef } from "react";
import { Image } from "lucide-react";

interface ProductGalleryUploadProp {
  onFilesSelected: (files: any) => void;
  acceptedFormats?: string[];
}
export default function ProductGalleryUpload({
  onFilesSelected,
  acceptedFormats = ["image/jpeg", "image/png", "image/gif"],
}: ProductGalleryUploadProp) {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files).filter((file) =>
      acceptedFormats.includes(file.type),
    );

    if (files.length > 0 && onFilesSelected) {
      onFilesSelected(files);
    }
  };

  const handleFileInput = (e) => {
    const files = Array.from(e.target.files).filter((file) =>
      acceptedFormats.includes(file.type),
    );

    if (files.length > 0 && onFilesSelected) {
      onFilesSelected(files);
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full">
      <h2 className="text-white text-xl font-semibold mb-2">Product Gallery</h2>

      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          relative border-2 border-dashed rounded-lg
          transition-all duration-200 ease-in-out
          flex flex-col items-center justify-center py-3
          cursor-pointer
          ${
            isDragging
              ? "border-indigo-500 bg-indigo-500/5"
              : "border-gray-600 hover:border-indigo-500/50"
          }
        `}
        onClick={handleBrowseClick}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept={acceptedFormats.join(",")}
          onChange={handleFileInput}
          className="hidden"
        />

        <div
          className={`
          mb-4 transition-colors duration-200
          ${isDragging ? "text-indigo-400" : "text-indigo-500"}
        `}
        >
          <Image size={48} strokeWidth={1.5} />
        </div>

        <p className="text-gray-400 text-base mb-1">
          Drop your image here, or{" "}
          <span className="text-gray-300 hover:text-white transition-colors underline">
            browse
          </span>
        </p>

        <p className="text-gray-500 text-sm">
          JPG, PNG and GIF files are allowed
        </p>
      </div>
    </div>
  );
}
