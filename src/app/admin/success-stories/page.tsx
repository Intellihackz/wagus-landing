"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SuccessStoryTable } from "@/components/admin/success-story-table";
import { SearchBar } from "@/components/dev-log/search-bar";
import { SuccessStory } from "@/types/success-stories";
import { getAllSuccessStories, deleteSuccessStory } from "@/lib/services/successStoriesService";
import toast from "react-hot-toast";

// Fallback to sample data if Firebase fetch fails
import sampleSuccessStories from "@/data/sample-success-stories";

export default function AdminSuccessStoriesPage() {
  const [stories, setStories] = useState<SuccessStory[]>([]);
  const [filteredStories, setFilteredStories] = useState<SuccessStory[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  // Fetch from Firebase
  useEffect(() => {
    const fetchSuccessStories = async () => {
      setIsLoading(true);
      try {
        const data = await getAllSuccessStories();
        console.log("Admin view - All stories:", data);
        
        // Check how many published stories we have
        const publishedCount = data.filter(story => story.status === 'published').length;
        console.log(`Admin view - Published stories count: ${publishedCount}`);
        
        setStories(data);
        setFilteredStories(data);
      } catch (error) {
        console.error("Error fetching success stories:", error);
        toast.error("Failed to load success stories. Using sample data.");
        setStories(sampleSuccessStories);
        setFilteredStories(sampleSuccessStories);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSuccessStories();
  }, []);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredStories(stories);
      return;
    }

    const normalizedQuery = searchQuery.toLowerCase();
    const filtered = stories.filter((story) => 
      story.title.toLowerCase().includes(normalizedQuery) ||
      story.summary.toLowerCase().includes(normalizedQuery) ||
      story.content.toLowerCase().includes(normalizedQuery) ||
      story.user.name.toLowerCase().includes(normalizedQuery) ||
      (story.tags && story.tags.some(tag => tag.toLowerCase().includes(normalizedQuery)))
    );
    
    setFilteredStories(filtered);
  }, [searchQuery, stories]);

  const handleDeleteStory = async (id: string) => {
    setIsDeleting(true);
    
    try {
      await deleteSuccessStory(id);
      
      // Update the UI after successful deletion
      setStories(stories.filter(story => story.id !== id));
      setFilteredStories(filteredStories.filter(story => story.id !== id));
      toast.success("Success story deleted successfully");
    } catch (error) {
      console.error("Error deleting success story:", error);
      toast.error("Failed to delete success story. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-pulse text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">Manage Success Stories</h1>
        <div className="flex gap-4">
          <SearchBar 
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search stories..."
          />
          <Button asChild>
            <Link href="/admin/success-stories/new">Create New</Link>
          </Button>
        </div>
      </div>

      <SuccessStoryTable 
        stories={filteredStories}
        onDelete={handleDeleteStory}
        isDeleting={isDeleting}
      />
    </div>
  );
}
