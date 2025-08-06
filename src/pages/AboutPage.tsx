import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BrainCircuit, Target, Users, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const AboutPage = () => {
  const features = [
    {
      icon: BrainCircuit,
      title: "AI-Powered Assessment",
      description: "Advanced natural language processing analyzes your responses to build a comprehensive career profile."
    },
    {
      icon: Target,
      title: "Personalized Recommendations",
      description: "Machine learning algorithms match your profile with thousands of career paths for tailored suggestions."
    },
    {
      icon: TrendingUp,
      title: "Real-Time Market Data",
      description: "Stay informed with current job market trends, salary ranges, and growth projections."
    },
    {
      icon: Users,
      title: "Expert-Backed Methodology",
      description: "Our approach combines proven career counseling frameworks with cutting-edge AI technology."
    }
  ];

  const stats = [
    { number: "50,000+", label: "Career Assessments Completed" },
    { number: "2,000+", label: "Career Paths Mapped" },
    { number: "95%", label: "User Satisfaction Rate" },
    { number: "500+", label: "Universities & Companies Trust Us" }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Officer",
      description: "Former Google AI researcher with 10+ years in machine learning and natural language processing."
    },
    {
      name: "Michael Rodriguez",
      role: "Career Psychology Lead",
      description: "Licensed career counselor with expertise in psychometric assessment and career development theory."
    },
    {
      name: "Emily Johnson",
      role: "Product Strategy Director",
      description: "Former LinkedIn product manager specializing in career development and professional networking platforms."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold font-display mb-6">
              About PathfindrAI
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing career guidance by combining artificial intelligence with proven 
              career counseling methodologies to help professionals discover their ideal career paths.
            </p>
          </div>

          {/* Mission Section */}
          <Card className="p-8 mb-16 shadow-large animate-slide-up">
            <div className="text-center">
              <h2 className="text-3xl font-bold font-display mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                To democratize access to high-quality career guidance by providing intelligent, 
                personalized, and data-driven career recommendations that empower individuals to 
                make informed decisions about their professional futures.
              </p>
            </div>
          </Card>

          {/* Features Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-display mb-4">How We Work</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our platform combines advanced AI technology with human expertise to deliver accurate and actionable career insights.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 text-center shadow-medium hover:shadow-large transition-smooth animate-scale-in group" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-bounce">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16 gradient-primary rounded-2xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Trusted by Professionals Worldwide</h2>
              <p className="text-white/90 max-w-2xl mx-auto">
                Join thousands of professionals who have successfully navigated their career journeys with PathfindrAI.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-white/80 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-display mb-4">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our diverse team brings together expertise in AI, psychology, and career development.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="p-6 text-center shadow-medium animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-20 h-20 gradient-primary rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <div className="text-primary font-medium mb-3">{member.role}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Technology Section */}
          <Card className="p-8 mb-16 shadow-large">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold font-display mb-6">Our Technology</h2>
                <div className="space-y-4">
                  {[
                    "Natural Language Processing for conversation analysis",
                    "Machine Learning for pattern recognition",
                    "Real-time labor market data integration",
                    "Psychometric assessment algorithms",
                    "Personalized recommendation engine"
                  ].map((tech, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-success" />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="w-48 h-48 gradient-hero rounded-2xl mx-auto flex items-center justify-center animate-float">
                  <BrainCircuit className="w-24 h-24 text-white" />
                </div>
              </div>
            </div>
          </Card>

          {/* CTA Section */}
          <div className="text-center animate-fade-in">
            <h2 className="text-3xl font-bold font-display mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have discovered their ideal career paths with PathfindrAI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/assessment">
                  Start Your Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/careers">
                  Explore Careers
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;