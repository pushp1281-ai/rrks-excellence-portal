import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Calendar, DollarSign, UserCheck, CheckCircle, Clock, Download } from "lucide-react";

export default function Admissions() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="hero-gradient text-white py-24">
        <div className="container-school text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold mb-6">Admissions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join the RRK School family and give your child the foundation for a bright future. 
            Learn about our admission process, requirements, and how to apply.
          </p>
        </div>
      </section>

      {/* Admission Overview */}
      <section className="section-padding">
        <div className="container-school">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Admission Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive admission process ensures we find the right fit for every child 
              while maintaining our standards of excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="card-hover text-center">
              <CardHeader>
                <FileText className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle>1. Application</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Submit completed application form with required documents
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <UserCheck className="h-16 w-16 text-secondary mx-auto mb-4" />
                <CardTitle>2. Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Age-appropriate interaction and assessment for the child
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <Calendar className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle>3. Interview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Parent-child interview with our admission committee
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <CheckCircle className="h-16 w-16 text-secondary mx-auto mb-4" />
                <CardTitle>4. Admission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Confirmation and enrollment completion with fee payment
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Admission Information by Grade */}
      <section className="section-padding section-gradient">
        <div className="container-school">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Grade-wise Admission Details
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

            <TabsContent value="nursery">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Nursery & Kindergarten (Ages 3-5)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Eligibility Criteria:</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Age 3-5 years as of March 31st</li>
                        <li>• Basic toilet training for nursery</li>
                        <li>• No formal academic requirements</li>
                        <li>• Health and vaccination records</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Assessment Process:</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Play-based interaction session</li>
                        <li>• Basic communication skills</li>
                        <li>• Social interaction observation</li>
                        <li>• Parent-child interview</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="primary">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Primary School (Grades 1-5)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Eligibility Criteria:</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Age appropriate as per grade level</li>
                        <li>• Transfer certificate (if applicable)</li>
                        <li>• Previous academic records</li>
                        <li>• Basic literacy and numeracy skills</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Assessment Areas:</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• English language skills</li>
                        <li>• Basic mathematics concepts</li>
                        <li>• General knowledge and awareness</li>
                        <li>• Communication and social skills</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="middle">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Middle School (Grades 6-8)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Eligibility Criteria:</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Completion of previous grade</li>
                        <li>• Minimum 70% in previous academic year</li>
                        <li>• School leaving certificate</li>
                        <li>• Character certificate from previous school</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Assessment Subjects:</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• English and Hindi/Regional language</li>
                        <li>• Mathematics and Science</li>
                        <li>• Social Studies</li>
                        <li>• Logical reasoning and aptitude</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="high">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">High School (Grades 9-10)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Eligibility Criteria:</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Minimum 75% in Class 8 board exams</li>
                        <li>• CBSE/equivalent board certification</li>
                        <li>• Good conduct certificate</li>
                        <li>• Medical fitness certificate</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Entrance Test:</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Comprehensive written examination</li>
                        <li>• Core subjects assessment</li>
                        <li>• Analytical and critical thinking</li>
                        <li>• Personal interview</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="senior">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Senior Secondary (Grades 11-12)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Eligibility Criteria:</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Minimum 80% in Class 10 board exams</li>
                        <li>• Stream-specific subject requirements</li>
                        <li>• CBSE Class 10 certificate</li>
                        <li>• Aptitude for chosen stream</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Stream Selection:</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Science: 85%+ with Math/Science</li>
                        <li>• Commerce: 75%+ with Math preference</li>
                        <li>• Arts: 70%+ with language skills</li>
                        <li>• Counseling session for guidance</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Required Documents */}
      <section className="section-padding">
        <div className="container-school">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Required Documents
            </h2>
            <p className="text-xl text-muted-foreground">
              Please ensure all documents are complete before submitting your application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-6 w-6 text-primary" />
                  <span>Student Documents</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                    <span>Birth certificate (original + photocopy)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                    <span>Previous academic records/mark sheets</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                    <span>Transfer certificate (if applicable)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                    <span>Character certificate from previous school</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                    <span>Medical fitness certificate</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                    <span>Vaccination records</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-secondary mt-1 flex-shrink-0" />
                    <span>Passport size photographs (6 copies)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <UserCheck className="h-6 w-6 text-secondary" />
                  <span>Parent/Guardian Documents</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Identity proof (Aadhar/Passport/Driving License)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Address proof (utility bill/lease agreement)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Income certificate/salary slips</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Passport size photographs (2 copies each parent)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <span>Caste certificate (if applicable)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="section-padding section-gradient">
        <div className="container-school">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Fee Structure 2024-25
            </h2>
            <p className="text-xl text-muted-foreground">
              Transparent and competitive fee structure with various payment options
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="h-6 w-6 text-primary" />
                  <span>Annual Fee Structure</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">Nursery - KG</span>
                    <span className="text-primary font-semibold">₹45,000</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">Class 1-5</span>
                    <span className="text-primary font-semibold">₹55,000</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">Class 6-8</span>
                    <span className="text-primary font-semibold">₹65,000</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">Class 9-10</span>
                    <span className="text-primary font-semibold">₹75,000</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="font-medium">Class 11-12</span>
                    <span className="text-primary font-semibold">₹85,000</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  * Includes tuition, library, lab, and activity fees
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Additional Fees & Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">One-time Fees:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Admission Fee: ₹10,000</li>
                    <li>• Security Deposit: ₹15,000 (refundable)</li>
                    <li>• Uniform & Books: ₹8,000 - ₹12,000</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Payment Options:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Annual payment: 5% discount</li>
                    <li>• Half-yearly: 2 installments</li>
                    <li>• Quarterly: 4 installments</li>
                    <li>• Monthly: 10 installments</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Scholarships Available:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Merit-based scholarships (up to 50%)</li>
                    <li>• Sibling discount (20% for 2nd child)</li>
                    <li>• Need-based financial assistance</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="section-padding">
        <div className="container-school">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
              Important Dates 2024-25
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="card-hover text-center">
              <CardHeader>
                <Calendar className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle>Application Period</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2">December 1 - February 28</p>
                <p className="text-sm text-muted-foreground">Online and offline applications accepted</p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <Clock className="h-16 w-16 text-secondary mx-auto mb-4" />
                <CardTitle>Assessment Dates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2">March 15 - March 31</p>
                <p className="text-sm text-muted-foreground">Age-appropriate assessments and interviews</p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardHeader>
                <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                <CardTitle>Results & Admission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold mb-2">April 10 - April 30</p>
                <p className="text-sm text-muted-foreground">Results declaration and admission confirmation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Forms */}
      <section className="section-padding hero-gradient text-white">
        <div className="container-school text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Ready to Apply?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Download our application forms or apply online to begin your child's journey 
            with RRK School of Excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
              <Download className="h-5 w-5 mr-2" />
              Download Application Form
            </Button>
            <Button size="lg" className="text-lg px-8 py-6 bg-secondary hover:bg-secondary-light">
              Apply Online Now
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-90">
            For assistance with applications, call us at +91 12345 67891 or email admissions@rrkschool.edu
          </p>
        </div>
      </section>
    </div>
  );
}