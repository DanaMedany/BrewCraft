import { chooseBrewCraft } from "../lib/constant";
import ServicesCard from "./ServicesCard";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;

    const cards = gsap.utils.toArray(
      cardsRef.current.children
    ) as HTMLElement[];

    // Hide cards initially
    gsap.set(cards, { opacity: 0, y: 50 });

    // Animate when scroll reaches section
    gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 80%",
        toggleActions: "play none none none", // play once
      },
    });
  }, []);

  return (
    <section className="bg-linear-to-br from-[#D7CCC8] to-[#F5F5DC] py-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">
        Why Choose BrewCraft
      </h2>
      <p className="text-foreground max-w-[600px] text-center mb-6 text-[18px]">
        We're committed to bringing you the finest coffee experience, from bean
        to cup
      </p>

      <div
        ref={cardsRef}
        className="flex flex-wrap items-center justify-center md:flex-nowrap"
      >
        {chooseBrewCraft.map((service) => (
          <ServicesCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
}

export default Services;
