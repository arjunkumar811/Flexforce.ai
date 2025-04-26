import { Page } from '@/types/page';

const mockHomePage: Page = {
  id: 'default',
  title: 'Milestone Learning',
  slug: 'home',
  hero: {
    heading: 'Empowering every Student with personalized learning for lasting success',
    subheading: "From foundational skills to advanced academics, we're with you every step of the way.",
    ctaText: 'Get Started Today',
    ctaLink: '/contact-us',
  },
  features: [
    { title: 'Personalized Learning', description: 'Personalized, efficient learning', icon: '✓' },
    { title: 'Parent Collaboration', description: 'Deep collaboration with parents & students', icon: '✓' },
    { title: 'One-on-One Support', description: 'Dedicated support for each student', icon: '✓' },
  ],
  supportSections: [
    { title: 'Test Prep', description: 'Expert coaching for SSAT, SAT, ACT, AP exams, and more.', icon: '⏱️' },
    { title: 'College/University', description: 'Tutoring for advanced coursework, writing, and academic strategy.', icon: '🎓' },
    { title: 'Graduate School', description: 'Language prep, writing mentorship, and exam support for advanced learners.', icon: '📚' },
  ],
};

export default mockHomePage; 