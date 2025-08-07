import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Smartphone, Globe, Database, Palette, Search, Check } from "lucide-react";

export default function Services() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground">Empowering Businesses with Technology</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Desktop Development */}
          <Card className="glass-card" data-testid="service-desktop-development">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Monitor className="text-4xl gradient-text mr-4" />
                <h2 className="text-2xl font-bold">Desktop Development</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                We build high-performance, secure desktop applications tailored to your
                business needs, ensuring system integration and workflow automation.
              </p>
              <h3 className="text-lg font-semibold mb-3">Key Features:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <Check className="text-primary mr-3" />
                  Improved efficiency
                </li>
                <li className="flex items-center">
                  <Check className="text-primary mr-3" />
                  Scalable solutions
                </li>
                <li className="flex items-center">
                  <Check className="text-primary mr-3" />
                  Data protection
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Mobile App Development */}
          <Card className="glass-card" data-testid="service-mobile-development">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Smartphone className="text-4xl gradient-text mr-4" />
                <h2 className="text-2xl font-bold">Mobile App Development</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Our Mobile App Development services provide scalable, secure, and
                user-centric solutions for both Android and iOS platforms. We utilize the
                latest technologies to deliver seamless and innovative mobile applications
                that are optimized for performance, user experience, and business objectives.
              </p>
              <h3 className="text-lg font-semibold mb-3">Key Features:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <Check className="text-primary mr-3" />
                  Better engagement
                </li>
                <li className="flex items-center">
                  <Check className="text-primary mr-3" />
                  Secure apps
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Web Development */}
          <Card className="glass-card" data-testid="service-web-development">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Globe className="text-4xl gradient-text mr-4" />
                <h2 className="text-2xl font-bold">Web Development</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                We create high-performance, responsive websites and custom web applications
                that align with your business goals. Our solutions are SEO-optimized,
                scalable, and user-friendly, ensuring a strong and lasting online presence.
              </p>
              <h3 className="text-lg font-semibold mb-3">Key Features:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <Check className="text-primary mr-3" />
                  Improved user engagement
                </li>
                <li className="flex items-center">
                  <Check className="text-primary mr-3" />
                  SEO-driven traffic and visibility
                </li>
                <li className="flex items-center">
                  <Check className="text-primary mr-3" />
                  Scalable architecture for growth
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Database Services */}
          <Card className="glass-card" data-testid="service-database">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Database className="text-4xl gradient-text mr-4" />
                <h2 className="text-2xl font-bold">Database Services</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                We design and optimize databases that ensure fast performance and secure
                data management. Whether SQL or NoSQL, our services cover data migration,
                integration, performance tuning, and security for reliable access.
              </p>
              <h3 className="text-lg font-semibold mb-3">Key Features:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <Check className="text-primary mr-3" />
                  High-speed data access
                </li>
                <li className="flex items-center">
                  <Check className="text-primary mr-3" />
                  Secure and reliable storage
                </li>
                <li className="flex items-center">
                  <Check className="text-primary mr-3" />
                  Easy scalability and integration
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* UI/UX Design */}
          <Card className="glass-card" data-testid="service-ui-ux-design">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Palette className="text-4xl gradient-text mr-4" />
                <h2 className="text-2xl font-bold">UI/UX Design</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                We craft intuitive and visually appealing interfaces that enhance user
                experience and engagement. Through user research, prototyping, and
                responsive design, we build products that users love to interact with.
              </p>
              <h3 className="text-lg font-semibold mb-3">Key Features:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <Check className="text-primary mr-3" />
                  Higher user satisfaction
                </li>
                <li className="flex items-center">
                  <Check className="text-primary mr-3" />
                  Increased conversion rates
                </li>
                <li className="flex items-center">
                  <Check className="text-primary mr-3" />
                  Better user engagement
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* SEO Services */}
          <Card className="glass-card" data-testid="service-seo">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Search className="text-4xl gradient-text mr-4" />
                <h2 className="text-2xl font-bold">SEO Services</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Boost your online visibility with our comprehensive SEO strategies. We
                optimize your website to rank higher in search engines and drive organic
                traffic to your business.
              </p>
              <h3 className="text-lg font-semibold mb-3">Key Features:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <Check className="text-primary mr-3" />
                  Improved search rankings
                </li>
                <li className="flex items-center">
                  <Check className="text-primary mr-3" />
                  Increased organic traffic
                </li>
                <li className="flex items-center">
                  <Check className="text-primary mr-3" />
                  Better online visibility
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Link href="/contact">
            <Button
              data-testid="services-start-project"
              size="lg"
              className="gradient-bg text-white px-8 py-4 hover:opacity-90"
            >
              Start Your Project
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
