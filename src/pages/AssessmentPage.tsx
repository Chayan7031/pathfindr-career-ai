import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ChatInterface from "@/components/chat/ChatInterface";

const AssessmentPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isStarted, setIsStarted] = useState(false);
  
  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const assessmentSteps = [
    {
      title: "Personal Background",
      description: "Tell us about your education, experience, and interests",
      completed: currentStep > 1
    },
    {
      title: "Skills & Strengths", 
      description: "Discover your key abilities and natural talents",
      completed: currentStep > 2
    },
    {
      title: "Values & Preferences",
      description: "Define what matters most to you in your career",
      completed: currentStep > 3
    },
    {
      title: "Career Recommendations",
      description: "Get personalized career suggestions based on your profile",
      completed: currentStep > 4
    }
  ];

  if (isStarted) {
    return (
      <Layout>
        <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <Button variant="ghost" asChild>
                  <Link to="/assessment" onClick={() => setIsStarted(false)}>
                    <ArrowLeft className="w-4 h-4" />
                    Back to Overview
                  </Link>
                </Button>
                <div className="text-sm text-muted-foreground">
                  Step {currentStep} of {totalSteps}
                </div>
              </div>
              <Progress value={progress} className="mb-4" />
              <h1 className="text-3xl font-bold font-display">
                {assessmentSteps[currentStep - 1]?.title}
              </h1>
              <p className="text-muted-foreground">
                {assessmentSteps[currentStep - 1]?.description}
              </p>
            </div>

            {/* Chat Interface */}
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <ChatInterface />
              </div>
              
              {/* Progress Sidebar */}
              <div className="lg:col-span-1">
                <Card className="p-6 sticky top-24">
                  <h3 className="font-semibold mb-4">Assessment Progress</h3>
                  <div className="space-y-4">
                    {assessmentSteps.map((step, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${
                          step.completed 
                            ? 'bg-success text-success-foreground' 
                            : currentStep === index + 1
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {step.completed ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : (
                            <span className="text-xs font-medium">{index + 1}</span>
                          )}
                        </div>
                        <div className="flex-1">
                          <p className={`text-sm font-medium ${
                            currentStep === index + 1 ? 'text-foreground' : 'text-muted-foreground'
                          }`}>
                            {step.title}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-border">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => setCurrentStep(Math.min(currentStep + 1, totalSteps))}
                      disabled={currentStep >= totalSteps}
                    >
                      Next Step
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold font-display mb-6">
              Career Assessment
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered assessment will analyze your skills, interests, and values to provide 
              personalized career recommendations tailored just for you.
            </p>
          </div>

          {/* Assessment Steps Preview */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {assessmentSteps.map((step, index) => (
              <Card key={index} className="p-6 shadow-medium animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Start Assessment */}
          <Card className="p-8 text-center shadow-large animate-slide-up">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              The assessment takes about 15-20 minutes to complete. You can save your progress and return anytime.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={() => setIsStarted(true)}
                className="text-lg px-8 py-4"
              >
                Start Assessment
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/careers">Browse Careers First</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AssessmentPage;