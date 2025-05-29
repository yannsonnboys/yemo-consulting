import React from "react";
import Image from "next/image";

function TherdSection() {
  return (
    <div className="flex p-10 flex-col md:flex-row md:justify-evenly">
      <div className="flex-col md:flex-row gap-6 md:px-10 flex">
        <div className="md:w-2/3 w-full">
          <video className="rounded-xl" autoPlay muted loop>
            <source src="/content/business_1.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex-col border p-4 rounded-xl md:w-2/5">
          <div className="text-3xl flex justify-center text-center md:text-4xl font-bold pb-5 bg-gradient-to-r from-yellow-500 to-blue-300 bg-clip-text text-transparent">
            Business Strategy
          </div>
          <div className="text-center text-xl gap-2">
            We provide our expertise in
          </div>
          <div className="md:px-20 space-y-6 flex-col items-center justify-center">
            <div className="text-lg pt-10 flex gap-4">
              <Image
                src="/images/icon-shield.png"
                alt="icon-analytics"
                width={50}
                height={50}
                className="object-contain items-center justify-center flex"
              />
              <div className="flex flex-col gap-2">Business Analytics (BA)</div>
            </div>

            <div className="flex-col">
              <div className="text-lg flex items-center gap-5">
                <Image
                  src="/images/icon-cloud.png"
                  alt="icon-cloud"
                  width={50}
                  height={50}
                  className="object-contain items-center justify-center flex"
                />
                <div className="">Business Communication (BC)</div>
              </div>
            </div>

            <div className="flex-col">
              <div className="text-lg flex items-center gap-5">
                <Image
                  src="/images/icon-store.png"
                  alt="icon-signal"
                  width={50}
                  height={50}
                  className="object-contain items-center justify-center flex"
                />
                <div className="">Starting New Busines (SNB)</div>
              </div>
            </div>

            <div className="flex-col">
              <div className="text-lg flex items-center gap-5">
                <Image
                  src="/images/icon-location.png"
                  alt="icon-template"
                  width={50}
                  height={50}
                  className="object-contain items-center justify-center flex"
                />
                {/* Local and international partnerships, also known as collaborations, involve organizations from different locations working together to achieve shared goals. */}
                <div className="">Business Collaboration (BC) </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TherdSection;
