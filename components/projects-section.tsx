"use client"
import Image from "next/image"

import { motion } from "framer-motion"
import { Github } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const projects = [
  {
    title: "Automated Cheque Processing with ML",
    description:
      "This system automates cheque verification using computer vision, OCR, and machine learning. It extracts key details, detects fraud, verifies authenticity, provides a manual review interface, and integrates with banking systems for efficient processing.",
    tags: ["Python", "OpenCV", "OCR", "Machine Learning"],
    github: "https://github.com/yourusername/cheque-processing",
    details:
      "This advanced system automates the process of cheque verification and processing using computer vision and machine learning. Leveraging OpenCV and Optical Character Recognition (OCR) technologies, the system can extract relevant information from cheque images, including account numbers, amounts, and signatures. It incorporates machine learning models to detect potential frauds and verify authenticity. The project also includes a user interface for manual review of flagged cheques and integration capabilities with banking systems.",
  },
  {
    title: "Automated Attendance System",
    description:
      "This Python and OpenCV-based system automates attendance tracking in education using facial recognition. It detects faces, matches them to a database, supports real-time processing, manages student records, generates reports, and integrates with school management systems.",
    tags: ["Python", "OpenCV", "Face Recognition", "Database"],
    github: "https://github.com/pandey-amrit/Automated-Attendance-System",
    details:
      "This innovative system automates the process of tracking attendance in educational settings using facial recognition technology. Built with Python and OpenCV, the system captures images, detects faces, and matches them against a database of registered students. It includes features like real-time processing, multi-face detection, and a user-friendly interface for managing student records. The system also generates detailed attendance reports and can be integrated with existing school management systems.",
  },
  {
    title: "Game of Thrones Character Recognition",
    date: "Jul 2023 - Sep 2023",
    description:
      "Developed a facial recognition system using a Convolutional Neural Network (CNN) with 92% accuracy on a dataset of 5,000 images. Implemented with PyTorch, the model achieved an F1-score of 0.91 and demonstrated AI’s potential in content indexing, character tracking, and enhancing viewer engagement.",
    tags: [
      "Artificial Intelligence",
      "Computer Vision",
      "CNN",
      "Deep Learning",
      "Python",
    ],
  },
  {
    title: "Numbers Classification",
    description:
      "This project developed a CNN-based machine learning model in TensorFlow for accurate handwritten digit classification. It involved data preprocessing, model design, training, evaluation, and data augmentation to enhance generalization, achieving high recognition accuracy.",
    tags: ["Python", "TensorFlow", "Computer Vision"],
    github: "https://github.com/pandey-amrit/MNIST-Digit-Classification",
    details:
      "This project focused on developing a robust machine learning model capable of accurately classifying handwritten digits. Utilizing convolutional neural networks (CNNs) implemented in TensorFlow, the model achieved high accuracy in digit recognition. The project involved data preprocessing, model architecture design, training, and evaluation phases. It also included techniques like data augmentation to improve model generalization.",
  },
  {
    title: "Intelligent Bank Statement Text Extraction System",
    date: "Jan 2023 - Apr 2023",
    description:
      "Developed an OCR-based machine learning model for text extraction from bank statements, improving accuracy by 15%. Collaborated on preprocessing and annotating 40,000+ bank statements, reducing document parsing time by 20% and enhancing recognition accuracy.",
    tags: ["OCR", "Machine Learning", "Python", "Computer Vision"],
  },
  {
    title: "Predictive Modelling for Income Classification",
    description:
      "Developed a machine learning model to predict income classification based on various demographic factors.",
    tags: ["Python", "Scikit-learn", "Data Analysis", "Random Forest"],
    github: "https://github.com/yourusername/income-classification",
    details:
      "This project focuses on predicting income classifications using machine learning techniques. Utilizing a Random Forest classifier implemented with Scikit-learn, the model analyzes various demographic factors to predict income levels. The project involved extensive data preprocessing, feature engineering, and model tuning to achieve high accuracy. It also includes a comprehensive analysis of feature importance, providing insights into the key factors influencing income levels.",
  },
  {
    title: "Toxic Comments Classification",
    description:
      "Built a machine learning model to classify toxic comments in online discussions using NLP techniques.",
    tags: ["Python", "NLP", "BERT", "Sentiment Analysis"],
    github: "https://github.com/pandey-amrit/Toxic-Comments-Classification",
    details:
      "This project addressed the challenge of identifying and classifying toxic comments in online platforms. Using state-of-the-art Natural Language Processing (NLP) techniques, including BERT (Bidirectional Encoder Representations from Transformers), the system can accurately categorize comments into multiple toxicity classes. The model was trained on a large dataset of annotated comments, incorporating techniques like transfer learning and fine-tuning to achieve high performance. The project also includes a user-friendly interface for real-time comment moderation.",
  },
  {
    title: "Chatbot",
    description:
      "Created an AI-powered chatbot using natural language processing to provide customer support and answer queries.",
    tags: ["Python", "NLP", "Machine Learning", "DialogFlow"],
    github: "https://github.com/pandey-amrit/Chatbot",
    details:
      "This AI-powered chatbot project leverages advanced Natural Language Processing (NLP) techniques to provide efficient and accurate customer support. Built using Python and integrated with DialogFlow for intent recognition, the chatbot can understand and respond to a wide range of customer queries. It features context-aware conversations, multi-language support, and seamless integration with existing customer support systems. The chatbot also includes a learning component that improves its responses over time based on user interactions.",
  },
  {
    title: "Weather Forecast using Flask",
    description:
      "Created a web application using Flask to provide weather forecasts based on location input.",
    tags: ["Python", "Flask", "API Integration", "Web Development"],
    github: "https://github.com/yourusername/weather-forecast-flask",
    details:
      "This Flask-based web application provides accurate weather forecasts based on user-input locations. The project integrates with external weather APIs to fetch real-time weather data. It features a clean, responsive user interface that displays current weather conditions, hourly forecasts, and extended predictions. The application also includes features like location autocomplete, unit conversion (Celsius/Fahrenheit), and interactive weather maps.",
  },
  {
    title: "House Price Prediction with Integrated Chatbot",
    description:
      "Developed a house price prediction model with an integrated chatbot interface for user-friendly interactions.",
    tags: ["Python", "Machine Learning", "NLP", "Web Development"],
    github: "https://github.com/pandey-amrit/House-Price-Prediction",
    details:
      "This innovative project combines a machine learning model for house price prediction with a chatbot interface, enhancing user interaction and accessibility. The price prediction model uses advanced regression techniques to estimate house prices based on various features like location, size, and amenities. The integrated chatbot, powered by NLP, allows users to input property details conversationally and receive price estimates. The system also provides explanations for the predictions and suggests factors that could increase property value.",
  },
  {
    title: "Air Quality Analysis and Prediction",
    description:
      "Developed a system to analyze air quality data and predict future air quality indices using time series analysis.",
    tags: ["Python", "Pandas", "Scikit-learn", "Time Series"],
    github: "https://github.com/pandey-amrit/Air-Quality-Analysis-and-Prediction",
    details:
      "This project involved the development of a sophisticated system for analyzing historical air quality data and predicting future air quality indices. Leveraging time series analysis techniques, the system processes large datasets of air quality measurements. It utilizes advanced forecasting models, including ARIMA and Prophet, to generate accurate predictions. The project also includes a comprehensive data visualization component, allowing users to easily interpret trends and patterns in air quality data.",
  },
  {
    title: "Neural Network Training and Comparison Framework",
    description:
      "Created a framework to train and compare different neural network architectures for various tasks.",
    tags: ["Python", "PyTorch", "Keras", "Deep Learning"],
    github: "https://github.com/pandey-amrit/Neural-Network-Training-and-Comparison-Framework",
    details:
      "This comprehensive framework was designed to facilitate the training and comparison of various neural network architectures across different tasks. It supports multiple deep learning libraries including PyTorch and Keras, allowing for flexible model implementation. The framework includes modules for data loading, preprocessing, model definition, training, evaluation, and result visualization. It enables researchers and practitioners to easily experiment with different architectures and hyperparameters, promoting efficient model development and benchmarking.",
  },
  {
    title: "MNIST Classification and Regression",
    description: "A deep learning project that leverages the MNIST dataset to perform both classification of handwritten digits and regression on handwriting features.",
    tags: ["Python", "TensorFlow", "Keras", "Machine Learning", "MNIST"],
    github: "https://github.com/pandey-amrit/MNIST-Classification-and-Regression-Project",
    details: "This project utilizes the popular MNIST dataset to showcase two core machine learning tasks. The classification model employs convolutional neural networks (CNNs) to accurately recognize handwritten digits. In parallel, a regression model is developed to predict continuous attributes related to the handwriting, such as stroke intensity or width, providing deeper insights into the digit formation. The implementation includes data preprocessing, model training, hyperparameter tuning, and performance evaluation using TensorFlow and Keras. This dual-approach project highlights the versatility of deep learning techniques in handling both classification and regression problems."
  },  
]

export function ProjectsSection() {
  return (
    <section className="py-24 bg-[#222222]" id="projects">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Updated the heading text color for contrast */}
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-white">
            Featured Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    {/* Changed the card background to black and text to white */}
                    <Card className="bg-black text-white h-full flex flex-col cursor-pointer hover:bg-accent transition-colors">
                      <CardHeader>
                        <CardTitle className="text-xl">
                          {project.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <CardDescription className="text-muted-foreground mb-4">
                          {project.description}
                        </CardDescription>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="mt-auto">
                        <Button variant="outline" size="sm" asChild>
                          <Link
                            href={project.github || "/"}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            GitHub
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="bg-background text-foreground">
                    <DialogHeader>
                      <DialogTitle>{project.title}</DialogTitle>
                      <DialogDescription className="text-muted-foreground">
                        {project.description}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4 space-y-4">
                      <h4 className="font-semibold">Project Details:</h4>
                      <p>{project.details}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href={project.github || "/"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          View on GitHub
                        </Link>
                      </Button>
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