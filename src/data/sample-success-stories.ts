import { SuccessStory } from '@/types/success-stories';

const sampleSuccessStories: SuccessStory[] = [
  {
    id: "1",
    title: "Built My Whitepaper in 10 Minutes",
    summary:
      "Used the AI Whitepaper Generator and exported a clean PDF ready to share.",
    content: `
# How I Built My Whitepaper in Just 10 Minutes

As a non-technical founder entering the web3 space, creating a professional whitepaper seemed like an insurmountable challenge. I had my idea clear in my head but translating it into a structured document that would appeal to investors was proving difficult.

## The Challenge

- Limited technical knowledge about tokenomics
- No design experience for creating professional documents
- Needed to move fast to meet investor deadlines

## Using WAGUS AI Tools

When I discovered the WAGUS AI Whitepaper Generator, I was skeptical but desperate to try something new. The process was surprisingly simple:

1. I answered a series of questions about my project goals, target audience, and unique value proposition
2. The AI generated an outline that I could adjust and refine
3. For each section, the AI offered suggestions that I could edit to match my vision
4. The platform automatically formatted everything into a professional-looking document

## The Results

Within just 10 minutes, I had a complete, professional whitepaper that included:

- A compelling executive summary
- Problem and solution statements
- Token utility and economics sections
- Technical architecture overview (simplified for my non-technical audience)
- Roadmap and vision statement

The investors I shared it with were impressed with both the content and presentation. One even commented that it was one of the most clearly structured whitepapers they had reviewed recently.

## What's Next

The whitepaper has helped me secure initial conversations with two potential investors, and I've received valuable feedback from the WAGUS community about how to further refine my project. I'm now using other WAGUS tools to develop my tokenomics model in more detail.
    `,
    user: {
      name: "Ava",
    },
    coverImage: "/ai-tools.jpg",
    tags: ["ai", "nocode", "founder"],
    likes: 24,
    status: 'published',
    createdAt: "2025-06-10T15:30:00Z",
    updatedAt: "2025-06-10T15:30:00Z"
  },
  {
    id: "2",
    title: "Launched Beta in WAGUS Incubator",
    summary: "Submitted my project idea, got community feedback + UI advice.",
    content: `
# How WAGUS Incubator Helped Me Launch My Beta

After working on my DeFi project for months in isolation, I was struggling to gain traction and get meaningful feedback. The WAGUS Incubator program changed everything for me.

## Finding the Right Support

I had tried several other incubator programs, but many were either:

- Too focused on fundraising rather than product development
- Lacking in technical expertise specific to web3
- Not providing hands-on support

## The WAGUS Incubator Experience

Applying to the WAGUS Incubator was straightforward. I submitted a brief overview of my project idea, highlighting my goals and challenges. Within a week, I was accepted into the program.

The first month included:

- Weekly feedback sessions with experienced mentors
- UI/UX design workshops that transformed my interface
- Technical code reviews that helped optimize my smart contracts
- Community testing sessions where real users tried my product

## Key Improvements Made

Through the incubator program, I made several critical improvements:

1. Simplified my user onboarding process, reducing drop-off by 60%
2. Redesigned the dashboard based on user feedback
3. Fixed security vulnerabilities in my contract that I hadn't noticed
4. Refined my tokenomics model with help from economics experts

## Launch Results

After just one month in the incubator, I launched my beta with:
- 200+ initial users from the WAGUS community
- Detailed feedback from 50+ testers
- A much more polished product than I could have created alone
- A clear roadmap for the next development phase

I'm continuing to work with the WAGUS team as I prepare for my full launch, and the ongoing support and community have been invaluable.
    `,
    user: {
      name: "Lina",
    },
    coverImage: "/incubator.jpg",
    tags: ["incubator", "support", "launch"],
    likes: 37,
    status: 'published',
    createdAt: "2025-05-23T10:15:00Z",
    updatedAt: "2025-05-25T14:30:00Z"
  },
  {
    id: "3",
    title: "AI Helped Me Generate Smart Copy",
    summary:
      "Used WAGUS GPT agent to write better headlines and tokenomics explanations.",
    content: `
# Using AI to Create Clear, Compelling Copy for My Project

As a developer, I've always struggled with writing. Code? No problem. But when it came to explaining my project in clear, engaging language that non-technical users could understand, I hit a wall.

## The Communication Challenge

My project had great technical foundations, but I was facing:

- Difficulty explaining complex tokenomics concepts in simple terms
- Struggling to write compelling headlines for my landing page
- Inconsistent messaging across my documentation

## WAGUS GPT Agent to the Rescue

I discovered the specialized WAGUS GPT agent that's specifically trained for web3 communication. Unlike general AI writing assistants, this one actually understood tokenomics, blockchain concepts, and the specific language of the industry.

Here's how I used it:

### For Tokenomics Explanations

I fed my technical tokenomics plan into the agent and asked it to create simplified explanations for different audience types:
- Complete beginners
- Crypto-familiar users
- Technical investors

The agent produced clear, accurate explanations without sacrificing technical accuracy.

### For Website Copy

I worked with the agent to create:
- A set of compelling headlines (tested 5 variations)
- Feature descriptions that highlighted benefits, not just functionality
- FAQ content that anticipated common questions

### For Documentation

The agent helped me structure documentation that was:
- Logically organized
- Consistently formatted
- Written at appropriate technical levels for different sections

## Results

After implementing the improved copy across my project:
- Website bounce rate decreased by 40%
- Time spent reading documentation increased
- Feedback forms showed users had a better understanding of the tokenomics
- Several users specifically commented on how clear and accessible the explanations were

For someone who dreaded the writing part of launching a project, having access to a specialized AI tool that actually understands the web3 space was game-changing.
    `,
    user: {
      name: "Ethan",
    },
    coverImage: "/comm.jpg",
    tags: ["copywriting", "ai", "product"],
    likes: 19,
    status: 'published',
    createdAt: "2025-06-05T09:45:00Z",
    updatedAt: "2025-06-05T09:45:00Z"
  }
];

export default sampleSuccessStories;
