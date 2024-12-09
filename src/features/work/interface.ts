export interface ProjectItem {
    id: string;
    slug?: string;
    imageUrl: string;
    name: string;
    technologies: string[];
    description?: string;
    title?: string;
    startTime?: string;
    service?: string;
    client?: string;
    projectImages?: string[];
}
