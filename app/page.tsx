import Image from "next/image";
import Navbar from "./navbar/page";
import FirstSection from "./first-section/page";
import Carousel from "@/components/carousel";
import SecondSection from "./second-section/page";
import TherdSection from "./third-section/page";
import FourthSection from "./fourth-section/page";
import Pricing from "./pricing/page";
import FifthSection from "./fifth-section/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <FirstSection />
      <Carousel />
      <SecondSection />
      <TherdSection />
      <FourthSection />
      <Pricing />
      <FifthSection />
      <Footer />
    </div>
  );
}
