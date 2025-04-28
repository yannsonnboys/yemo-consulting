import React from "react";

function FourthSection() {
  return (
    <div className="flex items-center justify-center md:py-10 p-10">
      <div className="text-center text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-800 to-purple-300 bg-clip-text text-transparent">
        FourthSection
        <div className="flex items-center justify-center pt-10">
          <video
            className="rounded-xl"
            autoPlay
            muted
            loop
            width={"87%"}
            height={"85%"}
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
