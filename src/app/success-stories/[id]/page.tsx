"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { NavbarDemo } from "@/components/navbar";
import { StackedCircularFooterDemo } from "@/components/Footer";
import { SuccessStory, SuccessStoryComment } from "@/types/success-stories";
import { motion } from "framer-motion";
import { formatDistanceToNow } from "date-fns";
import { getSuccessStoryById, getSuccessStoryComments, addSuccessStoryComment } from "@/lib/services/successStoriesService";
import toast from "react-hot-toast";

// Sample data for fallback if fetch fails
import sampleSuccessStories from "@/data/sample-success-stories";

export default function SuccessStoryPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  
  const [story, setStory] = useState<SuccessStory | null>(null);
  const [comments, setComments] = useState<SuccessStoryComment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newComment, setNewComment] = useState("");
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);
  
  useEffect(() => {
    const fetchStoryAndComments = async () => {
      setIsLoading(true);
      try {
        // Try to fetch from Firebase
        const [storyData, commentsData] = await Promise.all([
          getSuccessStoryById(id),
          getSuccessStoryComments(id)
        ]);
        
        if (storyData) {
          setStory(storyData);
          setComments(commentsData);
        } else {
          // Try to find in sample data as fallback
          const sampleStory = sampleSuccessStories.find(s => s.id === id);
          if (sampleStory) {
            setStory(sampleStory);
            setComments([]);
            toast("Using sample data - story not found in database", { icon: '⚠️' });
          } else {
            toast.error("Success story not found");
            router.push("/success-stories");
          }
        }
      } catch (error) {
        console.error("Error fetching story:", error);
        toast.error("Failed to load data");
        
        // Use sample data as fallback
        const sampleStory = sampleSuccessStories.find(s => s.id === id);
        if (sampleStory) {
          setStory(sampleStory);
          setComments([]);
        } else {
          router.push("/success-stories");
        }
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchStoryAndComments();
  }, [id, router]);
  
  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    
    setIsSubmittingComment(true);
    try {
      // In a real app, you would get these values from auth
      const userId = "sample-user-id";
      const userDisplayName = "Anonymous User";
      
      await addSuccessStoryComment({
        storyId: id,
        userId,
        userDisplayName,
        comment: newComment
      });
      
      // Add optimistic update
      const newCommentObj: SuccessStoryComment = {
        id: Date.now().toString(), // Temporary ID
        storyId: id,
        userId,
        userDisplayName,
        comment: newComment,
        createdAt: new Date().toISOString()
      };
      
      setComments(prev => [...prev, newCommentObj]);
      setNewComment("");
      toast.success("Comment added successfully");
    } catch (error) {
      console.error("Error submitting comment:", error);
      toast.error("Failed to add comment");
    } finally {
      setIsSubmittingComment(false);
    }
  };
  
  if (isLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <NavbarDemo />
        <main className="flex-1 pt-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center py-20">
              <div className="animate-pulse text-lg">Loading...</div>
            </div>
          </div>
        </main>
        <StackedCircularFooterDemo />
      </div>
    );
  }
  
  if (!story) {
    return (
      <div className="flex flex-col min-h-screen">
        <NavbarDemo />
        <main className="flex-1 pt-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center py-20">
              <h2 className="text-2xl font-bold mb-4">Story Not Found</h2>
              <p className="text-muted-foreground mb-6">The story you're looking for doesn't exist or has been removed.</p>
              <Button onClick={() => router.push("/success-stories")}>
                Back to Success Stories
              </Button>
            </div>
          </div>
        </main>
        <StackedCircularFooterDemo />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarDemo />
      
      <main className="flex-1 pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <div className="mb-8">
            <Button 
              variant="outline" 
              onClick={() => router.push("/success-stories")}
              className="flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Back to All Stories
            </Button>
          </div>
          
          {/* Story header */}
          <motion.div 
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{story.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">{story.summary}</p>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="font-medium">{story.user.name}</div>
            </div>
          </motion.div>
          
          {/* Cover Image */}
          <motion.div 
            className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image 
              src={story.coverImage} 
              alt={story.title}
              fill
              className="object-cover"
            />
          </motion.div>
          
          {/* Story content */}
          <motion.div 
            className="prose prose-lg dark:prose-invert max-w-none mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="whitespace-pre-line">
              {story.content}
            </div>
          </motion.div>
          
          {/* Tags */}
          {story.tags && story.tags.length > 0 && (
            <motion.div 
              className="flex flex-wrap gap-2 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {story.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </motion.div>
          )}
          
          {/* Comments section */}
          <motion.div
            className="border-t border-border pt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-6">Comments ({comments.length})</h2>
            
            {/* Comment form */}
            <form onSubmit={handleSubmitComment} className="mb-10">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Share your thoughts..."
                className="w-full p-4 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                rows={4}
              />
              <div className="flex justify-end mt-4">
                <Button 
                  type="submit" 
                  disabled={!newComment.trim() || isSubmittingComment}
                >
                  {isSubmittingComment ? "Posting..." : "Post Comment"}
                </Button>
              </div>
            </form>
            
            {/* Comment list */}
            <div className="space-y-8">
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <div key={comment.id} className="border-b border-border pb-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-medium">{comment.userDisplayName}</h3>
                        <p className="text-sm text-muted-foreground">
                          {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
                        </p>
                      </div>
                    </div>
                    <p className="text-foreground">{comment.comment}</p>
                  </div>
                ))
              ) : (
                <div className="text-center py-10">
                  <p className="text-muted-foreground">No comments yet. Be the first to comment!</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </main>
      
      <StackedCircularFooterDemo />
    </div>
  );
}
