import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Code, Users, Award } from "lucide-react"

export function AboutSection() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "BSc Physics at Govt. Edward College, Pabna",
    },
    {
      icon: Code,
      title: "Experience",
      description: "Part-time programmer with diverse project portfolio",
    },
    {
      icon: Users,
      title: "Freelancing",
      description: "Active on Fiverr, Upwork, and independent clients",
    },
    {
      icon: Award,
      title: "Specialization",
      description: "Full-stack development and AI/ML solutions",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Passionate about creating innovative solutions while pursuing academic excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-pretty">
                I'm <span className="text-primary font-medium">Mehedi Hasan</span>, a part-time programmer alongside my
                studies. I'm currently pursuing my Bachelor of Science degree in Physics at Govt. Edward College, Pabna.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
                I specialize in React, Go, ML, Android (Kotlin), freelancing, and more. My passion lies at the
                intersection of technology and problem-solving, where I create applications that make a real difference.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
                When I'm not coding or studying, I enjoy exploring new technologies, contributing to open-source
                projects, and helping clients bring their digital ideas to life through freelance work.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Problem Solver</Badge>
              <Badge variant="secondary">Quick Learner</Badge>
              <Badge variant="secondary">Team Player</Badge>
              <Badge variant="secondary">Detail Oriented</Badge>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card key={index} className="border-border/50 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground text-pretty">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
