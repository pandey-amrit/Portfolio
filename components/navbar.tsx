"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const navItems = [
  "about",
  "experience",
  "projects",
  "education",
  "skills",
  "certifications",
  "contact",
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]
  );

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <motion.nav
      role="navigation"
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold sm:text-base"
            aria-label="Home"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202025-01-16%2022.28.57%20-%20A%20minimalist%20logo%20design%20featuring%20the%20initials%20'AP'%20on%20a%20solid%20black%20background.%20The%20initials%20should%20use%20a%20sleek,%20dark%20gradient%20color%20palette,%20such%20a-092zCygobkFR8GkZQhqK4Ksll48gYF.webp"
              alt="AP Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
              Amrit Pandey
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-4 items-center">
            {navItems.map((item) => (
              <li key={item}>
                <motion.button
                  onClick={() => scrollToSection(item)}
                  className="text-sm hover:text-primary transition-colors capitalize"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  // You could add aria-current="page" here for the active section
                >
                  {item}
                </motion.button>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Toggle menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav aria-label="Mobile navigation">
                <ul className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <li key={item}>
                      <button
                        onClick={() => {
                          scrollToSection(item);
                          // Consider using a controlled Sheet state to close the menu instead
                          document.body.classList.remove("overflow-hidden");
                        }}
                        className="text-sm hover:text-primary transition-colors capitalize"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}