"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Clock, Send, Github, Linkedin, Twitter, ExternalLink } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "mehedi.hasan@example.com",
      link: "mailto:mehedi.hasan@example.com",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Pabna, Bangladesh",
      link: null,
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      link: null,
    },
  ]

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/mehedi-hasan",
      username: "@mehedi-hasan",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/mehedi-hasan",
      username: "Mehedi Hasan",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/mehedi_hasan",
      username: "@mehedi_hasan",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ready to bring your ideas to life? Let's discuss your next project and how I can help you achieve your
            goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-xl">Send me a message</CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or inquiry..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-medium text-foreground">{info.title}</h3>
                      {info.link ? (
                        <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Connect with me</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all group"
                  >
                    <div className="flex items-center space-x-3">
                      <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      <div>
                        <div className="font-medium text-foreground">{social.name}</div>
                        <div className="text-sm text-muted-foreground">{social.username}</div>
                      </div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="font-medium text-foreground">Available for freelance work</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  I'm currently accepting new projects and would love to hear about yours.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React Development</Badge>
                  <Badge variant="secondary">Go Backend</Badge>
                  <Badge variant="secondary">Mobile Apps</Badge>
                  <Badge variant="secondary">ML Projects</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
