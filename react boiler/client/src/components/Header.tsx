import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "About", href: "/about" },
];

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" data-testid="link-logo">
              <span className="text-xl font-semibold text-primary">ReactApp</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = location === item.href;
              return (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className="hover-elevate"
                    data-testid={`link-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </Button>
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button 
              className="hidden sm:inline-flex hover-elevate active-elevate-2" 
              data-testid="button-get-started"
            >
              Get Started
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover-elevate"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => {
                const isActive = location === item.href;
                return (
                  <Link key={item.name} href={item.href}>
                    <Button
                      variant={isActive ? "secondary" : "ghost"}
                      className="w-full justify-start hover-elevate"
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid={`mobile-link-${item.name.toLowerCase()}`}
                    >
                      {item.name}
                    </Button>
                  </Link>
                );
              })}
              <Button 
                className="w-full mt-2 hover-elevate active-elevate-2"
                data-testid="mobile-button-get-started"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}