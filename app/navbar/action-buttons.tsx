import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function ActionButtons() {
  return (
    <div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>

          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <hr />
              <SheetDescription>
                <div className="flex flex-col space-y-2 items-start text-lg text-black mt-5">
                  <Link href="/getstarted">About Us</Link>
                  <Link href="/getstarted">Technology Fields</Link>
                  <Link href="/services">Business Strategy</Link>
                  <Link href="/pricing">Projects</Link>
                  <Link href="/blog">Pricing</Link>
                  <Link href="/">Blog</Link>
                  <Link href="/contact">Contact</Link>
                  <Link href="/about">About</Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:flex md:space-x-2">
        <Button
          className="text-md text-black bg-gray-100 hover:bg-gray-200"
          value="ghost"
        >
          <Link href="/">Blog</Link>
        </Button>
        <Button className="text-md bg-blue-500 hover:bg-blue-700">
          <Link href="/getstarted">Get Started</Link>
        </Button>
      </div>
    </div>
  );
}

export default ActionButtons;
