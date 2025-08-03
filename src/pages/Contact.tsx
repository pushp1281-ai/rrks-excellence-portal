import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    category: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      category: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="hero-gradient text-white py-24">
        <div className="container-school text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with us for admissions, inquiries, or to schedule a visit. 
            We're here to help you and your family join the RRK community.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-school">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="card-hover text-center">
              <CardHeader>
                <Phone className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle>Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2">+91 12345 67890</p>
                <p className="text-muted-foreground mb-2">+91 12345 67891 (Admissions)</p>
                <p className="text-sm text-muted-foreground">Monday - Friday: 8:00 AM - 5:00 PM</p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <Mail className="h-16 w-16 text-secondary mx-auto mb-4" />
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2">info@rrkschool.edu</p>
                <p className="text-muted-foreground mb-2">admissions@rrkschool.edu</p>
                <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle>Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2">RRK School of Excellence</p>
                <p className="text-muted-foreground mb-2">123 Education Street</p>
                <p className="text-muted-foreground">Knowledge City, State - 123456</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Office Hours */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  <span>Send us a Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+91 12345 67890"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Inquiry Type</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admissions">Admissions</SelectItem>
                          <SelectItem value="academics">Academics</SelectItem>
                          <SelectItem value="fees">Fees & Payments</SelectItem>
                          <SelectItem value="facilities">Facilities</SelectItem>
                          <SelectItem value="events">Events & Activities</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      required
                      placeholder="Brief subject of your message"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      placeholder="Please provide details about your inquiry..."
                      rows={5}
                    />
                  </div>

                  <Button type="submit" className="w-full btn-school">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Office Hours and Additional Info */}
            <div className="space-y-8">
              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-6 w-6 text-primary" />
                    <span>Office Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-muted-foreground">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Saturday</span>
                    <span className="text-muted-foreground">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                  <div className="border-t pt-4 mt-4">
                    <p className="text-sm text-muted-foreground">
                      <strong>Admissions Office:</strong> Available Monday - Saturday for consultations
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* School Visit */}
              <Card>
                <CardHeader>
                  <CardTitle>Schedule a School Visit</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Experience our campus firsthand! Schedule a guided tour to see our facilities, 
                    meet our faculty, and learn about our programs.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong>Tour Days:</strong> Monday, Wednesday, Friday</p>
                    <p><strong>Tour Times:</strong> 10:00 AM, 2:00 PM</p>
                    <p><strong>Duration:</strong> 45-60 minutes</p>
                  </div>
                  <Button asChild className="w-full mt-4 btn-school-secondary">
                    <a href="mailto:visits@rrkschool.edu">Book a Tour</a>
                  </Button>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card>
                <CardHeader>
                  <CardTitle>Emergency Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">
                    For urgent matters during school hours:
                  </p>
                  <p className="text-lg font-semibold text-destructive">+91 98765 43210</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    This number is for emergencies only and is monitored 24/7 during school days.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding section-gradient">
        <div className="container-school">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold text-primary mb-6">Find Us</h2>
            <p className="text-xl text-muted-foreground">
              Located in the heart of Knowledge City with easy access by public transport
            </p>
          </div>
          
          {/* Placeholder for map - you can integrate Google Maps or other mapping service */}
          <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
              <p className="text-muted-foreground mb-4">
                123 Education Street, Knowledge City, State - 123456
              </p>
              <Button asChild variant="outline">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                  Open in Google Maps
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}