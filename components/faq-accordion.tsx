"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What makes Milestone Learning different from other tutoring services?",
    answer:
      "We specialize in one-on-one, highly personalized learning that puts students first. Our expert tutors focus on building confidence in addition to academic strategy, ensuring that students can improve their grades but also develop lifelong learning skills.",
  },
  {
    question: "Who are your tutors?",
    answer:
      "Our tutors are experienced educators with advanced degrees in their subject areas. Each tutor undergoes a rigorous selection process, background check, and ongoing professional development to ensure they provide the highest quality instruction.",
  },
  {
    question: "How do you match students with tutors?",
    answer:
      "We carefully match students with tutors based on academic needs, learning style, personality, and scheduling requirements. Our goal is to create a productive and comfortable relationship that fosters learning and growth.",
  },
  {
    question: "Do you offer in-person tutoring?",
    answer:
      "Yes, we offer both in-person and online tutoring options. Our in-person sessions are available in select locations, while our online platform provides the same personalized experience with the convenience of learning from anywhere.",
  },
]

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="rounded-lg border border-gray-200">
          <button
            className="flex w-full items-center justify-between p-4 text-left font-medium text-[#02342E] focus:outline-none"
            onClick={() => toggleFAQ(index)}
          >
            <span>{faq.question}</span>
            <ChevronDown className={`h-5 w-5 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-96 p-4 pt-0" : "max-h-0"
            }`}
          >
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
