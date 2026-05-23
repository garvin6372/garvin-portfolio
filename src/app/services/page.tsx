import Link from 'next/link';
import { ArrowRight, Bot, Code2, MessagesSquare, Workflow } from 'lucide-react';
import { ContactForm } from '@/components/site/ContactForm';
import { BentoCard, Chip } from '@/components/site/UI';
import { getExperience, getProfile, getSkills } from '@/lib/content';

export const metadata = {
    title: 'Services | Garvin Dholakiya',
    description: 'AI automation, workflow design, full-stack development, and technical consultation services.',
};

export default function ServicesPage() {
    const profile = getProfile();
    const skills = getSkills();
    const experience = getExperience();
    const services = [
        {
            icon: <MessagesSquare />,
            title: 'Technical Consultation',
            copy: 'Map product bottlenecks, automation opportunities, and high-value AI integration paths.',
        },
        {
            icon: <Workflow />,
            title: 'Custom n8n Automation',
            copy: 'Build self-hosted or cloud workflows that connect your SaaS stack and reduce manual operations.',
            highlight: true,
        },
        {
            icon: <Code2 />,
            title: 'Full-Stack Development',
            copy: 'Ship polished interfaces, APIs, dashboards, and scalable business tools with modern frameworks.',
        },
        {
            icon: <Bot />,
            title: 'AI Agents & LLM Workflows',
            copy: 'Design assistants, support bots, RAG flows, and task agents that produce measurable business output.',
        },
    ];

    return (
        <div className="route-page">
            <section className="page-hero services-hero">
                <span className="eyebrow">SYSTEM_SERVICES_V2.0</span>
                <h1>Precision systems for <span>faster business.</span></h1>
                <p>{profile.mission}</p>
            </section>

            <section className="services-grid">
                {services.map((service) => (
                    <BentoCard key={service.title} className={service.highlight ? 'service-card highlighted' : 'service-card'}>
                        <div className="service-icon">{service.icon}</div>
                        <h2>{service.title}</h2>
                        <p>{service.copy}</p>
                        <div className="chip-row">
                            {skills.slice(0, 4).map((skill) => <Chip key={`${service.title}-${skill.name}`} subtle>{skill.name}</Chip>)}
                        </div>
                    </BentoCard>
                ))}
            </section>

            <section className="protocol-section">
                <div>
                    <h2>Common Protocols</h2>
                    <p>Automation projects usually start with workflow discovery, move into a working prototype, and finish with documentation plus handoff.</p>
                </div>
                <div className="protocol-list">
                    {experience.slice(0, 3).map((item) => (
                        <BentoCard key={`${item.role}-${item.company}`} className="protocol-card">
                            <span>{item.period}</span>
                            <h3>{item.role}</h3>
                            <p>{item.company}</p>
                        </BentoCard>
                    ))}
                </div>
            </section>

            <section className="contact-panel">
                <div>
                    <span className="eyebrow">CONTACT_INTERFACE</span>
                    <h2>Ready to upgrade your stack?</h2>
                    <p>Select a service direction or send a custom engineering proposal request.</p>
                    <Link className="text-link" href="/projects">Review project evidence <ArrowRight size={16} /></Link>
                </div>
                <ContactForm />
            </section>
        </div>
    );
}
