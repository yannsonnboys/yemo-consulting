import React from "react";

const features = [
  {
    name: "Basic",
    price: "$40/month",
    fees: "3.7% + 30¢ per transaction",
    description:
      "Start selling online with a simple and easy to use platform. Create your first store in minutes..",
  },
  {
    name: "Standard",
    price: "$80/month",
    fees: "2.9% + 30¢ per transaction",
    description:
      "Level up your business with a powerful eCommerce platform. Get access to all the features you need to grow.",
  },
  {
    name: "Premium",
    price: "$200/month",
    fees: "2.4% + 30¢ per transaction",
    description:
      "For businesses that need more. Get access to all the features you need to grow.",
  },
];

function Pricing() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-4xl text-center pt-10 md:text-5xl font-bold bg-gradient-to-r from-gray-700 to-gray-400 bg-clip-text text-transparent md:pb-10">
        Pricing
        <div className="text-2xl text-center md:text-4xl font-bold md:py-10">
          Simple and transparent pricing plans for all businesses.
        </div>
      </div>

      {/* <div className="md:flex">
        {features.map((feature, index) => (
          <div key={index} className="p-4">
            <div className="grid justify-center items-center border rounded-xl gap-2 p-4 ">
              <div className="text-2xl text-black font-bold pb-4">
                {feature.name}
              </div>
              <div className="text-xl">{feature.price}</div>
              <div className="text-xl">{feature.fees}</div>
              <div className="text-xl">{feature.description}</div>

              <div className="bg-blue-500 text-white p-4 border rounded-lg font-bold items-center justify-center">
                Get Started
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Pricing;
