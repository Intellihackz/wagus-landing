"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SuccessStory, SuccessStoryComment } from "@/types/success-stories";
import { formatDistanceToNow } from 'date-fns';
import { getSuccessStoryById, getSuccessStoryComments, deleteSuccessStoryComment } from "@/lib/services/successStoriesService";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

// Fallback to sample data if Firebase fetch fails
import sampleSuccessStories from "@/data/sample-success-stories";

interface CommentsPageProps {
  params: {
    id: string;
  };
}

// Sample comments data for fallback
const sampleComments: SuccessStoryComment[] = [
  {
    id: "1",
    storyId: "1",
    userId: "user1",
    userDisplayName: "Alex",
    comment: "This is really inspiring! I'm trying to do something similar with my project.",
    createdAt: "2025-06-15T10:30:00Z",
  },
  {
    id: "2",
    storyId: "1",
    userId: "user2",
    userDisplayName: "Taylor",
    comment: "How long did it take you to implement the AI features mentioned?",
    createdAt: "2025-06-16T15:45:00Z",
  },
];

export default function CommentsPage({ params }: CommentsPageProps) {
  const { id } = params;
  const [story, setStory] = useState<SuccessStory | null>(null);
  const [comments, setComments] = useState<SuccessStoryComment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  // Fetch from Firebase
  useEffect(() => {
    const fetchStoryAndComments = async () => {
      setIsLoading(true);
      try {
        const [storyData, commentsData] = await Promise.all([
          getSuccessStoryById(id),
          getSuccessStoryComments(id)
        ]);
        
        if (storyData) {
          setStory(storyData);
          setComments(commentsData);
        } else {
          // Try to find in sample data as fallback
          const foundStory = sampleSuccessStories.find((s) => s.id === id);
          if (foundStory) {
            setStory(foundStory);
            // Filter comments for this story from sample data
            setComments(sampleComments.filter(comment => comment.storyId === id));
            toast("Using sample data - story not found in database", { icon: '⚠️' });
          } else {
            // Story not found anywhere
            toast.error("Success story not found");
            router.push("/admin/success-stories");
          }
        }
      } catch (error) {
        console.error("Error fetching story and comments:", error);
        toast.error("Failed to load data. Using sample data as fallback.");
        
        // Use sample data as fallback
        const foundStory = sampleSuccessStories.find((s) => s.id === id);
        if (foundStory) {
          setStory(foundStory);
          setComments(sampleComments.filter(comment => comment.storyId === id));
        } else {
          router.push("/admin/success-stories");
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchStoryAndComments();
  }, [id, router]);

  const handleDeleteComment = async (commentId: string) => {
    setIsDeleting(true);
    
    try {
      await deleteSuccessStoryComment(id, commentId);
      
      // Update the UI after successful deletion
      setComments(comments.filter(comment => comment.id !== commentId));
      toast.success("Comment deleted successfully");
    } catch (error) {
      console.error("Error deleting comment:", error);
      toast.error("Failed to delete comment. Please try again.");
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
        <div>
          <h1 className="text-2xl font-bold">Comments</h1>
          <p className="text-muted-foreground">For: {story.title}</p>
        </div>
        <Button variant="outline" onClick={() => router.push("/admin/success-stories")}>
          Back to Stories
        </Button>
      </div>

      <div className="bg-card border border-border rounded-lg p-6 mb-8">
        <h2 className="text-lg font-medium mb-4">Story Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Title</p>
            <p>{story.title}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">User</p>
            <p>{story.user.name}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Status</p>
            <p>{story.status}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Created</p>
            <p>{story.createdAt ? new Date(story.createdAt).toLocaleDateString() : "N/A"}</p>
          </div>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg">
        <div className="p-4 border-b border-border">
          <h2 className="font-medium">Comments ({comments.length})</h2>
        </div>

        {comments.length > 0 ? (
          <div className="divide-y divide-border">
            {comments.map((comment) => (
              <div key={comment.id} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                      {comment.userDisplayName.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-medium">{comment.userDisplayName}</p>
                      <p className="text-sm text-muted-foreground">
                        {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    disabled={isDeleting}
                    onClick={() => handleDeleteComment(comment.id)}
                  >
                    Delete
                  </Button>
                </div>
                <p className="text-foreground">{comment.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-6 text-center">
            <p className="text-muted-foreground">No comments found</p>
          </div>
        )}
      </div>
    </div>
  );
}
