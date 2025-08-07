import { Link } from "wouter";
import { Logo } from "@/components/ui/logo";
import { Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background/80 border-t border-border">
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
                  <a
                    data-testid="footer-web-development"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Web Development
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a
                    data-testid="footer-mobile-apps"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Mobile Apps
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a
                    data-testid="footer-desktop-apps"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Desktop Apps
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a
                    data-testid="footer-database-services"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Database Services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a
                    data-testid="footer-ui-ux-design"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    UI/UX Design
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a
                    data-testid="footer-seo-services"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    SEO Services
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about">
                  <a
                    data-testid="footer-about-us"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/team">
                  <a
                    data-testid="footer-our-team"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Our Team
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/career">
                  <a
                    data-testid="footer-careers"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Careers
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a
                    data-testid="footer-blog"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Blog
                  </a>
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
              <p>7854 Al Fawaz, 4348 IRQAH District<br />Riyadh, KSA</p>
              <p>info@ascodesolutions.com</p>
              <p>+966-5535-01084</p>
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
