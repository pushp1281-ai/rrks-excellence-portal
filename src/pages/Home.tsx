import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users, BookOpen, Award, Heart } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import studentsSchool from "@/assets/gallery/students-front-school.jpg";
import schoolFunction from "@/assets/gallery/school-function.jpg";
import playground from "@/assets/gallery/playground.jpg";
import competition from "@/assets/gallery/competition.jpg";
import waterPark from "@/assets/gallery/water-park-trip.jpg";

const newsItems = [
  {
    id: 1,
    title: "Annual Science Fair 2024 - Outstanding Student Innovations",
    excerpt: "Our students showcased remarkable scientific projects demonstrating creativity and innovation in STEM fields.",
    date: "March 15, 2024",
    image: competition
  },
  {
    id: 2,
    title: "New Computer Lab Inauguration",
    excerpt: "State-of-the-art computer laboratory equipped with latest technology to enhance digital learning experience.",
    date: "March 10, 2024",
    image: studentsSchool
  },
  {
    id: 3,
    title: "Inter-School Sports Championship Victory",
    excerpt: "RRK School wins the district-level sports championship in multiple categories including athletics and team sports.",
    date: "March 5, 2024",
    image: playground
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: "Parent-Teacher Conference",
    date: "March 25, 2024",
    time: "9:00 AM - 4:00 PM",
    location: "School Auditorium"
  },
  {
    id: 2,
    title: "Cultural Day Celebration",
    date: "April 2, 2024",
    time: "10:00 AM - 2:00 PM",
    location: "Main Campus"
  },
  {
    id: 3,
    title: "Annual Academic Awards",
    date: "April 15, 2024",
    time: "6:00 PM - 8:00 PM",
    location: "School Auditorium"
  }
];

const galleryImages = [
  { src: studentsSchool, alt: "Students in front of school" },
  { src: schoolFunction, alt: "School cultural function" },
  { src: playground, alt: "Students playing" },
  { src: competition, alt: "Academic competition" },
  { src: waterPark, alt: "Educational trip to water park" }
];

export default function Home() {
  const [currentNews, setCurrentNews] = useState(0);
  const [currentGallery, setCurrentGallery] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentNews((prev) => (prev + 1) % newsItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextNews = () => setCurrentNews((prev) => (prev + 1) % newsItems.length);
  const prevNews = () => setCurrentNews((prev) => (prev - 1 + newsItems.length) % newsItems.length);

  const nextGallery = () => setCurrentGallery((prev) => (prev + 1) % galleryImages.length);
  const prevGallery = () => setCurrentGallery((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(34, 67, 126, 0.7), rgba(34, 67, 126, 0.7)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container-school text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6">
            RRK School of Excellence
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Nurturing Tomorrow's Leaders Through Quality Education, Character Development, and Innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-school text-lg px-8 py-6">
              <Link to="/admissions">Start Your Journey</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="section-padding bg-muted">
        <div className="container-school">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-scale-in">
              <div className="text-4xl font-bold text-primary mb-2">39+</div>
              <div className="text-muted-foreground">Years of Excellence</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-primary mb-2">2000+</div>
              <div className="text-muted-foreground">Students</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Faculty Members</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-school">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Why Choose RRK School?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide a nurturing environment that fosters academic excellence, character development, and lifelong learning
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover text-center">
              <CardHeader>
                <BookOpen className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Academic Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive curriculum designed to challenge and inspire students to reach their full potential
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover text-center">
              <CardHeader>
                <Heart className="h-16 w-16 text-secondary mx-auto mb-4" />
                <CardTitle className="text-xl">Character Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Focus on building strong moral values, leadership skills, and social responsibility
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover text-center">
              <CardHeader>
                <Award className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Holistic Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Balanced approach to education including sports, arts, and extracurricular activities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest News Carousel */}
      <section className="section-padding section-gradient">
        <div className="container-school">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Latest News & Announcements
            </h2>
            <p className="text-xl text-muted-foreground">
              Stay updated with the latest happenings at RRK School
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-lg shadow-elegant">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentNews * 100}%)` }}
              >
                {newsItems.map((item, index) => (
                  <div key={item.id} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 bg-white">
                      <div className="aspect-video md:aspect-square">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <div className="text-sm text-muted-foreground mb-2">{item.date}</div>
                        <h3 className="text-2xl font-playfair font-semibold mb-4">{item.title}</h3>
                        <p className="text-muted-foreground mb-6">{item.excerpt}</p>
                        <Button asChild variant="outline">
                          <Link to="/news">Read More</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={prevNews}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextNews}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding">
        <div className="container-school">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Upcoming Events
            </h2>
            <p className="text-xl text-muted-foreground">
              Mark your calendar for these important school events
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="card-hover">
                <CardHeader>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/news">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="section-padding section-gradient">
        <div className="container-school">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              School Life Gallery
            </h2>
            <p className="text-xl text-muted-foreground">
              Capturing moments of learning, growth, and joy at RRK School
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden shadow-elegant">
              <img 
                src={galleryImages[currentGallery].src} 
                alt={galleryImages[currentGallery].alt}
                className="w-full h-full object-cover"
              />
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={prevGallery}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextGallery}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            
            <div className="flex justify-center mt-6 space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentGallery(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentGallery ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button asChild className="btn-school">
              <Link to="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding hero-gradient text-white">
        <div className="container-school text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Give your child the best foundation for a bright future. 
            Apply for admission today and become part of the RRK family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
              <Link to="/admissions">Apply for Admission</Link>
            </Button>
            <Button asChild size="lg" className="text-lg px-8 py-6 bg-secondary hover:bg-secondary-light">
              <Link to="/contact">Schedule a Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}