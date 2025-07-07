"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SuccessStoryForm } from "@/components/admin/success-story-form";
import { SuccessStory } from "@/types/success-stories";
import { createSuccessStory } from "@/lib/services/successStoriesService";
import toast from "react-hot-toast";

export default function NewSuccessStoryPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (data: Partial<SuccessStory>) => {
    setIsSubmitting(true);

    try {
      // If status is still draft, set it to published by default
      if (data.status === 'draft') {
        data.status = 'published';
      }
      
      const id = await createSuccessStory(data);
      toast.success("Success story created successfully");
      router.push("/admin/success-stories");
      router.refresh();
    } catch (error) {
      console.error("Error creating success story:", error);
      toast.error("Failed to create success story. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Create New Success Story</h1>
        <Button variant="outline" onClick={() => router.push("/admin/success-stories")}>
          Cancel
        </Button>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <SuccessStoryForm 
          onSubmit={handleSubmit} 
          isSubmitting={isSubmitting} 
        />
      </div>
    </div>
  );
}
