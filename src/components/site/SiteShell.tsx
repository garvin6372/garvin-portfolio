import type { ReactNode } from 'react';
import { Footer } from './Footer';
import { Navigation } from './Navigation';
import { SiteEffects } from './SiteEffects';

export function SiteShell({ children }: { children: ReactNode }) {
    return (
        <>
            <SiteEffects />
            <div className="cursor-glow" id="cursor-glow" />
            <div className="site-bg" aria-hidden="true">
                <div className="dot-pattern" />
                <div className="radial-wash" />
            </div>
            <div className="site-wrap">
                <Navigation />
                <main className="site-main">{children}</main>
                <Footer />
            </div>
        </>
    );
}
