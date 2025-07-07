"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SuccessStory } from "@/types/success-stories";
import Link from "next/link";

interface SuccessStoryTableProps {
  stories: SuccessStory[];
  onDelete: (id: string) => Promise<void>;
  isDeleting: boolean;
}

export function SuccessStoryTable({ stories, onDelete, isDeleting }: SuccessStoryTableProps) {
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);

  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString();
  };

  const handleDeleteClick = (id: string) => {
    if (confirmDelete === id) {
      onDelete(id);
      setConfirmDelete(null);
    } else {
      setConfirmDelete(id);
    }
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-border">
        <thead className="bg-muted">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"
            >
              Title
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"
            >
              User
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider hidden md:table-cell"
            >
              Category
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider hidden lg:table-cell"
            >
              Date
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-background divide-y divide-border">
          {stories.map((story) => (
            <tr key={story.id} className="hover:bg-muted/50">
              <td className="px-6 py-4">
                <div className="flex flex-col">
                  <span className="font-medium text-foreground">{story.title}</span>
                  <span className="text-xs text-muted-foreground">
                    {truncateText(story.summary, 60)}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-col">
                  <span className="font-medium text-foreground">{story.user.name}</span>
                </div>
              </td>
              <td className="px-6 py-4 hidden md:table-cell">
                <span className="text-sm text-muted-foreground">
                  -
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-muted-foreground hidden lg:table-cell">
                {formatDate(story.createdAt)}
              </td>
              <td className="px-6 py-4">
                <span
                  className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                    story.status === "published"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : story.status === "pending" 
                      ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                      : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  }`}
                >
                  {story.status}
                </span>
              </td>
              <td className="px-6 py-4 text-sm font-medium flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                >
                  <Link href={`/admin/success-stories/edit/${story.id}`}>
                    Edit
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                >
                  <Link href={`/admin/success-stories/comments/${story.id}`}>
                    Comments
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                >
                  <Link href={`/success-stories/${story.id}`} target="_blank">
                    View
                  </Link>
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  disabled={isDeleting}
                  onClick={() => handleDeleteClick(story.id)}
                >
                  {confirmDelete === story.id ? "Confirm" : "Delete"}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {stories.length === 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No success stories found</p>
        </div>
      )}
    </div>
  );
}
