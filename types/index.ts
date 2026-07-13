import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface BusinessProblem {
  title: string;
  description: string;
  icon: LucideIcon;
  solutionLabel: string;
}

export interface Solution {
  problem: string;
  title: string;
  description: string;
  impact: string;
  icon: LucideIcon;
}

export interface Industry {
  name: string;
  description: string;
  problems: string[];
  icon: LucideIcon;
  proven?: boolean;
}

export interface Service {
  title: string;
  description: string;
  details: string[];
  icon: LucideIcon;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  benefit: string;
  icon: LucideIcon;
}

export interface WhyReason {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TechItem {
  name: string;
  category: string;
}

export interface CaseMetric {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface FeaturedProject {
  slug: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  image: string;
  imageAlt: string;
  metrics: CaseMetric[];
  liveUrl?: string;
  isComingSoon?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "company" | "message", string[]>>;
};
