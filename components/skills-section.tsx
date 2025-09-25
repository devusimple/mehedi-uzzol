import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90, color: "bg-blue-500" },
      { name: "TypeScript", level: 85, color: "bg-blue-600" },
      { name: "Tailwind CSS", level: 88, color: "bg-cyan-500" },
      { name: "Zustand", level: 80, color: "bg-orange-500" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Go", level: 85, color: "bg-cyan-600" },
      { name: "Node.js", level: 82, color: "bg-green-600" },
      { name: "REST APIs", level: 88, color: "bg-purple-500" },
      { name: "GraphQL", level: 75, color: "bg-pink-500" },
    ],
  },
  {
    title: "Mobile & Desktop",
    skills: [
      { name: "Kotlin (Android)", level: 83, color: "bg-orange-600" },
      { name: "React Native", level: 78, color: "bg-blue-400" },
      { name: "Electron", level: 80, color: "bg-gray-600" },
      { name: "WebView Apps", level: 85, color: "bg-indigo-500" },
    ],
  },
  {
    title: "Data & AI",
    skills: [
      { name: "scikit-learn", level: 80, color: "bg-yellow-600" },
      { name: "Python", level: 82, color: "bg-yellow-500" },
      { name: "Data Analysis", level: 78, color: "bg-green-500" },
      { name: "Machine Learning", level: 75, color: "bg-red-500" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "Dexie.js", level: 88, color: "bg-blue-700" },
      { name: "IndexedDB", level: 85, color: "bg-purple-600" },
      { name: "SQLite", level: 83, color: "bg-gray-500" },
      { name: "PostgreSQL", level: 80, color: "bg-blue-800" },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 90, color: "bg-gray-700" },
      { name: "VS Code", level: 95, color: "bg-blue-500" },
      { name: "Docker", level: 75, color: "bg-blue-600" },
      { name: "SEO", level: 82, color: "bg-green-600" },
    ],
  },
]

const technologies = [
  "React",
  "TypeScript",
  "Go",
  "Kotlin",
  "Python",
  "Node.js",
  "Tailwind CSS",
  "Zustand",
  "Dexie.js",
  "IndexedDB",
  "SQLite",
  "scikit-learn",
  "Docker",
  "VS Code",
  "GitHub",
  "REST APIs",
  "GraphQL",
  "SEO",
  "Digital Marketing",
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A comprehensive toolkit for building modern applications and solving complex problems
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-border/50">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Tags */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm hover:bg-primary/10 hover:border-primary/50 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
