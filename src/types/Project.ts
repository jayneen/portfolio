export interface Project {
    id: number;
    slug: string;
    title: string;
    description: string;
    details: string[];
    image?: string;
    languages?: string[];
    frameworks?: string[];
    link?: string[];
    github?: string[];
}