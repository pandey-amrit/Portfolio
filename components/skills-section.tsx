"use client"
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion"
import {
  SiPython,
  SiR,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiMongodb,
  SiOpencv,
  SiScikitlearn,
  SiPandas,
  SiPytorch,
  SiNumpy,
  SiTensorflow,
} from "react-icons/si"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const skills = {
  "Technical Skills": {
    items: [
      { name: "Python", icon: SiPython },
      { name: "R", icon: SiR },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss3 },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "OpenCV", icon: SiOpencv },
      { name: "NLTK", icon: null },
      { name: "Pandas", icon: SiPandas },
      { name: "PyTorch", icon: SiPytorch },
      { name: "NumPy", icon: SiNumpy },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "Matplotlib", icon: null },
    ],
    description:
      "Proficient in a wide range of programming languages, tools, and libraries for software development, data manipulation, and machine learning.",
  },
  "Specialized Techniques": {
    items: [
      "Computer Vision (CV)",
      "Natural Language Processing (NLP)",
      "Generative Adversarial Networks (GANs)",
      "Convolutional Neural Networks (CNNs)",
      "Recurrent Neural Networks (RNNs)",
      "Graph Neural Networks (GNN)",
    ],
    description:
      "Advanced knowledge in various AI techniques, allowing for the development of sophisticated models for image processing, text analysis, and complex data structures.",
  },
  "Soft Skills": {
    items: [
      "Problem-solving",
      "Critical thinking",
      "Teamwork",
      "Communication",
      "Adaptability",
      "Time management",
      "Leadership",
      "Creativity",
    ],
    description:
      "Essential interpersonal and professional skills that complement technical abilities, enabling effective collaboration, project management, and innovative problem-solving.",
  },
}

export function SkillsSection() {
  return (
    <section className="py-24 bg-[#222222]" id="skills">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-white">Skills</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([category, { items, description }], index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer hover:bg-gray-800 transition-colors bg-black text-white h-full">
                      <CardHeader>
                        <CardTitle>{category}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {Array.isArray(items)
                            ? items.map((item, i) => {
                                if (typeof item === "object" && item.icon) {
                                  const Icon = item.icon
                                  return (
                                    <span
                                      key={i}
                                      className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary flex items-center gap-1"
                                    >
                                      <Icon className="w-4 h-4" />
                                      {item.name}
                                    </span>
                                  )
                                } else if (typeof item === "object") {
                                  return (
                                    <span key={i} className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                                      {item.name}
                                    </span>
                                  )
                                } else {
                                  return (
                                    <span key={i} className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                                      {item}
                                    </span>
                                  )
                                }
                              })
                            : null}
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="bg-[#222222] text-white">
                    <DialogHeader>
                      <DialogTitle>{category}</DialogTitle>
                      <DialogDescription className="text-gray-400">{description}</DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {Array.isArray(items)
                        ? items.map((item, i) => {
                            if (typeof item === "object" && item.icon) {
                              const Icon = item.icon
                              return (
                                <span
                                  key={i}
                                  className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary flex items-center gap-1"
                                >
                                  <Icon className="w-4 h-4" />
                                  {item.name}
                                </span>
                              )
                            } else if (typeof item === "object") {
                              return (
                                <span key={i} className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                                  {item.name}
                                </span>
                              )
                            } else {
                              return (
                                <span key={i} className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                                  {item}
                                </span>
                              )
                            }
                          })
                        : null}
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

