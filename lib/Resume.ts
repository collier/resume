import resumeData from '../data/resume.json';

export function getResumeData(): Resume {
  return resumeData;
}

export interface Resume {
  basics: Basics;
  clearanceLevel: string;
  work: Work[];
  education: Education[];
  technology: Technology;
  design: string[];
  tools: string[];
}

export interface Basics {
  name: string;
  label: string;
  email: string;
  phone: string;
  website: string;
  summary: string;
  location: Location;
}

export interface Location {
  city: string;
  countryCode: string;
  region: string;
}

export interface Work {
  company: string;
  position: string;
  webAddress: string;
  startDate: string;
  endDate: string;
  location: string;
  details: string[];
  projects?: Project[];
  previousRoles?: Role[];
}

export interface Project {
  name: string;
  client: string;
  startDate: string;
  endDate: string;
  details: string[];
}

export interface Education {
  institution: string;
  area: string;
  majors: string[];
  studyType: string;
  startDate: string;
  endDate: string;
  location: string;
  courses: string[];
}

export interface Technology {
  advanced: string[];
  intermediate: string[];
}

export interface Role {
  title: string;
  startYear: string;
  endYear: string;
}
