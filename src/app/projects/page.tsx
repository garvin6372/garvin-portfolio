import { getProjects } from '@/lib/content';
import { ProjectGallery } from '@/components/site/ProjectGallery';

export const metadata = {
    title: 'Projects | Garvin Dholakiya',
    description: 'Curated AI automation, full-stack, and workflow architecture projects by Garvin Dholakiya.',
};

export default function ProjectsPage() {
    const projects = getProjects().filter((project) => project.type === 'project');

    return (
        <div className="route-page">
            <section className="page-hero">
                <h1>Curated <span>Deliverables.</span></h1>
                <p>A focused exhibition of technical architectures, complex integrations, and high-performance automation systems.</p>
            </section>

            <ProjectGallery projects={projects} />
        </div>
    );
}
