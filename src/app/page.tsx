import Link from 'next/link';
import { ArrowRight, Bot, Braces, MessageSquareQuote, Workflow, Zap } from 'lucide-react';
import { getHomeData } from '@/lib/content';
import { BentoCard, Chip, SectionHeader } from '@/components/site/UI';
import { ScrambleName } from '@/components/site/ScrambleName';
import { HeroPet } from '@/components/site/HeroPet';

export default function Home() {
    const { profile, skills, projects } = getHomeData();
    const featuredProjects = projects.filter((project) => project.type === 'project').slice(0, 2);
    const marqueeSkills = skills.slice(0, 16);

    return (
        <>
            <section className="hero-section">
                <HeroPet />
                <div className="hero-kicker hero-item">Hello, I am</div>
                <h1 className="hero-title hero-item">
                    <ScrambleName value="Garvin" /><br />
                    <span>
                        <span className="role-primary">AI Software Developer</span> &amp; Workflow Architect
                    </span>
                </h1>
                <p className="hero-copy hero-item">
                    I am Garvin Dholakiya. I design AI automations, workflow systems, and product experiences that turn manual business work into fast, reliable software.
                </p>
                <div className="hero-actions hero-item">
                    <Link className="btn btn-primary magnetic" href="/projects">
                        View Work <ArrowRight size={18} />
                    </Link>
                    <Link className="btn btn-secondary magnetic" href="/services">
                        Hire Me
                    </Link>
                </div>
            </section>

            <section className="marquee-band">
                <div className="marquee-track">
                    {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
                        <span key={`${skill.name}-${index}`} className="marquee-item">
                            <span />
                            {skill.name}
                        </span>
                    ))}
                </div>
            </section>

            <section className="section-block reveal">
                <SectionHeader
                    title="How I Help"
                    eyebrow="Practical support for teams that want cleaner systems and faster execution."
                />
                <div className="help-grid">
                    <BentoCard className="help-card">
                        <Workflow className="accent-icon" />
                        <h3>Automate Operations</h3>
                        <p>I map repetitive workflows and turn them into reliable automations using n8n, Make.com, APIs, and AI agents.</p>
                    </BentoCard>
                    <BentoCard className="help-card">
                        <Bot className="accent-icon" />
                        <h3>Build AI Assistants</h3>
                        <p>I create business-aware chatbots and LLM workflows that answer, route, summarize, and reduce manual support work.</p>
                    </BentoCard>
                    <BentoCard className="help-card">
                        <Zap className="accent-icon" />
                        <h3>Ship Product Systems</h3>
                        <p>I build useful dashboards, portals, and product interfaces that connect your tools into one clear operating layer.</p>
                    </BentoCard>
                </div>
            </section>

            <section className="section-block reveal">
                <SectionHeader
                    title="Featured Work"
                    eyebrow="Selected projects showing technical depth."
                    action={<Link href="/projects">All Projects <ArrowRight size={16} /></Link>}
                />
                <div className="feature-grid">
                    {featuredProjects.map((project) => (
                        <BentoCard key={project.id} className="project-card">
                            <div className="project-media">
                                <img src={project.imageUrl} alt={project.title} />
                                <div />
                            </div>
                            <div className="project-body">
                                <div className="chip-row">
                                    {project.technologies.slice(0, 3).map((tech) => (
                                        <Chip key={tech}>{tech}</Chip>
                                    ))}
                                </div>
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                                <Link className="text-link" href="/projects">
                                    View Details <ArrowRight size={16} />
                                </Link>
                            </div>
                        </BentoCard>
                    ))}
                </div>
            </section>

            <section className="section-block reveal">
                <SectionHeader
                    title="What Others Say"
                    eyebrow="A few words from teams who needed automation, clarity, and speed."
                />
                <div className="review-grid">
                    <BentoCard className="review-card">
                        <MessageSquareQuote className="accent-icon" />
                        <p>Garvin helped us turn a messy manual process into a workflow that runs with almost no follow-up. The biggest value was how clearly he understood the actual business problem before building anything.</p>
                        <div>
                            <strong>Operations Lead</strong>
                            <span>SaaS Team</span>
                        </div>
                    </BentoCard>
                    <BentoCard className="review-card">
                        <MessageSquareQuote className="accent-icon" />
                        <p>We needed an AI automation prototype quickly, but not something fragile. Garvin delivered a clean system with practical handoff notes, and it saved our team hours every week.</p>
                        <div>
                            <strong>Founder</strong>
                            <span>Automation Client</span>
                        </div>
                    </BentoCard>
                </div>
            </section>

            <section className="section-block reveal">
                <h2 className="center-heading">Core Expertise</h2>
                <div className="expertise-grid">
                    <BentoCard className="expertise-card">
                        <Braces className="accent-icon" />
                        <h3>Custom Software</h3>
                        <p>High-performance web applications built with modern frameworks and maintainable architecture.</p>
                    </BentoCard>
                    <BentoCard className="expertise-card">
                        <Workflow className="accent-icon" />
                        <h3>Workflow Design</h3>
                        <p>Automation systems that remove manual bottlenecks and connect fragmented SaaS tools.</p>
                    </BentoCard>
                    <BentoCard className="expertise-card">
                        <Bot className="accent-icon" />
                        <h3>AI Agents</h3>
                        <p>LLM-powered assistants, RAG workflows, and intelligent task automation for business teams.</p>
                    </BentoCard>
                </div>
            </section>

            <section className="cta-panel reveal">
                <h2>Ready to build something remarkable?</h2>
                <p>{profile.availabilityText}</p>
                <div>
                    <Link className="btn btn-dark magnetic" href="/services">Schedule a Strategy Call</Link>
                    <Link className="btn btn-outline-dark magnetic" href="/projects">View Evidence</Link>
                </div>
            </section>
        </>
    );
}
