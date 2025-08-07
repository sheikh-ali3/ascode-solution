import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/team", label: "Team" },
    { href: "/career", label: "Career" },
    { href: "/blog", label: "Blog" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-lg shadow-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" data-testid="logo-link">
            <Logo className="cursor-pointer" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span
                    data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`px-3 py-2 text-sm font-medium transition-colors cursor-pointer ${
                      isActive(item.href)
                        ? "text-white"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
              <Link href="/contact">
                <Button
                  data-testid="nav-contact-button"
                  className="gradient-bg text-white hover:opacity-90"
                >
                  Contact
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              data-testid="mobile-menu-button"
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  data-testid={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`block px-3 py-2 text-base font-medium cursor-pointer ${
                    isActive(item.href)
                      ? "text-white"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <span
                data-testid="mobile-nav-contact"
                className="block text-muted-foreground hover:text-primary px-3 py-2 text-base font-medium cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
