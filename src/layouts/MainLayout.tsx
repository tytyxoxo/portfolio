import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="h-14 border-b flex items-center justify-between px-4 bg-white">
        <div className="text-xl font-bold">My App</div>

        {/* Mobile menu button */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="md:hidden">Menu</Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <Sidebar onNavigate={() => setOpen(false)} />
          </SheetContent>
        </Sheet>
      </header>

      <div className="flex flex-1">
        <aside className="hidden md:block w-64 border-r p-4 bg-gray-50">
          <Sidebar />
        </aside>
        <main className="flex-1 p-4 bg-white overflow-auto">{children}</main>
      </div>
    </div>
  );
}

function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="space-y-2">
      <Link to="/" onClick={onNavigate} className="block px-2 py-1 rounded hover:bg-gray-200">
        🏠 Home
      </Link>
      <Link to="/about" onClick={onNavigate} className="block px-2 py-1 rounded hover:bg-gray-200">
        ℹ️ About
      </Link>
    </nav>
  );
}
