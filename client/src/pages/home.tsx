import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { 
  Brain, 
  Laptop, 
  Smartphone, 
  MessageCircle, 
  TrendingUp, 
  Settings, 
  Palette, 
  Handshake, 
  ArrowRight, 
  Mail, 
  Phone, 
  Clock,
  Menu,
  X
} from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function Home() {
  const { toast } = useToast();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message! We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", message: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: Laptop,
      title: "Website Design",
      description: "Modern, responsive websites that convert visitors into customers with AI-optimized user experiences."
    },
    {
      icon: Smartphone,
      title: "App Development", 
      description: "Native and cross-platform applications with intelligent features and seamless user experiences."
    },
    {
      icon: MessageCircle,
      title: "AI Chatbots",
      description: "Intelligent conversational AI that provides 24/7 customer support and drives engagement."
    },
    {
      icon: TrendingUp,
      title: "SEO & Marketing",
      description: "Data-driven digital marketing strategies that increase visibility and drive qualified traffic."
    },
    {
      icon: Settings,
      title: "Automation",
      description: "Streamline operations with intelligent automation solutions that save time and reduce costs."
    },
    {
      icon: Brain,
      title: "AI Consulting",
      description: "Strategic AI implementation guidance to transform your business processes and decision-making."
    }
  ];

  const features = [
    {
      icon: Brain,
      title: "AI-First Approach",
      description: "Every solution leverages artificial intelligence to deliver smarter, more efficient outcomes that evolve with your needs."
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "Built to grow with your business, our solutions adapt and scale seamlessly as your requirements evolve."
    },
    {
      icon: Palette,
      title: "Clean Design",
      description: "Beautiful, intuitive interfaces that prioritize user experience and drive meaningful engagement with your audience."
    },
    {
      icon: Handshake,
      title: "End-to-End Services",
      description: "From strategy to implementation and ongoing support, we're your complete digital transformation partner."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-elvora-purple to-elvora-blue bg-clip-text text-transparent">
                Elvora
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-700 hover:text-elvora-purple transition-colors duration-300"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-700 hover:text-elvora-purple transition-colors duration-300"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-700 hover:text-elvora-purple transition-colors duration-300"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('why-choose-us')}
                  className="text-gray-700 hover:text-elvora-purple transition-colors duration-300"
                >
                  Why Us
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-700 hover:text-elvora-purple transition-colors duration-300"
                >
                  Contact
                </button>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-elvora-purple"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
                <button
                  onClick={() => scrollToSection('hero')}
                  className="block px-3 py-2 text-gray-700 hover:text-elvora-purple transition-colors duration-300"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="block px-3 py-2 text-gray-700 hover:text-elvora-purple transition-colors duration-300"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="block px-3 py-2 text-gray-700 hover:text-elvora-purple transition-colors duration-300"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('why-choose-us')}
                  className="block px-3 py-2 text-gray-700 hover:text-elvora-purple transition-colors duration-300"
                >
                  Why Us
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block px-3 py-2 text-gray-700 hover:text-elvora-purple transition-colors duration-300"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="lg:col-span-6">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-elvora-dark leading-tight">
                  Your all-in-one{" "}
                  <span className="bg-gradient-to-r from-elvora-purple to-elvora-blue bg-clip-text text-transparent">
                    digital partner
                  </span>{" "}
                  for AI, automation, and growth
                </h1>
                <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                  Transform your business with cutting-edge AI solutions, seamless automation, and innovative digital experiences that drive real results.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    onClick={() => scrollToSection('contact')}
                    className="bg-gradient-to-r from-elvora-purple to-elvora-blue text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    onClick={() => scrollToSection('about')}
                    variant="outline"
                    className="bg-white text-elvora-purple px-8 py-4 rounded-xl font-semibold border-2 border-elvora-purple hover:bg-elvora-purple hover:text-white transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0 lg:col-span-6">
              <div className="relative">
                <div className="w-full h-96 lg:h-[500px] relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800" 
                    alt="Modern digital workspace with AI technology" 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-elvora-purple/20 to-elvora-blue/20"></div>
                </div>
                
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-elvora-purple to-elvora-blue rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-elvora-blue rounded-full opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-elvora-dark mb-6">
              About <span className="bg-gradient-to-r from-elvora-purple to-elvora-blue bg-clip-text text-transparent">Elvora.tech</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                At Elvora, we're pioneering the future of digital transformation through intelligent AI solutions. Our expert team combines cutting-edge technology with creative design to deliver scalable, efficient, and innovative digital experiences.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-elvora-purple to-elvora-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-elvora-dark mb-2">AI-First Approach</h3>
                  <p className="text-gray-600">Every solution is powered by artificial intelligence for maximum efficiency and innovation.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-elvora-purple to-elvora-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Handshake className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-elvora-dark mb-2">Expert Team</h3>
                  <p className="text-gray-600">Seasoned professionals with deep expertise in AI, development, and digital strategy.</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-elvora-purple to-elvora-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-elvora-dark mb-2">Future-Ready</h3>
                  <p className="text-gray-600">Building solutions that evolve with technology and scale with your business growth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-elvora-dark mb-6">
              Our <span className="bg-gradient-to-r from-elvora-purple to-elvora-blue bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to accelerate your business growth through innovation and automation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-elvora-purple to-elvora-blue rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="text-white h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-elvora-dark mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-elvora-purple font-semibold hover:text-elvora-blue transition-colors"
                  >
                    Learn More <ArrowRight className="inline h-4 w-4 ml-1" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-elvora-dark mb-6">
              Why Choose <span className="bg-gradient-to-r from-elvora-purple to-elvora-blue bg-clip-text text-transparent">Elvora</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional results through our unique combination of AI expertise, design excellence, and customer-focused approach.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-elvora-purple to-elvora-blue rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-white h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold text-elvora-dark mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          {/* Stats section */}
          <div className="mt-16 bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-8 lg:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-elvora-purple to-elvora-blue bg-clip-text text-transparent mb-2">100+</div>
                <p className="text-gray-600 font-medium">Projects Delivered</p>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-elvora-purple to-elvora-blue bg-clip-text text-transparent mb-2">98%</div>
                <p className="text-gray-600 font-medium">Client Satisfaction</p>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-elvora-purple to-elvora-blue bg-clip-text text-transparent mb-2">24/7</div>
                <p className="text-gray-600 font-medium">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 to-elvora-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how Elvora can accelerate your digital transformation with AI-powered solutions tailored to your unique needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center text-gray-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-elvora-purple to-elvora-blue rounded-lg flex items-center justify-center mr-4">
                    <Mail className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email Us</p>
                    <p>hello@elvora.tech</p>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-elvora-purple to-elvora-blue rounded-lg flex items-center justify-center mr-4">
                    <Phone className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Call Us</p>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-elvora-purple to-elvora-blue rounded-lg flex items-center justify-center mr-4">
                    <Clock className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Response Time</p>
                    <p>Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-semibold text-elvora-dark mb-2">
                    Full Name *
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-elvora-purple focus:ring-2 focus:ring-elvora-purple/20 outline-none transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="block text-sm font-semibold text-elvora-dark mb-2">
                    Email Address *
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-elvora-purple focus:ring-2 focus:ring-elvora-purple/20 outline-none transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="block text-sm font-semibold text-elvora-dark mb-2">
                    Project Details *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-elvora-purple focus:ring-2 focus:ring-elvora-purple/20 outline-none transition-all duration-300 resize-none"
                    placeholder="Tell us about your project and goals..."
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-gradient-to-r from-elvora-purple to-elvora-blue text-white py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                  {!contactMutation.isPending && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
                
                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-elvora-dark py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="text-3xl font-bold bg-gradient-to-r from-elvora-purple to-elvora-blue bg-clip-text text-transparent">Elvora</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Transforming businesses through intelligent AI solutions, innovative design, and cutting-edge technology.
            </p>
            
            <div className="border-t border-gray-700 pt-8">
              <p className="text-gray-500">
                © 2024 Elvora.tech. All rights reserved. Built with AI-powered innovation.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
