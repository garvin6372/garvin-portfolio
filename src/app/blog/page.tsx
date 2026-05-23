import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getBlogPosts } from '@/lib/content';
import { BentoCard, Chip } from '@/components/site/UI';

export const metadata = {
    title: 'Blog',
    description: 'Case studies by Garvin Dholakiya on AI automation, workflow architecture, React Native apps, Swift iOS apps, AI agents, and full-stack product systems.',
    alternates: {
        canonical: '/blog',
    },
    openGraph: {
        title: 'Blog | Garvin Dholakiya',
        description: 'Project-backed writing from Garvin Dholakiya on AI automation, workflow architecture, mobile apps, and product engineering.',
        url: '/blog',
        type: 'website',
    },
};

export default function BlogPage() {
    const articles = getBlogPosts();

    return (
        <div className="route-page">
            <section className="page-hero">
                <h1>Engineering <span>Insights.</span></h1>
                <p>Project-backed notes on automation, AI agents, product systems, and full-stack delivery.</p>
            </section>

            <div className="filter-row">
                {['All Articles', 'Automation', 'Full-Stack', 'AI Agents', 'Case Studies'].map((filter, index) => (
                    <span key={filter} className={index === 0 ? 'filter-chip active' : 'filter-chip'}>{filter}</span>
                ))}
            </div>

            <section className="blog-grid">
                {articles.map((article) => (
                    <BentoCard key={article.id} className="article-card">
                        <div className="article-media">
                            <img src={article.imageUrl} alt={article.title} />
                        </div>
                        <div className="article-body">
                            <div className="article-meta">
                                <span>{article.category}</span>
                                <span>{article.date}</span>
                            </div>
                            <h2>{article.title}</h2>
                            <p>{article.description}</p>
                            <div className="chip-row">
                                {article.technologies.slice(0, 3).map((tech) => <Chip key={tech} subtle>{tech}</Chip>)}
                            </div>
                            <Link className="text-link" href={`/blog/${article.id}`}>
                                Read Article <ArrowRight size={16} />
                            </Link>
                        </div>
                    </BentoCard>
                ))}
            </section>
        </div>
    );
}
