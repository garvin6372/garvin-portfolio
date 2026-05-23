'use client';

import { useEffect, useState } from 'react';

const glyphs = '{}[]<>/\\|$#@01ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export function ScrambleName({ value = 'Garvin' }: { value?: string }) {
    const [display, setDisplay] = useState(value);

    useEffect(() => {
        let frame = 0;
        const totalFrames = 42;
        const interval = window.setInterval(() => {
            frame += 1;
            const settled = Math.floor((frame / totalFrames) * value.length);
            const next = value
                .split('')
                .map((char, index) => {
                    if (index < settled) return char;
                    return glyphs[Math.floor(Math.random() * glyphs.length)];
                })
                .join('');

            setDisplay(next);
            if (frame >= totalFrames) {
                setDisplay(value);
                window.clearInterval(interval);
            }
        }, 42);

        return () => window.clearInterval(interval);
    }, [value]);

    return (
        <span className="scramble-name" aria-label={value}>
            {display}
        </span>
    );
}
