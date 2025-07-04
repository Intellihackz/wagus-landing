"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SuccessStory {
  id: string
  title: string
  summary: string
  earnings: string
  user: {
    name: string
    avatar: string
    location: string
  }
  coverImage: string
  tags: string[]
  timeframe: string
}

interface SuccessStoriesPreviewProps {
  className?: string
}

// Dummy data for the preview
const successStories: SuccessStory[] = [
  {
    id: "1",
    title: "Earned $500 in a Week",
    summary: "Used WAGUS AI tools to launch my first token project with community support.",
    earnings: "$500",
    user: {
      name: "Sarah Chen",
      avatar: "/ai-tools.jpg", // Using existing images as placeholders
      location: "California, USA"
    },
    coverImage: "/ai-tools.jpg",
    tags: ["#web3", "#AI", "#launch"],
    timeframe: "7 days"
  },
  {
    id: "2", 
    title: "Built Community of 1K+ Members",
    summary: "WAGUS Global Chat helped me connect with builders and grow my project.",
    earnings: "$300",
    user: {
      name: "Alex Rodriguez",
      avatar: "/comm.jpg",
      location: "Miami, FL"
    },
    coverImage: "/comm.jpg",
    tags: ["#community", "#networking", "#growth"],
    timeframe: "2 weeks"
  },
  {
    id: "3",
    title: "Incubated My Startup Idea",
    summary: "Got feedback and funding through WAGUS Incubator Hub.",
    earnings: "$1,200",
    user: {
      name: "Jamie Park",
      avatar: "/incubator.jpg",
      location: "Seoul, Korea"
    },
    coverImage: "/incubator.jpg", 
    tags: ["#incubator", "#funding", "#startup"],
    timeframe: "1 month"
  },
  {
    id: "4",
    title: "Staking Rewards Success",
    summary: "Consistent returns through WAGUS staking features and community insights.",
    earnings: "$200",
    user: {
      name: "Michael Thompson",
      avatar: "/ai-tools.jpg",
      location: "London, UK"
    },
    coverImage: "/ai-tools.jpg",
    tags: ["#staking", "#earn", "#defi"],
    timeframe: "2 days"
  }
]

function StoryCard({ story, index }: { story: SuccessStory; index: number }) {
  return (
    <motion.div
      className="group relative bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Cover Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={story.coverImage}
          alt={story.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-foreground">
          {story.title}
        </h3>
         
        <p className="text-muted-foreground text-sm mb-3">
          {story.summary}
        </p>

        {/* User Info */}
        <div className="mb-3">
          <p className="font-medium text-foreground text-sm">
            {story.user.name}
          </p>
          <p className="text-xs text-muted-foreground">
            {story.user.location}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {story.tags.slice(0, 3).map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-2 py-1 bg-muted text-muted-foreground rounded-md text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function SuccessStoriesPreview({ className }: SuccessStoriesPreviewProps) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Quote */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-foreground mb-6 leading-tight">
            "WAGUS helped me earn $500 in a week."
          </blockquote>
          <p className="text-lg text-muted-foreground">
            – Real users, real wins
          </p>
        </motion.div>

        {/* Section Title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how our community is building, earning, and thriving with WAGUS
          </p>
        </motion.div>

        {/* Story Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {successStories.map((story, index) => (
            <StoryCard key={story.id} story={story} index={index} />
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
          <Button
            size="lg"
            className="text-lg px-8 py-6 h-auto"
            asChild
          >
            <a href="/success-stories">
              See All Stories →
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
