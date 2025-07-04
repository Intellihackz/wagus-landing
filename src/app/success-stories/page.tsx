"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { NavbarDemo } from "@/components/navbar"
import { StackedCircularFooterDemo } from "@/components/Footer"

interface SuccessStory {
  id: string
  title: string
  summary: string
  fullStory: string
  earnings: string
  user: {
    name: string
    avatar: string
    location: string
    joinDate: string
  }
  coverImage: string
  tags: string[]
  timeframe: string
  metrics: {
    communitySize?: number
    projectsLaunched?: number
    totalEarnings?: string
    stakingRewards?: string
  }
  featured: boolean
}

// Extended dummy data for the full success stories page
const allSuccessStories: SuccessStory[] = [
  {
    id: "1",
    title: "Earned $500 in a Week",
    summary: "Used WAGUS AI tools to launch my first token project with community support.",
    fullStory: "When I first joined WAGUS, I was skeptical about the potential of AI tools in the crypto space. However, within my first week, I discovered the power of the AI Tools Suite. Using the Whitepaper Generator and Token Analyzer, I was able to create a comprehensive project plan that attracted immediate community attention. The Global Chat feature helped me connect with experienced builders who provided invaluable feedback. By the end of the week, I had not only launched my token but also generated $500 in initial funding. The community support was incredible, and the tools made what seemed impossible, achievable.",
    earnings: "$500",
    user: {
      name: "Sarah Chen",
      avatar: "/ai-tools.jpg",
      location: "California, USA",
      joinDate: "December 2024"
    },
    coverImage: "/ai-tools.jpg",
    tags: ["#web3", "#AI", "#launch"],
    timeframe: "7 days",
    metrics: {
      projectsLaunched: 1,
      totalEarnings: "$500",
      communitySize: 150
    },
    featured: true
  },
  {
    id: "2",
    title: "Built Community of 1K+ Members",
    summary: "WAGUS Global Chat helped me connect with builders and grow my project.",
    fullStory: "The Global Chat feature in WAGUS became my secret weapon for community building. I started with just an idea and no network in the Web3 space. Through daily engagement in the chat, sharing insights, and helping other builders, I gradually built relationships with key community members. The real-time communication allowed me to get instant feedback on my ideas and iterate quickly. Within two weeks, I had grown my project's community to over 1,000 active members. The collaborative environment fostered by WAGUS made all the difference in my success.",
    earnings: "$300",
    user: {
      name: "Alex Rodriguez",
      avatar: "/comm.jpg",
      location: "Miami, FL",
      joinDate: "November 2024"
    },
    coverImage: "/comm.jpg",
    tags: ["#community", "#networking", "#growth"],
    timeframe: "2 weeks",
    metrics: {
      communitySize: 1200,
      totalEarnings: "$300"
    },
    featured: true
  },
  {
    id: "3",
    title: "Incubated My Startup Idea",
    summary: "Got feedback and funding through WAGUS Incubator Hub.",
    fullStory: "The Incubator Hub was a game-changer for my startup journey. I submitted my project idea with just a basic concept and no clear roadmap. The feedback I received from the community was incredibly detailed and actionable. Mentors helped me refine my business model, and I was able to showcase my progress through regular updates on the platform. The transparency and support from the WAGUS community led to my first round of funding. The incubator didn't just provide resources; it provided a family of supporters who believed in my vision.",
    earnings: "$1,200",
    user: {
      name: "Jamie Park",
      avatar: "/incubator.jpg",
      location: "Seoul, Korea",
      joinDate: "October 2024"
    },
    coverImage: "/incubator.jpg",
    tags: ["#incubator", "#funding", "#startup"],
    timeframe: "1 month",
    metrics: {
      projectsLaunched: 1,
      totalEarnings: "$1,200"
    },
    featured: true
  },
  {
    id: "4",
    title: "Staking Rewards Success",
    summary: "Consistent returns through WAGUS staking features and community insights.",
    fullStory: "As someone new to DeFi, I was hesitant about staking and yield farming. WAGUS provided not just the tools but also the community knowledge to make informed decisions. The community insights helped me understand market trends and optimal staking strategies. Within just two days of implementing the strategies I learned, I saw significant returns on my investment. The combination of technology and community wisdom made WAGUS an invaluable platform for my DeFi journey.",
    earnings: "$200",
    user: {
      name: "Michael Thompson",
      avatar: "/ai-tools.jpg",
      location: "London, UK",
      joinDate: "January 2025"
    },
    coverImage: "/ai-tools.jpg",
    tags: ["#staking", "#earn", "#defi"],
    timeframe: "2 days",
    metrics: {
      stakingRewards: "$200",
      totalEarnings: "$200"
    },
    featured: false
  },
  {
    id: "5",
    title: "From Zero to Web3 Developer",
    summary: "Learned Web3 development through WAGUS community and resources.",
    fullStory: "I had no programming experience when I joined WAGUS. The community's willingness to share knowledge and resources was incredible. Through the Global Chat, I connected with experienced developers who became my mentors. They shared learning resources, code examples, and provided guidance on my first projects. The AI Tools Suite helped me understand complex concepts by generating explanations and examples. After three months of dedicated learning and community support, I landed my first Web3 development job. WAGUS didn't just teach me to code; it taught me to think like a builder in the Web3 space.",
    earnings: "$2,500",
    user: {
      name: "Maria Santos",
      avatar: "/comm.jpg",
      location: "São Paulo, Brazil",
      joinDate: "September 2024"
    },
    coverImage: "/comm.jpg",
    tags: ["#learning", "#development", "#career"],
    timeframe: "3 months",
    metrics: {
      totalEarnings: "$2,500",
      projectsLaunched: 3
    },
    featured: false
  },
  {
    id: "6",
    title: "NFT Collection Launch Success",
    summary: "Launched successful NFT collection with WAGUS AI tools and community support.",
    fullStory: "Creating an NFT collection seemed daunting until I discovered WAGUS's Image Generator and community support. The AI tools helped me generate unique artwork concepts, while the community provided feedback on my collection's theme and marketing strategy. The Incubator Hub gave me a platform to showcase my progress and build hype before the launch. The collaborative environment and constructive feedback helped me refine my collection to perfection. My NFT collection sold out within 24 hours, generating substantial revenue and establishing my reputation in the NFT space.",
    earnings: "$800",
    user: {
      name: "David Kim",
      avatar: "/incubator.jpg",
      location: "Toronto, Canada",
      joinDate: "December 2024"
    },
    coverImage: "/incubator.jpg",
    tags: ["#NFT", "#art", "#launch"],
    timeframe: "6 weeks",
    metrics: {
      totalEarnings: "$800",
      projectsLaunched: 1,
      communitySize: 500
    },
    featured: false
  }
]

function StoryCard({ story, index, detailed = false }: { story: SuccessStory; index: number; detailed?: boolean }) {
  const [isExpanded, setIsExpanded] = useState(false)

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

export default function SuccessStoriesPage() {
  const [visibleStories, setVisibleStories] = useState(6) // Start with 6 stories
  const [isLoading, setIsLoading] = useState(false)

  const handleLoadMore = () => {
    setIsLoading(true)
    // Simulate loading delay
    setTimeout(() => {
      setVisibleStories(prev => Math.min(prev + 6, allSuccessStories.length))
      setIsLoading(false)
    }, 500)
  }

  const hasMoreStories = visibleStories < allSuccessStories.length

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
                Real people, real wins. Discover how the WAGUS community is building, earning, and thriving in the Web3 space.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    $5K+
                  </div>
                  <div className="text-muted-foreground">
                    Total Earnings
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    50+
                  </div>
                  <div className="text-muted-foreground">
                    Success Stories
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    10K+
                  </div>
                  <div className="text-muted-foreground">
                    Community Members
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stories Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allSuccessStories.slice(0, visibleStories).map((story, index) => (
                <StoryCard key={story.id} story={story} index={index} detailed={true} />
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
  )
}
