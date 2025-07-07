"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DevLogEntry, DevLogCategory, TabItem } from "@/types/dev-log";
import { DevLogEntryCard } from "@/components/dev-log/dev-log-entry";
import { DevLogTabs } from "@/components/dev-log/dev-log-tabs";
import { SearchBar } from "@/components/dev-log/search-bar";
import sampleDevLogs from "@/data/sample-dev-logs";

// In production, replace with actual Firebase fetch
// import { getDevLogs } from "@/services/devLogService";

export default function DevLogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [devLogs, setDevLogs] = useState<DevLogEntry[]>(sampleDevLogs);
  const [filteredLogs, setFilteredLogs] = useState<DevLogEntry[]>(sampleDevLogs);

  const tabs: TabItem[] = [
    {
      label: "All Updates",
      value: "all",
      filter: () => true,
    },
    {
      label: "Feature Updates",
      value: "feature",
      filter: (entry) => entry.category === DevLogCategory.FEATURE_UPDATE,
    },
    {
      label: "Roadmap",
      value: "roadmap",
      filter: (entry) => entry.category === DevLogCategory.ROADMAP_UPDATE,
    },
    {
      label: "Announcements",
      value: "announcements",
      filter: (entry) => entry.category === DevLogCategory.ANNOUNCEMENT,
    },
    {
      label: "Technical",
      value: "technical",
      filter: (entry) => entry.category === DevLogCategory.TECHNICAL,
    },
  ];

  // In production, fetch actual data from Firebase
  // useEffect(() => {
  //   const fetchDevLogs = async () => {
  //     const logs = await getDevLogs();
  //     setDevLogs(logs);
  //   };
  //   fetchDevLogs();
  // }, []);

  useEffect(() => {
    // Filter logs based on active tab and search query
    const activeTabFilter = tabs.find((tab) => tab.value === activeTab)?.filter || (() => true);
    
    const filtered = devLogs.filter((log) => {
      const matchesTab = activeTabFilter(log);
      const matchesSearch = searchQuery === "" || (
        log.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        log.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (log.tags && log.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())))
      );
      
      return matchesTab && matchesSearch;
    });
    
    setFilteredLogs(filtered);
  }, [activeTab, searchQuery, devLogs]);

  // Add admin link if user is logged in and not on mobile
  useEffect(() => {
    const isAdmin = localStorage.getItem("wagus_admin") === "true";
    // Check if the device is mobile using window.innerWidth
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    
    if (isAdmin && !isMobile) {
      const adminLinkDiv = document.createElement("div");
      adminLinkDiv.className = "fixed top-4 right-4 z-50";
      
      const adminLink = document.createElement("a");
      adminLink.href = "/admin/dev-log";
      adminLink.className = "px-3 py-1 bg-primary text-primary-foreground text-sm rounded-md shadow-sm";
      adminLink.textContent = "Admin";
      
      adminLinkDiv.appendChild(adminLink);
      document.body.appendChild(adminLinkDiv);
      
      // Handle resize events to hide admin link if window is resized to mobile dimensions
      const handleResize = () => {
        if (window.innerWidth < 768) {
          if (document.body.contains(adminLinkDiv)) {
            document.body.removeChild(adminLinkDiv);
          }
        } else {
          if (!document.body.contains(adminLinkDiv)) {
            document.body.appendChild(adminLinkDiv);
          }
        }
      };
      
      window.addEventListener('resize', handleResize);
      
      return () => {
        if (document.body.contains(adminLinkDiv)) {
          document.body.removeChild(adminLinkDiv);
        }
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <div className="py-12 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Dev Log
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow our journey as we build and improve the WAGUS platform
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10">
          <DevLogTabs
            tabs={tabs}
            activeTab={activeTab}
            onChange={setActiveTab}
            className="order-2 md:order-1"
          />
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            className="w-full md:w-64 order-1 md:order-2"
          />
        </div>

        {/* Dev Log Entries */}
        {filteredLogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLogs.map((log, index) => (
              <DevLogEntryCard key={log.id} entry={log} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">No dev logs found</p>
          </div>
        )}
      </div>
    </div>
  );
}
