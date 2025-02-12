"use client"
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactSection() {
  return (
    <section className="py-24 bg-[#222222]" id="contact">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">Get in Touch</h2>
            <p className="text-gray-400 max-w-[600px] mx-auto">Feel free to reach out through any of these channels</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-black text-white">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription className="text-gray-400">Direct contact methods</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:amritsga123@gmail.com" className="text-sm hover:text-primary transition-colors">
                    amritsga123@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <a href="tel:+16823672658" className="text-sm hover:text-primary transition-colors">
                    +1 6823672658
                  </a>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-black text-white">
              <CardHeader>
                <CardTitle>Social Profiles</CardTitle>
                <CardDescription className="text-gray-400">Connect with me on social media</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start gap-2" asChild>
                  <a href="https://www.linkedin.com/in/amritpandey/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                    LinkedIn Profile
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2" asChild>
                  <a href="https://github.com/pandey-amrit" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    GitHub Profile
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

