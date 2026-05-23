'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export function SiteEffects() {
    const pathname = usePathname();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const loaderTimer = window.setTimeout(() => setLoading(false), pathname === '/' ? 1150 : 620);

        return () => window.clearTimeout(loaderTimer);
    }, [pathname]);

    useEffect(() => {
        const glow = document.getElementById('cursor-glow');
        const onMouseMove = (event: MouseEvent) => {
            if (!glow) return;
            glow.style.left = `${event.clientX}px`;
            glow.style.top = `${event.clientY}px`;
            glow.style.opacity = event.clientY < 760 ? '1' : '0';
        };

        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

        const activateVisibleElements = () => {
            document.querySelectorAll('.reveal, .hero-item').forEach((element) => {
                const rect = element.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.94 && rect.bottom > 0) {
                    element.classList.add('active');
                }
                observer.observe(element);
            });
        };

        const frame = window.requestAnimationFrame(activateVisibleElements);
        const timers = [120, 360, 900, 1320].map((delay) => window.setTimeout(activateVisibleElements, delay));

        return () => {
            window.cancelAnimationFrame(frame);
            timers.forEach((timer) => window.clearTimeout(timer));
            observer.disconnect();
        };
    }, [pathname]);

    return (
        <div className={`page-loader ${loading ? 'active' : ''}`} aria-hidden={!loading}>
            <div className="loader-panel">
                <div className="loader-grid" aria-hidden="true">
                    <span>const</span>
                    <span>portfolio</span>
                    <span>=</span>
                    <span>"Garvin"</span>
                </div>
                <div className="loader-core">
                    <span className="loader-ring" />
                    <strong>GARVIN.IO</strong>
                    <small>compiling interface</small>
                </div>
                <div className="loader-bar" aria-hidden="true">
                    <span />
                </div>
            </div>
        </div>
    );
}
