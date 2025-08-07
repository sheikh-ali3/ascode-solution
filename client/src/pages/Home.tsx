import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Globe, Smartphone, Monitor, Users, Heart, Clock, Headphones, Palette } from "lucide-react";

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

      {/* About Us Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Ascode Solution</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Established as a premier technology solutions provider, Ascode Solution
                specializes in connecting businesses with cutting-edge digital solutions. We
                are committed to transforming ideas into powerful, scalable applications that
                drive business growth.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our expertise spans across web development, mobile applications, desktop
                software, database management, UI/UX design, and SEO optimization. We pride
                ourselves on delivering reliable, secure, and scalable solutions.
              </p>
              <Link href="/about">
                <Button
                  data-testid="home-learn-more-about"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <Card className="glass-card">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center" data-testid="home-stat-projects">
                    <div className="text-3xl font-bold gradient-text">50+</div>
                    <div className="text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="text-center" data-testid="home-stat-clients">
                    <div className="text-3xl font-bold gradient-text">30+</div>
                    <div className="text-muted-foreground">Happy Clients</div>
                  </div>
                  <div className="text-center" data-testid="home-stat-experience">
                    <div className="text-3xl font-bold gradient-text">5+</div>
                    <div className="text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center" data-testid="home-stat-support">
                    <div className="text-3xl font-bold gradient-text">24/7</div>
                    <div className="text-muted-foreground">Support</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-muted-foreground">Ready to start your next project?</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4" data-testid="home-contact-address">
                    <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Address</h4>
                      <p className="text-muted-foreground">
                        30 N Gould St STE R,<br />
                        Sheridan, WY, 82801
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4" data-testid="home-contact-email">
                    <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Email</h4>
                      <p className="text-muted-foreground">ascodesolution@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4" data-testid="home-contact-phone">
                    <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Phone</h4>
                      <p className="text-muted-foreground">+17163061120</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact Form */}
            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 border border-border rounded-lg hover:border-primary transition-colors cursor-pointer text-center" data-testid="home-quick-web-dev">
                      <Globe className="text-2xl gradient-text mb-2 mx-auto" />
                      <div className="text-sm font-medium">Web Development</div>
                    </div>
                    <div className="p-4 border border-border rounded-lg hover:border-primary transition-colors cursor-pointer text-center" data-testid="home-quick-mobile-apps">
                      <Smartphone className="text-2xl gradient-text mb-2 mx-auto" />
                      <div className="text-sm font-medium">Mobile Apps</div>
                    </div>
                    <div className="p-4 border border-border rounded-lg hover:border-primary transition-colors cursor-pointer text-center" data-testid="home-quick-desktop-apps">
                      <Monitor className="text-2xl gradient-text mb-2 mx-auto" />
                      <div className="text-sm font-medium">Desktop Apps</div>
                    </div>
                    <div className="p-4 border border-border rounded-lg hover:border-primary transition-colors cursor-pointer text-center" data-testid="home-quick-ui-ux">
                      <Palette className="text-2xl gradient-text mb-2 mx-auto" />
                      <div className="text-sm font-medium">UI/UX Design</div>
                    </div>
                  </div>
                  <div className="text-center pt-6">
                    <Link href="/contact">
                      <Button
                        data-testid="home-get-full-contact"
                        className="gradient-bg text-white hover:opacity-90 px-8 py-3"
                      >
                        Get Full Contact Form
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
