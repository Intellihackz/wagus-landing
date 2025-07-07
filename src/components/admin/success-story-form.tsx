"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { SuccessStory } from "@/types/success-stories";

interface SuccessStoryFormProps {
  initialData?: Partial<SuccessStory>;
  onSubmit: (data: Partial<SuccessStory>) => Promise<void>;
  isSubmitting: boolean;
}

export function SuccessStoryForm({
  initialData,
  onSubmit,
  isSubmitting,
}: SuccessStoryFormProps) {
  const [formData, setFormData] = useState<Partial<SuccessStory>>({
    title: "",
    summary: "",
    content: "",
    user: {
      name: "",
    },
    coverImage: "",
    tags: [],
    status: "published", // Default to published
    ...initialData,
  });

  const [tagInput, setTagInput] = useState("");
  const [previewMode, setPreviewMode] = useState(false);

  // Reset form when initialData changes
  useEffect(() => {
    if (initialData) {
      setFormData({
        title: "",
        summary: "",
        content: "",
        user: {
          name: "",
        },
        coverImage: "",
        tags: [],
        status: "published", // Default to published
        ...initialData,
      });
    }
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    
    if (name.startsWith("user.")) {
      const userField = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        user: {
          ...prev.user!,
          [userField]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleTagAdd = () => {
    if (!tagInput.trim()) return;
    
    setFormData((prev) => ({
      ...prev,
      tags: [...(prev.tags || []), tagInput.trim().toLowerCase()],
    }));
    setTagInput("");
  };

  const handleTagRemove = (tagToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: (prev.tags || []).filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex justify-end space-x-2">
        <Button
          type="button"
          variant={previewMode ? "outline" : "default"}
          onClick={() => setPreviewMode(false)}
        >
          Edit
        </Button>
        <Button
          type="button"
          variant={previewMode ? "default" : "outline"}
          onClick={() => setPreviewMode(true)}
        >
          Preview
        </Button>
      </div>

      {previewMode ? (
        <div className="border rounded-lg p-6 bg-card">
          <h1 className="text-2xl font-bold mb-2">{formData.title}</h1>
          <p className="text-lg text-muted-foreground mb-4">{formData.summary}</p>
          
          <div className="flex items-center gap-2 mb-4">
            <div className="flex flex-col">
              <span className="font-medium">{formData.user?.name}</span>
            </div>
          </div>
          
          <div className="prose dark:prose-invert max-w-none">
            <pre className="whitespace-pre-wrap">{formData.content}</pre>
          </div>
          
          {formData.tags && formData.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {formData.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="summary">Summary</Label>
            <Input
              id="summary"
              name="summary"
              value={formData.summary}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="user.name">User Name</Label>
              <Input
                id="user.name"
                name="user.name"
                value={formData.user?.name || ""}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="coverImage">Cover Image URL</Label>
              <Input
                id="coverImage"
                name="coverImage"
                value={formData.coverImage || ""}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content (Markdown)</Label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows={15}
              className="w-full p-2 rounded-md border border-border bg-background"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags">Tags</Label>
            <div className="flex space-x-2">
              <Input
                id="tagInput"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                placeholder="Add a tag"
              />
              <Button
                type="button"
                onClick={handleTagAdd}
                variant="outline"
              >
                Add
              </Button>
            </div>
            {formData.tags && formData.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.tags.map((tag) => (
                  <div
                    key={tag}
                    className="flex items-center gap-1 px-2 py-1 rounded-md bg-muted"
                  >
                    <span className="text-sm">#{tag}</span>
                    <button
                      type="button"
                      onClick={() => handleTagRemove(tag)}
                      className="text-muted-foreground hover:text-destructive"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full p-2 rounded-md border border-border bg-background"
              required
            >
              <option value="published">Published</option>
              <option value="pending">Pending</option>
              <option value="draft">Draft</option>
            </select>
          </div>
        </>
      )}

      <div className="flex justify-end space-x-2">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : initialData?.id ? "Update" : "Create"}
        </Button>
      </div>
    </form>
  );
}
