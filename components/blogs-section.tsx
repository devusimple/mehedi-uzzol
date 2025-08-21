import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, BookOpen, Eye, Calendar } from "lucide-react";
import { blogs } from "@/lib/blogs";
import Link from "next/link";

export default function BlogsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Blogs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A collection of my thoughts, tutorial, and experiences across
            technology, coding, marketing, and creativity.
          </p>
        </div>

        <div className="mb-3">
          <div className="grid lg:grid-cols-3 gap-8">
            {blogs
              .filter((blog) => !blog.featured)
              .map((blog, index) => (
                <Card
                  key={index}
                  className="group border-border/50 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={blog.image || "/placeholder.svg"}
                      alt={blog.title}
                      className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3">
                      <div
                        className="h-8 px-1 rounded-md bg-black/80 flex items-center justify-center gap-1
                      "
                      >
                        <Eye className="h-4 w-4 text-white" />
                        <span className="text-sm">200</span>
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {blog.category}
                      </Badge>

                      <Badge variant={"outline"} className="text-xs">
                        <Calendar className="text-xs" />
                        {blog.publishAt}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {blog.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                      {blog.description.slice(0, 50) + "..."}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {blog.tech.slice(0, 3).map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {blog.tech.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{blog.tech.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2 pt-1">
                      <Button
                        size="sm"
                        variant="default"
                        className="flex-1 text-xs"
                      >
                        <BookOpen className="mr-1 h-3 w-3" />
                        Read
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="px-3 bg-transparent"
                      >
                        <Heart className="h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        <div className="flex items-center justify-center p-2">
          <Link href={"/blogs"}>
            <Button variant={"link"}>See More</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
