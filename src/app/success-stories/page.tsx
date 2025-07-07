"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { NavbarDemo } from "@/components/navbar";
import { StackedCircularFooterDemo } from "@/components/Footer";
import { SuccessStory } from "@/types/success-stories";
import { getSuccessStories } from "@/lib/services/successStoriesService";
import toast from "react-hot-toast";

// Import sample data for fallback
import sampleSuccessStories from "@/data/sample-success-stories";

import Link from "next/link";

function StoryCard({ story, index }: { story: SuccessStory; index: number }) {
  return (
    <Link href={`/success-stories/${story.id}`}>
      <motion.div
        className="group relative bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
      >
        {/* Cover Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={story.coverImage}
            alt={story.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Featured Badge */}
          {story.likes && story.likes > 20 && (
            <div className="absolute top-3 right-3 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
              ⭐ Popular
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 text-foreground">
            {story.title}
          </h3>

          <p className="text-muted-foreground text-sm mb-3">{story.summary}</p>

          {/* User Info */}
          <div className="mb-3">
            <p className="font-medium text-foreground text-sm">
              {story.user.name}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {story.tags.slice(0, 3).map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs"
              >
                #{tag}
              </span>
            ))}
          </div>
          
          <div className="mt-4 text-sm text-primary font-medium">
            Read full story →
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default function SuccessStoriesPage() {
  const [stories, setStories] = useState<SuccessStory[]>([]);
  const [visibleStories, setVisibleStories] = useState(6); // Start with 6 stories
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch success stories on component mount
  useEffect(() => {
    async function fetchStories() {
      try {
        console.log("Public page - Fetching published stories...");
        const fetchedStories = await getSuccessStories();
        
        if (fetchedStories.length > 0) {
          console.log("Public page - Stories fetched from Firebase:", fetchedStories);
          console.log("Public page - First story status:", fetchedStories[0].status);
          setStories(fetchedStories);
          toast.success(`Loaded ${fetchedStories.length} stories from database`);
        } else {
          // If no stories found in Firebase, use sample data
          console.log("Public page - No stories found in Firebase, using sample data");
          setStories(sampleSuccessStories);
          toast("Using sample stories - no stories found in database", { icon: '⚠️' });
        }
      } catch (err) {
        console.error("Error fetching success stories:", err);
        setError("Failed to load success stories");
        setStories(sampleSuccessStories);
        toast.error("Failed to load data. Using sample stories as fallback.");
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchStories();
  }, []);

  const handleLoadMore = () => {
    setIsLoading(true);
    // Add more stories
    setTimeout(() => {
      setVisibleStories((prev) => Math.min(prev + 6, stories.length));
      setIsLoading(false);
    }, 500);
  };

  const hasMoreStories = visibleStories < stories.length;

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarDemo />

      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-background to-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Success Stories
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Real people, real wins. Discover how the WAGUS community is
                building, earning, and thriving in the Web3 space.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stories Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-pulse text-lg">Loading stories...</div>
              </div>
            ) : error ? (
              <div className="text-center py-20">
                <p className="text-red-500 mb-4">{error}</p>
                <p className="text-muted-foreground">Displaying sample stories instead</p>
              </div>
            ) : stories.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">No success stories found</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {stories
                  .slice(0, visibleStories)
                  .map((story: SuccessStory, index: number) => (
                    <StoryCard key={story.id} story={story} index={index} />
                  ))}
              </div>
            )}

            {/* Load More Button */}
            {hasMoreStories && (
              <div className="flex justify-center mt-12">
                <Button
                  onClick={handleLoadMore}
                  disabled={isLoading}
                  size="lg"
                  className="text-lg px-8 py-6 h-auto"
                >
                  {isLoading ? "Loading..." : "Load More Stories"}
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <StackedCircularFooterDemo />
    </div>
  );
}
