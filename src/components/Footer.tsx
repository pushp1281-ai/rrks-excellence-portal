import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";
import schoolLogo from "@/assets/school-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-school section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={schoolLogo} alt="RRK School Logo" className="h-10 w-10" />
              <div>
                <h3 className="font-playfair font-bold text-lg">RRK School of Excellence</h3>
                <p className="text-sm opacity-90">Nurturing Tomorrow's Leaders</p>
              </div>
            </div>
            <p className="text-sm opacity-90">
              Dedicated to providing quality education and fostering excellence in academics, 
              character development, and community service since 1985.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 hover:text-secondary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/academics" className="hover:text-secondary transition-colors">Academics</Link></li>
              <li><Link to="/admissions" className="hover:text-secondary transition-colors">Admissions</Link></li>
              <li><Link to="/faculty" className="hover:text-secondary transition-colors">Faculty</Link></li>
              <li><Link to="/student-life" className="hover:text-secondary transition-colors">Student Life</Link></li>
              <li><Link to="/news" className="hover:text-secondary transition-colors">News & Events</Link></li>
            </ul>
          </div>

          {/* Academic Programs */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Academic Programs</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="hover:text-secondary transition-colors cursor-pointer">Nursery & Kindergarten</span></li>
              <li><span className="hover:text-secondary transition-colors cursor-pointer">Primary School (1-5)</span></li>
              <li><span className="hover:text-secondary transition-colors cursor-pointer">Middle School (6-8)</span></li>
              <li><span className="hover:text-secondary transition-colors cursor-pointer">High School (9-10)</span></li>
              <li><span className="hover:text-secondary transition-colors cursor-pointer">Senior Secondary (11-12)</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>123 Education Street, Knowledge City, State - 123456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span>+91 12345 67890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span>info@rrkschool.edu</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 RRK School of Excellence. All rights reserved. | 
            <Link to="/privacy" className="hover:text-secondary ml-1">Privacy Policy</Link> | 
            <Link to="/terms" className="hover:text-secondary ml-1">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};