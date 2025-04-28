"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const features = [
  {
    name: "Customizable",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/images/icon-cloud.png",
    alt: "Customizable",
    color: "blue",
  },
  {
    name: "Fast ",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/images/icon-fast.png",
    alt: "Customizable",
  },
  {
    name: "Integrations",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/images/icon-journey.png",
    alt: "Customizable",
  },
  {
    name: "Full Stack",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/images/icon-layer.png",
    alt: "Customizable",
  },
  {
    name: "Loyalty",
    description:
      "Set up your loyalty program and start rewarding your customers for their purchases and actions they take on your site.",
    image: "/images/icon-location.png",
    alt: "Customizable",
  },
  {
    name: "Support",
    image: "/images/icon-support-1.png",
    description:
      "Get 24/7 support from our team to help you with any issues you have.",
    alt: "Customizable",
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
          <Button className="bg-blue-500 text-white text-lg font-bold px-10 py-6 justify-center flex md:w-1/2 rounded-lg hover:bg-blue-600">
            Contact Us.
          </Button>
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
          Our Features
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
                  <div className="text-lg bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent">
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
