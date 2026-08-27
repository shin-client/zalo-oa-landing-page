export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'chat' | 'call' | 'zns' | 'order' | 'crm' | 'team' | 'billing';
  icon: string;
  image: string;
  highlights: string[];
  badge?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  desc: string;
  monthlyPrice: number;
  annualPrice: number;
  popular?: boolean;
  features: string[];
  excludedFeatures?: string[];
  ctaText: string;
  ctaLink: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface MetricItem {
  value: string;
  label: string;
  desc: string;
}
