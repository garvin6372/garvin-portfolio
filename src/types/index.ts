export type ProjectCategory = 'All' | 'Projects' | 'Case Studies' | 'UI Experiments' | 'Freelance' | 'Startup';

export interface Project {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    imageUrl: string;
    images?: string[];
    technologies: string[];
    demoUrl?: string;
    repoUrl?: string;
    likes: number;
    comments: number;
    date: string;
    type: 'project' | 'achievement' | 'update';
    category: ProjectCategory;
}

export interface Experience {
    id: string;
    role: string;
    company: string;
    period: string;
    description: string;
    logo: string;
}

export interface Skill {
    name: string;
    icon?: string;
    color?: string;
    category: 'frontend' | 'backend' | 'ai' | 'other';
}

export type ViewType = 'home' | 'projects' | 'experience' | 'about' | 'contact' | 'resume';

export interface UserStats {
    projects: number;
    experience: string;
    techStack: number;
    liveApps: number;
}

export interface Achievement {
    id: string;
    title: string;
    organization: string;
    date: string;
    icon: string;
}

export interface UserProfile {
    username: string;
    fullName: string;
    title: string;
    tagline: string;
    bio: string;
    avatarUrl: string;
    availability: 'open' | 'limited' | 'closed';
    location: string;
    workingHours: string;
    stats: UserStats;
}

export interface Testimonial {
    id: string;
    text: string;
    author: string;
    role: string;
}
