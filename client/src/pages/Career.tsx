import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Rocket, GraduationCap, Home } from "lucide-react";

export default function Career() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    coverLetter: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted Successfully!",
      description: "We will review your application and get back to you soon.",
    });
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      position: "",
      coverLetter: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-xl text-muted-foreground">Build the future of technology with us</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Work With Us?</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4" data-testid="benefit-innovative-projects">
                <Rocket className="text-2xl gradient-text mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Innovative Projects</h3>
                  <p className="text-muted-foreground">
                    Work on cutting-edge technology projects that make a real impact.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4" data-testid="benefit-continuous-learning">
                <GraduationCap className="text-2xl gradient-text mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
                  <p className="text-muted-foreground">
                    Access to training, certifications, and professional development
                    opportunities.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4" data-testid="benefit-flexible-work">
                <Home className="text-2xl gradient-text mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Flexible Work</h3>
                  <p className="text-muted-foreground">
                    Remote-first culture with flexible hours and work-life balance.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Card className="glass-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Current Openings</h3>
              <div className="space-y-4">
                <div
                  data-testid="job-frontend-developer"
                  className="border border-border rounded-lg p-4 hover:border-primary transition-colors cursor-pointer"
                >
                  <h4 className="text-lg font-semibold">Frontend Developer</h4>
                  <p className="text-muted-foreground text-sm">React, TypeScript, Tailwind CSS</p>
                  <p className="text-primary text-sm mt-2">Full-time • Remote</p>
                </div>
                <div
                  data-testid="job-backend-developer"
                  className="border border-border rounded-lg p-4 hover:border-primary transition-colors cursor-pointer"
                >
                  <h4 className="text-lg font-semibold">Backend Developer</h4>
                  <p className="text-muted-foreground text-sm">Node.js, Python, PostgreSQL</p>
                  <p className="text-primary text-sm mt-2">Full-time • Remote</p>
                </div>
                <div
                  data-testid="job-mobile-developer"
                  className="border border-border rounded-lg p-4 hover:border-primary transition-colors cursor-pointer"
                >
                  <h4 className="text-lg font-semibold">Mobile Developer</h4>
                  <p className="text-muted-foreground text-sm">React Native, Flutter</p>
                  <p className="text-primary text-sm mt-2">Full-time • Remote</p>
                </div>
                <div
                  data-testid="job-ui-ux-designer"
                  className="border border-border rounded-lg p-4 hover:border-primary transition-colors cursor-pointer"
                >
                  <h4 className="text-lg font-semibold">UI/UX Designer</h4>
                  <p className="text-muted-foreground text-sm">Figma, Adobe Creative Suite</p>
                  <p className="text-primary text-sm mt-2">Full-time • Remote</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Application Form */}
        <Card className="glass-card">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6">Apply Now</h3>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  data-testid="input-full-name"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className="mt-2"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  data-testid="input-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="mt-2"
                  required
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  data-testid="input-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="mt-2"
                  required
                />
              </div>
              <div>
                <Label htmlFor="position">Position</Label>
                <Select onValueChange={(value) => handleInputChange("position", value)}>
                  <SelectTrigger data-testid="select-position" className="mt-2">
                    <SelectValue placeholder="Select a position" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="frontend-developer">Frontend Developer</SelectItem>
                    <SelectItem value="backend-developer">Backend Developer</SelectItem>
                    <SelectItem value="mobile-developer">Mobile Developer</SelectItem>
                    <SelectItem value="ui-ux-designer">UI/UX Designer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="coverLetter">Cover Letter</Label>
                <Textarea
                  id="coverLetter"
                  data-testid="textarea-cover-letter"
                  rows={4}
                  value={formData.coverLetter}
                  onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                  placeholder="Tell us why you'd be a great fit..."
                  className="mt-2"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <Button
                  data-testid="submit-application"
                  type="submit"
                  className="gradient-bg text-white hover:opacity-90"
                >
                  Submit Application
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
