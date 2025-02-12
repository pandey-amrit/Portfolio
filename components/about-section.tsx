"use client"
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion"

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-24 bg-[#222222]" id="about">
      <div className="container px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6 max-w-[800px] mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white"
          >
            About Me
          </motion.h2>
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm Amrit Pandey, a Master's student in Artificial Intelligence at the State University of New York at
              Buffalo, with a strong academic background in AI and Machine Learning from Thakur College of Engineering
              and Technology. My expertise includes Python, TensorFlow, PyTorch, Computer Vision, and Natural Language
              Processing. Through hands-on projects, I've developed solutions like predictive models, automated cheque
              processing systems, and scalable weather forecasting applications.
            </p>
            <p className="text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Professionally, I've contributed as a Technical Lead at Alternative Clinic, enhancing patient experiences
              with technology, and as an AI Intern at VLine Infotech, where I automated data extraction processes. I'm
              excited to bring my skills to a Summer 2025 internship, where I can apply my knowledge to solve real-world
              challenges and grow alongside industry professionals.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}