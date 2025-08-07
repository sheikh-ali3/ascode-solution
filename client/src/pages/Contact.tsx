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
import { MapPin, Mail, Phone, Clock, Globe, Smartphone, Monitor, Palette } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We will get back to you soon.",
    });
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground">Get in touch with our team</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      data-testid="input-first-name"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      data-testid="input-last-name"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="mt-2"
                      required
                    />
                  </div>
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
                  <Label htmlFor="service">Service Interested In</Label>
                  <Select onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger data-testid="select-service" className="mt-2">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-development">Web Development</SelectItem>
                      <SelectItem value="mobile-app-development">Mobile App Development</SelectItem>
                      <SelectItem value="desktop-development">Desktop Development</SelectItem>
                      <SelectItem value="database-services">Database Services</SelectItem>
                      <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                      <SelectItem value="seo-services">SEO Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    data-testid="textarea-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your project..."
                    className="mt-2"
                    required
                  />
                </div>
                <Button
                  data-testid="submit-message"
                  type="submit"
                  className="w-full gradient-bg text-white hover:opacity-90"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4" data-testid="contact-address">
                    <MapPin className="text-2xl gradient-text mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Address</h4>
                      <p className="text-muted-foreground">
                        7854 Al Fawaz,<br />
                        4348 IRQAH District,<br />
                        Riyadh, KSA
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4" data-testid="contact-email">
                    <Mail className="text-2xl gradient-text mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Email</h4>
                      <p className="text-muted-foreground">info@ascodesolutions.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4" data-testid="contact-phone">
                    <Phone className="text-2xl gradient-text mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Phone</h4>
                      <p className="text-muted-foreground">+966-5535-01084</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4" data-testid="contact-hours">
                    <Clock className="text-2xl gradient-text mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Business Hours</h4>
                      <p className="text-muted-foreground">
                        Sunday - Thursday: 9:00 AM - 6:00 PM<br />
                        Friday - Saturday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Quick Services</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div
                    data-testid="quick-service-web-dev"
                    className="text-center p-4 border border-border rounded-lg hover:border-primary transition-colors cursor-pointer"
                  >
                    <Globe className="text-2xl gradient-text mb-2 mx-auto" />
                    <div className="text-sm">Web Development</div>
                  </div>
                  <div
                    data-testid="quick-service-mobile-apps"
                    className="text-center p-4 border border-border rounded-lg hover:border-primary transition-colors cursor-pointer"
                  >
                    <Smartphone className="text-2xl gradient-text mb-2 mx-auto" />
                    <div className="text-sm">Mobile Apps</div>
                  </div>
                  <div
                    data-testid="quick-service-desktop-apps"
                    className="text-center p-4 border border-border rounded-lg hover:border-primary transition-colors cursor-pointer"
                  >
                    <Monitor className="text-2xl gradient-text mb-2 mx-auto" />
                    <div className="text-sm">Desktop Apps</div>
                  </div>
                  <div
                    data-testid="quick-service-ui-ux-design"
                    className="text-center p-4 border border-border rounded-lg hover:border-primary transition-colors cursor-pointer"
                  >
                    <Palette className="text-2xl gradient-text mb-2 mx-auto" />
                    <div className="text-sm">UI/UX Design</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
