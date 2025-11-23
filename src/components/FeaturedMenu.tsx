import { featuredMenu } from "../lib/constant";
import MenuCard from "./MenuCard";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function FeaturedMenu() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(cardsRef.current?.children || [], {
      opacity: 0,
      y: 60,
      duration: 1.5,
      stagger: 0.3,
      ease: "power2.out",
    });
  }, []);

  return (
    <section className="bg-white max-w-7xl mx-auto ">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">
        Featured Menu
      </h2>

      <p className="text-foreground max-w-[600px] text-center mb-6 text-[18px]">
        Discover our signature blends and handcrafted beverages, made fresh
        daily with love and precision
      </p>

      {/* cards */}
      <div
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        {featuredMenu.map((item) => (
          <MenuCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedMenu;
