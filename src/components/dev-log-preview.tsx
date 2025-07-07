"use client";

import React from "react";
import { motion } from "framer-motion";
import { DevLogEntry } from "@/types/dev-log";
import { DevLogEntryCard } from "@/components/dev-log/dev-log-entry";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import sampleDevLogs from "@/data/sample-dev-logs";

// In production, replace with actual Firebase fetch
// import { getRecentDevLogs } from "@/services/devLogService";

interface DevLogPreviewProps {
  className?: string;
}

export function DevLogPreview({ className }: DevLogPreviewProps) {
  // In production, fetch from Firebase
  // const [devLogs, setDevLogs] = useState<DevLogEntry[]>([]);
  // useEffect(() => {
  //   const fetchRecentLogs = async () => {
  //     const logs = await getRecentDevLogs(3);
  //     setDevLogs(logs);
  //   };
  //   fetchRecentLogs();
  // }, []);

  // For now, using sample data
  const devLogs = sampleDevLogs.slice(0, 3);

  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Latest Updates
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed about the latest developments and features
          </p>
        </motion.div>

        {/* Dev Log Entries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {devLogs.map((log, index) => (
            <Link key={log.id} href={`/dev-log/${log.id}`}>
              <DevLogEntryCard entry={log} index={index} />
            </Link>
          ))}
        </div>

        {/* See All CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button size="lg" className="text-lg px-8 py-6 h-auto" asChild>
            <Link href="/dev-log">View All Updates →</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
