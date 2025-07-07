"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { DevLogEntry, DevLogCategory } from "@/types/dev-log";

interface DevLogFormProps {
  initialData?: Partial<DevLogEntry>;
  onSubmit: (data: Partial<DevLogEntry>) => Promise<void>;
  isSubmitting: boolean;
}

export function DevLogForm({
  initialData,
  onSubmit,
  isSubmitting,
}: DevLogFormProps) {
  const [formData, setFormData] = useState<Partial<DevLogEntry>>({
    title: "",
    content: "",
    category: DevLogCategory.FEATURE_UPDATE,
    tags: [],
    author: "",
    date: new Date().toISOString().split("T")[0],
    status: "draft",
    ...initialData,
  });

  const [tagInput, setTagInput] = useState("");
  const [previewMode, setPreviewMode] = useState(false);

  // Reset form when initialData changes
  useEffect(() => {
    if (initialData) {
      setFormData({
        title: "",
        content: "",
        category: DevLogCategory.FEATURE_UPDATE,
        tags: [],
        author: "",
        date: new Date().toISOString().split("T")[0],
        status: "draft",
        ...initialData,
      });
    }
  }, [initialData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
          <div className="mb-4">
            <span className="inline-block px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">
              {formData.category}
            </span>
          </div>
          <h1 className="text-2xl font-bold mb-2">{formData.title}</h1>
          <div className="text-sm text-muted-foreground mb-4">
            {formData.date && new Date(formData.date).toLocaleDateString()} • {formData.author}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <Label htmlFor="author">Author</Label>
              <Input
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-2 rounded-md border border-border bg-background"
                required
              >
                {Object.values(DevLogCategory).map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="imageUrl">Image URL (optional)</Label>
            <Input
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl || ""}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
            />
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

          <div className="flex items-center space-x-2">
            <Checkbox
              id="published"
              checked={formData.status === "published"}
              onCheckedChange={(checked) => {
                setFormData((prev) => ({
                  ...prev,
                  status: checked ? "published" : "draft",
                }));
              }}
            />
            <Label htmlFor="published">Publish immediately</Label>
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
