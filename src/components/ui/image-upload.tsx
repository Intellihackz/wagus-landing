"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { storage } from "@/lib/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

interface ImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  defaultImage?: string;
}

export function ImageUpload({ value, onChange, defaultImage = "/public/ai-tools.jpg" }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Create local preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    // Upload to Firebase Storage
    setIsUploading(true);
    try {
      // Create a unique filename using timestamp and original name
      const fileName = `success-stories/${Date.now()}-${file.name.replace(/\s/g, '-')}`;
      const storageRef = ref(storage, fileName);
      
      await uploadBytes(storageRef, file);
      const downloadUrl = await getDownloadURL(storageRef);
      
      onChange(downloadUrl);
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const displayImage = previewUrl || value || defaultImage;

  return (
    <div className="space-y-4">
      <div className="relative aspect-video rounded-lg overflow-hidden border border-border">
        {displayImage ? (
          <Image 
            src={displayImage} 
            alt="Cover image" 
            fill 
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <span className="text-muted-foreground">No image selected</span>
          </div>
        )}
      </div>
      
      <div className="flex items-center gap-2">
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
        />
        <Button
          type="button"
          variant="outline"
          onClick={handleButtonClick}
          disabled={isUploading}
          className="w-full"
        >
          {isUploading ? "Uploading..." : "Upload Image"}
        </Button>
        {value && (
          <Button
            type="button"
            variant="ghost"
            onClick={() => {
              onChange("");
              setPreviewUrl(null);
            }}
            className="text-destructive"
          >
            Remove
          </Button>
        )}
      </div>
    </div>
  );
}
