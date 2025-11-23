import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { navLinks } from "../lib/constant";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  // Initial header animation on mount
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animate header sliding down
    tl.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.8,
    })
      // Animate logo with scale and rotation
      .from(
        logoRef.current,
        {
          scale: 0,
          rotation: -180,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.4"
      )
      // Stagger nav links
      .from(
        navLinksRef.current?.children || [],
        {
          y: -20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.5,
        },
        "-=0.4"
      )
      // Animate button
      .from(
        buttonRef.current,
        {
          scale: 0,
          opacity: 0,
          duration: 0.5,
        },
        "-=0.3"
      );
  }, []);

  // Mobile menu animation
  useGSAP(() => {
    if (mobileMenuRef.current) {
      if (isMenuOpen) {
        gsap.to(mobileMenuRef.current, {
          x: 0,
          duration: 0.5,
          ease: "power3.out",
        });

        gsap.from(mobileMenuRef.current.children, {
          x: 50,
          opacity: 0,
          stagger: 0.1,
          duration: 0.4,
          delay: 0.2,
        });
      } else {
        gsap.to(mobileMenuRef.current, {
          x: "100%",
          duration: 0.5,
          ease: "power3.in",
        });
      }
    }
  }, [isMenuOpen]);

  // Hover animations for nav items

  // Hamburger animation
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    // Animate hamburger
    if (hamburgerRef.current) {
      const lines = hamburgerRef.current.querySelectorAll("span");
      if (!isMenuOpen) {
        gsap.to(lines[0], { rotation: 45, y: 8, duration: 0.3 });
        gsap.to(lines[1], { opacity: 0, duration: 0.2 });
        gsap.to(lines[2], { rotation: -45, y: -8, duration: 0.3 });
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3 });
        gsap.to(lines[1], { opacity: 1, duration: 0.2 });
        gsap.to(lines[2], { rotation: 0, y: 0, duration: 0.3 });
      }
    }
  };

  return (
    <header
      ref={headerRef}
      className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50"
    >
      <nav className="flex justify-between items-center p-4 md:px-8 bg-white/95 backdrop-blur-md">
        {/* Logo */}
        <div ref={logoRef} className="flex items-center gap-2 cursor-pointer">
          <img
            src="/icons/logo.svg"
            alt="BrewCraft Logo"
            className="w-8 h-8 md:w-10 md:h-10 object-cover"
          />
          <h2 className="text-primary text-xl md:text-2xl font-bold leading-1">
            BrewCraft
          </h2>
        </div>

        {/* Desktop Navigation Links */}
        <ul ref={navLinksRef} className="hidden lg:flex space-x-8 items-center">
          {navLinks.map(({ link, title }) => (
            <li
              key={link}
              className="text-primary text-xl font-medium cursor-pointer hover:text-foreground border-b border-gray-200 md:border-none"
            >
              {title}
            </li>
          ))}
        </ul>

        {/* Order Now Button (Desktop) */}
        <button
          ref={buttonRef}
          className="hidden lg:block text-sm md:text-base"
        >
          Order Now
        </button>

        {/* Hamburger Menu (Mobile & Tablet) */}
        <button ref={hamburgerRef} className="lg:hidden" onClick={toggleMenu}>
          <img
            src="/icons/burger-menu.svg"
            alt="hamburger"
            className="w-6 h-6"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="lg:hidden fixed top-[72px] right-0 w-64 h-[calc(100vh-72px)] bg-white/98 backdrop-blur-lg shadow-2xl transform translate-x-full"
      >
        <ul className="flex flex-col space-y-6 p-8">
          {navLinks.map(({ link, title }) => (
            <li
              key={link}
              className="text-primary text-xl font-medium cursor-pointer hover:text-foreground border-b border-gray-200 pb-4"
              onClick={() => setIsMenuOpen(false)}
            >
              {title}
            </li>
          ))}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="hidden lg:blockw-full text-base"
          >
            Order Now
          </button>
        </ul>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm top-[72px]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
}

export default Header;
