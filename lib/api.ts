import { Page } from '@/types/page';
import mockHomePage from '../src/mock/homepage';

const API_URL = process.env.NEXT_PUBLIC_PAYLOAD_API_URL || 'http://localhost:3000/api';

export async function getHomePage(): Promise<Page> {
  // Use mock data directly during build (production)
  if (process.env.NODE_ENV === 'production') {
    return mockHomePage;
  }
  try {
    const response = await fetch(`${API_URL}/pages?where[slug][equals]=home`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      cache: 'no-store', // Disable caching for development
    });
    
    if (!response.ok) {
      console.error('API Response Status:', response.status);
      console.error('API Response Status Text:', response.statusText);
      throw new Error(`Failed to fetch homepage data: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('API Response Data:', data); // Debug log
    
    if (!data.docs || data.docs.length === 0) {
      console.warn('No homepage data found in response');
      throw new Error('No homepage data found');
    }

    return data.docs[0];
  } catch (error) {
    console.error('Error fetching homepage:', error);
    // Return a default page structure if the API fails
    return mockHomePage;
  }
} 