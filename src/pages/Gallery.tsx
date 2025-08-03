import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import studentsSchool from "@/assets/gallery/students-front-school.jpg";
import schoolFunction from "@/assets/gallery/school-function.jpg";
import playground from "@/assets/gallery/playground.jpg";
import competition from "@/assets/gallery/competition.jpg";
import waterPark from "@/assets/gallery/water-park-trip.jpg";

const galleryCategories = {
  all: [
    { src: studentsSchool, alt: "Students standing proudly in front of school", category: "campus" },
    { src: schoolFunction, alt: "Cultural function celebration", category: "events" },
    { src: playground, alt: "Students enjoying playground activities", category: "sports" },
    { src: competition, alt: "Academic competition in progress", category: "academics" },
    { src: waterPark, alt: "Educational trip to water park", category: "trips" }
  ],
  campus: [
    { src: studentsSchool, alt: "Students standing proudly in front of school", category: "campus" }
  ],
  events: [
    { src: schoolFunction, alt: "Cultural function celebration", category: "events" }
  ],
  sports: [
    { src: playground, alt: "Students enjoying playground activities", category: "sports" }
  ],
  academics: [
    { src: competition, alt: "Academic competition in progress", category: "academics" }
  ],
  trips: [
    { src: waterPark, alt: "Educational trip to water park", category: "trips" }
  ]
};

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentImages = galleryCategories[selectedCategory as keyof typeof galleryCategories];

  const openModal = (index: number) => {
    setSelectedImage(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % currentImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + currentImages.length) % currentImages.length);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="hero-gradient text-white py-24">
        <div className="container-school text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">Photo Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Capturing moments of learning, growth, joy, and excellence at RRK School of Excellence
          </p>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="section-padding">
        <div className="container-school">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
              <TabsTrigger value="all" onClick={() => setSelectedCategory("all")}>All Photos</TabsTrigger>
              <TabsTrigger value="campus" onClick={() => setSelectedCategory("campus")}>Campus Life</TabsTrigger>
              <TabsTrigger value="events" onClick={() => setSelectedCategory("events")}>Events</TabsTrigger>
              <TabsTrigger value="sports" onClick={() => setSelectedCategory("sports")}>Sports</TabsTrigger>
              <TabsTrigger value="academics" onClick={() => setSelectedCategory("academics")}>Academics</TabsTrigger>
              <TabsTrigger value="trips" onClick={() => setSelectedCategory("trips")}>Field Trips</TabsTrigger>
            </TabsList>

            {Object.entries(galleryCategories).map(([category, images]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {images.map((image, index) => (
                    <Card key={index} className="overflow-hidden card-hover cursor-pointer">
                      <CardContent className="p-0">
                        <div 
                          className="aspect-square relative group"
                          onClick={() => openModal(index)}
                        >
                          <img 
                            src={image.src} 
                            alt={image.alt}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                              Click to view
                            </span>
                          </div>
                        </div>
                        <div className="p-4">
                          <p className="text-sm text-muted-foreground">{image.alt}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {/* Image Modal */}
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogContent className="max-w-4xl w-full p-0 bg-black border-0">
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                >
                  <X className="h-4 w-4" />
                </Button>
                
                {selectedImage !== null && (
                  <>
                    <img 
                      src={currentImages[selectedImage].src} 
                      alt={currentImages[selectedImage].alt}
                      className="w-full max-h-[80vh] object-contain"
                    />
                    
                    {currentImages.length > 1 && (
                      <>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20"
                        >
                          <ChevronRight className="h-6 w-6" />
                        </Button>
                      </>
                    )}
                    
                    <div className="absolute bottom-4 left-4 right-4 text-white bg-black/50 p-4 rounded">
                      <p className="text-sm">{currentImages[selectedImage].alt}</p>
                    </div>
                  </>
                )}
              </div>
            </DialogContent>
          </Dialog>

          {/* Stats Section */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Photos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Events Captured</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">25+</div>
                <div className="text-muted-foreground">Awards Documented</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">12+</div>
                <div className="text-muted-foreground">Field Trips</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Images Coming Soon */}
      <section className="section-padding section-gradient">
        <div className="container-school text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">
            More Memories to Come
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're constantly capturing the beautiful moments at RRK School. 
            Check back regularly for new photos from our ongoing activities and events.
          </p>
          <Button asChild className="btn-school">
            <a href="mailto:photos@rrkschool.edu">Share Your Photos</a>
          </Button>
        </div>
      </section>
    </div>
  );
}