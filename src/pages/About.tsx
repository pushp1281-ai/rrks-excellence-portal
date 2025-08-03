import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, Users, BookOpen, Globe } from "lucide-react";
import studentsSchool from "@/assets/gallery/students-front-school.jpg";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="hero-gradient text-white py-24">
        <div className="container-school text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover the story, mission, and values that drive RRK School of Excellence 
            in shaping tomorrow's leaders
          </p>
        </div>
      </section>

      {/* School History */}
      <section className="section-padding">
        <div className="container-school">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-playfair font-bold text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 1985, RRK School of Excellence began as a small educational institution 
                  with a big dream – to provide quality education that nurtures both academic excellence 
                  and character development. What started with just 50 students and 10 dedicated teachers 
                  has grown into a thriving educational community serving over 2,000 students.
                </p>
                <p>
                  Over the past 39 years, we have consistently evolved our teaching methodologies, 
                  infrastructure, and programs to meet the changing needs of education while staying 
                  true to our core values of integrity, excellence, and compassion.
                </p>
                <p>
                  Today, RRK School stands as a beacon of educational excellence, known for producing 
                  well-rounded individuals who excel not just academically but also contribute 
                  meaningfully to society.
                </p>
              </div>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden shadow-elegant">
              <img 
                src={studentsSchool} 
                alt="Students at RRK School" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding section-gradient">
        <div className="container-school">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Our Foundation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do at RRK School of Excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <Card className="card-hover text-center">
              <CardHeader>
                <Target className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To provide a comprehensive educational experience that develops critical thinking, 
                  creativity, and character, preparing students to become responsible global citizens 
                  and lifelong learners.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="card-hover text-center">
              <CardHeader>
                <Eye className="h-16 w-16 text-secondary mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To be a leading educational institution that transforms lives through innovative 
                  teaching, nurturing environment, and holistic development, creating future leaders 
                  who will shape a better world.
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="card-hover text-center">
              <CardHeader>
                <Heart className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2 text-left">
                  <li>• <strong>Excellence:</strong> Striving for the highest standards</li>
                  <li>• <strong>Integrity:</strong> Acting with honesty and moral principles</li>
                  <li>• <strong>Compassion:</strong> Caring for others and community</li>
                  <li>• <strong>Innovation:</strong> Embracing creativity and new ideas</li>
                  <li>• <strong>Respect:</strong> Valuing diversity and individual worth</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding">
        <div className="container-school">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              What Makes Us Special
            </h2>
            <p className="text-xl text-muted-foreground">
              Distinctive features that set RRK School apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <Users className="h-16 w-16 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">Small Class Sizes</h3>
              <p className="text-muted-foreground">
                Maximum 25 students per class ensuring personalized attention and 
                meaningful teacher-student relationships.
              </p>
            </div>

            <div className="text-center space-y-4">
              <BookOpen className="h-16 w-16 text-secondary mx-auto" />
              <h3 className="text-xl font-semibold">Modern Curriculum</h3>
              <p className="text-muted-foreground">
                Comprehensive curriculum that balances traditional academics with 
                modern skills like digital literacy and critical thinking.
              </p>
            </div>

            <div className="text-center space-y-4">
              <Globe className="h-16 w-16 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">Global Perspective</h3>
              <p className="text-muted-foreground">
                International exchange programs and multicultural learning 
                experiences to prepare students for a global world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding section-gradient">
        <div className="container-school">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Our Achievements
            </h2>
            <p className="text-xl text-muted-foreground">
              Recognition and milestones that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Board Exam Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">National Awards</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">University Admissions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Scholarships Won</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}