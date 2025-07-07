"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DevLogEntry } from "@/types/dev-log";
import Link from "next/link";

interface DevLogTableProps {
  logs: DevLogEntry[];
  onDelete: (id: string) => Promise<void>;
  isDeleting: boolean;
}

export function DevLogTable({ logs, onDelete, isDeleting }: DevLogTableProps) {
  const [expandedLogId, setExpandedLogId] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);

  const formatDate = (dateString: string) => {
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
              Category
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider"
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
          {logs.map((log) => (
            <tr key={log.id} className="hover:bg-muted/50">
              <td className="px-6 py-4">
                <div className="flex flex-col">
                  <span className="font-medium text-foreground">{log.title}</span>
                  <span className="text-xs text-muted-foreground">
                    by {log.author}
                  </span>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-muted">
                  {log.category}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-muted-foreground">
                {formatDate(log.date)}
              </td>
              <td className="px-6 py-4">
                <span
                  className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                    log.status === "published"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                  }`}
                >
                  {log.status}
                </span>
              </td>
              <td className="px-6 py-4 text-sm font-medium flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                >
                  <Link href={`/admin/dev-log/edit/${log.id}`}>
                    Edit
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                >
                  <Link href={`/dev-log/${log.id}`} target="_blank">
                    View
                  </Link>
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  disabled={isDeleting}
                  onClick={() => handleDeleteClick(log.id)}
                >
                  {confirmDelete === log.id ? "Confirm" : "Delete"}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {logs.length === 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No dev logs found</p>
        </div>
      )}
    </div>
  );
}
