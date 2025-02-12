"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  FileText,
  Download,
  ChevronDown,
  Loader,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import Typewriter from "typewriter-effect";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

// Original particles configuration
const particlesOptions = {
  fullScreen: { enable: false },
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 144,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};

export function HeroSection() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  const [showScrollArrow, setShowScrollArrow] = useState(true);

  useEffect(() => {
    // Simulate loading for 2 seconds
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowScrollArrow(false); // Hide the arrow when the user scrolls down
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Loader className="h-12 w-12 text-white" />
          </motion.div>
        </div>
      ) : (
        <section
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background text-foreground"
          aria-label="Hero Section"
        >
          <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="absolute inset-0" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center text-center space-y-8">
              <motion.div
                className="flex flex-col items-center gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="space-y-2">
                  <motion.h1
                    className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text drop-shadow-md"
                    style={{ filter: "contrast(1.25)" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    Amrit Pandey
                  </motion.h1>
                  <p
                    className="max-w-[600px] text-muted-foreground text-sm sm:text-base md:text-lg drop-shadow-sm"
                    style={{ filter: "contrast(1.1)" }}
                  >
                    <Typewriter
                      options={{
                        strings: [
                          "Masters Student in Artificial Intelligence at SUNY Buffalo",
                          "AI Passionate, Innovator, Full-Stack Developer",
                        ],
                        autoStart: true,
                        loop: true,
                        delay: 45,
                        deleteSpeed: 35,
                      }}
                    />
                  </p>
                </div>
                {/* Profile photo remains static (no animation) */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 overflow-hidden rounded-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/me3.jpg-6h0HPgaqibBXpNRISb15VpLVF3A1p4.jpeg"
                    alt="Professional headshot of Amrit Pandey"
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: "cover", objectPosition: "center 40%" }}
                    priority
                  />
                </div>
              </motion.div>
              <motion.nav
                className="flex flex-col items-center gap-4 w-full max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                aria-label="Social and Resume Links"
              >
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <Link
                    href="https://www.linkedin.com/in/amritpandey/"
                    prefetch
                    target="_blank"
                    aria-label="LinkedIn Profile"
                    className="w-full"
                  >
                    <Button variant="outline" className="w-full gap-2 bg-opacity-70 hover:bg-opacity-100">
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </Button>
                  </Link>
                  <Link
                    href="https://github.com/pandey-amrit"
                    prefetch
                    target="_blank"
                    aria-label="GitHub Profile"
                    className="w-full"
                  >
                    <Button variant="outline" className="w-full gap-2 bg-opacity-70 hover:bg-opacity-100">
                      <Github className="h-4 w-4" />
                      GitHub
                    </Button>
                  </Link>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <Dialog>
                    <DialogTrigger asChild>
                    <Button variant="outline" className="w-full gap-2 bg-opacity-70 hover:bg-opacity-100" asChild>
                      <a href="/Amrit_Pandey_Resume.pdf" target="_blank" rel="noopener noreferrer">
                        <FileText className="h-4 w-4" />
                        View Resume
                      </a>
                    </Button>

                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Resume</DialogTitle>
                        <DialogDescription>Amrit Pandey's Resume</DialogDescription>
                      </DialogHeader>
                      <iframe
                        src="/Amrit_Pandey_Resume.pdf"
                        width="100%"
                        height="600px"
                        className="border-0"
                        title="Amrit Pandey Resume"
                      >
                        <p>
                          Unable to display PDF file.{" "}
                          <a href="/Amrit_Pandey_Resume.pdf" download="Amrit_Pandey_Resume.pdf">
                            Download
                          </a>{" "}
                          instead.
                        </p>
                      </iframe>
                    </DialogContent>
                  </Dialog>
                  <Button
                    variant="outline"
                    className="w-full gap-2 bg-opacity-70 hover:bg-opacity-100"
                    asChild
                    aria-label="Download Resume"
                  >
                    <a href="/Amrit_Pandey_Resume.pdf" download="Amrit_Pandey_Resume.pdf">
                      <Download className="h-4 w-4" />
                      Download Resume
                    </a>
                  </Button>
                </div>
                <div className="flex flex-col items-center gap-2 mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <a href="mailto:amritsga123@gmail.com" className="hover:text-primary transition-colors">
                      amritsga123@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <a href="tel:+16823672658" className="hover:text-primary transition-colors">
                      +1 6823672658
                    </a>
                  </div>
                </div>
              </motion.nav>
            </div>
          </div>
          {/* Scroll Arrow: clicking scrolls to the About section */}
          {showScrollArrow && (
            <motion.button
              onClick={() => {
                document.querySelector("#about-section")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="absolute bottom-8 cursor-pointer flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
              aria-label="Scroll to About Section"
            >
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                <ChevronDown className="h-6 w-6 text-white" />
              </motion.div>
            </motion.button>
          )}
        </section>
      )}
    </>
  );
}