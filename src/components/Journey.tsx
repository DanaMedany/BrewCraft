import { coffeeJourney } from "../lib/constant";
import JourneyCard from "./JourneyCard";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Journey() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardsRef.current) return;

    const cards = gsap.utils.toArray(
      cardsRef.current.children
    ) as HTMLElement[];

    // Hide cards initially
    gsap.set(cards, { opacity: 0, y: 50 });

    // Animate cards when section is in view
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
    <section className="bg-white max-w-7xl mx-auto py-12">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">
        Our Coffee Journey
      </h2>
      <p className="text-foreground max-w-[600px] text-center mb-6 text-[18px]">
        From farm to cup, every step is crafted with care
      </p>

      <div
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        {coffeeJourney.map((journey) => (
          <JourneyCard key={journey.id} {...journey} />
        ))}
      </div>
    </section>
  );
}

export default Journey;
