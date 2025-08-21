"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import Image from "next/image";

const roles = [
  "Programmer",
  "Freelancer",
  "Native App Developer",
  "Web App Developer",
  "Backend Service's",
  "SEO Expert",
  "Digital Marketer",
];

export function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeoutId: NodeJS.Timeout;

    if (isTyping) {
      if (displayedText.length < currentRole.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, 100);
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
      } else {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayedText, isTyping, currentRoleIndex]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
                Hi, I'm <span className="text-primary">Mehedi Hasan</span>
              </h1>

              <div className="text-2xl sm:text-3xl lg:text-4xl font-medium text-muted-foreground min-h-[1.2em]">
                <span className="text-foreground">I'm a </span>
                <span className="text-primary font-mono">
                  {displayedText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl text-pretty">
                I build Web apps, Cross platform App, Backend Solution and
                AI-powered solutions. Currently pursuing BSc in Physics while
                creating innovative digital experiences.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="text-base px-8 py-3"
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="text-base px-8 py-3"
              >
                <Mail className="mr-2 h-4 w-4" />
                Hire Me
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="text-sm text-muted-foreground">
                <div className="font-medium text-foreground">Available for</div>
                <div>Freelance Projects</div>
              </div>

              <div className="h-8 w-px bg-border" />

              <a href="../public/cv.pdf" download={true}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image/Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-border flex items-center justify-center">
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-xl bg-card border border-border flex items-center justify-center">
                  <Image
                    src={require("@/public/working-table.jpg")}
                    alt="profile-img"
                    loading="lazy"
                    className="w-full h-full rounded-md object-cover"
                  />
                </div>
              </div>

              {/* Floating elements */}
              {/* <div className="absolute -top-4 -right-4 w-16 h-16 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="text-xs font-mono text-primary">
                  <Image
                    src={require("@/public/front-end-programming.png")}
                    alt="Frontend logo"
                    className="object-cover"
                  />
                </span>
              </div>

              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <span className="text-xs font-mono text-accent">
                  <Image
                    src={require("@/public/bullhorn.png")}
                    alt="Frontend logo"
                    className="object-cover"
                  />
                </span>
              </div>

              <div className="absolute top-1/2 -left-8 w-12 h-12 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center">
                <span className="text-xs font-mono text-secondary-foreground">
                  <Image
                    src={require("@/public/machine-learning.png")}
                    alt="Frontend logo"
                    className="object-cover"
                  />
                </span>
              </div>

              <div className="absolute top-1/2 -right-8 w-12 h-12 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center">
                <span className="text-xs font-mono text-secondary-foreground">
                  <Image
                    src={require("@/public/app-development.png")}
                    alt="Frontend logo"
                    className="object-cover"
                  />
                </span>
              </div>

              <div className="absolute right-1/2 -top-8 w-12 h-12 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center">
                <span className="text-xs font-mono text-secondary-foreground">
                  <Image
                    src={require("@/public/app-development.png")}
                    alt="Frontend logo"
                    className="object-cover"
                  />
                </span>
              </div>

              <div className="absolute right-1/2 -bottom-8 w-12 h-12 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center">
                <span className="text-xs font-mono text-secondary-foreground">
                  <Image
                    src={require("@/public/app-development.png")}
                    alt="Frontend logo"
                    className="object-cover"
                  />
                </span>
              </div> */}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("#about")}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
