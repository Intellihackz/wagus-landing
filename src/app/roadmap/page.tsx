import type { Metadata } from "next";
import { NavbarDemo } from "@/components/navbar";
import { StackedCircularFooterDemo } from "@/components/Footer";

export const metadata: Metadata = {
  title: "WAGUS Roadmap - Development Timeline & Future Plans",
  description: "Detailed roadmap for WAGUS development including MVP launch, ecosystem growth, and DAO expansion phases.",
  keywords: "WAGUS roadmap, development timeline, Solana app roadmap, crypto project milestones",
  openGraph: {
    title: "WAGUS Roadmap",
    description: "The future of WAGUS: From MVP to DAO and beyond",
    type: "website",
  },
};

export default function RoadmapPage() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <NavbarDemo />      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 flex items-center justify-center gap-2 sm:gap-4">
            <svg className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            <span className="text-center">WAGUS Roadmap</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground px-4">
            Our journey to build the ultimate Solana utility suite
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5"></div>

          {/* Phase 1 - MVP Launch */}
          <div className="relative mb-12 sm:mb-16">
            {/* Timeline Dot */}
            <div className="absolute left-4 sm:left-6 md:left-1/2 w-4 h-4 bg-green-500 rounded-full transform md:-translate-x-2 z-10 border-4 border-background"></div>
            <div className="ml-12 sm:ml-16 md:ml-0 md:grid md:grid-cols-2 md:gap-8">
              <div className="md:text-right md:pr-8 mb-6 md:mb-0">
                <div className="inline-block bg-green-100 dark:bg-green-900/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
                  <span className="text-xs sm:text-sm font-semibold text-green-800 dark:text-green-200 flex items-center gap-1 sm:gap-2">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    COMPLETED
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Phase 1 — MVP Launch</h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">Q1 2025</p>
              </div>
              
              <div className="md:pl-8">
                <div className="border rounded-lg p-4 sm:p-6">                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">iOS App Features</h3>
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm sm:text-base">Embedded Solana wallets (via Privy)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm sm:text-base">Topic-based community chats</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm sm:text-base">Built-in AI tools: whitepaper, trading insights, image gen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm sm:text-base">Daily $WAGUS lottery system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm sm:text-base">Vault for instant SOL/$WAGUS deposits and withdrawals</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Launch Milestones</h3>
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm sm:text-base">Launch token on Pump.fun</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Submit to App Store + TestFlight</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Begin building the early user community</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 2 - Ecosystem Growth */}
          <div className="relative mb-16">
            {/* Timeline Dot */}
            <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full transform md:-translate-x-2 z-10 border-4 border-background"></div>
            
            <div className="ml-16 md:ml-0 md:grid md:grid-cols-2 md:gap-8">              <div className="md:order-2 md:text-left md:pl-8">
                <div className="inline-block bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full mb-4">
                  <span className="text-sm font-semibold text-blue-800 dark:text-blue-200 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 1.657-2.657 1.657-2.657s4.686 4.686 0 9.314z" />
                      <path d="M9 9l3 3v5" />
                    </svg>
                    IN PROGRESS
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4">Phase 2 — Ecosystem Growth</h2>
                <p className="text-lg text-muted-foreground mb-6">Q2–Q3 2025</p>
              </div>
              
              <div className="md:order-1 md:pr-8">
                <div className="border rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">Platform Expansion</h3>                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <span>Android app release</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <span>Project submission + verification inside app</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span>Creator profiles with supporter tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                      </svg>
                      <span>On-chain logs for lottery results</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mb-4">Enhanced Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      <span>Improved AI tools + prompt marketplace</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <span>In-app token swap (WAGUS ↔ SOL)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-blue-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Launch bounty & reward system for contributors</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 3 - DAO & Expansion */}
          <div className="relative mb-16">
            {/* Timeline Dot */}
            <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full transform md:-translate-x-2 z-10 border-4 border-background"></div>
            
            <div className="ml-16 md:ml-0 md:grid md:grid-cols-2 md:gap-8">              <div className="md:text-right md:pr-8">
                <div className="inline-block bg-purple-100 dark:bg-purple-900/30 px-4 py-2 rounded-full mb-4">
                  <span className="text-sm font-semibold text-purple-800 dark:text-purple-200 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />                    </svg>
                    PLANNED
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Phase 3 — DAO & Expansion</h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">Q4 2025+</p>
              </div>
              
              <div className="md:pl-8">
                <div className="border rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Governance & Advanced Features</h3>
                  <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                      <span className="text-sm sm:text-base">Launch WAGUS DAO for project voting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-sm sm:text-base">Tiered access based on $WAGUS holdings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm sm:text-base">NFT minting tools for verified projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                      <span className="text-sm sm:text-base">Optional staking system (utility only)</span>
                    </li>
                  </ul>
                  
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Ecosystem Integration</h3>
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      <span className="text-sm sm:text-base">Partner with launchpads & Solana-native tools</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm sm:text-base">Multilingual support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                      <span className="text-sm sm:text-base">Introduce WAGUS Pro (premium suite)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Ongoing Commitments */}
          <div className="relative">
            {/* Timeline Dot */}
            <div className="absolute left-4 sm:left-6 md:left-1/2 w-4 h-4 bg-orange-500 rounded-full transform md:-translate-x-2 z-10 border-4 border-background"></div>
            
            <div className="ml-12 sm:ml-16 md:ml-0 md:grid md:grid-cols-2 md:gap-8">
              <div className="md:order-2 md:text-left md:pl-8 mb-6 md:mb-0">
                <div className="inline-block bg-orange-100 dark:bg-orange-900/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
                  <span className="text-xs sm:text-sm font-semibold text-orange-800 dark:text-orange-200 flex items-center gap-1 sm:gap-2">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    ONGOING
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ongoing Commitments</h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">Continuous Development</p>
              </div>
              
              <div className="md:order-1 md:pr-8">
                <div className="border rounded-lg p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Long-term Vision</h3>
                  <ul className="space-y-2 sm:space-y-3">
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <span className="text-sm sm:text-base">Regular app updates and feedback loops</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-sm sm:text-base">Optimize for fast, gas-efficient UX</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />                      </svg>
                      <span className="text-sm sm:text-base">Build WAGUS into the ultimate Solana discovery hub</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <section className="text-center mt-12 sm:mt-16">
          <div className="border rounded-lg p-4 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Join Our Journey</h3>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 text-muted-foreground px-4">
              Be part of the WAGUS evolution. Download the app today and help shape the future of Solana utilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="https://apps.apple.com/us/app/wagus/id6742799148"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm sm:text-base"
              >
                Download iOS App
              </a>
              <a
                href="http://t.me/WAGUSAPP"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-muted transition-colors text-sm sm:text-base"
              >
                Join Community
              </a>
            </div>
          </div>
        </section>
      </div>
      <StackedCircularFooterDemo />
    </div>
  );
}
