import React from "react";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function FifthSection() {
  return (
    <div className="md:py-20 p-10">
      <div className="border-[1px] md:w-2/3 mx-auto p-4 rounded-xl">
        <div className="text-xl font-bold mb-5 text-center">
          Start finding the right solution for your business today.
        </div>
        <div>
          Curious about how <strong>Yemo Consulting</strong> work and how we can
          help your business? Get in touch with us today, and let us help you
          take your business to the next level.
        </div>
        <div className="bg-blue-500 text-white text-center font-bold px-6 py-3 mt-5 rounded-lg">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="text-blue-500 text-2xl">
                Contact Us Now!
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Contact Us Now!</DialogTitle>
                <DialogDescription>
                  Contact us now by copying this email address and we'll get
                  back to you as soon as possible.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center space-x-2">
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="email" className="sr-only">
                    Email
                  </Label>
                  <Input
                    id="email"
                    defaultValue="yemo.yannick@gmail.com"
                    readOnly
                  />
                </div>
                <Button type="submit" size="sm" className="px-3">
                  <span className="sr-only">Copy</span>
                  <Copy />
                </Button>
              </div>
              <DialogFooter className="sm:justify-start">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default FifthSection;
