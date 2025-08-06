import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BrainCircuit, Target, TrendingUp, Users, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 gradient-hero rounded-2xl flex items-center justify-center animate-float shadow-glow">
                <BrainCircuit className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-display mb-6">
              Your AI-Powered
              <span className="block bg-gradient-hero bg-clip-text text-transparent">
                Career Counselor
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover your ideal career path through intelligent assessments, personalized recommendations, 
              and data-driven insights. Let our AI guide you to professional success.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
              <Button asChild variant="hero" size="lg" className="text-lg px-8 py-4 animate-bounce">
                <Link to="/assessment">
                  Start Your Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4">
                <Link to="/careers">Explore Careers</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }}></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold font-display mb-4">
              Why Choose PathfindrAI?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our intelligent platform combines cutting-edge AI with proven career counseling methodologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Personalized Assessment",
                description: "Multi-turn AI conversations analyze your skills, interests, and values to create a comprehensive career profile.",
                color: "text-primary"
              },
              {
                icon: TrendingUp,
                title: "Market Intelligence",
                description: "Real-time labor market data and salary insights help you make informed career decisions.",
                color: "text-accent"
              },
              {
                icon: Users,
                title: "Expert Guidance",
                description: "AI-powered recommendations backed by career counseling expertise and industry knowledge.",
                color: "text-warning"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 shadow-medium hover:shadow-large transition-smooth animate-scale-in group" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`w-12 h-12 ${feature.color} bg-current/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-bounce`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 gradient-primary">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold font-display text-white mb-6">
              Ready to Discover Your Career Path?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have found their ideal careers with PathfindrAI
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="secondary" size="lg" className="text-lg px-8 py-4">
                <Link to="/assessment">
                  Start Free Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            
            {/* Testimonial preview */}
            <div className="mt-12 flex items-center justify-center space-x-1">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-white/90 ml-2">4.9/5 from 2,000+ users</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;