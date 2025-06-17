import type { Metadata } from "next";
import { NavbarDemo } from "@/components/navbar";
import { StackedCircularFooterDemo } from "@/components/Footer";
import { Shield, Mail, Lock, Eye, Trash2, RefreshCw } from "lucide-react";

export const metadata: Metadata = {
  title: "WAGUS Privacy Policy - Your Privacy Matters",
  description: "Learn how WAGUS protects your privacy and handles your data in our mobile Solana utility suite.",
  keywords: "WAGUS, privacy policy, data protection, Solana, mobile app, user privacy",
  openGraph: {
    title: "WAGUS Privacy Policy",
    description: "Your privacy and trust are important to us. Learn how we collect, use, and protect your personal information.",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col items-center min-h-screen mt-8">
      <NavbarDemo />
      
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8">
            Your privacy and trust are important to us
          </p>
          <div className="inline-flex items-center gap-2 border rounded-full px-3 sm:px-4 py-2">
            <span className="text-xs sm:text-sm font-medium">Effective Date:</span>
            <span className="text-xs sm:text-sm font-bold">March 26, 2025</span>
          </div>
        </div>

        {/* Introduction */}
        <section className="mb-12 sm:mb-16">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed text-muted-foreground">
              At WAGUS, your privacy and trust are important to us. This Privacy Policy describes how we collect, use, and protect your personal information when you use the WAGUS App and services.
            </p>
          </div>
        </section>

        {/* What We Collect */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <Eye className="w-6 h-6 sm:w-8 sm:h-8" />
            1. What We Collect
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground mb-4">
              We may collect the following data when using the app:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>Email address (for authentication via Privy)</li>
              <li>Solana wallet address (generated and stored via embedded wallet provider)</li>
              <li>App usage data (page views, feature interaction)</li>
              <li>AI tool inputs (temporarily for processing, not stored long term)</li>
              <li>Incubator submissions (for public display and engagement)</li>
            </ul>
          </div>
        </section>

        {/* How We Use Your Data */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <RefreshCw className="w-6 h-6 sm:w-8 sm:h-8" />
            2. How We Use Your Data
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground mb-4">
              We use your information to:
            </p>
            <ul className="space-y-2 text-muted-foreground mb-4">
              <li>Enable core features such as wallet access, chat, and AI tools</li>
              <li>Deliver personalized and functional user experiences</li>
              <li>Maintain the integrity of the lottery and incubator system</li>
              <li>Improve performance and optimize feature relevance</li>
            </ul>
            <p className="text-muted-foreground font-medium">
              We do not sell or share your data with third parties for marketing purposes.
            </p>
          </div>
        </section>

        {/* Wallets and Token Interaction */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <Lock className="w-6 h-6 sm:w-8 sm:h-8" />
            3. Wallets and Token Interaction
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground">
              Wallets are securely generated and managed via our embedded wallet provider (Privy). We do not store private keys, and all transactions are executed on-chain via Solana.
            </p>
          </div>
        </section>

        {/* AI and User Input */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <Shield className="w-6 h-6 sm:w-8 sm:h-8" />
            4. AI and User Input
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground">
              Your text and image generation inputs may be temporarily processed by AI APIs for response generation. No personal identifiers are stored with this data.
            </p>
          </div>
        </section>

        {/* Cookies and Tracking */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            5. Cookies and Tracking
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground">
              The WAGUS App does not use cookies or tracking technologies. We do not track your activity outside of the app.
            </p>
          </div>
        </section>

        {/* Account Deletion */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <Trash2 className="w-6 h-6 sm:w-8 sm:h-8" />
            6. Account Deletion
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground">
              Users may delete their account within the app and your private keys will be exported to the email the user provided. This is all handled by Privy provider.
            </p>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            7. Your Rights
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground">
              You may request access to your data, deletion of your data, or correction of any inaccurate information by contacting at{" "}
              <a 
                href="mailto:info@wagus-app.com" 
                className="text-primary hover:underline font-medium"
              >
                info@wagus-app.com
              </a>.
            </p>
          </div>
        </section>

        {/* Changes to This Policy */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
            8. Changes to This Policy
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground">
              We may update this Privacy Policy occasionally. If we make material changes, users will be notified in-app or via email.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <Mail className="w-6 h-6 sm:w-8 sm:h-8" />
            Contact
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground mb-4">
              For any privacy-related inquiries, please contact us:
            </p>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span className="font-medium">Email:</span>
              <a 
                href="mailto:info@wagus-app.com" 
                className="text-primary hover:underline font-medium"
              >
                info@wagus-app.com
              </a>
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="text-center">
          <div className="border rounded-lg p-6 sm:p-8">
            <p className="text-lg font-medium text-muted-foreground">
              WAGUS is committed to transparency and protecting your privacy.
            </p>
          </div>
        </section>
      </div>

      <StackedCircularFooterDemo />
    </div>
  );
}
