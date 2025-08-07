import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Globe, Smartphone, Monitor, Users, Heart, Clock, Headphones } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="text-foreground">Welcome To</span><br />
                <span className="gradient-text">Ascode</span><br />
                <span className="gradient-text">Solutions</span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 font-light">
                Reliable, Secure, and Scalable Hosting Solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/services">
                  <Button
                    data-testid="hero-explore-services"
                    size="lg"
                    className="gradient-bg text-white px-8 py-4 hover:opacity-90"
                  >
                    Explore Services
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    data-testid="hero-contact-us"
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <Card className="glass-card h-96 flex items-center justify-center">
                <Code className="text-8xl gradient-text" />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-xl text-muted-foreground">
              Partner with Ascode Solutions where innovation meets reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="glass-card text-center" data-testid="why-choose-expert-team">
              <CardContent className="p-6">
                <Users className="text-3xl gradient-text mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
                <p className="text-muted-foreground">
                  Our experienced developers, designers, and strategists are committed to
                  delivering innovative, reliable, and scalable results.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card text-center" data-testid="why-choose-client-centric">
              <CardContent className="p-6">
                <Heart className="text-3xl gradient-text mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-3">Client-Centric Approach</h3>
                <p className="text-muted-foreground">
                  Your vision drives our process. We prioritize clear communication,
                  transparency, and long-term relationships.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card text-center" data-testid="why-choose-timely-delivery">
              <CardContent className="p-6">
                <Clock className="text-3xl gradient-text mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-3">Timely Delivery</h3>
                <p className="text-muted-foreground">
                  We respect deadlines. With efficient workflows and agile methods, we
                  deliver high-quality work—on time, every time.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card text-center" data-testid="why-choose-ongoing-support">
              <CardContent className="p-6">
                <Headphones className="text-3xl gradient-text mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-3">Ongoing Support</h3>
                <p className="text-muted-foreground">
                  Our job doesn't end at launch. We offer continuous maintenance and
                  support to keep your digital tools running smoothly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground">Empowering Businesses with Technology</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="service-card glass-card" data-testid="service-web-development">
              <CardContent className="p-6">
                <Globe className="text-3xl gradient-text mb-4" />
                <h3 className="text-xl font-semibold mb-3">Web Development</h3>
                <p className="text-muted-foreground mb-4">
                  High-performance, responsive websites and custom web applications that
                  align with your business goals.
                </p>
                <Link href="/services">
                  <Button
                    data-testid="service-web-learn-more"
                    variant="link"
                    className="text-primary hover:text-primary/80 p-0"
                  >
                    Learn More →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="service-card glass-card" data-testid="service-mobile-development">
              <CardContent className="p-6">
                <Smartphone className="text-3xl gradient-text mb-4" />
                <h3 className="text-xl font-semibold mb-3">Mobile App Development</h3>
                <p className="text-muted-foreground mb-4">
                  Scalable, secure Android/iOS apps with modern design and seamless user
                  experience.
                </p>
                <Link href="/services">
                  <Button
                    data-testid="service-mobile-learn-more"
                    variant="link"
                    className="text-primary hover:text-primary/80 p-0"
                  >
                    Learn More →
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="service-card glass-card" data-testid="service-desktop-development">
              <CardContent className="p-6">
                <Monitor className="text-3xl gradient-text mb-4" />
                <h3 className="text-xl font-semibold mb-3">Desktop Development</h3>
                <p className="text-muted-foreground mb-4">
                  High-performance, secure desktop applications tailored to your business
                  needs.
                </p>
                <Link href="/services">
                  <Button
                    data-testid="service-desktop-learn-more"
                    variant="link"
                    className="text-primary hover:text-primary/80 p-0"
                  >
                    Learn More →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
