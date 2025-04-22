import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { SchoolLevelCard } from "@/components/school-level-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { FAQAccordion } from "@/components/faq-accordion";
import { TrustedPartners } from "@/components/trusted-partners";
import { BlogCardRow } from "@/components/blog-card-row";

const testimonials = [
  {
    quote:
      "FlexForce has transformed how I connect with students and manage my tutoring schedule.",
    author: "Sarah Williams",
    role: "Math Tutor",
    image: "/placeholder-user.jpg",
  },
  {
    quote:
      "My daughter's grades have improved significantly since we started using FlexForce.",
    author: "Michael Chen",
    role: "Parent",
    image: "/placeholder-user.jpg",
  },
  {
    quote:
      "The platform makes it easy to find qualified tutors who match my learning style.",
    author: "Emily Johnson",
    role: "Student",
    image: "/placeholder-user.jpg",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">FlexForce</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="/about-us"
              className="text-sm font-medium hover:text-primary"
            >
              About Us
            </Link>
            <Link
              href="/what-we-do"
              className="text-sm font-medium hover:text-primary"
            >
              What We Do
            </Link>
            <Link
              href="/resources"
              className="text-sm font-medium hover:text-primary"
            >
              Resources
            </Link>
            <Link
              href="/contact-us"
              className="text-sm font-medium hover:text-primary"
            >
              Contact Us
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              Transform Your Learning Journey
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Connect with expert tutors and unlock your potential
            </p>
            <Button size="lg" asChild>
              <Link href="/signup">Get Started Today</Link>
            </Button>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-3xl font-bold">Latest Resources</h2>
            <BlogCardRow />
          </div>
        </section>

        {/* Trusted Partners */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-3xl font-bold text-center">
              Our Trusted Partners
            </h2>
            <TrustedPartners />
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-3xl font-bold text-center">
              What Our Users Say
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  image={testimonial.image}
                />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-3xl font-bold text-center">
              Frequently Asked Questions
            </h2>
            <FAQAccordion />
          </div>
        </section>
      </main>

      <footer className="border-t bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 font-bold">FlexForce</h3>
              <p className="text-sm text-muted-foreground">
                Empowering education through connection.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Quick Links</h4>
              <nav className="flex flex-col gap-2">
                <Link
                  href="/about-us"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  About Us
                </Link>
                <Link
                  href="/what-we-do"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  What We Do
                </Link>
                <Link
                  href="/resources"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Resources
                </Link>
                <Link
                  href="/contact-us"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
