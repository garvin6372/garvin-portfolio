"use client";

import { useEffect } from "react";

interface LinkedInBadgeProps {
    theme?: 'light' | 'dark';
}

export default function LinkedInBadge({ theme = 'light' }: LinkedInBadgeProps) {
    useEffect(() => {
        // Load LinkedIn badge script
        const script = document.createElement("script");
        script.src = "https://platform.linkedin.com/badges/js/profile.js";
        script.async = true;
        script.defer = true;

        document.body.appendChild(script);

        return () => {
            // Check if child still exists before removing to avoid errors if already removed
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <div
            className="badge-base LI-profile-badge"
            data-locale="en_US"
            data-size="medium"
            data-theme={theme}
            data-type="HORIZONTAL"
            data-vanity="garvin-dholakiya"
            data-version="v1"
        >
            <a
                className="badge-base__link LI-simple-link"
                href="https://in.linkedin.com/in/garvin-dholakiya"
                target="_blank"
                rel="noopener noreferrer"
            />
        </div>
    );
}
