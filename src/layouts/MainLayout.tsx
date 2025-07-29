import { useEffect, useState } from "react";
import { getStoredTheme, setStoredTheme } from "@/lib/theme";
import { AlignRight, Moon, Sun } from "lucide-react";
import Button from "@/components/ui/button";
import FileTree from "@/components/ui/filetree";
import { Drawer, DrawerContent, DrawerOverlay } from "@/components/ui/drawer";
import { Topbar } from "./Topbar";
import Loading from "@/components/ui/loading";
import { useLocation } from "react-router-dom";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const stored = getStoredTheme();
  const location = useLocation();
  if (stored) {
    document.documentElement.classList.toggle("dark", stored === "dark");
  } else {
    // Optional: match system preference
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initial = prefersDark ? "dark" : "light";
    document.documentElement.classList.toggle("dark", prefersDark);
    setStoredTheme(initial);
  }
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const validPaths = ["/", "/home", "/about"];

  useEffect(() => {
    if (validPaths.includes(location.pathname)) {
      setIsLoading(true);
      const timer = setTimeout(() => setIsLoading(false), 1500);
      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen w-screen dark:bg-gray-900">
      <Loading isLoading={isLoading} />
      <header className="h-14 border-b flex items-center justify-start gap-1 px-4 bg-white dark:bg-gray-900 dark:text-white">
        <div className="text-xl font-bold md:block hidden me-auto">
          Tyty's Test App ฮัลโหลเทสๆตีตี้
        </div>
        <div className="text-xl font-bold md:hidden block me-auto md:me-0">
          Tyty's
        </div>
        <div className="md:block hidden ">
          <Topbar />
        </div>
        <div className="flex items-center gap-2 md:hidden block">
          <Button variant="ghost" onClick={() => setDrawerOpen(true)} size="sm">
            <AlignRight size={20} />
          </Button>

          <Drawer open={isDrawerOpen} onOpenChange={setDrawerOpen} side="left">
            <DrawerOverlay />
            <DrawerContent>
              {/* <DrawerHeader>
                        <DrawerTitle>Drawer Title</DrawerTitle>
                        <DrawerDescription>
                           This is a description of what this drawer contains.
                        </DrawerDescription>
                     </DrawerHeader> */}

              <div className="p-6 px-0 mb-auto">
                <aside className="block md:hidden w-64 bg-white dark:bg-gray-900">
                  <FileTree setIsDrawer={setDrawerOpen} />
                </aside>
              </div>

              {/* <DrawerFooter>
                        <Button
                           variant="outline"
                           onClick={() => setIsOpen(false)}
                        >
                           Cancel
                        </Button>
                        <Button onClick={() => setIsOpen(false)}>Save</Button>
                     </DrawerFooter> */}
            </DrawerContent>
          </Drawer>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </header>

      <div className="flex flex-1 mx-auto max-w-[1600px] w-full ">
        {/* <aside className="hidden md:block w-64 border-r p-4 bg-white dark:bg-gray-900">
          <FileTree />
        </aside> */}
        <main className="flex-1 p-4 bg-white dark:bg-gray-900 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

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

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setStoredTheme(newTheme);
    setTheme(newTheme); // ✅ update React state
  };

  return (
    <Button variant="ghost" onClick={toggleTheme} size="sm">
      {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
    </Button>
  );
}
