"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { DevLogEntryDetail } from "@/components/dev-log/dev-log-entry";
import sampleDevLogs from "@/data/sample-dev-logs";

// In production, replace with actual Firebase fetch
// import { getDevLogById } from "@/services/devLogService";
import { DevLogEntry } from "@/types/dev-log";
import Link from "next/link";

export default function DevLogEntryPage() {
  const { id } = useParams();
  const [entry, setEntry] = useState<DevLogEntry | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Add admin link if user is logged in
  useEffect(() => {
    const isAdmin = localStorage.getItem("wagus_admin") === "true";
    if (isAdmin) {
      const adminLinkDiv = document.createElement("div");
      adminLinkDiv.className = "fixed top-4 right-4 z-50";
      
      const adminLink = document.createElement("a");
      adminLink.href = `/admin/dev-log/edit/${id}`;
      adminLink.className = "px-3 py-1 bg-primary text-primary-foreground text-sm rounded-md shadow-sm";
      adminLink.textContent = "Edit";
      
      adminLinkDiv.appendChild(adminLink);
      document.body.appendChild(adminLinkDiv);
      
      return () => {
        document.body.removeChild(adminLinkDiv);
      };
    }
  }, [id]);

  useEffect(() => {
    // In production, fetch from Firebase
    // const fetchDevLogEntry = async () => {
    //   setIsLoading(true);
    //   const log = await getDevLogById(id as string);
    //   setEntry(log);
    //   setIsLoading(false);
    // };
    // fetchDevLogEntry();

    // For now, using sample data
    const log = sampleDevLogs.find((log) => log.id === id);
    setEntry(log || null);
    setIsLoading(false);
  }, [id]);

  if (isLoading) {
    return (
      <div className="py-24 text-center">
        <div className="animate-pulse">
          <div className="h-8 w-64 bg-muted mx-auto mb-4 rounded-md"></div>
          <div className="h-4 w-32 bg-muted mx-auto rounded-md"></div>
        </div>
      </div>
    );
  }

  if (!entry) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">
          Dev Log Entry Not Found
        </h1>
        <p className="text-muted-foreground mb-6">
          The dev log entry you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild>
          <Link href="/dev-log">Back to Dev Logs</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button variant="outline" asChild>
            <Link href="/dev-log">← Back to Dev Logs</Link>
          </Button>
        </div>

        <DevLogEntryDetail entry={entry} />

        {/* Related Entries */}
        <div className="mt-16 pt-8 border-t border-border">
          <h2 className="text-2xl font-bold mb-6">Related Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleDevLogs
              .filter(
                (log) => log.id !== entry.id && log.category === entry.category
              )
              .slice(0, 3)
              .map((relatedEntry) => (
                <Link key={relatedEntry.id} href={`/dev-log/${relatedEntry.id}`}>
                  <div className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="text-sm text-muted-foreground mb-2">
                      {new Date(relatedEntry.date).toLocaleDateString()}
                    </div>
                    <h3 className="font-medium mb-2">{relatedEntry.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {relatedEntry.content.substring(0, 100)}...
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
