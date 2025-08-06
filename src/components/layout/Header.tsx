import { Button } from "@/components/ui/button";
import { BrainCircuit, Menu, X, LogOut } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ThemeToggle from "@/components/ui/theme-toggle";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut, loading } = useAuth();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Assessment", href: "/assessment" },
    { name: "Career Explorer", href: "/careers" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "About", href: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast.error("Failed to sign out");
    } else {
      toast.success("Signed out successfully");
      navigate("/");
    }
  };

  return (
    <>
    {/* Sidebar */}
    <div className={`fixed top-0 left-0 h-full bg-background/80 backdrop-blur-lg border-r border-border z-50 flex flex-col gap-9 px-4 py-7 transition-transform duration-300 ease-in-out ${
      isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
    }`}>
      {/* Sidebar Toggle Button - positioned on the right side of sidebar */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="absolute top-4 -right-12 z-[60] p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border hover:bg-muted transition-smooth"
      >
        {isSidebarOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <Menu className="w-5 h-5" />
        )}
      </Button>
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-2 group mb-8">
        <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow transition-smooth">
          <BrainCircuit className="w-5 h-5 text-white" />
        </div>
        <span className="text-4xl font-bold font-display bg-gradient-primary bg-clip-text text-transparent">
          PathfindrAI
        </span>
      </Link>
      {/* Logo Ends */}

      {/* Sidebar */}
      {/* Navigation */}
      <nav className="flex flex-col space-y-1 flex-1">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`px-4 py-2 rounded-lg text-lg font-medium transition-smooth ${
              isActive(item.href)
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      {/* Navigation ends */}
      {/* Sidebar ends */}

      {/* Mobile menu button (optional, can be added for mobile sidebar toggle) */}
    </div>
    
    {/* Header */}
    {/* CTA Buttons */}
      <div className="fixed top-0 right-0 z-50 flex gap-5 px-4 py-6">
        <div className="mt-2">
          <ThemeToggle />
        </div>
        {loading ? null : user ? (
          <div className="flex flex-col items-stretch space-y-2">
            <span className="text-sm text-muted-foreground text-center">
              Welcome, {user.user_metadata?.display_name || user.email}
            </span>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="w-4 h-4 mr-1" />
              Sign Out
            </Button>
          </div>
        ) : (
          <>
            <Link to="/auth">
              <Button variant="outline" size="sm" className="w-full">
                Sign In
              </Button>
            </Link>
            <Link to="/auth">
              <Button
                variant="default"
                size="sm"
                className="gradient-primary w-full"
              >
                Get Started
              </Button>
            </Link>
          </>
        )}
      </div>
      {/* CTA ends */}
      {/* Header ends */}
    </>
  );
};

export default Header;
