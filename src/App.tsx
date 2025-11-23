import FeaturedMenu from "./components/FeaturedMenu";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Journey from "./components/Journey";
import Services from "./components/Services";
import Reviews from "./components/Reviews";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./components/Hero";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {
  return (
    <>
      <Header />
      <Hero />
      <FeaturedMenu />
      <Services />
      <Journey />
      <Reviews />
      <Footer />
    </>
  );
}

export default App;
