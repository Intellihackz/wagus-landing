import type { Metadata } from "next";
import { NavbarDemo } from "@/components/navbar";
import { StackedCircularFooterDemo } from "@/components/Footer";
import { 
  Target, 
  Rocket, 
  Smartphone, 
  Wrench, 
  DollarSign, 
  Settings, 
  CheckCircle, 
  Lock, 
  Ban, 
  ExternalLink,
  Gamepad2,
  Gift,
  Bot,
  Vote,
  Zap,
  Database,
  Shield
} from "lucide-react";

export const metadata: Metadata = {
  title: "WAGUS Whitepaper - We're All Gonna Use Solana",
  description: "Comprehensive whitepaper for WAGUS - the trusted mobile utility suite for Solana ecosystem with AI tools, community features, and real utility.",
  keywords: "WAGUS, Solana, blockchain, cryptocurrency, mobile app, whitepaper, utility token, AI tools, DeFi",
  openGraph: {
    title: "WAGUS Whitepaper",
    description: "The trusted mobile utility suite for Solana: One app. Real tools. Real community. Real projects.",
    type: "website",
  },
};

export default function WhitepaperPage() {
  return (
    <div className="flex flex-col items-center min-h-screen mt-8">
      <NavbarDemo />      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6">
            WAGUS Whitepaper
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8">
            We&apos;re All Gonna Use Solana
          </p>
          <div className="inline-flex items-center gap-2 border rounded-full px-3 sm:px-4 py-2">
            <span className="text-xs sm:text-sm font-medium">Token Symbol:</span>
            <span className="text-xs sm:text-sm font-bold">$WAGUS</span>
          </div>        </div>        {/* Vision Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center justify-center gap-2 sm:gap-3">
            <Target className="w-6 h-6 sm:w-8 sm:h-8" />
            <span>Core Identity & Vision</span>
          </h2>
          <div className="border rounded-lg p-4 sm:p-6 lg:p-8">
            <blockquote className="text-base sm:text-lg md:text-xl text-center italic font-medium leading-relaxed">
              &quot;To become the trusted mobile utility suite for Solana: One app. Real tools. Real community. Real projects.&quot;
            </blockquote>
          </div>
        </section>        {/* Mission Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3">
            <Rocket className="w-6 h-6 sm:w-8 sm:h-8" />
            <span>Mission</span>
          </h2>
          <div className="prose prose-sm sm:prose-lg max-w-none dark:prose-invert">
            <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              WAGUS empowers builders and communities within Solana by cutting through the noise and focusing on:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="border rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Authentic Growth</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Building real value and sustainable community growth</p>
              </div>
              <div className="border rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Trust</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Transparent, reliable, and user-focused development</p>
              </div>
              <div className="border rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Utility</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Real tools that solve real problems for real users</p>
              </div>
            </div>
            <p className="text-base sm:text-lg mt-4 sm:mt-6 text-center font-medium">
              All within a single mobile-first platform.
            </p>
          </div>
        </section>        {/* App Overview Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3">
            <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />
            <span>App Overview</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
            WAGUS is a mobile-first app for discovering and supporting Solana projects, built around a set of integrated tools:
          </p>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3">
            <Wrench className="w-6 h-6 sm:w-8 sm:h-8" />
            <span>Core Features</span>
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="border rounded-lg p-4 sm:p-6">
              <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">AI Toolset</h4>
              <p className="text-sm sm:text-base text-muted-foreground">Auto-generate whitepapers, tokenomics, charts, and visuals in seconds.</p>
            </div>
            
            <div className="border rounded-lg p-4 sm:p-6">
              <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Community Chat</h4>
              <p className="text-sm sm:text-base text-muted-foreground">Real-time rooms around tokens, strategy, and projects.</p>
            </div>
            
            <div className="border rounded-lg p-4 sm:p-6">
              <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Project Incubator</h4>
              <p className="text-sm sm:text-base text-muted-foreground">Support for micro-raising ideas and attracting believers via token contributions.</p>
            </div>
            
            <div className="border rounded-lg p-4 sm:p-6">
              <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">On-Chain Lottery</h4>
              <p className="text-sm sm:text-base text-muted-foreground">Daily prize pools powered by $WAGUS — fully transparent and fair.</p>
            </div>
            
            <div className="border rounded-lg p-4 sm:p-6">
              <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">In-App Vault</h4>
              <p className="text-sm sm:text-base text-muted-foreground">Deposit/withdraw SOL or $WAGUS instantly.</p>
            </div>
            
            <div className="border rounded-lg p-4 sm:p-6">
              <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Privy Wallets</h4>
              <p className="text-sm sm:text-base text-muted-foreground">One-tap wallet creation via email. No browser extensions needed.</p>
            </div>
          </div>
        </section>        {/* Token Utility Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3">
            <DollarSign className="w-6 h-6 sm:w-8 sm:h-8" />
            <span>Utility of $WAGUS</span>
          </h2>
          <p className="text-base sm:text-lg mb-4 sm:mb-6">Holders of the token can:</p>          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="border rounded-lg p-4 sm:p-6">
              <h4 className="text-base sm:text-lg font-semibold mb-2 flex items-center gap-2">
                <Gamepad2 className="w-5 h-5" />
                Join daily lotteries
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">Participate in transparent on-chain prize pools</p>
            </div>
            <div className="border rounded-lg p-4 sm:p-6">
              <h4 className="text-base sm:text-lg font-semibold mb-2 flex items-center gap-2">
                <Gift className="w-5 h-5" />
                Tip creators and support projects
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">Support early-stage incubator projects</p>
            </div>
            <div className="border rounded-lg p-4 sm:p-6">
              <h4 className="text-base sm:text-lg font-semibold mb-2 flex items-center gap-2">
                <Bot className="w-5 h-5" />
                Unlock premium AI tools
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">Access advanced AI features and capabilities</p>
            </div>
            <div className="border rounded-lg p-4 sm:p-6">
              <h4 className="text-base sm:text-lg font-semibold mb-2 flex items-center gap-2">
                <Vote className="w-5 h-5" />
                Participate in DAO governance
              </h4>
              <p className="text-sm sm:text-base text-muted-foreground">Vote on key decisions and project direction</p>
            </div>
          </div>
        </section>        {/* Tech Stack Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3">
            <Settings className="w-6 h-6 sm:w-8 sm:h-8" />
            <span>Tech Stack</span>
          </h2>
          <p className="text-base sm:text-lg mb-4 sm:mb-6">Built with modern, Web3-ready technologies:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            <div className="border rounded-lg p-3 sm:p-4">
              <h4 className="text-sm sm:text-base font-semibold">Flutter</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">Blazing fast cross-platform development</p>
            </div>
            <div className="border rounded-lg p-3 sm:p-4">
              <h4 className="text-sm sm:text-base font-semibold">Solana</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">Cheap, scalable blockchain infra</p>
            </div>
            <div className="border rounded-lg p-3 sm:p-4">
              <h4 className="text-sm sm:text-base font-semibold">Privy</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">Smooth, secure onboarding</p>
            </div>
            <div className="border rounded-lg p-3 sm:p-4">
              <h4 className="text-sm sm:text-base font-semibold">Firebase + APIs</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">Strong backend infrastructure</p>
            </div>
            <div className="border rounded-lg p-3 sm:p-4 sm:col-span-2 lg:col-span-1">
              <h4 className="text-sm sm:text-base font-semibold">AI Models</h4>
              <p className="text-xs sm:text-sm text-muted-foreground">Enhanced tooling and insights</p>
            </div>
          </div>
        </section>        {/* Trust & Compliance Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:gap-3">
            <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8" />
            <span>Trust & Compliance</span>
          </h2>
          <div className="border rounded-lg p-4 sm:p-6 lg:p-8">            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Lock className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h4 className="text-sm sm:text-base font-semibold mb-2">Fully Non-Custodial</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Users own their keys</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Ban className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h4 className="text-sm sm:text-base font-semibold mb-2">No Speculation</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">No fake promises or hype</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h4 className="text-sm sm:text-base font-semibold mb-2">App Store Compliant</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Data & encryption standards</p>
              </div>
            </div>
          </div>        </section>        {/* Token Trading Section */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <ExternalLink className="w-6 h-6 sm:w-8 sm:h-8" />
            Token Trading
          </h2><div className="border rounded-lg p-4 sm:p-6 lg:p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Trade $WAGUS Now</h3>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 text-muted-foreground">
              You can view and trade $WAGUS on Pump.fun
            </p>
            <a
              href="https://pump.fun/coin/7BMxgTQhTthoBcQizzFoLyhmSDscM56uMramXGMhpump"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm sm:text-base"
            >
              <span>Trade on Pump.fun</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="border rounded-lg p-4 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Join the WAGUS Community</h3>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 text-muted-foreground">
              Be part of the future of Solana utilities. Download the app and start building with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="https://apps.apple.com/us/app/wagus/id6742799148"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm sm:text-base"
              >
                Download WAGUS App
              </a>
              <a
                href="http://t.me/WAGUSAPP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-muted transition-colors text-sm sm:text-base"
              >
                Join Telegram
              </a>
            </div>
          </div>
        </section>
      </div>
      <StackedCircularFooterDemo />
    </div>
  );
}
