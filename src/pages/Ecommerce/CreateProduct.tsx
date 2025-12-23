"use client";

import Button from "@/components/forms/custom-button";
import ProductGalleryUpload from "@/components/ui/FileUpload";
import Image from "next/image";
import React, { useState } from "react";
import { ProductForm } from "./ProductForm";

export const CreateProduct = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [previewUrl, setPreviewUrl] = useState([]);

  const handleFilesSelected = (files) => {
    setUploadedFiles((prev) => [...prev, ...files]);
    files.forEach((element) => {
      setPreviewUrl((prev) => [...prev, URL.createObjectURL(element)]);
    });
  };

  return (
    <div>
      <div className="flex justify-between gap-[15rem] bg-neutral-bg border rounded-lg border-[var(--neutral-border)] p-[3rem]">
        <div className="w-2/5">
          <ProductForm />
        </div>
        <div className="flex flex-col w-2/5 justify-between">
          <div className="">
            <div className="w-full h-[500px] border rounded-lg border-gray-300 dark:border-gray-700 p-[1rem] mb-[4rem] overflow-scroll">
              {uploadedFiles.length > 0 &&
                previewUrl.map((file, i) => (
                  <div className="w-full h-auto mb-[1rem]" key={i}>
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
          <div className="flex gap-[1rem]">
            <Button
              text="Update"
              className="dark:bg-yellow-200 bg-yellow-500 font-bold"
            />
            <Button
              text="Delete"
              className="dark:bg-red-300 bg-red-500 font-bold"
            />
            <Button text="Cancel" className="bg-grey-400 font-bold" />
          </div>
        </div>
      </div>
    </div>
  );
};
