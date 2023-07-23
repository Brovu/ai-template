"use client";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./sidebar";
import { useEffect, useState } from "react";
const MobileSidebar = () => {
  const [isMouted, setMouted] = useState(false);

  useEffect(() => {
    setMouted(true);
  }, []);

  if (!isMouted) {
    return null;
  }
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost" size="icon">
          <div className="md:hidden">
            <Menu />
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
