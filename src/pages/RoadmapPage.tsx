import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Clock, ArrowRight, Target, BookOpen, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const RoadmapPage = () => {
  const roadmapData = {
    careerGoal: "Software Engineer",
    currentProgress: 35,
    estimatedCompletion: "18 months",
    milestones: [
      {
        id: 1,
        title: "Foundation Skills",
        description: "Master programming fundamentals and basic computer science concepts",
        status: "completed",
        timeframe: "3 months",
        progress: 100,
        tasks: [
          { name: "Learn Python Programming", completed: true },
          { name: "Understand Data Structures", completed: true },
          { name: "Basic Algorithms", completed: true },
          { name: "Version Control (Git)", completed: true }
        ]
      },
      {
        id: 2,
        title: "Web Development",
        description: "Build modern web applications using popular frameworks",
        status: "in-progress",
        timeframe: "4 months",
        progress: 60,
        tasks: [
          { name: "HTML/CSS Mastery", completed: true },
          { name: "JavaScript ES6+", completed: true },
          { name: "React.js Framework", completed: false },
          { name: "Node.js Backend", completed: false }
        ]
      },
      {
        id: 3,
        title: "Portfolio Projects",
        description: "Create impressive projects to showcase your skills",
        status: "upcoming",
        timeframe: "3 months",
        progress: 0,
        tasks: [
          { name: "E-commerce Website", completed: false },
          { name: "Task Management App", completed: false },
          { name: "API Integration Project", completed: false },
          { name: "Personal Portfolio Site", completed: false }
        ]
      },
      {
        id: 4,
        title: "Professional Skills",
        description: "Develop soft skills and industry knowledge",
        status: "upcoming",
        timeframe: "2 months",
        progress: 0,
        tasks: [
          { name: "Technical Interview Prep", completed: false },
          { name: "System Design Basics", completed: false },
          { name: "Agile Methodology", completed: false },
          { name: "Code Review Skills", completed: false }
        ]
      },
      {
        id: 5,
        title: "Job Search",
        description: "Land your first software engineering role",
        status: "upcoming",
        timeframe: "6 months",
        progress: 0,
        tasks: [
          { name: "Resume Optimization", completed: false },
          { name: "LinkedIn Profile", completed: false },
          { name: "Job Applications", completed: false },
          { name: "Interview Practice", completed: false }
        ]
      }
    ]
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-success" />;
      case "in-progress":
        return <Clock className="w-5 h-5 text-primary" />;
      default:
        return <div className="w-5 h-5 rounded-full border-2 border-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-success/10 text-success border-success/20";
      case "in-progress":
        return "bg-primary/10 text-primary border-primary/20";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <Layout>
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold font-display mb-6">
              Your Career Roadmap
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Follow your personalized learning path to achieve your career goals. 
              Track your progress and celebrate milestones along the way.
            </p>
          </div>

          {/* Progress Overview */}
          <Card className="p-6 mb-8 shadow-large animate-slide-up">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold mb-1">Career Goal</h3>
                <p className="text-muted-foreground">{roadmapData.careerGoal}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-1">Estimated Time</h3>
                <p className="text-muted-foreground">{roadmapData.estimatedCompletion}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-success/10 text-success rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="font-semibold mb-1">Overall Progress</h3>
                <p className="text-muted-foreground">{roadmapData.currentProgress}% Complete</p>
              </div>
            </div>
            <div className="mt-6">
              <Progress value={roadmapData.currentProgress} className="h-3" />
            </div>
          </Card>

          {/* Milestones */}
          <div className="space-y-6">
            {roadmapData.milestones.map((milestone, index) => (
              <Card key={milestone.id} className={`p-6 shadow-medium animate-scale-in ${
                milestone.status === 'in-progress' ? 'ring-2 ring-primary/20' : ''
              }`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {getStatusIcon(milestone.status)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                      <div className="text-right">
                        <Badge className={`mb-2 ${getStatusColor(milestone.status)}`}>
                          {milestone.status.replace('-', ' ')}
                        </Badge>
                        <div className="text-sm text-muted-foreground">
                          {milestone.timeframe}
                        </div>
                      </div>
                    </div>

                    {milestone.status !== 'upcoming' && (
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground">Progress</span>
                          <span className="text-sm font-medium">{milestone.progress}%</span>
                        </div>
                        <Progress value={milestone.progress} className="h-2" />
                      </div>
                    )}

                    <div className="space-y-2">
                      {milestone.tasks.map((task, taskIndex) => (
                        <div key={taskIndex} className="flex items-center space-x-3 text-sm">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center ${
                            task.completed 
                              ? 'bg-success text-white' 
                              : 'border-2 border-muted-foreground'
                          }`}>
                            {task.completed && <CheckCircle className="w-3 h-3" />}
                          </div>
                          <span className={task.completed ? 'line-through text-muted-foreground' : ''}>
                            {task.name}
                          </span>
                        </div>
                      ))}
                    </div>

                    {milestone.status === 'in-progress' && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <Button variant="default" size="sm">
                          Continue Learning
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    )}

                    {milestone.status === 'upcoming' && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <Button variant="outline" size="sm" disabled>
                          Coming Soon
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-12 text-center animate-fade-in">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/assessment">
                  Retake Assessment
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/careers">
                  Explore Other Careers
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RoadmapPage;