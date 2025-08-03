import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, BookOpen, Award, Users, GraduationCap, Heart } from "lucide-react";

// Sample faculty data - in a real app, this would come from an API
const principalData = {
  name: "Dr. Priya Sharma",
  position: "Principal",
  qualification: "Ph.D. in Education, M.Ed.",
  experience: "25 years",
  email: "principal@rrkschool.edu",
  bio: "Dr. Priya Sharma brings over 25 years of educational leadership experience to RRK School. With a Ph.D. in Education from Delhi University and extensive experience in curriculum development, she is committed to fostering excellence in education while nurturing each student's individual potential."
};

const seniorFaculty = [
  {
    name: "Mr. Rajesh Kumar",
    position: "Vice Principal & Mathematics Head",
    qualification: "M.Sc. Mathematics, B.Ed.",
    experience: "20 years",
    email: "rajesh.kumar@rrkschool.edu",
    specialization: "Advanced Mathematics, Competitive Exam Preparation"
  },
  {
    name: "Mrs. Anita Verma",
    position: "Academic Coordinator",
    qualification: "M.A. English, M.Ed.",
    experience: "18 years",
    email: "anita.verma@rrkschool.edu",
    specialization: "English Literature, Language Development"
  },
  {
    name: "Dr. Suresh Patel",
    position: "Science Department Head",
    qualification: "Ph.D. Physics, M.Sc.",
    experience: "22 years",
    email: "suresh.patel@rrkschool.edu",
    specialization: "Physics, Research Methodology"
  }
];

const primaryTeachers = [
  {
    name: "Mrs. Meera Singh",
    position: "Primary Coordinator",
    qualification: "M.A. Child Psychology, B.Ed.",
    experience: "15 years",
    specialization: "Early Childhood Education, Child Development"
  },
  {
    name: "Ms. Kavita Joshi",
    position: "Grade 1-2 Teacher",
    qualification: "B.A., B.Ed., Montessori Diploma",
    experience: "12 years",
    specialization: "Foundational Learning, Creative Teaching"
  },
  {
    name: "Mrs. Sunita Gupta",
    position: "Grade 3-5 Teacher",
    qualification: "M.A. Hindi, B.Ed.",
    experience: "14 years",
    specialization: "Language Development, Cultural Studies"
  }
];

const secondaryTeachers = [
  {
    name: "Mr. Amit Sharma",
    position: "Mathematics Teacher",
    qualification: "M.Sc. Mathematics, B.Ed.",
    experience: "16 years",
    specialization: "Algebra, Geometry, JEE Preparation"
  },
  {
    name: "Mrs. Neha Agarwal",
    position: "Science Teacher",
    qualification: "M.Sc. Chemistry, B.Ed.",
    experience: "13 years",
    specialization: "Chemistry, Laboratory Techniques"
  },
  {
    name: "Mr. Vikram Malhotra",
    position: "Social Studies Teacher",
    qualification: "M.A. History, B.Ed.",
    experience: "17 years",
    specialization: "Indian History, Geography"
  }
];

const supportStaff = [
  {
    name: "Mrs. Rekha Bhardwaj",
    position: "School Counselor",
    qualification: "M.A. Psychology, Counseling Diploma",
    experience: "10 years",
    specialization: "Student Counseling, Career Guidance"
  },
  {
    name: "Mr. Ravi Chopra",
    position: "Sports Coordinator",
    qualification: "M.P.Ed., B.P.Ed.",
    experience: "12 years",
    specialization: "Physical Education, Sports Training"
  },
  {
    name: "Ms. Pooja Nair",
    position: "Arts & Cultural Coordinator",
    qualification: "M.A. Fine Arts, B.Ed.",
    experience: "8 years",
    specialization: "Visual Arts, Cultural Activities"
  }
];

