"use client";

import { NavbarDemo } from "@/components/navbar";
import { StackedCircularFooterDemo } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { submitTokenVerification } from "@/lib/firebase/token-verification";

export default function VerifyPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    tokenName: "",
    tokenSymbol: "",
    tokenAddress: "",
    description: "",
    websiteUrl: "",
    emailContact: "",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onload = (event) => {
        if (event.target?.result) {
          setImagePreview(event.target.result as string);
        }
      };
      
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      if (!imagePreview) {
        throw new Error("Please upload a logo image");
      }

      // Get values from the form directly to ensure we have the latest values
      const form = e.currentTarget;
      const formTokenName = form.tokenName.value;
      const formTokenSymbol = form.tokenSymbol.value;
      const formTokenAddress = form.tokenAddress.value;
      const formDescription = form.description.value;
      const formWebsiteUrl = form.websiteUrl.value;
      const formEmailContact = form.emailContact.value;

      const result = await submitTokenVerification(
        {
          tokenName: formTokenName,
          tokenSymbol: formTokenSymbol,
          tokenAddress: formTokenAddress,
          description: formDescription,
          websiteUrl: formWebsiteUrl || "",  // Send empty string instead of undefined
          emailContact: formEmailContact,
        },
        imagePreview
      );

      if (!result.success) {
        throw new Error("Failed to submit verification request");
      }

      // Reset form on success
      setFormData({
        tokenName: "",
        tokenSymbol: "",
        tokenAddress: "",
        description: "",
        websiteUrl: "",
        emailContact: "",
      });
      setImagePreview(null);
      setIsSubmitted(true);
    } catch (err) {
      console.error("Form submission error:", err);
      setError(err instanceof Error ? err.message : "An unknown error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <NavbarDemo />

      <div className="container max-w-3xl px-4 pt-32 pb-16">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Token Verification</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Submit your token information to be verified on the WAGUS app.
          </p>
        </div>

        {error && (
          <div className="bg-red-500/10 text-red-500 border border-red-500/20 p-4 mb-6 rounded-md">
            <p><strong>Error:</strong> {error}</p>
          </div>
        )}

        {isSubmitted ? (
          <div className="bg-green-500/10 text-green-500 border border-green-500/20 p-6 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">
              Verification Request Submitted!
            </h3>
            <p>Thank you for submitting your token for verification.</p>
            <p className="mt-2">
              Our team will review your application and get back to you soon.
            </p>
            <Button className="mt-4" onClick={() => setIsSubmitted(false)}>
              Submit Another Request
            </Button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-card p-6 rounded-lg border"
          >
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="tokenName">Token Name *</Label>
                  <Input
                    id="tokenName"
                    name="tokenName"
                    placeholder="e.g., WAGUS Token"
                    value={formData.tokenName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tokenSymbol">Token Symbol *</Label>
                  <Input
                    id="tokenSymbol"
                    name="tokenSymbol"
                    placeholder="e.g., WAGUS"
                    value={formData.tokenSymbol}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tokenAddress">Token Address (Solana) *</Label>
                <Input
                  id="tokenAddress"
                  name="tokenAddress"
                  placeholder="Solana token address"
                  value={formData.tokenAddress}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Project Description *</Label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Brief description of your token and its utility..."
                  className="flex min-h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="websiteUrl">Website URL</Label>
                  <Input
                    id="websiteUrl"
                    name="websiteUrl"
                    type="url"
                    placeholder="https://yourproject.com"
                    value={formData.websiteUrl}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="emailContact">Contact Email *</Label>
                  <Input
                    id="emailContact"
                    name="emailContact"
                    type="email"
                    placeholder="contact@yourproject.com"
                    value={formData.emailContact}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="logo">Token Logo (PNG format) *</Label>
                <Input
                  id="logo"
                  name="logo"
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={handleFileChange}
                  required
                />
                {imagePreview && (
                  <div className="mt-2">
                    <p className="text-sm text-muted-foreground mb-2">Image Preview:</p>
                    <div className="relative w-24 h-24 overflow-hidden rounded-md border border-input">
                      <img 
                        src={imagePreview} 
                        alt="Token logo preview" 
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="agreeTerms" required />
                <Label htmlFor="agreeTerms" className="text-sm">
                  I confirm that I have the authority to submit this token and
                  that all information provided is accurate.
                </Label>
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit for Verification"}
            </Button>
          </form>
        )}

        {!isSubmitted && (
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              After submission, our team will review your application. You will
              be notified when your token is verified.
            </p>
          </div>
        )}
      </div>

      <div className="mt-auto w-full">
        <StackedCircularFooterDemo />
      </div>
    </div>
  );
}
