"use client";

import Link from "next/link";

export default function AdminPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Dev Logs */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-3">Dev Logs</h2>
          <p className="text-muted-foreground mb-4">
            Manage developer updates and announcements
          </p>
          <div className="flex space-x-4">
            <Link 
              href="/admin/dev-log"
              className="text-sm font-medium text-primary hover:text-primary/80"
            >
              View All
            </Link>
            <Link 
              href="/admin/dev-log/new"
              className="text-sm font-medium text-primary hover:text-primary/80"
            >
              Create New
            </Link>
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-3">Success Stories</h2>
          <p className="text-muted-foreground mb-4">
            Manage user success stories and testimonials
          </p>
          <div className="flex space-x-4">
            <Link 
              href="/admin/success-stories"
              className="text-sm font-medium text-primary hover:text-primary/80"
            >
              View All
            </Link>
            <Link 
              href="/admin/success-stories/new"
              className="text-sm font-medium text-primary hover:text-primary/80"
            >
              Create New
            </Link>
          </div>
        </div>

        {/* AI Chat */}
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-3">AI Chat</h2>
          <p className="text-muted-foreground mb-4">
            Manage AI chat configurations and FAQs
          </p>
          <div className="flex space-x-4">
            <Link 
              href="/admin/ai-chat"
              className="text-sm font-medium text-primary hover:text-primary/80"
            >
              View Settings
            </Link>
            <Link 
              href="/admin/ai-chat/faqs"
              className="text-sm font-medium text-primary hover:text-primary/80"
            >
              Manage FAQs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
