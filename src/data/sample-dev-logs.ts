import { DevLogEntry, DevLogCategory } from '@/types/dev-log';

export const sampleDevLogs: DevLogEntry[] = [
  {
    id: '1',
    title: 'WAGUS Platform Launch',
    content: `
# WAGUS Platform Launch

We are thrilled to announce the official launch of the WAGUS platform! After months of development and testing, we're excited to bring you a comprehensive suite of tools to revolutionize the way you interact with web3 technologies.

## Key Features

- **AI Whitepaper Generator**: Create professional whitepapers in minutes
- **Token Launch Tools**: Simplified setup for your project tokens
- **Community Building**: Integrated tools for growing your project community

## Getting Started

1. Sign up for an account
2. Explore the dashboard
3. Try the AI tools
4. Launch your first project

We can't wait to see what you build with WAGUS!
    `,
    date: '2025-06-01',
    author: 'WAGUS Team',
    category: DevLogCategory.ANNOUNCEMENT,
    tags: ['launch', 'platform', 'features'],
    imageUrl: '/ai-tools.jpg',
    status: 'published',
  },
  {
    id: '2',
    title: 'New AI Tokenomics Advisor Feature',
    content: `
# Introducing AI Tokenomics Advisor

Today we're launching our new AI Tokenomics Advisor feature that helps project creators design optimal token economics for their projects.

## Feature Highlights

- **Token Distribution Analysis**: Get recommendations based on successful projects
- **Supply Modeling**: Interactive tools to model token supply curves
- **Vesting Schedules**: Create fair and effective vesting schedules
- **Market Simulation**: See how your tokenomics might perform in different market conditions

## Technical Implementation

We've integrated advanced ML models trained on thousands of successful token projects to provide personalized recommendations.

\`\`\`javascript
// Example tokenomics calculation
function calculateOptimalDistribution(projectType, timeframe, goals) {
  const baseDistribution = getBaselineForType(projectType);
  const timeAdjustment = calculateTimeFactors(timeframe);
  
  return optimizeForGoals(baseDistribution, timeAdjustment, goals);
}
\`\`\`

This feature is now available to all Pro and Enterprise users.
    `,
    date: '2025-06-15',
    author: 'Alex Chen',
    category: DevLogCategory.FEATURE_UPDATE,
    tags: ['tokenomics', 'ai', 'feature'],
    imageUrl: '/comm.jpg',
    status: 'published',
  },
  {
    id: '3',
    title: 'WAGUS Roadmap: Q3 2025',
    content: `
# WAGUS Roadmap: Q3 2025

We're excited to share our development roadmap for Q3 2025. Here's what's coming:

## July 2025
- Enhanced AI whitepaper generator with customizable templates
- Mobile app beta launch (iOS)
- Community governance features

## August 2025
- Android app release
- Integration with major DEXes
- Advanced analytics dashboard

## September 2025
- Multi-chain support expansion
- Enterprise API access
- WAGUS token staking program

We're committed to building the most comprehensive platform for web3 creators and are excited to bring these features to you soon!

Stay tuned for more updates.
    `,
    date: '2025-06-28',
    author: 'WAGUS Team',
    category: DevLogCategory.ROADMAP_UPDATE,
    tags: ['roadmap', 'development', 'features'],
    status: 'published',
  }
];

export default sampleDevLogs;
