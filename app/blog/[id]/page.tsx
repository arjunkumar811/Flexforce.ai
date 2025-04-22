import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Effective Study Techniques for Different Learning Styles",
    excerpt: "Discover how to adapt your study methods to match your unique learning style for better results.",
    category: "Study Tips",
    date: "May 15, 2025",
    imageUrl: "/placeholder.svg?height=400&width=800",
    content: `
      <p>When it comes to studying effectively, one size definitely doesn't fit all. Each person has a unique learning style that influences how they best absorb and retain information. Understanding your personal learning style can dramatically improve your study efficiency and academic performance.</p>
      
      <h2>Visual Learners</h2>
      <p>If you're a visual learner, you learn best through seeing information presented visually. You might find yourself drawing diagrams, using color-coding systems, or creating mind maps to organize information.</p>
      <p><strong>Effective techniques for visual learners:</strong></p>
      <ul>
        <li>Use colorful highlighters to emphasize key points</li>
        <li>Create flowcharts and diagrams</li>
        <li>Watch educational videos</li>
        <li>Use visual metaphors and imagery</li>
        <li>Organize information with mind maps</li>
      </ul>
      
      <h2>Auditory Learners</h2>
      <p>Auditory learners retain information best when it's presented through sound. You might find yourself remembering lectures better than textbook readings, or talking through concepts to understand them.</p>
      <p><strong>Effective techniques for auditory learners:</strong></p>
      <ul>
        <li>Record and replay lectures</li>
        <li>Read material aloud</li>
        <li>Discuss concepts with study partners</li>
        <li>Use mnemonic devices and rhymes</li>
        <li>Explain concepts to others</li>
      </ul>
      
      <h2>Kinesthetic Learners</h2>
      <p>If you're a kinesthetic learner, you learn best through physical activities and hands-on experiences. Sitting still for long periods might be challenging for you.</p>
      <p><strong>Effective techniques for kinesthetic learners:</strong></p>
      <ul>
        <li>Take frequent study breaks with physical activity</li>
        <li>Use physical objects or models when possible</li>
        <li>Act out concepts or processes</li>
        <li>Create flashcards you can manipulate</li>
        <li>Study while standing or moving</li>
      </ul>
      
      <h2>Reading/Writing Learners</h2>
      <p>Reading/writing learners prefer information displayed as words. You likely enjoy reading textbooks and writing notes to solidify your understanding.</p>
      <p><strong>Effective techniques for reading/writing learners:</strong></p>
      <ul>
        <li>Take detailed notes</li>
        <li>Rewrite key points in your own words</li>
        <li>Create lists and outlines</li>
        <li>Use dictionaries, glossaries, and definitions</li>
        <li>Write summaries of material</li>
      </ul>
      
      <h2>Multimodal Learning</h2>
      <p>Many people don't fall exclusively into one category but instead have multimodal learning preferences. This means you might benefit from combining techniques from different learning styles.</p>
      
      <h2>Adapting Your Study Environment</h2>
      <p>Beyond specific techniques, consider how your environment affects your learning. Some students need absolute silence, while others study better with background music. Some prefer bright lighting, while others work better in dimmer settings.</p>
      
      <p>Remember that understanding your learning style isn't about limiting yourself to one approach. Instead, it's about recognizing your strengths and preferences so you can prioritize the most effective techniques while still developing versatility in how you learn.</p>
    `,
  },
  // Other blog posts would be defined here
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const postId = Number.parseInt(params.id)
  const post = blogPosts.find((post) => post.id === postId) || blogPosts[0]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-[#02342E]">Milestone Learning</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link href="/#features" className="text-sm font-medium text-[#02342E] hover:underline">
              Features
            </Link>
            <Link href="/#about" className="text-sm font-medium text-[#02342E] hover:underline">
              About
            </Link>
            <Link href="/blog" className="text-sm font-medium text-[#02342E] hover:underline">
              Blog
            </Link>
            <Link href="/#contact" className="text-sm font-medium text-[#02342E] hover:underline">
              Contact
            </Link>
          </nav>
          <div className="flex gap-4">
            <Link href="/login">
              <Button variant="outline" className="border-[#02342E] text-[#02342E]">
                Log In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-[#02342E] text-white hover:bg-[#02342E]/90">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <article className="container mx-auto px-4 py-12 md:px-6 md:py-24">
          <div className="mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm font-medium text-[#02342E] hover:text-[#02342E]/80"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all posts
            </Link>
          </div>

          <div className="mx-auto max-w-3xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-[#02342E]/10 flex items-center justify-center overflow-hidden">
                <Image
                  src={post.imageUrl || "/placeholder.svg"}
                  alt={post.category}
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

            <h1 className="mb-6 text-3xl font-bold tracking-tighter text-[#02342E] sm:text-4xl md:text-5xl">
              {post.title}
            </h1>

            <div className="mb-8 aspect-video w-full overflow-hidden rounded-xl">
              <Image
                src={post.imageUrl || "/placeholder.svg"}
                alt={post.title}
                width={800}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>

            <div
              className="prose prose-lg max-w-none prose-headings:text-[#02342E] prose-a:text-[#02342E]"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 border-t pt-6">
              <h2 className="mb-4 text-xl font-bold text-[#02342E]">Share this article</h2>
              <div className="flex gap-4">
                <Button variant="outline" className="border-[#02342E] text-[#02342E]">
                  Share on Twitter
                </Button>
                <Button variant="outline" className="border-[#02342E] text-[#02342E]">
                  Share on Facebook
                </Button>
                <Button variant="outline" className="border-[#02342E] text-[#02342E]">
                  Share on LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>
      <footer className="border-t bg-white">
        <div className="container mx-auto flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between md:py-12 px-4 md:px-6">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-lg font-bold text-[#02342E]">Milestone Learning</span>
            </Link>
            <p className="text-sm text-gray-500">© 2025 Milestone Learning. All rights reserved.</p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              Cookies
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
