"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { TabItem } from '@/types/dev-log';

interface DevLogTabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (value: string) => void;
  className?: string;
}

export function DevLogTabs({ tabs, activeTab, onChange, className }: DevLogTabsProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          className={cn(
            "px-4 py-2 text-sm font-medium rounded-md transition-colors",
            activeTab === tab.value
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
