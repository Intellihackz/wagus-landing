import { StackedCircularFooterDemo } from "@/components/Footer";
import { Hero } from "@/components/hero";
import { NavbarDemo } from "@/components/navbar";
import { FeatureStepsDemo } from "@/components/ui/Featured";
import { SuccessStoriesPreview } from "@/components/success-stories-preview";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-8 min-h-screen">
      <NavbarDemo />
      <div className="pt-24"> {/* Add top padding to account for fixed navbar */}
        <Hero
          title="The Future of Utility Tokens"
          subtitle="Empowering the Solana Ecosystem with Innovative tools and community-driven development."
          actions={[
            {
              label: "Get Wagus App",
              href: "https://apps.apple.com/us/app/wagus/id6742799148",
              variant: "outline",
            },
            {
              label: "Join Community",
              href: "http://t.me/WAGUSAPP",
              variant: "default",
            },
          ]}
          titleClassName="text-5xl md:text-6xl font-extrabold"
          subtitleClassName="text-lg md:text-xl max-w-[600px]"
          actionsClassName="mt-8"
        />
      </div>
      <FeatureStepsDemo />
      <SuccessStoriesPreview />
      <StackedCircularFooterDemo />
    </div>
  );
}
