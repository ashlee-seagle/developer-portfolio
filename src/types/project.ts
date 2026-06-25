export type ProjectType = 'professional' | 'personal'

// Professional projects: caseStudyUrl optional, liveDemoUrl optional, no githubUrl
// Personal projects: githubUrl allowed, liveDemoUrl optional

export interface Project {
  title: string;
  type: ProjectType;
  description: string;
  technologies: string[];
  image?: string;
  caseStudyRoute?: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  role?: string;
}