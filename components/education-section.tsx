"use client"
import Link from "next/link";

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const education = [
  {
    school: "State University of New York at Buffalo",
    degree: "Masters in Artificial Intelligence",
    duration: "Aug 2024 – May 2026 (Anticipated)",
    location: "Buffalo, New York",
    details:
      "Pursuing advanced studies in AI, focusing on machine learning, deep learning, and natural language processing. Engaged in cutting-edge research projects and collaborating with industry partners to solve real-world AI challenges.",
  },
  {
    school: "University of Mumbai",
    degree: "Bachelor of Technology, Artificial Intelligence and Machine Learning",
    duration: "2020-2024",
    location: "Mumbai, India",
    grade: "CGPA: 8.8/10",
    details:
      "Completed a comprehensive program in AI and ML, gaining strong foundations in programming, data structures, algorithms, and various AI techniques. Participated in multiple hackathons and developed several projects applying AI to solve practical problems.",
  },
]

export function EducationSection() {
  return (
    <section className="py-24 bg-black" id="education">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white text-center">
            Education
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer hover:bg-gray-800 transition-colors bg-[#222222]">
                      <CardContent className="p-6 space-y-4">
                        {edu.school === "University of Mumbai" && (
                          <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                            <Image
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mu1.jpg-1KwvLNKn2JrRCN5W0CgLDdtFFiby9v.jpeg"
                              alt="University of Mumbai campus"
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        {edu.school === "State University of New York at Buffalo" && (
                          <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                            <Image
                              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2.jpg-bBIjrh5UO8WldNQuYiXQ9p2GIGAsxN.jpeg"
                              alt="University at Buffalo campus"
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="flex items-center gap-4">
                          <div className="rounded-full bg-primary/10 p-3">
                            <GraduationCap className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-white">{edu.school}</h3>
                            <p className="text-sm text-gray-300">{edu.location}</p>
                          </div>
                        </div>
                        <div>
                          <p className="font-medium text-white">{edu.degree}</p>
                          <p className="text-sm text-gray-300">{edu.duration}</p>
                          {edu.grade && <p className="text-sm text-primary">{edu.grade}</p>}
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="bg-[#222222] text-white">
                    <DialogHeader>
                      <DialogTitle>{edu.school}</DialogTitle>
                      <DialogDescription className="text-gray-400">
                        {edu.degree} | {edu.duration}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <p>{edu.details}</p>
                      {edu.grade && <p className="font-semibold">Grade: {edu.grade}</p>}
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

