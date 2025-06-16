import { FeatureSteps } from "@/components/feature-section";

const features = [
  {
    step: "💬",
    title: "Global Chat",
    content: "Talk ideas, updates, or memes in real-time with the community. A social layer for builders and backers to connect instantly.",
    image: "/comm.jpg",
  },
  {
    step: "🧠",
    title: "AI Tools Suite",
    content: "No-code, powerful tools for builders: Whitepaper Generator (export-ready), Token Analyzer (NLP-based), Image Generator (vision + text prompts).",
    image: "/ai-tools.jpg",
  },
  {
    step: "🧪",
    title: "Incubator Hub",
    content: "Launch your idea inside WAGUS: Submit a project page, receive feedback and community support, track progress and showcase updates.",
    image: "/incubator.jpg",
  },
];

export function FeatureStepsDemo() {
  return (
    <FeatureSteps
      features={features}
      title="Powerful Features for Web3 Builders"
      autoPlayInterval={4000}
    />
  );
}
