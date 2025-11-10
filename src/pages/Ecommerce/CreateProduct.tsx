"use client";

import ProductGalleryUpload from "@/components/ui/FileUpload";
import Image from "next/image";
import React, { useState } from "react";
import { ProductForm } from "./ProductForm";

export const CreateProduct = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [previewUrl, setPreviewUrl] = useState([]);

  const handleFilesSelected = (files) => {
    console.log("Files selected:", files);
    setUploadedFiles((prev) => [...prev, ...files]);
    files.forEach((element) => {
      setPreviewUrl((prev) => [...prev, URL.createObjectURL(element)]);
    });
  };
  return (
    <div>
      <div className="flex justify-between gap-[15rem] border rounded-lg border-[var(--neutral-border)] p-[3rem]">
        <div className="flex-2/5">
            <ProductForm />
        </div>
        <div className="flex-2/5">
          <div className="w-full h-[500px] border rounded-lg border-[var(--neutral-border)] p-[1rem] mb-[4rem]">
            {uploadedFiles.length > 0 &&
              previewUrl.map((file, i) => (
                <div className="w-full h-auto" key={i}>
                  <Image
                    src={file}
                    alt="image preview"
                    width={400}
                    height={400}
                  />
                </div>
              ))}
          </div>
          <div>
            <ProductGalleryUpload onFilesSelected={handleFilesSelected} />
          </div>
        </div>
      </div>
    </div>
  );
};
