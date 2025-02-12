"use client"
import { motion } from "framer-motion"
import { Award } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/navigation"
import "swiper/css/autoplay"

const certifications = [
  {
    title: "Foundations: Data, Data, Everywhere",
    issuer: "Google",
    description:
      "Comprehensive introduction to data analytics. Covers data collection, analysis, and interpretation techniques.",
  },
  {
    title: "AI on Microsoft Azure",
    issuer: "Microsoft",
    description:
      "Hands-on experience with Azure AI services. Focuses on machine learning model deployment and management.",
  },
  {
    title: "J.P. Morgan - Software Engineering Job Simulation",
    issuer: "J.P. Morgan",
    description:
      "Real-world software engineering tasks simulation. Emphasizes version control, code review, and agile methodologies.",
  },
  {
    title: "Machine Learning for All",
    issuer: "University of London",
    description:
      "Broad overview of machine learning concepts. Covers supervised and unsupervised learning algorithms.",
  },
  {
    title: "Machine Learning A-Z: AI, Python & R + ChatGPT",
    issuer: "Ligency",
    description:
      "Comprehensive machine learning course. Includes practical implementation in Python and R, with ChatGPT integration.",
  },
  {
    title: "Python Data Structures",
    issuer: "University of Michigan",
    description:
      "In-depth study of Python data structures. Covers lists, dictionaries, tuples, and their efficient use in programming.",
  },
  {
    title: "Using Python to access web data",
    issuer: "University of Michigan",
    description:
      "Web scraping and API interaction with Python. Focuses on data extraction and processing from online sources.",
  },
  {
    title: "The complete python BootCamp from zero to hero in python",
    issuer: "Pierian Training",
    description:
      "Comprehensive Python programming course. Covers basics to advanced topics, including OOP and file handling.",
  },
  {
    title: "Capstone: Retrieving, processing, and Visualizing Data with Python",
    issuer: "University of Michigan",
    description:
      "Applied data science project using Python. Emphasizes end-to-end data pipeline creation and visualization.",
  },
  {
    title: "Prompt engineering for chatgpt",
    issuer: "Vanderbilt University",
    description:
      "Techniques for effective ChatGPT prompt creation. Covers best practices for AI-assisted content generation.",
  },
  {
    title: "AI Applications in marketing and Finance",
    issuer: "University of Pennsylvania",
    description:
      "Exploration of AI use cases in business. Focuses on predictive analytics and decision-making in marketing and finance.",
  },
  {
    title: "AI, business and the future of work",
    issuer: "Lund University",
    description:
      "Analysis of AI's impact on business landscapes. Discusses future workforce trends and adaptation strategies.",
  },
  {
    title: "AI, empathy and Ethics",
    issuer: "University of California, Santa Cruz",
    description:
      "Ethical considerations in AI development. Explores the intersection of technology, empathy, and moral decision-making.",
  },
]

export function CertificationsSection() {
  return (
    <section className="py-16 bg-black" id="certifications">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-white">
            Certifications
          </h2>
          <div className="relative">
            {/* Swiper 3D Carousel */}
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              slidesPerView={2.5}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 150,
                modifier: 2,
                slideShadows: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[EffectCoverflow, Navigation, Autoplay]}
              className="mySwiper"
            >
              {certifications.map((cert, index) => (
                <SwiperSlide key={index} className="w-[28rem]">
                  <div className="bg-[#222222] p-6 rounded-lg shadow-md h-full flex flex-col justify-between transition-all duration-300 hover:bg-gray-800 hover:shadow-lg">
                    <div>
                      <div className="flex items-center mb-3">
                        <Award className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                        <h3 className="font-semibold text-lg text-white line-clamp-2">
                          {cert.title}
                        </h3>
                      </div>
                      <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                      <p className="text-gray-300 text-base line-clamp-4">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Arrows */}
            <div className="swiper-button-next !text-primary"></div>
            <div className="swiper-button-prev !text-primary"></div>
          </div>
        </motion.div>
      </div>

      {/* Swiper Navigation Arrow Styles */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #ffffff;
          background-color: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s ease;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background-color: rgba(0, 0, 0, 0.8);
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px;
          font-weight: bold;
        }
      `}</style>
    </section>
  )
}
