"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { SuccessStoryForm } from "@/components/admin/success-story-form";
import { SuccessStory } from "@/types/success-stories";
import { getSuccessStoryById, updateSuccessStory } from "@/lib/services/successStoriesService";
import toast from "react-hot-toast";

// Fallback to sample data if Firebase fetch fails
import sampleSuccessStories from "@/data/sample-success-stories";

interface EditSuccessStoryPageProps {
  params: {
    id: string;
  };
}

export default function EditSuccessStoryPage({ params }: EditSuccessStoryPageProps) {
  const { id } = params;
  const [story, setStory] = useState<SuccessStory | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  // Fetch from Firebase
  useEffect(() => {
    const fetchStory = async () => {
      setIsLoading(true);
      try {
        const storyData = await getSuccessStoryById(id);
        if (storyData) {
          setStory(storyData);          } else {
            // Try to find in sample data as fallback
            const foundStory = sampleSuccessStories.find((s) => s.id === id);
            if (foundStory) {
              setStory(foundStory);
              toast("Using sample data - story not found in database", {
                icon: '⚠️'
              });
            } else {
              // Story not found anywhere
              toast.error("Success story not found");
              router.push("/admin/success-stories");
            }
          }
        } catch (error) {
          console.error("Error fetching success story:", error);
          toast.error("Failed to load success story");
          router.push("/admin/success-stories");
        } finally {
        setIsLoading(false);
      }
    };
    fetchStory();
  }, [id, router]);

  const handleSubmit = async (data: Partial<SuccessStory>) => {
    setIsSubmitting(true);

    try {
      await updateSuccessStory(id, data);
      toast.success("Success story updated successfully");
      router.push("/admin/success-stories");
      router.refresh();
    } catch (error) {
      console.error("Error updating success story:", error);
      toast.error("Failed to update success story. Please try again.");
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-pulse text-lg">Loading...</div>
      </div>
    );
  }

  if (!story) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-lg">Success story not found</div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Edit Success Story</h1>
        <Button variant="outline" onClick={() => router.push("/admin/success-stories")}>
          Cancel
        </Button>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <SuccessStoryForm 
          initialData={story}
          onSubmit={handleSubmit} 
          isSubmitting={isSubmitting} 
        />
      </div>
    </div>
  );
}
