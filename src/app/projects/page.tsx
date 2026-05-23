import { getProjects } from '@/lib/content';
import { ProjectGallery } from '@/components/site/ProjectGallery';

export const metadata = {
    title: 'Projects',
    description: 'Projects by Garvin Dholakiya, including mypostshare.com, AI automation systems, React Native mobile apps, Swift iOS apps, and workflow architecture.',
    alternates: {
        canonical: '/projects',
    },
    openGraph: {
        title: 'Projects | Garvin Dholakiya',
        description: 'AI automation, mobile app, and full-stack product projects by Garvin Dholakiya.',
        url: '/projects',
        type: 'website',
    },
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
