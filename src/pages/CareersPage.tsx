import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, TrendingUp, DollarSign, MapPin, Users } from "lucide-react";
import Layout from "@/components/layout/Layout";

const CareersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Careers" },
    { id: "technology", name: "Technology" },
    { id: "healthcare", name: "Healthcare" },
    { id: "finance", name: "Finance" },
    { id: "education", name: "Education" },
    { id: "creative", name: "Creative" },
  ];

  const careers = [
    {
      id: 1,
      title: "Software Engineer",
      category: "technology",
      description: "Design and develop software applications, systems, and solutions.",
      growth: "+22%",
      salary: "$75k - $150k",
      locations: ["Remote", "San Francisco", "New York"],
      skills: ["Programming", "Problem Solving", "Teamwork"],
      matchScore: 95
    },
    {
      id: 2,
      title: "Data Scientist",
      category: "technology", 
      description: "Analyze complex data to help organizations make informed decisions.",
      growth: "+31%",
      salary: "$85k - $170k",
      locations: ["Remote", "Seattle", "Boston"],
      skills: ["Statistics", "Python", "Machine Learning"],
      matchScore: 88
    },
    {
      id: 3,
      title: "UX Designer",
      category: "creative",
      description: "Create intuitive and engaging user experiences for digital products.",
      growth: "+18%",
      salary: "$60k - $120k",
      locations: ["Remote", "Los Angeles", "Austin"],
      skills: ["Design Thinking", "Prototyping", "User Research"],
      matchScore: 82
    },
    {
      id: 4,
      title: "Digital Marketing Manager",
      category: "business",
      description: "Develop and execute digital marketing strategies to drive growth.",
      growth: "+25%",
      salary: "$55k - $110k",
      locations: ["Remote", "Chicago", "Miami"],
      skills: ["SEO", "Analytics", "Content Strategy"],
      matchScore: 78
    },
    {
      id: 5,
      title: "Nurse Practitioner",
      category: "healthcare",
      description: "Provide advanced nursing care and patient treatment.",
      growth: "+45%",
      salary: "$80k - $140k",
      locations: ["Multiple Cities"],
      skills: ["Patient Care", "Clinical Skills", "Communication"],
      matchScore: 75
    },
    {
      id: 6,
      title: "Financial Analyst",
      category: "finance",
      description: "Analyze financial data and market trends to guide investment decisions.",
      growth: "+12%",
      salary: "$65k - $130k",
      locations: ["New York", "Chicago", "San Francisco"],
      skills: ["Financial Modeling", "Analytics", "Excel"],
      matchScore: 72
    }
  ];

  const filteredCareers = careers.filter(career => {
    const matchesSearch = career.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         career.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || career.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold font-display mb-6">
              Explore Career Paths
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover careers that match your interests and skills. Get insights into growth prospects, 
              salary ranges, and required skills for each role.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 animate-slide-up">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search careers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4" />
                Filters
              </Button>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Career Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCareers.map((career, index) => (
              <Card key={career.id} className="p-6 shadow-medium hover:shadow-large transition-smooth animate-scale-in group" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-smooth">
                      {career.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {career.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-primary">
                      {career.matchScore}% Match
                    </div>
                    <div className="w-12 h-2 bg-muted rounded-full mt-1">
                      <div 
                        className="h-full bg-primary rounded-full transition-smooth"
                        style={{ width: `${career.matchScore}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <TrendingUp className="w-4 h-4 mr-2 text-success" />
                    <span className="font-medium text-success">{career.growth}</span>
                    <span className="ml-1">growth rate</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span>{career.salary}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{career.locations.slice(0, 2).join(", ")}</span>
                    {career.locations.length > 2 && <span className="ml-1">+{career.locations.length - 2} more</span>}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-medium mb-2">Key Skills:</div>
                  <div className="flex flex-wrap gap-1">
                    {career.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button variant="outline" className="w-full group-hover:border-primary transition-smooth">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>

          {filteredCareers.length === 0 && (
            <div className="text-center py-12">
              <div className="text-muted-foreground">
                No careers found matching your search criteria.
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CareersPage;