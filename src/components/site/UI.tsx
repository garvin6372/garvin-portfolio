import type { ReactNode } from 'react';

export function BentoCard({ children, className = '' }: { children: ReactNode; className?: string }) {
    return <div className={`bento-card ${className}`}>{children}</div>;
}

export function Chip({ children, subtle = false }: { children: ReactNode; subtle?: boolean }) {
    return <span className={subtle ? 'chip chip-subtle' : 'chip'}>{children}</span>;
}

export function SectionHeader({
    title,
    eyebrow,
    action,
}: {
    title: string;
    eyebrow?: string;
    action?: ReactNode;
}) {
    return (
        <div className="section-header">
            <div>
                <h2>{title}</h2>
                {eyebrow && <p>{eyebrow}</p>}
            </div>
            {action && <div className="section-action">{action}</div>}
        </div>
    );
}
