'use client';

import { useState } from 'react';
import { CheckCircle2, Copy, Search, X } from 'lucide-react';
import type { ProjectContent } from '@/lib/content';
import { BentoCard, Chip } from './UI';

export function ProjectGallery({ projects }: { projects: ProjectContent[] }) {
    const [selectedProject, setSelectedProject] = useState<ProjectContent | null>(null);
    const [activeFilter, setActiveFilter] = useState('All');
    const filters = ['All', 'Projects', 'Case Studies', 'Startup', 'AI Automation'];
    const filteredProjects = projects.filter((project) => {
        if (activeFilter === 'All') return true;
        if (activeFilter === 'AI Automation') {
            return project.technologies.some((tech) => ['AI Automation', 'AI Agents', 'LLMs', 'n8n', 'Make.com'].includes(tech));
        }

        return project.category === activeFilter;
    });
    const featured = filteredProjects[0];
    const rest = filteredProjects.slice(1);

    return (
        <>
            <div className="filter-row">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        className={activeFilter === filter ? 'filter-chip active' : 'filter-chip'}
                        type="button"
                        onClick={() => setActiveFilter(filter)}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            <section className="project-bento-grid">
                {featured ? (
                    <BentoCard className="project-evidence-card featured-evidence clickable-card">
                        <button className="card-hit-area" type="button" onClick={() => setSelectedProject(featured)}>
                            <span className="sr-only">View {featured.title} details</span>
                        </button>
                        <div className="evidence-header">
                            <div>
                                <span className="eyebrow">Featured Architecture</span>
                                <h2>{featured.title}</h2>
                            </div>
                            <div className="chip-row">
                                {featured.technologies.slice(0, 2).map((tech) => <Chip key={tech}>{tech}</Chip>)}
                            </div>
                        </div>
                        <div className="evidence-content">
                            <div>
                                <h3>Problem</h3>
                                <p>{featured.description}</p>
                                <h3>Results</h3>
                                <ul>
                                    <li><CheckCircle2 size={16} /> {featured.likes.toLocaleString()} engagement signals</li>
                                    <li><CheckCircle2 size={16} /> {featured.comments.toLocaleString()} project discussions</li>
                                </ul>
                            </div>
                            <div className="code-panel">
                                <div><span>WORKFLOW.YAML</span><Copy size={14} /></div>
                                <code>
                                    services:<br />
                                    &nbsp;&nbsp;automation:<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;runtime: ai-agent<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;orchestration: n8n<br />
                                    &nbsp;&nbsp;interface:<br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;stack: nextjs
                                </code>
                            </div>
                        </div>
                        <button className="text-link detail-trigger" type="button" onClick={() => setSelectedProject(featured)}>
                            View Details
                        </button>
                    </BentoCard>
                ) : (
                    <div className="empty-project-state">
                        No projects found for {activeFilter}.
                    </div>
                )}

                {rest.map((project, index) => (
                    <BentoCard key={project.id} className={index % 3 === 1 ? 'project-evidence-card wide-evidence clickable-card' : 'project-evidence-card clickable-card'}>
                        <button className="card-hit-area" type="button" onClick={() => setSelectedProject(project)}>
                            <span className="sr-only">View {project.title} details</span>
                        </button>
                        <div className="evidence-image">
                            <img src={project.imageUrl} alt={project.title} />
                        </div>
                        <span className="eyebrow">{project.category}</span>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <div className="chip-row">
                            {project.technologies.slice(0, 3).map((tech) => <Chip key={tech} subtle>{tech}</Chip>)}
                        </div>
                        <button className="text-link detail-trigger" type="button" onClick={() => setSelectedProject(project)}>
                            View Details
                        </button>
                    </BentoCard>
                ))}
            </section>

            <section className="search-strip">
                <Search size={18} />
                <span>Tap any project to inspect the content details.</span>
            </section>

            {selectedProject && (
                <div className="project-modal-backdrop" role="presentation" onClick={() => setSelectedProject(null)}>
                    <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title" onClick={(event) => event.stopPropagation()}>
                        <button className="modal-close" type="button" onClick={() => setSelectedProject(null)} aria-label="Close project details">
                            <X size={18} />
                        </button>
                        <div className="modal-image">
                            <img src={selectedProject.imageUrl} alt={selectedProject.title} />
                        </div>
                        <div className="modal-content">
                            <span className="eyebrow">{selectedProject.category}</span>
                            <h2 id="project-modal-title">{selectedProject.title}</h2>
                            <p className="modal-summary">{selectedProject.description}</p>
                            <div className="modal-section">
                                <h3>Project Details</h3>
                                <p>{selectedProject.longDescription}</p>
                            </div>
                            <div className="modal-section">
                                <h3>Technology Stack</h3>
                                <div className="chip-row">
                                    {selectedProject.technologies.map((tech) => <Chip key={tech}>{tech}</Chip>)}
                                </div>
                            </div>
                            <div className="modal-stats">
                                <div>
                                    <strong>{selectedProject.likes.toLocaleString()}</strong>
                                    <span>Likes</span>
                                </div>
                                <div>
                                    <strong>{selectedProject.comments.toLocaleString()}</strong>
                                    <span>Comments</span>
                                </div>
                                <div>
                                    <strong>{selectedProject.date}</strong>
                                    <span>Status</span>
                                </div>
                            </div>
                            {selectedProject.demoUrl !== '#' && (
                                <a className="btn btn-primary modal-demo-link" href={selectedProject.demoUrl} target="_blank" rel="noreferrer">
                                    Visit Live Project
                                </a>
                            )}
                        </div>
                    </section>
                </div>
            )}
        </>
    );
}
