
export type PlanType = 'free' | 'familial' | 'professional';

export interface UserState {
  isSubscribed: boolean;
  plan: PlanType;
}

export interface AnalysisResult {
  riskLevel: 'low' | 'medium' | 'high';
  detectedElements: string[];
  recommendation: string;
  isAlertNeeded: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}
