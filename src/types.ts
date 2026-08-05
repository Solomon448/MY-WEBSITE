export interface Project {
  id: string;
  title: string;
  category: string;
  categoryTag: 'SHOPIFY' | 'ECOMMERCE' | 'WORDPRESS' | 'CONVERSION';
  description: string;
  desktopImage: string;
  mobileImage: string;
  metrics: { label: string; value: string }[];
  client: string;
  year: string;
  liveUrl?: string;
  fullStory: string;
  keyFeatures: string[];
  toolsUsed: string[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  deliverables: string[];
  turnaroundTime: string;
  idealFor: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  metricHighlight: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  details: string[];
}

export interface ContactFormData {
  fullName: string;
  email: string;
  businessName: string;
  websiteUrl: string;
  projectType: string;
  projectBudget: string;
  projectDetails: string;
}
