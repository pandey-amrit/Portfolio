"use client"
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { format, parseISO } from "date-fns";

import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const experiences = [
  {
    title: "Technical Lead",
    company: "Alternative Clinic",
    location: "Mumbai",
    startDate: "2023-06-01",
    endDate: "2023-09-30",
    logo: "/caduceus.png",
    summary:
      "Spearheaded the development of an online clinic portal, significantly enhancing patient experience by facilitating easy appointment scheduling, which resulted in a 43% increase in patient volume and an 18% reduction in reception calls. Additionally, streamlined data analysis for medical professionals using a PowerBI dashboard, reducing patient data review time by 30%.",
    achievements: [
      "Spearheaded the development of an innovative online clinic portal, resulting in a 43% increase in patient volume and an 18% reduction in reception calls.",
      "Designed and implemented a user-friendly interface for appointment scheduling, reducing patient wait times by 30%.",
      "Integrated secure payment gateways, ensuring HIPAA compliance and improving the clinic's revenue collection process.",
      "Developed a real-time notification system for doctors and patients, reducing appointment no-shows by 25%.",
      "Created a PowerBI dashboard for data analysis, enabling doctors to review patient data 30% faster and make more informed decisions.",
      "Implemented an AI-driven chatbot for basic patient inquiries, handling 40% of routine questions and freeing up staff time.",
      "Collaborated with cross-functional teams to ensure seamless integration with existing clinic management systems.",
      "Conducted training sessions for staff, ensuring smooth adoption of the new portal across all departments.",
    ],
    details:
      "As the Technical Lead at Alternative Clinic, I was responsible for revolutionizing the patient experience through technology. I led a team of developers to create a comprehensive online clinic portal that transformed how patients interact with the clinic. This project required a deep understanding of healthcare workflows, data privacy regulations, and user experience design principles.",
  },
  {
    title: "Artificial Intelligence Intern",
    company: "VLine Infotech Pvt Ltd",
    location: "Delhi",
    startDate: "2023-01-01",
    endDate: "2023-04-30",
    logo: "/vline-logo.png",
    summary:
      "Designed a custom OCR-driven machine learning model to automate text extraction from bank statements, improving extraction accuracy by 15%. Led a large-scale document parsing project, preprocessing and annotating over 40,000 bank statements, achieving a 20% reduction in processing time while enhancing text recognition efficiency.",
    achievements: [
      "Designed and implemented a custom OCR-driven machine learning model that improved text extraction accuracy from bank statements by 15%.",
      "Preprocessed and annotated over 40,000 bank statements, reducing document parsing time by 20%.",
      "Developed a user-friendly interface for the OCR system, increasing adoption rate among non-technical staff by 50%.",
      "Implemented data augmentation techniques that improved model robustness, leading to a 10% increase in accuracy on diverse document formats.",
      "Created a automated data validation system that reduced manual review time by 30%.",
      "Optimized the model for deployment, reducing inference time by 25% without sacrificing accuracy.",
      "Collaborated with the data science team to implement a continuous learning pipeline, allowing the model to improve over time with new data.",
      "Presented weekly progress reports to senior management, effectively communicating technical concepts to non-technical stakeholders.",
    ],
    details:
      "During my internship at VLine Infotech, I took on the challenge of automating the extraction of critical information from bank statements using cutting-edge AI techniques. This project was crucial for the company's financial analysis services and required a deep dive into computer vision, natural language processing, and machine learning model optimization.",
  },
];

export const ExperienceSection = React.memo(function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const formatDate = (dateString: string) => format(parseISO(dateString), "MMM yyyy");

  return (
    <section id="experience" className="py-24 bg-black">
      {/* Increased max-width from max-w-3xl to max-w-4xl */}
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold tracking-tight text-center text-white mb-12"
          >
            Experience
          </motion.h2>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Dialog>
                  {/* The entire card is now clickable */}
                  <DialogTrigger asChild>
                    <Card className="bg-[#1e1e1e] text-white hover:bg-gray-800 transition-transform transform hover:scale-[1.02] rounded-lg shadow-lg cursor-pointer p-6">
                      <CardContent className="p-0">
                        <div className="flex items-center space-x-4">
                          {/* Company Logo */}
                          <Image
                            src={experience.logo}
                            alt={`${experience.company} Logo`}
                            width={60}
                            height={60}
                            className="rounded-md"
                          />
                          <div className="flex-1">
                            <h3 className="text-2xl font-semibold">{experience.title}</h3>
                            <p className="text-gray-400 text-sm">{experience.company}, {experience.location}</p>
                          </div>
                        </div>

                        <p className="text-gray-300 mt-4 text-lg leading-relaxed">{experience.summary}</p>

                        {/* View Achievements Button */}
                        <div className="flex justify-center mt-6">
                          <button className="text-primary hover:underline focus:outline-none">
                            View Achievements & Details
                          </button>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>

                  {/* Dialog Content */}
                  <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-[#222222] text-white p-6 rounded-lg">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-semibold">
                        {experience.title} at {experience.company}
                      </DialogTitle>
                      <DialogDescription className="text-gray-400">
                        {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-6 space-y-4">
                      <h4 className="text-lg font-medium">Achievements:</h4>
                      <ul className="list-disc list-inside space-y-2 text-gray-300">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                      <h4 className="text-lg font-medium mt-6">Details:</h4>
                      <p className="text-gray-300 whitespace-pre-line">{experience.details}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});
