import { Card, CardContent } from "@/components/ui/card";
import { Code, Calendar, ExternalLink, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: string;
  title: string;
  link: string;
  published: string;
  summary: string;
  imageUrl?: string;
  content?: string;
}

async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch('/api/blog');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export default function Blog() {
  const { data: blogPosts = [], isLoading, error } = useQuery({
    queryKey: ['/api/blog'],
    queryFn: fetchBlogPosts,
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).replace(/\s+\S*$/, '') + '...';
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-muted-foreground">
            Latest insights and updates from Ascode Solution
          </p>
          <Button
            variant="outline"
            className="mt-4 border-primary text-primary hover:bg-primary hover:text-white"
            onClick={() => window.open('https://theascodesolution.blogspot.com/', '_blank')}
            data-testid="visit-full-blog"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            Visit Our Full Blog
          </Button>
        </div>

        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <span className="ml-2 text-lg">Loading blog posts...</span>
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <div className="text-red-500 mb-4">Error loading blog posts</div>
            <Button
              variant="outline"
              onClick={() => window.open('https://theascodesolution.blogspot.com/', '_blank')}
              data-testid="visit-blog-error"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit Blog Directly
            </Button>
          </div>
        )}

        {!isLoading && !error && blogPosts.length === 0 && (
          <div className="text-center py-20">
            <Code className="text-6xl text-muted-foreground mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4">No Blog Posts Yet</h3>
            <p className="text-muted-foreground mb-6">
              We're working on creating amazing content for you. Check back soon!
            </p>
            <Button
              variant="outline"
              onClick={() => window.open('https://theascodesolution.blogspot.com/', '_blank')}
              data-testid="visit-blog-empty"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Visit Our Blog
            </Button>
          </div>
        )}

        {!isLoading && !error && blogPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={post.id}
                className="glass-card overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
                data-testid={`blog-post-${index}`}
                onClick={() => window.open(post.link, '_blank')}
              >
                {/* Blog post image */}
                <div className="h-48 relative overflow-hidden">
                  {post.imageUrl ? (
                    <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to gradient background if image fails to load
                        const target = e.target as HTMLElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.className = "h-48 gradient-bg flex items-center justify-center";
                          parent.innerHTML = '<svg class="text-4xl text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="64" height="64"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>';
                        }
                      }}
                    />
                  ) : (
                    <div className="h-48 gradient-bg flex items-center justify-center">
                      <Code className="text-4xl text-white" />
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-primary mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(post.published)}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {truncateText(post.summary.replace(/<[^>]*>/g, ''))}
                  </p>
                  <div className="flex items-center text-primary hover:text-primary/80 font-medium">
                    <span>Read More</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
