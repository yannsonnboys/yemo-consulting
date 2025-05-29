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

function FirstSection() {
  return (
    <section className="md:py-20 py-10 bg-gradient-to-r from-gray-00 to-gray-100 space-y-10">
      <div className="container mx-auto text-center">
        <div className="text-6xl flex justify-center font-bold md:px-20 pb-5 text-gradient bg-gradient-to-r from-blue-500 to-green-300 bg-clip-text text-transparent">
          Have A Problem? Tell A Human, Not A Follower.
        </div>
        <div className="text-2xl md:px-20">
          👉 Tell us while you are here, when we can do something about it! A
          human created the problem, a human can fix it.
          <br />
          <em className="text-sm">Seth Godin YouTube video...</em>
          <hr className="my-2" />
        </div>
        <div className="flex justify-center gap-4 pt-5">
          <div className="bg-blue-500 text-white px-10 py-1.5 rounded-md text-lg font-bold hover:bg-blue-600">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="text-blue-500 text-lg">
                  Contact Us.
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Contact Us.</DialogTitle>
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
          <Button className="bg-gray-600 text-white px-10 py-6 rounded-md text-lg font-bold hover:bg-gray-700">
            Learn More.
          </Button>
        </div>
        <div className="pt-5 not-first-of-type:flex justify-center items-center">
          <video
            className="rounded-xl"
            autoPlay
            muted
            loop
            width={"90%"}
            height={"90%"}
          >
            <source src="/content/data_science_1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

export default FirstSection;
