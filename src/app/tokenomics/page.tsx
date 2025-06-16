import type { Metadata } from "next";
import { NavbarDemo } from "@/components/navbar";
import { StackedCircularFooterDemo } from "@/components/Footer";

export const metadata: Metadata = {
  title: "WAGUS Tokenomics - Token Distribution & Economics",
  description: "Complete tokenomics breakdown for WAGUS token including distribution, allocation, and transparency details.",
  keywords: "WAGUS tokenomics, token distribution, SPL token, Solana economics, cryptocurrency allocation",
  openGraph: {
    title: "WAGUS Tokenomics",
    description: "Transparent token economics for the WAGUS ecosystem with detailed allocation breakdown.",
    type: "website",
  },
};

export default function TokenomicsPage() {
  return (
    <div className="flex flex-col items-center min-h-screen  mt-8">
      <NavbarDemo />      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6">
            Tokenomics
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground px-4">
            Transparent and sustainable token economics for the WAGUS ecosystem
          </p>
        </div>

        {/* Overview Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center flex items-center justify-center gap-2 sm:gap-3">
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span className="text-center">Tokenomics Overview</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            <div className="border rounded-lg p-4 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4">Total Supply</h3>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">1,000,000,000</p>
              <p className="text-base sm:text-lg text-muted-foreground">$WAGUS tokens</p>
            </div>
            <div className="border rounded-lg p-4 sm:p-6 lg:p-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4">Token Standard</h3>
              <p className="text-xl sm:text-2xl font-bold mb-2">SPL Token</p>
              <p className="text-base sm:text-lg text-muted-foreground">Solana Program Library</p>
            </div>
          </div>
        </section>        {/* Pie Chart Section */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center flex items-center justify-center gap-2 sm:gap-3">
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
            <span className="text-center">Token Distribution</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Pie Chart Visualization */}
            <div className="flex justify-center order-2 lg:order-1">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80"><svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                  {/* Public Sale 92% - Blue */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="20"
                    strokeDasharray="92 8"
                    strokeDashoffset="0"
                  />
                  {/* Dev 3% - Green */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="20"
                    strokeDasharray="3 97"
                    strokeDashoffset="-92"
                  />
                  {/* Marketing 2% - Purple */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#8B5CF6"
                    strokeWidth="20"
                    strokeDasharray="2 98"
                    strokeDashoffset="-95"
                  />
                  {/* Reward 3% - Orange */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="20"
                    strokeDasharray="3 97"
                    strokeDashoffset="-97"
                  />
                  {/* Ecosystem 2% - Red */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#EF4444"
                    strokeWidth="20"
                    strokeDasharray="2 98"
                    strokeDashoffset="-100"
                  />
                </svg>                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold">$WAGUS</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">Distribution</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-3 sm:space-y-4 order-1 lg:order-2">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-sm" style={{backgroundColor: '#3B82F6'}}></div>
                <span className="font-semibold text-sm sm:text-base">Public Sale</span>
                <span className="ml-auto font-bold text-sm sm:text-base">92%</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-sm" style={{backgroundColor: '#10B981'}}></div>
                <span className="font-semibold text-sm sm:text-base">Dev</span>
                <span className="ml-auto font-bold text-sm sm:text-base">3%</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-sm" style={{backgroundColor: '#8B5CF6'}}></div>
                <span className="font-semibold text-sm sm:text-base">Marketing</span>
                <span className="ml-auto font-bold text-sm sm:text-base">2%</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-sm" style={{backgroundColor: '#F59E0B'}}></div>
                <span className="font-semibold text-sm sm:text-base">Reward</span>
                <span className="ml-auto font-bold text-sm sm:text-base">3%</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-sm" style={{backgroundColor: '#EF4444'}}></div>
                <span className="font-semibold text-sm sm:text-base">Ecosystem</span>
                <span className="ml-auto font-bold text-sm sm:text-base">2%</span>
              </div>
            </div>
          </div>
        </section>        {/* Token Allocation Table */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center flex items-center justify-center gap-2 sm:gap-3">
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>
            <span className="text-center">Token Allocation Table</span>
          </h2>
          <div className="border rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px]">
                <thead className="border-b bg-muted/30">
                  <tr>
                    <th className="text-left p-3 sm:p-4 font-semibold text-sm sm:text-base">Category</th>
                    <th className="text-left p-3 sm:p-4 font-semibold text-sm sm:text-base">% of Supply</th>
                    <th className="text-left p-3 sm:p-4 font-semibold text-sm sm:text-base">Description</th>
                  </tr>
                </thead>                <tbody>
                  <tr className="border-b hover:bg-muted/20">
                    <td className="p-3 sm:p-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="font-medium text-sm sm:text-base">Public Sale</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 font-semibold text-sm sm:text-base">~92%</td>
                    <td className="p-3 sm:p-4 text-muted-foreground text-sm sm:text-base">Distributed via pump.fun and open secondary markets</td>
                  </tr>
                  <tr className="border-b hover:bg-muted/20">
                    <td className="p-3 sm:p-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="font-medium text-sm sm:text-base">Developer Wallet</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 font-semibold text-sm sm:text-base">3%</td>
                    <td className="p-3 sm:p-4 text-muted-foreground text-sm sm:text-base">Reserved and locked for future development and sustainability</td>
                  </tr>
                  <tr className="border-b hover:bg-muted/20">
                    <td className="p-3 sm:p-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                        </svg>
                        <span className="font-medium text-sm sm:text-base">Marketing / KOLs</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 font-semibold text-sm sm:text-base">2%</td>
                    <td className="p-3 sm:p-4 text-muted-foreground text-sm sm:text-base">Allocated for strategic partnerships and influencer collaborations</td>
                  </tr>
                  <tr className="border-b hover:bg-muted/20">
                    <td className="p-3 sm:p-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                        </svg>
                        <span className="font-medium text-sm sm:text-base">Reward Wallet</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 font-semibold text-sm sm:text-base">3%</td>
                    <td className="p-3 sm:p-4 text-muted-foreground text-sm sm:text-base">Used for challenges, airdrops, giveaways, and community engagement</td>
                  </tr>
                  <tr className="hover:bg-muted/20">
                    <td className="p-3 sm:p-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span className="font-medium text-sm sm:text-base">Ecosystem Vault</span>
                      </div>
                    </td>
                    <td className="p-3 sm:p-4 font-semibold text-sm sm:text-base">2%</td>
                    <td className="p-3 sm:p-4 text-muted-foreground text-sm sm:text-base">Fuels app operations, gas fees, and liquidity support</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>        {/* Ecosystem Wallet Roles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Ecosystem Wallet Roles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6">
              <svg className="w-8 h-8 mb-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
              <h4 className="font-semibold mb-2">Reward Wallet</h4>
              <p className="text-sm text-muted-foreground">Incentivizes users via challenges and airdrops</p>
            </div>
            <div className="border rounded-lg p-6">
              <svg className="w-8 h-8 mb-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h4 className="font-semibold mb-2">Lottery Wallet</h4>
              <p className="text-sm text-muted-foreground">Covers fees and payouts for the daily lottery system</p>
            </div>
            <div className="border rounded-lg p-6">
              <svg className="w-8 h-8 mb-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h4 className="font-semibold mb-2">Developer Wallet</h4>
              <p className="text-sm text-muted-foreground">Long-term locked allocation for building and updates</p>
            </div>
            <div className="border rounded-lg p-6">
              <svg className="w-8 h-8 mb-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
              <h4 className="font-semibold mb-2">Marketing Wallet</h4>
              <p className="text-sm text-muted-foreground">Funds influencer and promotional campaigns</p>
            </div>
            <div className="border rounded-lg p-6 md:col-span-2 lg:col-span-1">
              <svg className="w-8 h-8 mb-3 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
              <h4 className="font-semibold mb-2">Operational Wallet</h4>
              <p className="text-sm text-muted-foreground">Maintains app features and internal revenue loops</p>
            </div>
          </div>
        </section>        {/* Launch Snapshot */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center flex items-center justify-center gap-2 sm:gap-3">
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-center">Launch Snapshot</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="border rounded-lg p-4 sm:p-6 text-center">
              <h4 className="font-semibold mb-2 text-sm sm:text-base">Platform</h4>
              <p className="text-base sm:text-lg font-bold">pump.fun</p>
            </div>
            <div className="border rounded-lg p-4 sm:p-6 text-center">
              <h4 className="font-semibold mb-2 text-sm sm:text-base">Liquidity</h4>
              <p className="text-base sm:text-lg font-bold">Community via PumpSwap</p>
            </div>
            <div className="border rounded-lg p-4 sm:p-6 text-center sm:col-span-2 md:col-span-1">
              <h4 className="font-semibold mb-2 text-sm sm:text-base">Tax Model</h4>
              <p className="text-base sm:text-lg font-bold">0% - Utility First</p>
              <p className="text-xs sm:text-sm text-muted-foreground">No transaction tax</p>
            </div>
          </div>
        </section>

        {/* Transparency Promise */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center flex items-center justify-center gap-2 sm:gap-3">
            <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-center">Transparency Promise</span>
          </h2>
          <div className="border rounded-lg p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-center">
              <div>
                <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-2 sm:mb-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">On-Chain Verification</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">All wallets and allocations are on-chain and fully verifiable</p>
              </div>
              <div>
                <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-2 sm:mb-3 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                </svg>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">No Hidden Reserves</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">No hidden reserves. No rug potential.</p>
              </div>
              <div className="sm:col-span-2 md:col-span-1">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-2 sm:mb-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">Purposeful Distribution</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Every token is purposefully distributed to support growth and trust</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="border rounded-lg p-4 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready to Get Involved?</h3>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 text-muted-foreground px-4">
              Join the WAGUS ecosystem and be part of transparent, utility-focused tokenomics.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="https://pump.fun/coin/7BMxgTQhTthoBcQizzFoLyhmSDscM56uMramXGMhpump"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm sm:text-base"
              >
                Trade $WAGUS
              </a>
              <a
                href="/whitepaper"
                className="inline-flex items-center justify-center gap-2 border px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-muted transition-colors text-sm sm:text-base"
              >
                Read Whitepaper
              </a>
            </div>
          </div>
        </section>
      </div>
      <StackedCircularFooterDemo />
    </div>
  );
}
