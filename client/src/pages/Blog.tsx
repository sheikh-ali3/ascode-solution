import { Card, CardContent } from "@/components/ui/card";
import { Code, Shield, Database, Palette, Search, Cloud, Calendar } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2025",
      category: "Technology",
      date: "Dec 15, 2024",
      description: "Exploring the latest trends in web development including AI integration, progressive web apps, and modern frameworks.",
      icon: Code,
    },
    {
      id: 2,
      title: "Mobile App Security: Best Practices for 2025",
      category: "Security",
      date: "Dec 10, 2024",
      description: "Essential security measures every mobile app should implement to protect user data and maintain trust.",
      icon: Shield,
    },
    {
      id: 3,
      title: "Database Optimization: Scaling for Modern Applications",
      category: "Performance",
      date: "Dec 5, 2024",
      description: "Strategies for optimizing database performance and scaling applications for high-traffic scenarios.",
      icon: Database,
    },
    {
      id: 4,
      title: "UI/UX Design Trends That Will Dominate 2025",
      category: "Design",
      date: "Nov 28, 2024",
      description: "From micro-interactions to inclusive design, discover the trends shaping the future of user experience.",
      icon: Palette,
    },
    {
      id: 5,
      title: "SEO in the Age of AI: Adapting Your Strategy",
      category: "Marketing",
      date: "Nov 20, 2024",
      description: "How artificial intelligence is changing SEO and what businesses need to know to stay competitive.",
      icon: Search,
    },
    {
      id: 6,
      title: "Cloud Migration: A Complete Guide for Businesses",
      category: "Infrastructure",
      date: "Nov 15, 2024",
      description: "Everything you need to know about migrating your business applications to the cloud successfully.",
      icon: Cloud,
    },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-muted-foreground">Insights, updates, and tech trends</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => {
            const IconComponent = post.icon;
            return (
              <Card
                key={post.id}
                className="glass-card overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
                data-testid={`blog-post-${post.id}`}
              >
                {/* Blog post image placeholder */}
                <div className="h-48 gradient-bg flex items-center justify-center">
                  <IconComponent className="text-4xl text-white" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-primary mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.category} • {post.date}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.description}</p>
                  <a
                    href="#"
                    data-testid={`blog-read-more-${post.id}`}
                    className="text-primary hover:text-primary/80 font-medium"
                  >
                    Read More →
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
