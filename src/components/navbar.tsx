"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function NavbarDemo() {
  const pathname = usePathname();
  
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Whitepaper",
      link: "/whitepaper",
    },
    {
      name: "Tokenomics",
      link: "/tokenomics",
    },
    {
      name: "Roadmap",
      link: "/roadmap",
    },
    {
      name: "Verify Token",
      link: "/verify",
    }
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  
  // Update active section based on pathname
  useEffect(() => {
    // Set the active section based on the current pathname
    const currentPath = pathname === "/" ? "/" : pathname;
    setActiveSection(currentPath);
  }, [pathname]);

  // Function to determine if a nav item is active
  const isActive = (link: string) => {
    if (link === "/" && pathname === "/") return true;
    if (link !== "/" && pathname.startsWith(link)) return true;
    return false;
  };

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems 
            items={navItems.map(item => ({
              ...item,
              active: isActive(item.link)
            }))} 
            renderItem={(item, idx, hovered) => (
              <a
                href={item.link}
                className={`relative px-4 py-2 ${
                  item.active 
                    ? "text-blue-600 font-semibold dark:text-blue-400" 
                    : "text-neutral-600 dark:text-neutral-300"
                }`}
              >
                {(hovered === idx || item.active) && (
                  <div
                    className={`absolute inset-0 h-full w-full rounded-full ${
                      item.active 
                        ? "bg-blue-100 dark:bg-blue-900/30" 
                        : "bg-gray-100 dark:bg-neutral-800"
                    }`}
                  />
                )}
                <span className="relative z-20">{item.name}</span>
              </a>
            )}
          />
          <div className="flex items-center gap-4">
            <NavbarButton
              href="https://dexscreener.com/solana/4XZD2D6UkVH8NyGLQzWGpMTcPdbSNWbRuLhpXXNPBn27"
              target="_blank"
              variant="primary"
              rel="noopener noreferrer"
              className="font-medium"
            >
              Buy $WAGUS
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`relative px-3 py-2.5 rounded-md w-full ${
                  isActive(item.link)
                    ? "bg-blue-100 text-blue-600 font-medium dark:bg-blue-900/30 dark:text-blue-400"
                    : "text-neutral-600 dark:text-neutral-300"
                }`}
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4 mt-2">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full font-medium"
                href="https://dexscreener.com/solana/4XZD2D6UkVH8NyGLQzWGpMTcPdbSNWbRuLhpXXNPBn27"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy $WAGUS
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
