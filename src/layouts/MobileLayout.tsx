// import { useState } from "react";
// import { AlignRight } from "lucide-react";
// import Button from "@/components/ui/button";
// import FileTree from "@/components/ui/filetree";
// import { Drawer, DrawerContent, DrawerOverlay } from "@/components/ui/drawer";
// import Loading from "@/components/ui/loading";
// import { ThemeToggle } from "./ThemeToggle";
export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //   const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen w-full dark:bg-gray-900 overflow-hidden">
      {/* Header */}
      {/* <header className="h-14 border-b flex items-center justify-between px-4 bg-white dark:bg-gray-900 dark:text-white flex-shrink-0">
        <div className="text-lg font-bold">Tyty's</div>

        <div className="flex items-center gap-2">
          <Button variant="ghost" onClick={() => setDrawerOpen(true)} size="sm">
            <AlignRight size={20} />
          </Button>
          <ThemeToggle />
        </div>
        <Drawer open={isDrawerOpen} onOpenChange={setDrawerOpen} side="left">
          <DrawerOverlay />
          <DrawerContent className="justify-start bg-white dark:bg-gray-900">
            <div className="p-6">
              <FileTree setIsDrawer={setDrawerOpen} />
            </div>
          </DrawerContent>
        </Drawer>
      </header> */}

      {/* Content — No Scroll */}
      <main className="flex-1 bg-white dark:bg-gray-900 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
