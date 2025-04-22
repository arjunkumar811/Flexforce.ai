import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const blogPosts = [
  {
    id: 1,
    title:
      "Learning Styles in Tutoring: Tailoring Approaches for Effective Student Engagement",
    excerpt:
      "Understanding different learning styles is essential for effective tutoring and can significantly enhance your teaching approach.",
    category: "Guidance",
    date: "12 May 2025",
    readTime: "5 mins read",
    image: "/blog/learning-styles.jpg",
  },
  {
    id: 2,
    title:
      "Learning Styles in Tutoring: Tailoring Approaches for Effective Student Engagement",
    excerpt:
      "Understanding different learning styles is essential for effective tutoring and can significantly enhance your teaching approach.",
    category: "Guidance",
    date: "12 May 2025",
    readTime: "5 mins read",
    image: "/blog/learning-styles.jpg",
  },
  {
    id: 3,
    title:
      "Learning Styles in Tutoring: Tailoring Approaches for Effective Student Engagement",
    excerpt:
      "Understanding different learning styles is essential for effective tutoring and can significantly enhance your teaching approach.",
    category: "Guidance",
    date: "12 May 2025",
    readTime: "5 mins read",
    image: "/blog/learning-styles.jpg",
  },
  {
    id: 4,
    title:
      "Learning Styles in Tutoring: Tailoring Approaches for Effective Student Engagement",
    excerpt:
      "Understanding different learning styles is essential for effective tutoring and can significantly enhance your teaching approach.",
    category: "Guidance",
    date: "12 May 2025",
    readTime: "5 mins read",
    image: "/blog/learning-styles.jpg",
  },
  {
    id: 5,
    title:
      "Learning Styles in Tutoring: Tailoring Approaches for Effective Student Engagement",
    excerpt:
      "Understanding different learning styles is essential for effective tutoring and can significantly enhance your teaching approach.",
    category: "Guidance",
    date: "12 May 2025",
    readTime: "5 mins read",
    image: "/blog/learning-styles.jpg",
  },
  {
    id: 6,
    title:
      "Learning Styles in Tutoring: Tailoring Approaches for Effective Student Engagement",
    excerpt:
      "Understanding different learning styles is essential for effective tutoring and can significantly enhance your teaching approach.",
    category: "Guidance",
    date: "12 May 2025",
    readTime: "5 mins read",
    image: "/blog/learning-styles.jpg",
  },
  {
    id: 7,
    title:
      "Learning Styles in Tutoring: Tailoring Approaches for Effective Student Engagement",
    excerpt:
      "Understanding different learning styles is essential for effective tutoring and can significantly enhance your teaching approach.",
    category: "Guidance",
    date: "12 May 2025",
    readTime: "5 mins read",
    image: "/blog/learning-styles.jpg",
  },
  {
    id: 8,
    title:
      "Learning Styles in Tutoring: Tailoring Approaches for Effective Student Engagement",
    excerpt:
      "Understanding different learning styles is essential for effective tutoring and can significantly enhance your teaching approach.",
    category: "Guidance",
    date: "12 May 2025",
    readTime: "5 mins read",
    image: "/blog/learning-styles.jpg",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b bg-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Milestone Learning"
              width={150}
              height={30}
            />
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="/about-us"
              className="text-sm font-medium text-[#02342E] hover:underline"
            >
              About Us
            </Link>
            <Link
              href="/what-we-do"
              className="text-sm font-medium text-[#02342E] hover:underline"
            >
              What We Do
            </Link>
            <Link
              href="/resources"
              className="text-sm font-medium text-[#02342E] hover:underline"
            >
              Resources
            </Link>
            <Link
              href="/contact-us"
              className="text-sm font-medium text-[#02342E] hover:underline"
            >
              Contact Us
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden md:block">
              <Button
                variant="outline"
                className="rounded-full border-[#02342E] text-[#02342E]"
              >
                <span className="mr-2">📞</span> 555-555-5555
              </Button>
            </Link>
            <Link href="/login">
              <Button className="rounded-full bg-[#02342E] text-white hover:bg-[#02342E]/90">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <h1 className="mb-8 text-3xl font-bold text-[#02342E]">
          Insights & inspiration from the world of one-on-one learning
        </h1>
        <p className="mb-12 max-w-3xl text-gray-600">
          Explore expert perspectives, teaching stories, and timely topics in
          education—resources for parents, students, and families navigating
          academic excellence in today's competitive world.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden rounded-lg border-none shadow-md"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="mb-2 line-clamp-2 text-lg font-bold text-[#02342E]">
                  {post.title}
                </h3>
                <p className="mb-4 line-clamp-3 text-sm text-gray-600">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-[#02342E]">
                      {post.category}
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-[#02342E] hover:text-[#02342E]/80"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="bg-[#02342E] py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <Image
                src="/logo-white.svg"
                alt="Milestone Learning"
                width={180}
                height={40}
              />
              <div className="mt-6 flex space-x-4">
                <Link href="#" className="text-white hover:text-gray-200">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-gray-200">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
