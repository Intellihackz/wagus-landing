"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { DevLogForm } from "@/components/admin/dev-log-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DevLogEntry } from "@/types/dev-log";
import sampleDevLogs from "@/data/sample-dev-logs";

// In production, replace with actual Firebase functions
// import { getDevLogById, updateDevLog } from "@/lib/services/devLogService";

export default function EditDevLogPage() {
  const router = useRouter();
  const { id } = useParams();
  const [devLog, setDevLog] = useState<DevLogEntry | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // In production, fetch from Firebase
  useEffect(() => {
    // const fetchDevLog = async () => {
    //   setIsLoading(true);
    //   const log = await getDevLogById(id as string);
    //   setDevLog(log);
    //   setIsLoading(false);
    // };
    // fetchDevLog();

    // For now, use sample data
    const log = sampleDevLogs.find((log) => log.id === id);
    setDevLog(log || null);
    setIsLoading(false);
  }, [id]);

  const handleSubmit = async (data: Partial<DevLogEntry>) => {
    if (!devLog) return;
    
    setIsSubmitting(true);
    try {
      // In production, update in Firebase
      // await updateDevLog(id as string, data);
      
      // For now, just log the update
      console.log("Updated Dev Log:", { ...devLog, ...data });
      
      // After successful update, redirect to the admin dev logs page
      setTimeout(() => {
        router.push("/admin/dev-log");
      }, 1000);
    } catch (error) {
      console.error("Error updating dev log:", error);
      alert("Failed to update dev log. Please try again.");
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

  if (!devLog) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-bold mb-4">Dev Log Not Found</h2>
        <p className="text-muted-foreground mb-6">
          The dev log you're trying to edit could not be found.
        </p>
        <Button asChild>
          <Link href="/admin/dev-log">Back to Dev Logs</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Edit Dev Log</h1>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/admin/dev-log">Cancel</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={`/dev-log/${id}`} target="_blank">View Live</Link>
          </Button>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
        <DevLogForm
          initialData={devLog}
          onSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
      </div>
    </div>
  );
}
