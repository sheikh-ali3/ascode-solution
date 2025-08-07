import { Link } from "wouter";
import { Logo } from "@/components/ui/logo";
import { Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background/90 border-t border-border backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo className="mb-6" />
            <p className="text-muted-foreground mb-4">
              Reliable, Secure, and Scalable Technology Solutions
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                data-testid="footer-linkedin"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="text-xl" />
              </a>
              <a
                href="#"
                data-testid="footer-twitter"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="text-xl" />
              </a>
              <a
                href="#"
                data-testid="footer-facebook"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="text-xl" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services">
                  <span
                    data-testid="footer-web-development"
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    Web Development
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span
                    data-testid="footer-mobile-apps"
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    Mobile Apps
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span
                    data-testid="footer-desktop-apps"
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    Desktop Apps
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span
                    data-testid="footer-database-services"
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    Database Services
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span
                    data-testid="footer-ui-ux-design"
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    UI/UX Design
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span
                    data-testid="footer-seo-services"
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    SEO Services
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about">
                  <span
                    data-testid="footer-about-us"
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/team">
                  <span
                    data-testid="footer-our-team"
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    Our Team
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/career">
                  <span
                    data-testid="footer-careers"
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    Careers
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <span
                    data-testid="footer-blog"
                    className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    Blog
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  data-testid="footer-privacy-policy"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  data-testid="footer-terms-of-service"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-3 text-muted-foreground">
              <p>30 N Gould St STE R<br />Sheridan, WY, 82801</p>
              <p>ascodesolution@gmail.com</p>
              <p>+17163061120</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Ascode Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
