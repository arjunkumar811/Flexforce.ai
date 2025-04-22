import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Learning Styles in Tutoring: Tailoring Approaches for Effective Student Engagement",
    excerpt:
      "Understanding different learning styles is essential for effective tutoring and can significantly enhance your teaching approach.",
    category: "Guidance",
    date: "12 May 2025",
    readTime: "5 mins read",
    image: "/blog/learning-styles.jpg",
  },
  {
    id: 2,
    title: "Learning Styles in Tutoring: Tailoring Approaches for Effective Student Engagement",
    excerpt:
      "Understanding different learning styles is essential for effective tutoring and can significantly enhance your teaching approach.",
    category: "Guidance",
    date: "12 May 2025",
    readTime: "5 mins read",
    image: "/blog/learning-styles.jpg",
  },
  {
    id: 3,
    title: "Learning Styles in Tutoring: Tailoring Approaches for Effective Student Engagement",
    excerpt:
      "Understanding different learning styles is essential for effective tutoring and can significantly enhance your teaching approach.",
    category: "Guidance",
    date: "12 May 2025",
    readTime: "5 mins read",
    image: "/blog/learning-styles.jpg",
  },
  {
    id: 4,
    title: "Learning Styles in Tutoring: Tailoring Approaches for Effective Student Engagement",
    excerpt:
      "Understanding different learning styles is essential for effective tutoring and can significantly enhance your teaching approach.",
    category: "Guidance",
    date: "12 May 2025",
    readTime: "5 mins read",
    image: "/blog/learning-styles.jpg",
  },
]

export function BlogCardRow() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {blogPosts.map((post) => (
        <div key={post.id} className="overflow-hidden rounded-lg bg-white shadow-md">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h3 className="mb-2 line-clamp-2 text-lg font-bold text-[#02342E]">{post.title}</h3>
            <p className="mb-4 line-clamp-3 text-sm text-gray-600">{post.excerpt}</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-[#02342E]">{post.category}</p>
                <div className="flex items-center text-xs text-gray-500">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
              <Link href={`/blog/${post.id}`} className="text-[#02342E] hover:text-[#02342E]/80">
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
