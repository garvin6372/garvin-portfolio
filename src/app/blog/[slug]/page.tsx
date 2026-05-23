import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { getBlogPostBySlug, getBlogPosts, getProfile } from '@/lib/content';
import { BentoCard, Chip } from '@/components/site/UI';

export function generateStaticParams() {
    return getBlogPosts()
        .map((post) => ({ slug: post.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getBlogPostBySlug(slug);
    return {
        title: project ? `${project.title} | Garvin Dholakiya` : 'Case Study | Garvin Dholakiya',
        description: project?.description ?? 'Garvin Dholakiya project case study.',
    };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getBlogPostBySlug(slug);
    const profile = getProfile();
    if (!project || project.type !== 'project') notFound();

    const related = getBlogPosts()
        .filter((item) => item.id !== project.id)
        .slice(0, 2);

    return (
        <div className="article-layout">
            <aside className="article-sidebar">
                <Link className="back-link" href="/blog"><ArrowLeft size={16} /> Articles</Link>
                <div>
                    <h3>Structure</h3>
                    <a href="#summary">Summary</a>
                    <a href="#details">Details</a>
                    <a href="#stack">Stack</a>
                </div>
            </aside>

            <article className="article-detail">
                <header>
                    <div className="article-meta">
                        <span>{project.category}</span>
                        <span>{project.date}</span>
                    </div>
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                    <div className="chip-row">
                        {project.technologies.map((tech) => <Chip key={tech}>{tech}</Chip>)}
                    </div>
                </header>

                <div className="detail-hero-image">
                    <img src={project.imageUrl} alt={project.title} />
                </div>

                <section id="summary" className="article-section">
                    <h2><span /> Summary</h2>
                    <p>{project.description}</p>
                </section>

                <section id="details" className="article-section">
                    <h2><span /> Architecture Notes</h2>
                    <p>{project.longDescription}</p>
                    <BentoCard className="metrics-card">
                        <div>
                            <strong>{project.likes.toLocaleString()}</strong>
                            <span>Likes</span>
                        </div>
                        <div>
                            <strong>{project.comments.toLocaleString()}</strong>
                            <span>Comments</span>
                        </div>
                        <div>
                            <strong>{project.technologies.length}</strong>
                            <span>Core Tools</span>
                        </div>
                    </BentoCard>
                </section>

                <section id="stack" className="article-section">
                    <h2><span /> Delivery Stack</h2>
                    <ul className="stack-list">
                        {project.technologies.map((tech) => (
                            <li key={tech}><CheckCircle2 size={16} /> {tech}</li>
                        ))}
                    </ul>
                </section>

                <section className="author-card">
                    <div className="author-avatar">GD</div>
                    <div>
                        <h3>{profile.fullName}</h3>
                        <p>{profile.bio || profile.mission}</p>
                    </div>
                </section>

                <section className="related-panel">
                    <h3>Architectural Insights</h3>
                    <div>
                        {related.map((item) => (
                            <Link key={item.id} href={`/blog/${item.id}`}>
                                {item.title} <ArrowRight size={14} />
                            </Link>
                        ))}
                    </div>
                </section>
            </article>
        </div>
    );
}
