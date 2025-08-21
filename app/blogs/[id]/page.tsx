"use client";
import { Badge } from "@/components/ui/badge";
import { blogs } from "@/lib/blogs";
import { ArrowLeft, Calendar } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React from "react";

export default function Blog() {
  const { id } = useParams();
  const router = useRouter();
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="p-3">
          <Badge
            onClick={() => {
              router.back();
            }}
            className="cursor-pointer"
          >
            <ArrowLeft />
            <p>Back</p>
          </Badge>
        </div>
        <div className="">
          {blogs
            .filter((blog) => blog.id === parseInt(id as string))
            .map((blog) => (
              <div className="" key={blog.id}>
                <h1 className="p-3 font-semibold text-3xl">{blog.title}</h1>
                <div className="flex gap-2 p-3">
                  <Badge>{blog.category}</Badge>
                  <Badge variant={"outline"}>
                    <Calendar />
                    {blog.publishAt}
                  </Badge>
                </div>

                <div className="p-3">
                  <img
                    src={blog.image || "/placeholder.svg"}
                    alt={blog.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>

                <div className="p-3">
                  <p>{blog.description}</p>
                </div>

                <div className="flex flex-wrap gap-1">
                  {blog.tech.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
