import { Card, CardContent } from "@/components/ui/card";
import { Users, Heart, Clock, Headphones } from "lucide-react";

export default function About() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">About Ascode Solutions</h1>
          <p className="text-xl text-muted-foreground">
            Innovation meets reliability in technology solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Established as a premier technology solutions provider, Ascode Solutions
              specializes in connecting businesses with cutting-edge digital solutions. We
              are committed to transforming ideas into powerful, scalable applications that
              drive business growth.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our expertise spans across web development, mobile applications, desktop
              software, database management, UI/UX design, and SEO optimization. We pride
              ourselves on delivering reliable, secure, and scalable solutions that meet
              the evolving needs of modern businesses.
            </p>
          </div>
          <Card className="glass-card">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center" data-testid="stat-projects-completed">
                  <div className="text-3xl font-bold gradient-text">50+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center" data-testid="stat-happy-clients">
                  <div className="text-3xl font-bold gradient-text">30+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center" data-testid="stat-years-experience">
                  <div className="text-3xl font-bold gradient-text">5+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center" data-testid="stat-support">
                  <div className="text-3xl font-bold gradient-text">24/7</div>
                  <div className="text-muted-foreground">Support</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="glass-card" data-testid="about-expert-team">
            <CardContent className="p-8">
              <Users className="text-3xl gradient-text mb-4" />
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-muted-foreground">
                Our experienced developers, designers, and strategists are committed to
                delivering innovative, reliable, and scalable results.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card" data-testid="about-client-centric">
            <CardContent className="p-8">
              <Heart className="text-3xl gradient-text mb-4" />
              <h3 className="text-xl font-semibold mb-3">Client-Centric Approach</h3>
              <p className="text-muted-foreground">
                Your vision drives our process. We prioritize clear communication,
                transparency, and long-term relationships.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card" data-testid="about-timely-delivery">
            <CardContent className="p-8">
              <Clock className="text-3xl gradient-text mb-4" />
              <h3 className="text-xl font-semibold mb-3">Timely Delivery</h3>
              <p className="text-muted-foreground">
                We respect deadlines. With efficient workflows and agile methods, we
                deliver high-quality work—on time, every time.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card" data-testid="about-ongoing-support">
            <CardContent className="p-8">
              <Headphones className="text-3xl gradient-text mb-4" />
              <h3 className="text-xl font-semibold mb-3">Ongoing Support</h3>
              <p className="text-muted-foreground">
                Our job doesn't end at launch. We offer continuous maintenance and support
                to keep your digital tools running smoothly.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
