"use client";

import React from "react";
import Image from "next/image";
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

const features = [
  {
    name: "Data Science (DS)",
    description:
      "We apply Data Science techniques to help you make Smarter Decisions, Solve Really Tricky Problems, Understand and Interpret your data and Predict the future outcomes for your business.",
    image: "/images/icon-analytics.png",
    alt: "DS",
    // color: "blue",
  },
  {
    name: "Machine Learning (ML) ",
    description:
      "We apply Machine Learning techniques to help you Solving Problems that are too complex, Automating Tasks and Making them Super Efficient, Handling Massive and Ever-Changing Data for your business.",
    image: "/images/icon-signal.png",
    alt: "ML",
  },
  {
    name: "Artificial Intelligence (AI)",
    description:
      "We apply Artificial Intelligence techniques to help you with Automation and Efficiency, Enhanced Decision-Making and Insights, Solving Complex Problems, and Improving the Daily Productivity for your business.",
    image: "/images/icon-journey.png",
    alt: "AI",
  },
  {
    name: "Generative AI (GenAI)",
    description:
      "We apply Artificial Intelligence techniques to help you with Supercharging Creativity and Innovation, Boosting Efficiency and Productivity, Solving Complex Problems and Generating Insights for your business.",
    image: "/images/icon-template.png",
    alt: "Customizable",
  },
  {
    name: "SaaS & Mobile Apps",
    description:
      "We develop AI-Powered Software Solutions for your organization and business.",
    image: "/images/icon-layer.png",
    alt: "Customizable",
  },

  {
    name: "Support",
    image: "/images/icon-support-1.png",
    description:
      "Get support from our team to help you with any issues you have.",
    // description:
    //   "Get 24/7 support from our team to help you with any issues you have.",
    alt: "support",
  },
];

function SecondSection() {
  return (
    <div className="mt-4">
      <div className="flex flex-col md:flex-row items-center justify-center pb-10">
        <div className="p-5 justify-center md:w-1/2">
          <div className="text-3xl md:text-3xl font-bold pb-5 bg-gradient-to-r from-blue-500 to-green-300 bg-clip-text text-transparent">
            From startups to enterprises, we have a solution for your business.
          </div>
          <div className="text-xl mb-4">
            We offer a wide range of services to help you save costs and grow
            your business. Whether you are a startup or an established business,
            we can help you take your business to the next level.
          </div>
          <div className="bg-blue-500 text-white text-lg font-bold px-10 py-2 justify-center flex md:w-1/2 rounded-lg hover:bg-blue-600">
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
        </div>

        <div className="md:w-1/2 p-4 md:p-4">
          <video
            className="rounded-xl"
            autoPlay
            muted
            loop
            width={"100%"}
            height={"100%"}
          >
            <source
              src="/content/business_intelligence_1.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="text-3xl md:text-5xl font-bold justify-center pt-5 pb-10 bg-gradient-to-r from-purple-400 to-blue-800 bg-clip-text text-transparent">
          Our Expertise
        </div>

        <div className="grid grid-cols-1 p-4 md:grid md:grid-cols-3  gap-4 md:px-40">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex-col space-y-6 pb-10 border p-8 rounded-xl items-center justify-center w-full hover:scale-105 transform transition-all duration-500 ease-in-out"
            >
              <div className="text-3xl text-gray-600 font-bold">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={50}
                  height={50}
                  className="object-contain items-center justify-center flex mb-5"
                />
                <div className="">
                  <div className="text-2xl pb-4 bg-gradient-to-t from-black to-gray-400 bg-clip-text text-transparent">
                    {feature.name}
                  </div>
                  <div className="text-lg text-gray-500">
                    {feature.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
