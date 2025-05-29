"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const logos = [
  {
    url: "/images/logo/logo-1.svg",
    alt: "Logo",
  },

  {
    url: "/images/logo/logo-3.svg",
    alt: "Logo",
  },

  {
    url: "/images/logo/logo-4.svg",
    alt: "Logo",
  },

  {
    url: "/images/logo/logo-5.svg",
    alt: "Logo",
  },

  {
    url: "/images/logo/logo-6.svg",
    alt: "Logo",
  },

  {
    url: "/images/logo/logo-7.svg",
    alt: "Logo",
  },

  {
    url: "/images/logo/logo-8.svg",
    alt: "Logo",
  },

  {
    url: "/images/logo/logo-9.svg",
    alt: "Logo",
  },

  {
    url: "/images/logo/logo-10.svg",
    alt: "Logo",
  },

  {
    url: "/images/logo/logo-11.svg",
    alt: "Logo",
  },

  {
    url: "/images/logo/logo-12.svg",
    alt: "Logo",
  },

  {
    url: "/images/logo/logo-13.svg",
    alt: "Logo",
  },
];

function Carousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === logos.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="m-5 text-center justify-center flex text-3xl font-bold md:pb-10 px-10 bg-gradient-to-r from-blue-500 to-green-300 bg-clip-text text-transparent">
        We are the "Doctors" of your "Business". We look into your business's
        data and tell you what is going wrong. That is why we are trusted by
        many businesses to fufill their needs.
      </div>
      <div className=" items-center justify-between grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 p-4 ">
        <AnimatePresence custom={currentImageIndex}>
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === currentImageIndex ? 1 : 0.5,
                scale: index === currentImageIndex ? 1.2 : 1,
                transition: { duration: 0.5 },
              }}
              className="flex items-center justify-center w-40 h-20"
              exit={{ opacity: 0 }}
              custom={index}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={logo.url}
                width={100}
                height={100}
                alt={logo.alt}
                className="object-contain h-20 w-20 items-center justify-center flex mx-auto"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Carousel;
