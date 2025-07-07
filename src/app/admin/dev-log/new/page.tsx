"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DevLogForm } from "@/components/admin/dev-log-form";
import { DevLogEntry } from "@/types/dev-log";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// In production, replace with actual Firebase function
// import { createDevLog } from "@/lib/services/devLogService";

export default function NewDevLogPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data: Partial<DevLogEntry>) => {
    setIsSubmitting(true);
    try {
      // In production, save to Firebase
      // const newLogId = await createDevLog(data);
      
      // For now, just simulate a successful creation
      console.log("New Dev Log:", data);
      
      // After successful creation, redirect to the admin dev logs page
      setTimeout(() => {
        router.push("/admin/dev-log");
      }, 1000);
    } catch (error) {
      console.error("Error creating dev log:", error);
      alert("Failed to create dev log. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Create New Dev Log</h1>
        <Button variant="outline" asChild>
          <Link href="/admin/dev-log">Cancel</Link>
        </Button>
      </div>

      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        <DevLogForm
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </div>
    </div>
  );
}
