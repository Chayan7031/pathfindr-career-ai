import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center space-x-2">
        <Sun className="w-4 h-4" />
        <Switch disabled />
        <Moon className="w-4 h-4" />
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <div className="flex items-center space-x-2">
      <Sun className={`w-4 h-4 transition-smooth ${isDark ? "text-muted-foreground" : "text-foreground"}`} />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        aria-label="Toggle dark mode"
      />
      <Moon className={`w-4 h-4 transition-smooth ${isDark ? "text-foreground" : "text-muted-foreground"}`} />
    </div>
  );
};

export default ThemeToggle;