import { NextResponse } from 'next/server';

// Mock data for the homepage
const mockHomePage = {
  id: 'default',
  title: 'Milestone Learning',
  slug: 'home',
  hero: {
    heading: 'Empowering every Student with personalized learning for lasting success',
    subheading: 'From foundational skills to advanced academics, we\'re with you every step of the way.',
    ctaText: 'Get Started Today',
    ctaLink: '/contact-us',
  },
  features: [
    {
      title: 'Personalized Learning',
      description: 'Personalized, efficient learning',
      icon: '✓',
    },
    {
      title: 'Parent Collaboration',
      description: 'Deep collaboration with parents & students',
      icon: '✓',
    },
    {
      title: 'One-on-One Support',
      description: 'Dedicated support for each student',
      icon: '✓',
    },
  ],
  supportSections: [
    {
      title: 'Test Prep',
      description: 'Expert coaching for SSAT, SAT, ACT, AP exams, and more.',
      icon: '⏱️',
    },
    {
      title: 'College/University',
      description: 'Tutoring for advanced coursework, writing, and academic strategy.',
      icon: '🎓',
    },
    {
      title: 'Graduate School',
      description: 'Language prep, writing mentorship, and exam support for advanced learners.',
      icon: '📚',
    },
  ],
};

export async function GET(request: Request) {
  // Add CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };

  // Handle OPTIONS request for CORS preflight
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, { headers });
  }

  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('where[slug][equals]');

  if (slug === 'home') {
    return NextResponse.json(
      { docs: [mockHomePage] },
      { headers }
    );
  }

  return NextResponse.json(
    { docs: [] },
    { headers }
  );
} 