"use client";

import React from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import Image from 'next/image';
import { format } from 'date-fns';
import { DevLogEntry } from '@/types/dev-log';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

interface DevLogEntryCardProps {
  entry: DevLogEntry;
  className?: string;
  index?: number;
}

export function DevLogEntryCard({ entry, className, index = 0 }: DevLogEntryCardProps) {
  const formattedDate = entry.date ? format(new Date(entry.date), 'MMM d, yyyy') : '';
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/dev-log/${entry.id}`);
  };

  return (
    <motion.article
      className={cn(
        "relative bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={handleCardClick}
    >
      {entry.imageUrl && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={entry.imageUrl}
            alt={entry.title}
            fill
            className="object-cover transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
      )}

      <div className="p-6">
        {/* Date and Category */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-muted-foreground">{formattedDate}</span>
          <span className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs">
            {entry.category}
          </span>
        </div>
        
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
          {entry.title}
        </h3>

        {/* Content Preview */}
        <div className="prose dark:prose-invert prose-sm max-w-none mb-4 line-clamp-3">
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {entry.content.substring(0, 150) + (entry.content.length > 150 ? '...' : '')}
          </ReactMarkdown>
        </div>

        {/* Tags */}
        {entry.tags && entry.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-4">
            {entry.tags.slice(0, 3).map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs"
              >
                #{tag}
              </span>
            ))}
            {entry.tags.length > 3 && (
              <span className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs">
                +{entry.tags.length - 3}
              </span>
            )}
          </div>
        )}
        
        {/* Author */}
        {entry.author && (
          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Posted by <span className="font-medium text-foreground">{entry.author}</span>
            </p>
          </div>
        )}
      </div>
    </motion.article>
  );
}

export function DevLogEntryDetail({ entry }: { entry: DevLogEntry }) {
  const formattedDate = entry.date ? format(new Date(entry.date), 'MMMM d, yyyy') : '';

  return (
    <article className="max-w-3xl mx-auto">
      {entry.imageUrl && (
        <div className="relative h-64 md:h-80 overflow-hidden rounded-xl mb-6">
          <Image
            src={entry.imageUrl}
            alt={entry.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
      )}

      <div className="mb-6">
        <div className="flex flex-wrap gap-2 items-center mb-3">
          <span className="text-sm font-medium text-muted-foreground">{formattedDate}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground"></span>
          <span className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs">
            {entry.category}
          </span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {entry.title}
        </h1>
        
        {entry.author && (
          <p className="text-sm text-muted-foreground">
            Posted by <span className="font-medium text-foreground">{entry.author}</span>
          </p>
        )}
      </div>
      
      <div className="prose dark:prose-invert prose-lg max-w-none mb-8">
        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
          {entry.content}
        </ReactMarkdown>
      </div>
      
      {/* Tags */}
      {entry.tags && entry.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-8 pt-8 border-t border-border">
          {entry.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 bg-muted text-muted-foreground rounded-md text-sm"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
