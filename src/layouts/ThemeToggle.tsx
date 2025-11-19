import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import Button from "@/components/ui/button";
import { getStoredTheme, setStoredTheme } from "@/lib/theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Load saved theme on mount
  useEffect(() => {
    const stored = getStoredTheme();

    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    document.documentElement.classList.toggle("dark", newTheme === "dark");

    setStoredTheme(newTheme);
    setTheme(newTheme);
  };

  return (
    <Button variant="ghost" onClick={toggleTheme} size="sm">
      {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
    </Button>
  );
}
