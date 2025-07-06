import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { NavbarDemo } from "@/components/navbar";
import { StackedCircularFooterDemo } from "@/components/Footer";

interface SuccessStory {
  id: string;
  title: string;
  summary: string;
  fullStory: string;
  earnings: string;
  user: {
    name: string;
    avatar: string;
    location: string;
    joinDate: string;
  };
  coverImage: string;
  tags: string[];
  timeframe: string;
  metrics: {
    communitySize?: number;
    projectsLaunched?: number;
    totalEarnings?: string;
    stakingRewards?: string;
  };
  featured: boolean;
}

// Extended dummy data for the full success stories page
const allSuccessStories: SuccessStory[] = [
  {
    id: "1",
    title: "Built My Whitepaper in 10 Minutes",
    summary:
      "Used the AI Whitepaper Generator and exported a clean PDF ready to share.",
    fullStory:
      "I was struggling to create a professional whitepaper for my project. The AI Whitepaper Generator in WAGUS made it incredibly easy - I just inputted my project details and got a clean, professional PDF in minutes. The tool helped me structure my ideas and present them in a way that looked polished and ready for investors.",
    earnings: "$0",
    user: {
      name: "Ava",
      avatar: "/ai-tools.jpg",
      location: "New York, USA 🇺🇸",
      joinDate: "January 2025",
    },
    coverImage: "/ai-tools.jpg",
    tags: ["#ai", "#nocode", "#founder"],
    timeframe: "10 minutes",
    metrics: {
      projectsLaunched: 1,
      totalEarnings: "$0",
    },
    featured: true,
  },
  {
    id: "3",
    title: "Launched Beta in WAGUS Incubator",
    summary: "Submitted my project idea, got community feedback + UI advice.",
    fullStory:
      "The WAGUS Incubator was perfect for getting my project off the ground. I submitted my initial idea and received incredibly valuable feedback from the community. The UI advice I got helped me redesign my interface completely, and now my beta is live with great user engagement.",
    earnings: "$0",
    user: {
      name: "Lina",
      avatar: "/incubator.jpg",
      location: "Berlin, Germany 🇩🇪",
      joinDate: "November 2024",
    },
    coverImage: "/incubator.jpg",
    tags: ["#incubator", "#support", "#launch"],
    timeframe: "1 month",
    metrics: {
      projectsLaunched: 1,
      communitySize: 50,
    },
    featured: true,
  },
  {
    id: "5",
    title: "AI Helped Me Generate Smart Copy",
    summary:
      "Used WAGUS GPT agent to write better headlines and tokenomics explanations.",
    fullStory:
      "Writing compelling copy for my project was always a struggle. The WAGUS GPT agent helped me generate better headlines and clear tokenomics explanations that actually made sense to potential investors. The AI understood the Web3 context perfectly and helped me communicate my vision effectively.",
    earnings: "$0",
    user: {
      name: "Ethan",
      avatar: "/comm.jpg",
      location: "London, UK 🇬🇧",
      joinDate: "January 2025",
    },
    coverImage: "/comm.jpg",
    tags: ["#copywriting", "#ai", "#product"],
    timeframe: "1 week",
    metrics: {
      projectsLaunched: 1,
    },
    featured: false,
  },
];

function StoryCard({
  story,
  index,
}: {
  story: SuccessStory;
  index: number;
}) {

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

        {/* Featured Badge */}
        {story.featured && (
          <div className="absolute top-3 right-3 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
            ⭐ Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-foreground">
          {story.title}
        </h3>

        <p className="text-muted-foreground text-sm mb-3">{story.summary}</p>

        {/* User Info */}
        <div className="mb-3">
          <p className="font-medium text-foreground text-sm">
            {story.user.name}
          </p>
          <p className="text-xs text-muted-foreground">{story.user.location}</p>
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
  );
}

export default function SuccessStoriesPage() {
  const [visibleStories, setVisibleStories] = useState(6); // Start with 6 stories
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setVisibleStories((prev) => Math.min(prev + 6, allSuccessStories.length));
      setIsLoading(false);
    }, 500);
  };

  const hasMoreStories = visibleStories < allSuccessStories.length;

  return (
    <div className="flex flex-col min-h-screen">
      <NavbarDemo />

      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-background to-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Success Stories
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Real people, real wins. Discover how the WAGUS community is
                building, earning, and thriving in the Web3 space.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stories Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allSuccessStories
                .slice(0, visibleStories)
                .map((story, index) => (
                  <StoryCard
                    key={story.id}
                    story={story}
                    index={index}
                  />
                ))}
            </div>

            {/* Load More Button */}
            {hasMoreStories && (
              <div className="flex justify-center mt-12">
                <Button
                  onClick={handleLoadMore}
                  disabled={isLoading}
                  size="lg"
                  className="text-lg px-8 py-6 h-auto"
                >
                  {isLoading ? "Loading..." : "Load More Stories"}
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <StackedCircularFooterDemo />
    </div>
  );
}