export default function Faculty() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="hero-gradient text-white py-24">
        <div className="container-school text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">Faculty & Staff</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Meet our dedicated team of educators who are passionate about nurturing young minds 
            and fostering excellence in education.
          </p>
        </div>
      </section>

      {/* Faculty Overview */}
      <section className="section-padding">
        <div className="container-school">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Our Educational Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our faculty comprises experienced educators, subject specialists, and support staff 
              who work together to create an enriching learning environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="card-hover text-center">
              <CardHeader>
                <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle>150+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Qualified Teachers</p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <GraduationCap className="h-16 w-16 text-secondary mx-auto mb-4" />
                <CardTitle>15+</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Ph.D. Holders</p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <Award className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle>12</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Average Years Experience</p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <Heart className="h-16 w-16 text-secondary mx-auto mb-4" />
                <CardTitle>1:15</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Teacher-Student Ratio</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="section-padding section-gradient">
        <div className="container-school">
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-playfair font-bold text-primary mb-4">
                Principal's Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <div className="w-48 h-48 bg-muted rounded-full mx-auto flex items-center justify-center">
                    <Users className="h-24 w-24 text-muted-foreground" />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-xl font-semibold">{principalData.name}</h3>
                    <p className="text-muted-foreground">{principalData.position}</p>
                    <p className="text-sm text-muted-foreground">{principalData.qualification}</p>
                    <p className="text-sm text-muted-foreground">{principalData.experience} Experience</p>
                    <div className="flex items-center justify-center mt-2">
                      <Mail className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm text-primary">{principalData.email}</span>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    "{principalData.bio}"
                  </p>
                  <div className="mt-6 p-4 bg-muted rounded-lg">
                    <h4 className="font-semibold mb-2">Educational Philosophy:</h4>
                    <p className="text-muted-foreground text-sm">
                      "Education is not just about academic excellence; it's about developing character, 
                      critical thinking, and compassion. At RRK School, we believe every child has unique 
                      potential that deserves to be nurtured and celebrated."
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Faculty Directory */}
      <section className="section-padding">
        <div className="container-school">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Faculty Directory
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore our diverse team of educators organized by department and expertise
            </p>
          </div>

          <Tabs defaultValue="senior" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              <TabsTrigger value="senior">Senior Faculty</TabsTrigger>
              <TabsTrigger value="primary">Primary</TabsTrigger>
              <TabsTrigger value="secondary">Secondary</TabsTrigger>
              <TabsTrigger value="support">Support Staff</TabsTrigger>
            </TabsList>

            <TabsContent value="senior">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {seniorFaculty.map((teacher, index) => (
                  <Card key={index} className="card-hover">
                    <CardHeader className="text-center">
                      <div className="w-24 h-24 bg-muted rounded-full mx-auto flex items-center justify-center mb-4">
                        <BookOpen className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <CardTitle className="text-lg">{teacher.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{teacher.position}</p>
                    </CardHeader>
                    <CardContent className="text-center space-y-2">
                      <p className="text-sm"><strong>Qualification:</strong> {teacher.qualification}</p>
                      <p className="text-sm"><strong>Experience:</strong> {teacher.experience}</p>
                      <p className="text-sm"><strong>Specialization:</strong> {teacher.specialization}</p>
                      <div className="flex items-center justify-center mt-3">
                        <Mail className="h-4 w-4 mr-2 text-primary" />
                        <span className="text-sm text-primary">{teacher.email}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="primary">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {primaryTeachers.map((teacher, index) => (
                  <Card key={index} className="card-hover">
                    <CardHeader className="text-center">
                      <div className="w-24 h-24 bg-muted rounded-full mx-auto flex items-center justify-center mb-4">
                        <Heart className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <CardTitle className="text-lg">{teacher.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{teacher.position}</p>
                    </CardHeader>
                    <CardContent className="text-center space-y-2">
                      <p className="text-sm"><strong>Qualification:</strong> {teacher.qualification}</p>
                      <p className="text-sm"><strong>Experience:</strong> {teacher.experience}</p>
                      <p className="text-sm"><strong>Specialization:</strong> {teacher.specialization}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="secondary">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {secondaryTeachers.map((teacher, index) => (
                  <Card key={index} className="card-hover">
                    <CardHeader className="text-center">
                      <div className="w-24 h-24 bg-muted rounded-full mx-auto flex items-center justify-center mb-4">
                        <GraduationCap className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <CardTitle className="text-lg">{teacher.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{teacher.position}</p>
                    </CardHeader>
                    <CardContent className="text-center space-y-2">
                      <p className="text-sm"><strong>Qualification:</strong> {teacher.qualification}</p>
                      <p className="text-sm"><strong>Experience:</strong> {teacher.experience}</p>
                      <p className="text-sm"><strong>Specialization:</strong> {teacher.specialization}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="support">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {supportStaff.map((staff, index) => (
                  <Card key={index} className="card-hover">
                    <CardHeader className="text-center">
                      <div className="w-24 h-24 bg-muted rounded-full mx-auto flex items-center justify-center mb-4">
                        <Users className="h-12 w-12 text-muted-foreground" />
                      </div>
                      <CardTitle className="text-lg">{staff.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{staff.position}</p>
                    </CardHeader>
                    <CardContent className="text-center space-y-2">
                      <p className="text-sm"><strong>Qualification:</strong> {staff.qualification}</p>
                      <p className="text-sm"><strong>Experience:</strong> {staff.experience}</p>
                      <p className="text-sm"><strong>Specialization:</strong> {staff.specialization}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Professional Development */}
      <section className="section-padding section-gradient">
        <div className="container-school">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Professional Development
            </h2>
            <p className="text-xl text-muted-foreground">
              We invest in our teachers' growth to ensure the best education for our students
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover text-center">
              <CardHeader>
                <BookOpen className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle>Continuous Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Regular workshops, seminars, and training programs to keep our faculty 
                  updated with the latest educational methodologies and technologies.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <Award className="h-16 w-16 text-secondary mx-auto mb-4" />
                <CardTitle>Recognition Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Excellence in teaching is recognized through various awards and 
                  appreciation programs, motivating our educators to strive for the best.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <Users className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle>Collaborative Culture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our faculty works as a team, sharing best practices and supporting 
                  each other to create the best learning environment for students.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}