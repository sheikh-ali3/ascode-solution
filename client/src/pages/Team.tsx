import { Card, CardContent } from "@/components/ui/card";
import { User, Code, Palette, Smartphone, Database, TrendingUp } from "lucide-react";

export default function Team() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-xl text-muted-foreground">
            The talented professionals behind our success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="glass-card text-center" data-testid="team-member-ceo">
            <CardContent className="p-8">
              <div className="w-24 h-24 mx-auto mb-6 gradient-bg rounded-full flex items-center justify-center">
                <User className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Chief Executive Officer</h3>
              <p className="text-primary mb-4">CEO</p>
              <p className="text-muted-foreground">
                Leading the company vision and strategic direction to deliver exceptional
                technology solutions.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card text-center" data-testid="team-member-cto">
            <CardContent className="p-8">
              <div className="w-24 h-24 mx-auto mb-6 gradient-bg rounded-full flex items-center justify-center">
                <Code className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lead Developer</h3>
              <p className="text-primary mb-4">CTO</p>
              <p className="text-muted-foreground">
                Overseeing technical architecture and ensuring code quality across all
                projects.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card text-center" data-testid="team-member-design-director">
            <CardContent className="p-8">
              <div className="w-24 h-24 mx-auto mb-6 gradient-bg rounded-full flex items-center justify-center">
                <Palette className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Design Director</h3>
              <p className="text-primary mb-4">Head of Design</p>
              <p className="text-muted-foreground">
                Creating beautiful and intuitive user experiences that delight our clients
                and their users.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card text-center" data-testid="team-member-mobile-developer">
            <CardContent className="p-8">
              <div className="w-24 h-24 mx-auto mb-6 gradient-bg rounded-full flex items-center justify-center">
                <Smartphone className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mobile Developer</h3>
              <p className="text-primary mb-4">Senior Developer</p>
              <p className="text-muted-foreground">
                Specializing in iOS and Android development with focus on performance and
                user experience.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card text-center" data-testid="team-member-database-architect">
            <CardContent className="p-8">
              <div className="w-24 h-24 mx-auto mb-6 gradient-bg rounded-full flex items-center justify-center">
                <Database className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Database Architect</h3>
              <p className="text-primary mb-4">Senior Developer</p>
              <p className="text-muted-foreground">
                Designing and optimizing database solutions for scalability and performance.
              </p>
            </CardContent>
          </Card>

          <Card className="glass-card text-center" data-testid="team-member-seo-specialist">
            <CardContent className="p-8">
              <div className="w-24 h-24 mx-auto mb-6 gradient-bg rounded-full flex items-center justify-center">
                <TrendingUp className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">SEO Specialist</h3>
              <p className="text-primary mb-4">Marketing Lead</p>
              <p className="text-muted-foreground">
                Optimizing digital presence and driving organic growth through strategic SEO.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
