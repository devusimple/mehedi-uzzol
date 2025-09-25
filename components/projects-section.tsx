import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Smartphone, Globe, Database, Brain, Code, Zap } from "lucide-react"

const projects = [
  {
    title: "VS Code REST API Client",
    description:
      "A powerful VS Code extension that simplifies API testing and development workflow. Features include request history, environment variables, and response formatting.",
    image: "/vs-code-extension-interface-with-api-testing.jpg",
    category: "Extension",
    tech: ["TypeScript", "VS Code API", "REST", "JSON"],
    icon: Code,
    links: {
      demo: "#",
      github: "#",
    },
    featured: true,
  },
  {
    title: "React Offline Sync App",
    description:
      "A React application with robust offline capabilities using Dexie.js for local storage and automatic synchronization when connection is restored.",
    image: "/react-app-with-offline-sync-interface.jpg",
    category: "Web App",
    tech: ["React", "TypeScript", "Dexie.js", "IndexedDB"],
    icon: Globe,
    links: {
      demo: "#",
      github: "#",
    },
    featured: true,
  },
  {
    title: "Go Desktop Auto-Update App",
    description:
      "A cross-platform desktop application built with Go and webview, featuring automatic updates and modern web-based UI components.",
    image: "/desktop-application-with-modern-interface.jpg",
    category: "Desktop",
    tech: ["Go", "WebView", "HTML/CSS", "Auto-Update"],
    icon: Zap,
    links: {
      demo: "#",
      github: "#",
    },
    featured: true,
  },
  {
    title: "ML Prediction Models",
    description:
      "Collection of machine learning models using scikit-learn for various prediction tasks including classification and regression problems.",
    image: "/machine-learning-dashboard-with-charts-and-graphs.jpg",
    category: "AI/ML",
    tech: ["Python", "scikit-learn", "Pandas", "NumPy"],
    icon: Brain,
    links: {
      demo: "#",
      github: "#",
    },
    featured: false,
  },
  {
    title: "Android Todo CRUD App",
    description:
      "A native Android application built with Kotlin featuring full CRUD operations, local database storage, and material design principles.",
    image: "/android-todo-app-with-material-design.jpg",
    category: "Mobile",
    tech: ["Kotlin", "Android", "Room DB", "Material Design"],
    icon: Smartphone,
    links: {
      demo: "#",
      github: "#",
    },
    featured: false,
  },
  {
    title: "Database Management System",
    description:
      "A comprehensive database management interface with support for multiple database types, query optimization, and data visualization.",
    image: "/database-management-interface-with-tables-and-quer.jpg",
    category: "Backend",
    tech: ["Go", "SQLite", "PostgreSQL", "REST API"],
    icon: Database,
    links: {
      demo: "#",
      github: "#",
    },
    featured: false,
  },
]

const categories = ["All", "Web App", "Mobile", "Desktop", "Extension", "AI/ML", "Backend"]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of my work across different technologies and platforms
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Highlighted Work</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="group border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <project.icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button size="sm" variant="default" className="flex-1">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                      <Button size="sm" variant="outline">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <Card
                  key={index}
                  className="group border-border/50 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                        <project.icon className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{project.description}</p>

                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2 pt-1">
                      <Button size="sm" variant="default" className="flex-1 text-xs">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Demo
                      </Button>
                      <Button size="sm" variant="outline" className="px-3 bg-transparent">
                        <Github className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Interested in working together?</h3>
            <p className="text-muted-foreground max-w-md mx-auto text-pretty">
              I'm always open to discussing new projects and opportunities.
            </p>
            <Button size="lg" className="mt-4">
              <ExternalLink className="mr-2 h-4 w-4" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
