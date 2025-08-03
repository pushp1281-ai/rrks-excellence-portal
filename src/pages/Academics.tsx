import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Users, Award, Clock, Globe, Computer, Beaker, Music } from "lucide-react";

export default function Academics() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="hero-gradient text-white py-24">
        <div className="container-school text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">Academics</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive educational programs designed to nurture academic excellence 
            and holistic development from nursery to senior secondary
          </p>
        </div>
      </section>

      {/* Academic Overview */}
      <section className="section-padding">
        <div className="container-school">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Our Academic Framework
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A well-structured curriculum that promotes critical thinking, creativity, 
              and character development at every level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-hover text-center">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">CBSE Curriculum</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Following CBSE guidelines with enhanced learning modules
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-secondary mx-auto mb-2" />
                <CardTitle className="text-lg">Small Classes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Maximum 25 students per class for personalized attention
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Excellence Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Comprehensive assessment and continuous improvement
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <Globe className="h-12 w-12 text-secondary mx-auto mb-2" />
                <CardTitle className="text-lg">Global Perspective</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  International outlook with modern teaching methods
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Grade Levels */}
      <section className="section-padding section-gradient">
        <div className="container-school">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Grade Levels & Programs
            </h2>
          </div>

          <Tabs defaultValue="nursery" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
              <TabsTrigger value="nursery">Nursery</TabsTrigger>
              <TabsTrigger value="primary">Primary</TabsTrigger>
              <TabsTrigger value="middle">Middle</TabsTrigger>
              <TabsTrigger value="high">High School</TabsTrigger>
              <TabsTrigger value="senior">Senior Secondary</TabsTrigger>
            </TabsList>

            <TabsContent value="nursery" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Nursery & Kindergarten (Ages 3-5)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Our early childhood program focuses on developing foundational skills through 
                    play-based learning, fostering creativity, and building social skills.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Key Focus Areas:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Language development and early literacy</li>
                        <li>• Number concepts and basic math</li>
                        <li>• Social and emotional skills</li>
                        <li>• Creative expression through art and music</li>
                        <li>• Motor skill development</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Learning Approach:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Play-based learning methodology</li>
                        <li>• Montessori-inspired activities</li>
                        <li>• Storytelling and interactive sessions</li>
                        <li>• Outdoor exploration and nature study</li>
                        <li>• Music and movement activities</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="primary" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Primary School (Grades 1-5)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Building strong academic foundations while encouraging curiosity, 
                    critical thinking, and collaborative learning.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Core Subjects:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• English Language & Literature</li>
                        <li>• Mathematics</li>
                        <li>• Science (Environmental Studies)</li>
                        <li>• Social Studies</li>
                        <li>• Hindi/Regional Language</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Special Programs:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Computer basics and digital literacy</li>
                        <li>• Art and craft workshops</li>
                        <li>• Physical education and sports</li>
                        <li>• Library and reading programs</li>
                        <li>• Life skills development</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="middle" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Middle School (Grades 6-8)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Transitional years focusing on deeper understanding of subjects, 
                    developing analytical skills, and exploring individual interests.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Core Curriculum:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Advanced English Literature</li>
                        <li>• Mathematics (Algebra & Geometry)</li>
                        <li>• Physics, Chemistry, Biology</li>
                        <li>• History, Geography, Civics</li>
                        <li>• Sanskrit/Third Language</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Enrichment Activities:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Science laboratory experiments</li>
                        <li>• Computer programming basics</li>
                        <li>• Project-based learning</li>
                        <li>• Debate and public speaking</li>
                        <li>• Student council participation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="high" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">High School (Grades 9-10)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Comprehensive preparation for board examinations while developing 
                    critical thinking, research skills, and career awareness.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">CBSE Board Preparation:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Intensive subject coaching</li>
                        <li>• Regular assessments and mock exams</li>
                        <li>• Individual mentoring sessions</li>
                        <li>• Stress management workshops</li>
                        <li>• Board exam strategies</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Career Guidance:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Aptitude testing and counseling</li>
                        <li>• Stream selection guidance</li>
                        <li>• Industry exposure programs</li>
                        <li>• Skill development workshops</li>
                        <li>• Higher education planning</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="senior" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Senior Secondary (Grades 11-12)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Specialized streams preparation for competitive exams and higher education 
                    with focus on academic excellence and career readiness.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Science Stream:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Physics, Chemistry, Mathematics</li>
                        <li>• Biology (for medical aspirants)</li>
                        <li>• JEE/NEET preparation</li>
                        <li>• Research projects</li>
                        <li>• Lab-intensive learning</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Commerce Stream:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Accountancy & Business Studies</li>
                        <li>• Economics & Mathematics</li>
                        <li>• CA/CS foundation courses</li>
                        <li>• Entrepreneurship programs</li>
                        <li>• Financial literacy</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Arts/Humanities:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• History, Geography, Political Science</li>
                        <li>• Psychology & Sociology</li>
                        <li>• Creative writing workshops</li>
                        <li>• Social research projects</li>
                        <li>• Liberal arts preparation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Special Programs */}
      <section className="section-padding">
        <div className="container-school">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Special Programs & Activities
            </h2>
            <p className="text-xl text-muted-foreground">
              Beyond traditional academics - programs that enrich the educational experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-hover text-center">
              <CardHeader>
                <Computer className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle>Digital Literacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Coding, robotics, and computer science education from elementary levels
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <Beaker className="h-16 w-16 text-secondary mx-auto mb-4" />
                <CardTitle>STEM Labs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  State-of-the-art laboratories for hands-on science and technology learning
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <Music className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle>Arts Program</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Music, dance, drama, and visual arts to nurture creative expression
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <Globe className="h-16 w-16 text-secondary mx-auto mb-4" />
                <CardTitle>Language Studies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Multiple language options and international communication skills
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Assessment & Evaluation */}
      <section className="section-padding section-gradient">
        <div className="container-school">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Assessment & Evaluation
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive evaluation system focusing on holistic development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-6 w-6 text-primary" />
                  <span>Continuous Assessment</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Regular classroom assessments</li>
                  <li>• Project-based evaluations</li>
                  <li>• Practical and lab assessments</li>
                  <li>• Portfolio development</li>
                  <li>• Peer and self-assessment</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="h-6 w-6 text-secondary" />
                  <span>Academic Excellence</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Term examinations</li>
                  <li>• Board exam preparation</li>
                  <li>• Competitive exam coaching</li>
                  <li>• Subject enrichment activities</li>
                  <li>• Academic achievement recognition</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-6 w-6 text-primary" />
                  <span>Holistic Development</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Co-curricular participation</li>
                  <li>• Leadership and teamwork skills</li>
                  <li>• Community service projects</li>
                  <li>• Character development assessment</li>
                  <li>• Personal growth tracking</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}