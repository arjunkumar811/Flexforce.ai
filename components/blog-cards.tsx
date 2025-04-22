"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Effective Study Techniques for Different Learning Styles",
    excerpt: "Discover how to adapt your study methods to match your unique learning style for better results.",
    category: "Study Tips",
    date: "May 15, 2025",
    imageUrl: "/placeholder.svg?height=56&width=56",
  },
  {
    id: 2,
    title: "The Science Behind Memory Retention and Recall",
    excerpt: "Learn about the latest research on how our brains store and retrieve information.",
    category: "Learning Science",
    date: "May 10, 2025",
    imageUrl: "/placeholder.svg?height=56&width=56",
  },
  {
    id: 3,
    title: "Building Confidence in Mathematics: A Step-by-Step Guide",
    excerpt: "Practical strategies to overcome math anxiety and develop strong problem-solving skills.",
    category: "Mathematics",
    date: "May 5, 2025",
    imageUrl: "/placeholder.svg?height=56&width=56",
  },
  {
    id: 4,
    title: "The Role of Parents in Supporting Academic Success",
    excerpt: "How parents can create an environment that fosters learning and growth at home.",
    category: "Parenting",
    date: "April 28, 2025",
    imageUrl: "/placeholder.svg?height=56&width=56",
  },
  {
    id: 5,
    title: "Digital Tools That Enhance Learning Experiences",
    excerpt: "A curated list of apps and platforms that can transform how students engage with content.",
    category: "EdTech",
    date: "April 22, 2025",
    imageUrl: "/placeholder.svg?height=56&width=56",
  },
  {
    id: 6,
    title: "Developing Critical Thinking Skills in Young Learners",
    excerpt: "Activities and approaches that help children analyze information and solve problems effectively.",
    category: "Early Education",
    date: "April 15, 2025",
    imageUrl: "/placeholder.svg?height=56&width=56",
  },
  {
    id: 7,
    title: "The Benefits of Personalized Learning Paths",
    excerpt: "Why customized education approaches lead to better outcomes for students of all abilities.",
    category: "Personalized Learning",
    date: "April 8, 2025",
    imageUrl: "/placeholder.svg?height=56&width=56",
  },
  {
    id: 8,
    title: "Preparing for College: Beyond Academic Requirements",
    excerpt: "Essential life skills and mindsets that help students thrive in higher education.",
    category: "College Prep",
    date: "April 1, 2025",
    imageUrl: "/placeholder.svg?height=56&width=56",
  },
]

export default function BlogCards() {
  const [currentPage, setCurrentPage] = useState(0)
  const postsPerPage = 4
  const totalPages = Math.ceil(blogPosts.length / postsPerPage)

  const visiblePosts = blogPosts.slice(currentPage * postsPerPage, (currentPage + 1) * postsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {visiblePosts.map((post) => (
          <Card key={post.id} className="overflow-hidden rounded-xl border-none shadow-lg">
            <CardContent className="p-0">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-14 w-14 rounded-full bg-[#02342E]/10 flex items-center justify-center overflow-hidden">
                    <Image
                      src={post.imageUrl || "/placeholder.svg"}
                      alt={post.title}
                      width={56}
                      height={56}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#02342E]">{post.category}</p>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#02342E] line-clamp-2 mb-2">{post.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.id}`}>
                  <Button variant="link" className="p-0 h-auto text-[#02342E]">
                    Read More
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex justify-center items-center gap-4">
        <Button variant="outline" size="icon" onClick={prevPage} className="border-[#02342E] text-[#02342E]">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous page</span>
        </Button>
        <span className="text-sm text-gray-500">
          Page {currentPage + 1} of {totalPages}
        </span>
        <Button variant="outline" size="icon" onClick={nextPage} className="border-[#02342E] text-[#02342E]">
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next page</span>
        </Button>
      </div>

      <div className="flex justify-center">
        <Link href="/blog">
          <Button className="bg-[#02342E] text-white hover:bg-[#02342E]/90">View All Posts</Button>
        </Link>
      </div>
    </div>
  )
}
