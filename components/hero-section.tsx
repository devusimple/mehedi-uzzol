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
  "Backend Developer",
  "SEO Expert",
  "Digital Marketer",
  "Content Creator",
  "UI/UX Designer",
  "Data Scientist",
  "Machine Learning Engineer",
  "Cloud Engineer",
  "Blockchain Developer",
  "Cybersecurity Specialist",
  "DevOps Engineer",
  "Game Developer",
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

              <a href="/cv.pdf" download={true}>
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
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="text-xs font-mono text-primary">NextJS</span>
              </div>

              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <span className="text-xs font-mono text-accent">React</span>
              </div>

              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <span className="text-xs font-mono text-accent">SEO</span>
              </div>

              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <span className="text-xs font-mono text-accent">
                  <svg
                    width={16}
                    height={16}
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.0164 2C10.8193 2 9.03825 3.72453 9.03825 5.85185V8.51852H15.9235V9.25926H5.97814C3.78107 9.25926 2 10.9838 2 13.1111L2 18.8889C2 21.0162 3.78107 22.7407 5.97814 22.7407H8.27322V19.4815C8.27322 17.3542 10.0543 15.6296 12.2514 15.6296H19.5956C21.4547 15.6296 22.9617 14.1704 22.9617 12.3704V5.85185C22.9617 3.72453 21.1807 2 18.9836 2H13.0164ZM12.0984 6.74074C12.8589 6.74074 13.4754 6.14378 13.4754 5.40741C13.4754 4.67103 12.8589 4.07407 12.0984 4.07407C11.3378 4.07407 10.7213 4.67103 10.7213 5.40741C10.7213 6.14378 11.3378 6.74074 12.0984 6.74074Z"
                        fill="url(#paint0_linear_87_8204)"
                      ></path>{" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18.9834 30C21.1805 30 22.9616 28.2755 22.9616 26.1482V23.4815L16.0763 23.4815L16.0763 22.7408L26.0217 22.7408C28.2188 22.7408 29.9998 21.0162 29.9998 18.8889V13.1111C29.9998 10.9838 28.2188 9.25928 26.0217 9.25928L23.7266 9.25928V12.5185C23.7266 14.6459 21.9455 16.3704 19.7485 16.3704L12.4042 16.3704C10.5451 16.3704 9.03809 17.8296 9.03809 19.6296L9.03809 26.1482C9.03809 28.2755 10.8192 30 13.0162 30H18.9834ZM19.9015 25.2593C19.1409 25.2593 18.5244 25.8562 18.5244 26.5926C18.5244 27.329 19.1409 27.9259 19.9015 27.9259C20.662 27.9259 21.2785 27.329 21.2785 26.5926C21.2785 25.8562 20.662 25.2593 19.9015 25.2593Z"
                        fill="url(#paint1_linear_87_8204)"
                      ></path>{" "}
                      <defs>
                        {" "}
                        <linearGradient
                          id="paint0_linear_87_8204"
                          x1="12.4809"
                          y1="2"
                          x2="12.4809"
                          y2="22.7407"
                          gradientUnits="userSpaceOnUse"
                        >
                          {" "}
                          <stop stop-color="#327EBD"></stop>{" "}
                          <stop offset="1" stop-color="#1565A7"></stop>{" "}
                        </linearGradient>{" "}
                        <linearGradient
                          id="paint1_linear_87_8204"
                          x1="19.519"
                          y1="9.25928"
                          x2="19.519"
                          y2="30"
                          gradientUnits="userSpaceOnUse"
                        >
                          {" "}
                          <stop stop-color="#FFDA4B"></stop>{" "}
                          <stop offset="1" stop-color="#F9C600"></stop>{" "}
                        </linearGradient>{" "}
                      </defs>{" "}
                    </g>
                  </svg>
                </span>
              </div>

              {/* <div className="absolute top-1/2 -right-8 w-12 h-12 rounded-full bg-secondary/20 border border-secondary/30 flex items-center justify-center">
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
