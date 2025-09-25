"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/mehedi-hasan",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/mehedi-hasan",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/mehedi_hasan",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:mehedi.hasan@example.com",
    },
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-4">
              <div>
                <h3 className="text-xl font-bold text-foreground">Mehedi Hasan</h3>
                <p className="text-muted-foreground">Programmer & Freelancer</p>
              </div>
              <p className="text-muted-foreground max-w-md text-pretty">
                Part-time programmer and BSc Physics student specializing in React, Go, ML, and Android development.
                Building innovative solutions one project at a time.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Web Development</li>
                <li>Mobile Apps</li>
                <li>Backend Services</li>
                <li>ML Solutions</li>
                <li>SEO & Marketing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-muted-foreground">© {currentYear} Mehedi Hasan. All rights reserved.</div>

            <div className="flex items-center space-x-6">
              <div className="text-sm text-muted-foreground">Built with Next.js & Tailwind CSS</div>

              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-muted-foreground hover:text-primary"
              >
                <ArrowUp className="h-4 w-4 mr-1" />
                Back to top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
