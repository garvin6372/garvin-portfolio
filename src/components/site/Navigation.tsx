'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const links = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/services', label: 'Services' },
    { href: '/blog', label: 'Blog' },
];

export function Navigation() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    useEffect(() => {
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setMobileOpen(false);
        };

        window.addEventListener('keydown', closeOnEscape);
        return () => window.removeEventListener('keydown', closeOnEscape);
    }, []);

    return (
        <header className="site-header">
            <nav className="site-nav">
                <Link className="brand" href="/">GARVIN.IO</Link>
                <div className="nav-links">
                    {links.map((link) => {
                        const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
                        return (
                            <Link key={link.href} className={active ? 'active' : ''} href={link.href}>
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
                <div className="nav-actions">
                    <Link className="nav-secondary" href="/projects">View Work</Link>
                    <Link className="nav-primary magnetic" href="/services">Hire Me</Link>
                </div>
                <button
                    className={`mobile-menu-button ${mobileOpen ? 'active' : ''}`}
                    type="button"
                    aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
                    aria-controls="mobile-nav-panel"
                    aria-expanded={mobileOpen}
                    onClick={() => setMobileOpen((open) => !open)}
                >
                    {mobileOpen ? <X size={18} /> : <Menu size={18} />}
                </button>
            </nav>
            <div id="mobile-nav-panel" className={`mobile-nav-panel ${mobileOpen ? 'open' : ''}`}>
                <div className="mobile-nav-links">
                    {links.map((link) => {
                        const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
                        return (
                            <Link key={link.href} className={active ? 'active' : ''} href={link.href}>
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
                <div className="mobile-nav-actions">
                    <Link href="/projects">View Work</Link>
                    <Link href="/services">Hire Me</Link>
                </div>
            </div>
        </header>
    );
}
