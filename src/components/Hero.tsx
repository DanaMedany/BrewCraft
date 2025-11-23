import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(bgRef.current, {
      opacity: 0,
      scale: 1.1,
      duration: 1.4,
    })
      .from(
        titleRef.current,
        {
          opacity: 0,
          y: 40,
          duration: 0.9,
        },
        "-=1"
      )
      .from(
        subtitleRef.current,
        {
          opacity: 0,
          y: 25,
          duration: 0.8,
        },
        "-=0.7"
      )
      .from(
        buttonsRef.current?.children || [],
        {
          y: 20,
          duration: 0.7,
          stagger: 0.15,
        },
        "-=0.6"
      );
  }, []);

  return (
    <section className="relative h-[680px] w-full flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-linear-to-br from-[#5D4037] to-[#3E2723] opacity-90">
        <div className="absolute inset-0">
          <img
            ref={bgRef}
            src="/images/hero.png"
            alt="hero"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1
            ref={titleRef}
            className="font-display text-6xl md:text-6xl font-bold text-white mb-6 py-24"
          >
            Crafted for Coffee Lovers
          </h1>

          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-[#d7ccc8] mb-8 max-w-2xl mx-auto"
          >
            Experience the perfect blend of premium beans, artisan roasting, and
            handcrafted perfection in every cup
          </p>

          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="bg-white text-[#3e2723] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#d7ccc8] transition-all hover:scale-107 shadow-lg">
              Explore Menu
            </button>

            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#3e2723] transition-all transform hover:scale-105">
              Our Story
            </button>
          </div>

          <div className="absolute top-[600px] left-1/2 transform -translate-x-1/2 animate-bounce">
            <img
              src="/icons/chevron-down.svg"
              alt="arrow down"
              className="w-6 h-6 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
