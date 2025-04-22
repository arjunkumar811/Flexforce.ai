import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-[#02342E]">
              Milestone <span className="font-light">| Learning</span>
            </div>
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
            <Link href="/contact-us" className="hidden md:block">
              <Button
                variant="outline"
                className="rounded-full border-[#02342E] text-[#02342E]"
              >
                <span className="mr-2">📞</span> XXX-XXX-XXXX
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

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <h1 className="mb-6 text-5xl font-bold text-[#02342E]">
              Empowering every Student with personalized learning for lasting
              success
            </h1>
            <div className="mb-8 space-y-4">
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-[#02342E]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>Personalized, efficient learning</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-[#02342E]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>Deep collaboration with parents & students</p>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-[#02342E]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>Personalized One-on-One Learning</p>
              </div>
            </div>
            <Button className="w-fit rounded-full bg-[#02342E] px-8 py-6 text-white hover:bg-[#02342E]/90">
              Get Started Today
            </Button>
          </div>
          <div className="relative">
            <Image
              src="/photo1.png.png"
              alt="Student learning"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-center text-4xl font-bold text-[#02342E]">
            Support for every stage of learning
          </h2>
          <p className="mb-12 text-center text-gray-600">
            From foundational skills to advanced academics, we're with you every
            step of the way.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border p-6">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#02342E]"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#02342E]">
                Test Prep
              </h3>
              <p className="text-sm text-gray-600">
                Expert coaching for SSAT, SAT, ACT, AP exams, and more.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#02342E]"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#02342E]">
                College/University
              </h3>
              <p className="text-sm text-gray-600">
                Tutoring for advanced coursework, writing, and academic
                strategy.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#02342E]"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#02342E]">
                Graduate School
              </h3>
              <p className="text-sm text-gray-600">
                Language prep, writing mentorship, and exam support for advanced
                learners.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#02342E]"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#02342E]">
                Elementary School
              </h3>
              <p className="text-sm text-gray-600">
                Foundational support in reading, writing, math, and study
                habits.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#02342E]"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#02342E]">
                Middle School
              </h3>
              <p className="text-sm text-gray-600">
                Skill-building across core subjects to support academic
                transitions.
              </p>
            </div>
            <div className="rounded-lg border p-6">
              <div className="mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#02342E]"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-[#02342E]">
                High School
              </h3>
              <p className="text-sm text-gray-600">
                Rigorous subject support, test prep, and college readiness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="bg-[#f8f9fa] py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-center text-4xl font-bold text-[#02342E]">
            Success we've achieved together
          </h2>
          <p className="mb-12 text-center text-gray-600">
            Together, we celebrate every milestone—turning challenges into
            achievements and goals into reality.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 text-4xl text-[#02342E]">"</div>
              <p className="mb-6 text-gray-600">
                My son went from struggling in science to earning his best
                grades ever. His tutor made the material click in a way his
                classes never did.
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/photo2.png.png"
                  alt="Kate Wills"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-[#02342E]">Kate Wills</p>
                  <p className="text-sm text-gray-500">Parent | 8th Standard</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 text-4xl text-[#02342E]">"</div>
              <p className="mb-6 text-gray-600">
                My son went from struggling in science to earning his best
                grades ever. His tutor made the material click in a way his
                classes never did.
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/photo2.png.png"
                  alt="Kate Wills"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-[#02342E]">Kate Wills</p>
                  <p className="text-sm text-gray-500">Parent | 8th Standard</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 text-4xl text-[#02342E]">"</div>
              <p className="mb-6 text-gray-600">
                My son went from struggling in science to earning his best
                grades ever. His tutor made the material click in a way his
                classes never did.
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/photo2.png.png"
                  alt="Kate Wills"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-[#02342E]">Kate Wills</p>
                  <p className="text-sm text-gray-500">Parent | 8th Standard</p>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 text-4xl text-[#02342E]">"</div>
              <p className="mb-6 text-gray-600">
                My son went from struggling in science to earning his best
                grades ever. His tutor made the material click in a way his
                classes never did.
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/photo2.png.png"
                  alt="Kate Wills"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-[#02342E]">Kate Wills</p>
                  <p className="text-sm text-gray-500">Parent | 8th Standard</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <Button
              variant="outline"
              className="rounded-full border-[#02342E] text-[#02342E]"
            >
              View All
            </Button>
          </div>
        </div>
      </section>

      {/* How we increase academic performance */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-1">
              <h2 className="mb-4 text-3xl font-bold text-[#02342E]">
                How we increase academic performance
              </h2>
              <p className="mb-2 text-gray-600">
                The most successful learning is{" "}
                <span className="font-semibold">one-on-one</span>.
              </p>
              <p className="mb-6 text-gray-600">
                At <span className="font-semibold">Milestone Learning</span>, we
                recognize that every student learns differently—success comes
                from tailored support, personalized strategies, and a learning
                approach that works for them.
              </p>
              <Link
                href="/learn-more"
                className="flex items-center text-[#02342E] hover:underline"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-1"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
            <div className="md:col-span-3">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="mb-4 h-48 w-full overflow-hidden rounded-lg">
                    <Image
                      src="/photo3.png.png"
                      alt="In-person tutoring"
                      width={300}
                      height={200}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <Button className="w-full rounded-md bg-[#02342E] text-white hover:bg-[#02342E]/90">
                    Schedule a Consultation
                  </Button>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="mb-4 h-48 w-full overflow-hidden rounded-lg">
                    <Image
                      src="/photo4.png.png"
                      alt="Online learning"
                      width={300}
                      height={200}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <Button className="w-full rounded-md bg-[#02342E] text-white hover:bg-[#02342E]/90">
                    Submit an Inquiry
                  </Button>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="mb-4 h-48 w-full overflow-hidden rounded-lg">
                    <Image
                      src="/photo5.png.png"
                      alt="Virtual tutoring"
                      width={300}
                      height={200}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <Button className="w-full rounded-md bg-[#02342E] text-white hover:bg-[#02342E]/90">
                    Book a Session
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Milestone Learning Section */}
      <section className="bg-[#02342E] py-16 text-white">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Why Milestone Learning?
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-8 text-center text-[#02342E]">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                Personalized, efficient learning
              </h3>
              <p className="text-gray-600">
                Tailored instruction that maximizes understanding and progress.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 text-center text-[#02342E]">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                Collaboration with parents & students
              </h3>
              <p className="text-gray-600">
                Clear communication and ongoing feedback to align on goals.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 text-center text-[#02342E]">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"></path>
                  <path d="M2 20h20"></path>
                  <path d="M14 12v.01"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                Long-term skill development
              </h3>
              <p className="text-gray-600">
                Focused on growth, mastery, and real results.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 text-center text-[#02342E]">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                A nurturing, supportive environment
              </h3>
              <p className="text-gray-600">
                Meeting students where they are and helping them thrive.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 text-center text-[#02342E]">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v4"></path>
                  <path d="M12 18v4"></path>
                  <path d="m4.93 4.93 2.83 2.83"></path>
                  <path d="m16.24 16.24 2.83 2.83"></path>
                  <path d="M2 12h4"></path>
                  <path d="M18 12h4"></path>
                  <path d="m4.93 19.07 2.83-2.83"></path>
                  <path d="m16.24 7.76 2.83-2.83"></path>
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                Confidence-building for success
              </h3>
              <p className="text-gray-600">
                Strategies to reduce anxiety and improve academic performance.
              </p>
            </div>
          </div>
          <div className="mt-12 flex justify-center gap-4">
            <Button className="rounded-full bg-white px-8 py-6 text-[#02342E] hover:bg-gray-100">
              Get Started Today
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-white px-8 py-6 text-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Tutors you can trust from */}
      <section className="border-t border-b border-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold text-[#02342E]">
            Tutors you can trust from
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="flex h-40 w-40 items-center justify-center rounded-lg border p-6 transition-transform hover:scale-105">
              <Image
                src="/photo9.png.png"
                alt="University Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <div className="flex h-40 w-40 items-center justify-center rounded-lg border p-6 transition-transform hover:scale-105">
              <Image
                src="/photo8.png.png"
                alt="University Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <div className="flex h-40 w-40 items-center justify-center rounded-lg border p-6 transition-transform hover:scale-105">
              <Image
                src="/photo7.png.png"
                alt="University Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <div className="flex h-40 w-40 items-center justify-center rounded-lg border p-6 transition-transform hover:scale-105">
              <Image
                src="/photo6.png.png"
                alt="University Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <div className="flex h-40 w-40 items-center justify-center rounded-lg border p-6 transition-transform hover:scale-105">
              <Image
                src="/photo6.png.png"
                alt="University Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <div className="flex h-40 w-40 items-center justify-center rounded-lg border p-6 transition-transform hover:scale-105">
              <Image
                src="/photo6.png.png"
                alt="University Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <div className="flex h-40 w-40 items-center justify-center rounded-lg border p-6 transition-transform hover:scale-105">
              <Image
                src="/photo6.png.png"
                alt="University Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <div className="flex h-40 w-40 items-center justify-center rounded-lg border p-6 transition-transform hover:scale-105">
              <Image
                src="/photo8.png.png"
                alt="University Logo"
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Insights & Inspiration Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-center text-4xl font-bold text-[#02342E]">
            Insights & inspiration from the world of one-on-one learning
          </h2>
          <p className="mb-12 text-center text-gray-600">
            Explore expert perspectives, success stories, and timely topics in
            education—designed for parents, students, and families navigating
            academic excellence in today's competitive world.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="h-48 w-full overflow-hidden">
                <Image
                  src="/photo10.png.png"
                  alt="Learning Styles"
                  width={300}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-[#02342E]">
                  Learning Styles in Tutoring: Tailoring Approaches for
                  Effective Student Engagement
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  Understanding different learning styles is essential for
                  effective tutoring and can significantly enhance your teaching
                  approach
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#02342E]">Guidance</span>
                  <span className="text-xs text-gray-500">5 mins read</span>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="h-48 w-full overflow-hidden">
                <Image
                  src="/photo10.png.png"
                  alt="Learning Styles"
                  width={300}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-[#02342E]">
                  Learning Styles in Tutoring: Tailoring Approaches for
                  Effective Student Engagement
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  Understanding different learning styles is essential for
                  effective tutoring and can significantly enhance your teaching
                  approach
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#02342E]">Guidance</span>
                  <span className="text-xs text-gray-500">5 mins read</span>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="h-48 w-full overflow-hidden">
                <Image
                  src="/photo10.png.png"
                  alt="Learning Styles"
                  width={300}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-[#02342E]">
                  Learning Styles in Tutoring: Tailoring Approaches for
                  Effective Student Engagement
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  Understanding different learning styles is essential for
                  effective tutoring and can significantly enhance your teaching
                  approach
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#02342E]">Guidance</span>
                  <span className="text-xs text-gray-500">5 mins read</span>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow-sm">
              <div className="h-48 w-full overflow-hidden">
                <Image
                  src="/photo10.png.png"
                  alt="Learning Styles"
                  width={300}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-[#02342E]">
                  Learning Styles in Tutoring: Tailoring Approaches for
                  Effective Student Engagement
                </h3>
                <p className="mb-4 text-sm text-gray-600">
                  Understanding different learning styles is essential for
                  effective tutoring and can significantly enhance your teaching
                  approach
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#02342E]">Guidance</span>
                  <span className="text-xs text-gray-500">5 mins read</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <Button
              variant="outline"
              className="rounded-full border-[#02342E] text-[#02342E]"
            >
              View All
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-t border-gray-200 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="md:col-span-1">
              <h2 className="mb-4 text-3xl font-bold text-[#02342E]">
                Frequently asked questions
              </h2>
              <p className="text-gray-600">
                Find answers to common questions and get the information you
                need!
              </p>
            </div>
            <div className="md:col-span-2">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left text-[#02342E]">
                    What makes Milestone Learning different from other tutoring
                    services?
                  </AccordionTrigger>
                  <AccordionContent>
                    We specialize in one-on-one, highly personalized tutoring
                    that goes beyond just helping students with homework. Our
                    expert tutors focus on mastery, confidence-building, and
                    academic strategy, ensuring that students not only improve
                    their grades but also develop lifelong learning skills.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-left text-[#02342E]">
                    Who are your tutors?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our tutors are carefully selected experts with advanced
                    degrees from prestigious universities. They undergo rigorous
                    training and background checks to ensure they provide the
                    highest quality education and mentorship.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-left text-[#02342E]">
                    How do you match students with tutors?
                  </AccordionTrigger>
                  <AccordionContent>
                    We use a comprehensive matching process that considers
                    academic needs, learning style, personality, and scheduling
                    requirements to pair each student with the ideal tutor for
                    their specific situation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-left text-[#02342E]">
                    Do you offer in-person tutoring?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer both in-person and online tutoring options.
                    Our in-person tutoring is available in select locations,
                    while our online platform provides the same high-quality
                    experience with added convenience and flexibility.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="mt-8 flex justify-center">
                <Button
                  variant="outline"
                  className="rounded-full border-[#02342E] text-[#02342E]"
                >
                  View All
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#f8f9fa] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-4xl font-bold text-[#02342E]">
            Interested in becoming a tutor with Milestone Learning?
          </h2>
          <p className="mb-8 text-gray-600">
            Make a lasting impact—join a team where your expertise empowers
            students and your growth is supported every step of the way.
          </p>
          <Button className="rounded-full bg-[#02342E] px-8 py-6 text-white hover:bg-[#02342E]/90">
            Apply Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#02342E] py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="text-2xl font-bold">
                Milestone <span className="font-light">| Learning</span>
              </div>
              <div className="mt-6 flex space-x-4">
                <Link href="#" className="text-white hover:text-gray-200">
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
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-gray-200">
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
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Link>
                <Link href="#" className="text-white hover:text-gray-200">
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
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Contact Us</h3>
              <p className="mb-2">XXX-XXX-XXXX</p>
              <p>hello@milestonelearning.com</p>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/book-consultation"
                    className="hover:text-gray-200"
                  >
                    BOOK A CONSULTATION
                  </Link>
                </li>
                <li>
                  <Link href="/book-session" className="hover:text-gray-200">
                    Book a Learning Session
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-gray-200">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy" className="hover:text-gray-200">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="hover:text-gray-200"
                  >
                    Terms of Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8 text-center">
            <p>&copy; 2025 Milestone Learning</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
