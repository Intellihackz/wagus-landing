"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DevLogTable } from "@/components/admin/dev-log-table";
import { SearchBar } from "@/components/dev-log/search-bar";
import { DevLogEntry } from "@/types/dev-log";
import sampleDevLogs from "@/data/sample-dev-logs";

// In production, replace with actual Firebase functions
// import { getDevLogs, deleteDevLog } from "@/lib/services/devLogService";

export default function AdminDevLogsPage() {
  const [devLogs, setDevLogs] = useState<DevLogEntry[]>(sampleDevLogs);
  const [filteredLogs, setFilteredLogs] = useState<DevLogEntry[]>(sampleDevLogs);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  // In production, fetch from Firebase
  useEffect(() => {
    // const fetchDevLogs = async () => {
    //   setIsLoading(true);
    //   const logs = await getDevLogs();
    //   setDevLogs(logs);
    //   setFilteredLogs(logs);
    //   setIsLoading(false);
    // };
    // fetchDevLogs();

    // Using sample data for now
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredLogs(devLogs);
      return;
    }

    const normalizedQuery = searchQuery.toLowerCase();
    const filtered = devLogs.filter((log) => 
      log.title.toLowerCase().includes(normalizedQuery) ||
      log.content.toLowerCase().includes(normalizedQuery) ||
      log.author.toLowerCase().includes(normalizedQuery) ||
      log.category.toLowerCase().includes(normalizedQuery) ||
      (log.tags && log.tags.some(tag => tag.toLowerCase().includes(normalizedQuery)))
    );
    
    setFilteredLogs(filtered);
  }, [searchQuery, devLogs]);

  const handleDeleteLog = async (id: string) => {
    setIsDeleting(true);
    
    try {
      // In production:
      // await deleteDevLog(id);
      
      // For now, just update the state
      setDevLogs(devLogs.filter(log => log.id !== id));
      setFilteredLogs(filteredLogs.filter(log => log.id !== id));
    } catch (error) {
      console.error("Error deleting dev log:", error);
      alert("Failed to delete dev log. Please try again.");
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
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">Manage Dev Logs</h1>
        <div className="flex gap-4">
          <SearchBar 
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search logs..."
          />
          <Button asChild>
            <Link href="/admin/dev-log/new">Create New</Link>
          </Button>
        </div>
      </div>

      <DevLogTable 
        logs={filteredLogs}
        onDelete={handleDeleteLog}
        isDeleting={isDeleting}
      />
    </div>
  );
}
