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
              {/* Go */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="text-xs font-mono text-primary">
                  <svg
                    className="w-14 h-14"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.1177 14.0442C17.7408 14.1497 17.3586 14.2566 16.9162 14.3768C16.7001 14.438 16.6509 14.4519 16.4498 14.2074C16.2086 13.9194 16.0317 13.7331 15.6939 13.5636C14.6807 13.0384 13.6996 13.1909 12.7829 13.8178C11.6893 14.5632 11.1264 15.6644 11.1425 17.0367C11.1585 18.3921 12.0431 19.5103 13.3137 19.6966C14.4073 19.8491 15.324 19.4425 16.0477 18.5785C16.1924 18.3922 16.3212 18.1887 16.482 17.9516H13.378C13.0402 17.9516 12.9598 17.7314 13.0724 17.4433C13.2815 16.9181 13.6675 16.0372 13.8926 15.5967C13.9409 15.495 14.0535 15.3256 14.2947 15.3256H19.4702C19.7027 14.5496 20.0799 13.8164 20.5831 13.1226C21.7572 11.4961 23.1725 10.649 25.0863 10.2933C26.7268 9.9883 28.2707 10.1577 29.6699 11.1573C30.9405 12.0722 31.7285 13.3089 31.9376 14.9354C32.211 17.2225 31.5838 19.0862 30.0881 20.6787C29.0266 21.8138 27.7239 22.5254 26.2282 22.8473C25.9429 22.9029 25.6576 22.9293 25.3768 22.9553C25.2303 22.9689 25.085 22.9823 24.9416 22.9998C23.478 22.9659 22.1432 22.5254 21.0173 21.5089C20.2256 20.7879 19.6803 19.9019 19.4092 18.8705C19.2211 19.2707 18.9962 19.6539 18.7336 20.0185C17.5756 21.628 16.0638 22.6276 14.15 22.8987C12.5738 23.1189 11.1103 22.797 9.82366 21.7805C8.63353 20.8317 7.95805 19.578 7.78114 18.0194C7.57206 16.1727 8.08671 14.5124 9.14818 13.0554C10.2901 11.4798 11.8019 10.4802 13.6514 10.1244C15.1632 9.8364 16.6106 10.0228 17.9134 10.9546C18.7657 11.5475 19.3769 12.3608 19.779 13.3434C19.8755 13.4959 19.8111 13.5806 19.6181 13.6314C19.0545 13.7822 18.5903 13.9121 18.1177 14.0442ZM28.7581 15.974C28.7613 16.0309 28.7646 16.0909 28.7693 16.1552C28.6889 17.6122 27.9973 18.6965 26.7268 19.3911C25.8744 19.8485 24.9898 19.8994 24.1053 19.4928C22.9473 18.9506 22.3361 17.6122 22.6256 16.2907C22.9795 14.6982 23.9444 13.6986 25.4401 13.3428C26.968 12.9701 28.4316 13.9188 28.7211 15.5961C28.7438 15.7161 28.7505 15.836 28.7581 15.974Z"
                        fill="#00ACD7"
                      ></path>
                      <path
                        d="M2.44461 13.8517C2.41244 13.9025 2.42852 13.9364 2.49285 13.9364L7.2826 13.9534C7.33085 13.9534 7.41126 13.9025 7.44343 13.8517L7.71684 13.4112C7.749 13.3604 7.73292 13.3096 7.66859 13.3096H2.95926C2.89493 13.3096 2.81451 13.3435 2.78235 13.3943L2.44461 13.8517Z"
                        fill="#00ACD7"
                      ></path>{" "}
                      <path
                        d="M0.0160829 15.4103C-0.0160829 15.4611 7.45058e-09 15.495 0.0643316 15.495L6.63928 15.4781C6.70361 15.4781 6.76794 15.4442 6.78402 15.3764L6.91269 14.9698C6.92877 14.919 6.8966 14.8682 6.83227 14.8682H0.530735C0.466404 14.8682 0.385989 14.902 0.353823 14.9529L0.0160829 15.4103Z"
                        fill="#00ACD7"
                      ></path>
                      <path
                        d="M3.90813 16.9521C3.87596 17.0029 3.89204 17.0537 3.95638 17.0537L6.43019 17.0707C6.47843 17.0707 6.54277 17.0199 6.54277 16.9521L6.57493 16.5455C6.57493 16.4777 6.54277 16.4269 6.47843 16.4269H4.29412C4.22978 16.4269 4.16545 16.4777 4.13329 16.5285L3.90813 16.9521Z"
                        fill="#00ACD7"
                      ></path>
                    </g>
                  </svg>
                </span>
              </div>

              {/* React */}
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <span className="text-xs font-mono text-accent">
                  <svg
                    className="w-14 h-14"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z"
                        fill="#53C1DE"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z"
                        fill="#53C1DE"
                      ></path>{" "}
                    </g>
                  </svg>
                </span>
              </div>

              {/* DM  */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <span className="text-xs font-mono text-accent">
                  <svg
                    className="w-12 h-12"
                    viewBox="0 0 64 64"
                    data-name="Layer 1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <polygon
                        className="cls-9"
                        points="37.5 33.34 41.74 37.58 45.98 39 48.81 36.17 44.57 34.76 40.89 31.08 38.91 31.93 37.5 33.34"
                        fill="#274c77"
                      ></polygon>
                      <polyline
                        className="cls-4"
                        points="26.5 58.5 30.5 44.5 52.5 44.5 48.5 58.5"
                        fill="none"
                        stroke="#8b8c89"
                      ></polyline>
                      <path
                        className="cls-9"
                        d="M30.5,31.23c.29,.17,.64,.27,1,.27,1.1,0,2-.9,2-2s-.9-2-2-2c-.42,0-.81,.13-1.14,.36"
                        fill="#274c77"
                      ></path>
                      <path
                        className="cls-7"
                        d="M25.08,38.54l-3,1.29c-1.01,.43-2.15,.43-3.15,0l-3-1.29c-1.47-.63-2.42-2.08-2.42-3.68v-5.36c0-3.31,2.69-6,6-6h2c3.31,0,6,2.69,6,6v5.36c0,1.6-.95,3.05-2.42,3.68Z"
                        fill="#dda15e"
                      ></path>
                      <ellipse
                        className="cls-6"
                        cx="47.01"
                        cy="19.09"
                        rx="3"
                        ry="11"
                        transform="translate(.27 38.83) rotate(-45)"
                        fill="#a3cef1"
                      ></ellipse>
                      <path
                        className="cls-6"
                        d="M40.5,49c.55,0,1,.45,1,1s-.45,1-1,1v-2Z"
                        fill="#a3cef1"
                      ></path>
                      <path
                        className="cls-9"
                        d="M10.5,31.23c-.29,.17-.64,.27-1,.27-1.1,0-2-.9-2-2s.9-2,2-2c.42,0,.81,.13,1.14,.36"
                        fill="#274c77"
                      ></path>
                      <path
                        className="cls-5"
                        d="M23.5,41.5c0,1.66-1.34,3-3,3s-3-1.34-3-3v-2.29l1.42,.61c1.01,.44,2.15,.44,3.16,0l1.42-.61v2.29Z"
                        fill="#bc6c25"
                      ></path>
                      <path
                        className="cls-9"
                        d="M26.5,58.5l4-14h3.14c-1.82-1.85-4.35-3-7.14-3h-3c0,1.66-1.34,3-3,3s-3-1.34-3-3h-3c-5.52,0-10,4.48-10,10v7H26.5Z"
                        fill="#274c77"
                      ></path>
                      <path
                        className="cls-7"
                        d="M19.5,58.5v-2c0-1.1-.9-2-2-2h-2v4h4Z"
                        fill="#dda15e"
                      ></path>
                      <path
                        className="cls-8"
                        d="M20.5,58.5h-2v-2c0-.55-.45-1-1-1h-7c-.55,0-1-.45-1-1v-4c0-.27,.11-.52,.29-.71l1.29-1.29c.39-.39,1.02-.39,1.41,0h0c.39,.39,.39,1.02,0,1.41l-1,1v2.59h6c1.66,0,3,1.34,3,3v2Z"
                        fill="#6096ba"
                      ></path>
                      <rect
                        className="cls-6"
                        height="2"
                        width="50"
                        x="2.5"
                        y="57.5"
                        fill="#a3cef1"
                      ></rect>
                      <path
                        className="cls-9"
                        d="M26.9,26.88h-.01c-.57-.23-1.23-.38-2.06-.38-4.33,0-4.33,4-8.67,4-1.13,0-1.97-.27-2.66-.67v-.33c0-3.31,2.69-6,6-6h2c2.37,0,4.42,1.38,5.39,3.38h.01Z"
                        fill="#274c77"
                      ></path>
                      <path
                        className="cls-3"
                        d="M41.92,17.87c1.74-.57,3.71-.16,5.09,1.22s1.78,3.35,1.22,5.09h0c-1.08-.85-2.21-1.85-3.34-2.97-1.12-1.13-2.12-2.26-2.97-3.34h0Z"
                        fill="#ffbc0a"
                      ></path>
                      <path
                        className="cls-8"
                        d="M32.87,28l6.1-16.05h0c-.18,1.73,2.22,5.54,5.93,9.26,3.72,3.71,7.53,6.11,9.25,5.93h.01s-15.65,6.09-15.65,6.09l-5.63-5.23Z"
                        fill="#6096ba"
                      ></path>
                      <path
                        className="cls-1"
                        d="M53.5,15.5h-2c0-.55-.45-1-1-1v-2c1.65,0,3,1.35,3,3Z"
                        fill="#f5dd90"
                      ></path>
                      <path
                        className="cls-1"
                        d="M57.5,15.5h-2c0-2.76-2.24-5-5-5v-2c3.86,0,7,3.14,7,7Z"
                        fill="#f5dd90"
                      ></path>
                      <path
                        className="cls-1"
                        d="M61.5,15.5h-2c0-4.96-4.04-9-9-9v-2c6.07,0,11,4.93,11,11Z"
                        fill="#f5dd90"
                      ></path>
                      <path
                        className="cls-3"
                        d="M31.53,27.5l.64-.64c.39-.39,1.02-.39,1.41,0l5.66,5.66c.39,.39,.39,1.02,0,1.42l-1.42,1.41c-.39,.39-1.02,.39-1.41,0l-4.05-4.05c.67-.32,1.14-1.01,1.14-1.8,0-1.09-.88-1.98-1.97-2Z"
                        fill="#ffbc0a"
                      ></path>
                      <path
                        className="cls-8"
                        d="M30.5,31.23v1.45c0,.47-.32,.87-.76,.97,.18,.62,.52,1.21,1.01,1.7,1.56,1.56,4.1,1.56,5.66,0l-4.05-4.05c-.26,.13-.55,.2-.86,.2-.36,0-.71-.1-1-.27Z"
                        fill="#6096ba"
                      ></path>
                      <path
                        className="cls-2"
                        d="M27.5,34.1l2.2-.44c.46-.09,.8-.5,.8-.98v-3.18c0-2.76-1.12-5.26-2.93-7.07s-4.31-2.93-7.07-2.93c-5.52,0-10,4.48-10,10v3c0,.55,.45,1,1,1h2v-4c0-3.31,2.69-6,6-6h2c3.31,0,6,2.69,6,6v4.6Z"
                        fill="#e7ecef"
                      ></path>
                      <path
                        className="cls-9"
                        d="M20.5,35.5h0c-.11-.54,.24-1.07,.78-1.18l8.22-1.64v-2.86c0-4.79-3.61-8.98-8.38-9.3-5.24-.35-9.62,3.81-9.62,8.98v3h2v2h-2c-1.1,0-2-.9-2-2v-2.68c0-5.72,4.24-10.74,9.94-11.27,6.54-.62,12.06,4.53,12.06,10.95v3.18c0,.95-.67,1.77-1.61,1.96l-8.22,1.64c-.54,.11-1.07-.24-1.18-.78Z"
                        fill="#274c77"
                      ></path>
                    </g>
                  </svg>
                </span>
              </div>

              {/* Python */}
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                <span className="text-xs font-mono text-accent">
                  <svg
                    className="w-14 h-14"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
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
