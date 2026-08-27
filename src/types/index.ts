export type FAQ = {
  question: string;
  answer: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type SubService = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  features: string[];
  process?: ProcessStep[];
  faqs?: FAQ[];
  related?: string[];
};

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string;
  subServices: SubService[];
};

export type NavigationItem = {
  label: string;
  href: string;
  children?: NavigationItem[];
};

export type ContactInformation = {
  email: string;
  phone?: string;
  address?: string;
  openingHours?: string;
};

export type SiteConfig = {
  name: string;
  domain: string;
  description: string;
  contact: ContactInformation;
  navigation: NavigationItem[];
};
