import { Button } from "@/components/ui/button";
import React from "react";

function FourthSection() {
  return (
    <div className="flex items-center justify-center md:py-10 p-10">
      <div className="text-center text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-800 to-purple-300 bg-clip-text text-transparent">
        Projects
        <div className="text-2xl mt-10">
          We are still working on different projects that will help you solve
          your problems and grow your business.
        </div>
        <div className="flex justify-center gap-4 pt-5">
          {/* <Button className="bg-blue-500 text-white px-10 py-6 rounded-md text-lg font-bold hover:bg-blue-600">
            Contact Us.
          </Button> */}
          <Button className="bg-gray-600 text-white px-10 py-6 rounded-md text-lg font-bold hover:bg-gray-700">
            Learn More.
          </Button>
        </div>
        <div className="flex items-center justify-center pt-5">
          <video
            className="rounded-xl"
            autoPlay
            muted
            loop
            width={"90%"}
            height={"90%"}
          >
            <source
              src="/content/business_intelligence_3.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
}

export default FourthSection;
