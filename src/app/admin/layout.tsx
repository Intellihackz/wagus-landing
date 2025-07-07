"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AdminMobileProtection from "@/components/admin/mobile-protection";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // In a real application, this would be handled by a proper auth system
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple password check - in production, use a proper auth system
    if (password === "wagusadmin") {
      setIsAuthenticated(true);
      localStorage.setItem("wagus_admin", "true");
      setError("");
    } else {
      setError("Invalid password");
    }
  };

  // Check if user is already logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("wagus_admin") === "true";
    setIsAuthenticated(isLoggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("wagus_admin");
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        {/* Mobile protection component */}
        <AdminMobileProtection />
        
        <div className="w-full max-w-md space-y-8 p-8 border border-border rounded-xl bg-card shadow-sm">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground">Admin Login</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Enter your password to access the admin panel
            </p>
          </div>
          
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="relative block w-full appearance-none rounded-md border border-border px-3 py-2 bg-background text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                placeholder="Password"
              />
            </div>

            {error && (
              <div className="text-sm text-red-500">{error}</div>
            )}

            <div>
              <Button
                type="submit"
                className="group relative flex w-full justify-center"
              >
                Sign in
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Mobile protection component - redirects mobile users */}
      <AdminMobileProtection />
      
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link href="/admin" className="font-bold text-lg text-foreground">
                WAGUS Admin
              </Link>
              <nav className="ml-8 space-x-4 hidden md:flex">
                <Link href="/admin/dev-log" className="text-muted-foreground hover:text-foreground">
                  Dev Logs
                </Link>
                <Link href="/admin/success-stories" className="text-muted-foreground hover:text-foreground">
                  Success Stories
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/" className="text-muted-foreground hover:text-foreground text-sm">
                View Site
              </Link>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
}
