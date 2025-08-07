import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { firstName, lastName, email, phone, service, message } = req.body;
      
      // In a real application, you would:
      // 1. Validate the input data
      // 2. Save to database or send email
      // 3. Return appropriate response
      
      console.log("Contact form submission:", {
        firstName,
        lastName,
        email,
        phone,
        service,
        message,
        timestamp: new Date().toISOString(),
      });

      res.json({ 
        success: true, 
        message: "Contact form submitted successfully" 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to submit contact form" 
      });
    }
  });

  // Career application submission endpoint
  app.post("/api/career", async (req, res) => {
    try {
      const { fullName, email, phone, position, coverLetter } = req.body;
      
      // In a real application, you would:
      // 1. Validate the input data
      // 2. Save application to database
      // 3. Send notification emails
      // 4. Return appropriate response
      
      console.log("Career application submission:", {
        fullName,
        email,
        phone,
        position,
        coverLetter,
        timestamp: new Date().toISOString(),
      });

      res.json({ 
        success: true, 
        message: "Application submitted successfully" 
      });
    } catch (error) {
      console.error("Career application error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to submit application" 
      });
    }
  });

  // Blog posts from Blogspot RSS
  app.get("/api/blog", async (req, res) => {
    try {
      const response = await fetch('https://theascodesolution.blogspot.com/feeds/posts/default?alt=json');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.feed && data.feed.entry) {
        const blogPosts = data.feed.entry.map((entry: any, index: number) => {
          // Extract image from content
          let imageUrl = null;
          const content = entry.content?.$t || entry.summary?.$t || '';
          
          // Look for images in the content
          const imgMatches = content.match(/<img[^>]+src="([^">]+)"/);
          if (imgMatches && imgMatches[1]) {
            imageUrl = imgMatches[1];
          }
          
          // Clean summary text
          const cleanSummary = (entry.summary?.$t || entry.content?.$t || '')
            .replace(/<[^>]*>/g, '')
            .replace(/&nbsp;/g, ' ')
            .replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .substring(0, 200)
            .trim();

          return {
            id: entry.id?.$t || `post-${index}`,
            title: entry.title?.$t || 'Untitled',
            link: entry.link?.find((l: any) => l.rel === 'alternate')?.href || '#',
            published: entry.published?.$t || new Date().toISOString(),
            summary: cleanSummary || 'No description available',
            imageUrl: imageUrl,
          };
        });
        
        res.json(blogPosts);
      } else {
        res.json([]);
      }
    } catch (error) {
      console.error("Blog fetch error:", error);
      res.status(500).json({ error: "Failed to fetch blog posts" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
