import type { Metadata } from 'next';
import './globals.css';
import { SiteShell } from '@/components/site/SiteShell';

const siteUrl = 'https://garvin.jinnityai.com';

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    applicationName: 'Garvin Dholakiya Portfolio',
    title: {
        default: 'Garvin Dholakiya | AI Software Developer & Workflow Architect',
        template: '%s | Garvin Dholakiya',
    },
    description: 'Garvin Dholakiya is an AI Software Developer and Workflow Architect building AI agents, automation systems, React Native apps, Swift iOS apps, and full-stack products.',
    keywords: [
        'Garvin Dholakiya',
        'Garvin',
        'AI Software Developer',
        'Workflow Architect',
        'AI Workflow Expert',
        'AI Automation Engineer',
        'React Native Developer',
        'Swift iOS Developer',
        'Meta AI Glasses app developer',
        'Claude expert',
        'Codex expert',
        'Google AI Studio',
        'Gemini',
        'Prompt Engineer',
        'n8n automation',
        'Make.com automation',
        'mypostshare.com',
    ],
    authors: [{ name: 'Garvin Dholakiya', url: siteUrl }],
    creator: 'Garvin Dholakiya',
    publisher: 'Garvin Dholakiya',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteUrl,
        siteName: 'Garvin Dholakiya',
        title: 'Garvin Dholakiya | AI Software Developer & Workflow Architect',
        description: 'Portfolio of Garvin Dholakiya, an AI Software Developer and Workflow Architect building AI automation, mobile apps, and full-stack product systems.',
        images: [
            {
                url: '/assets/project_images/mypostshare.png',
                width: 1200,
                height: 630,
                alt: 'Garvin Dholakiya AI software developer portfolio',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Garvin Dholakiya | AI Software Developer & Workflow Architect',
        description: 'AI automation, workflow architecture, mobile apps, prompt engineering, and full-stack product systems by Garvin Dholakiya.',
        images: ['/assets/project_images/mypostshare.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
        },
    },
    icons: {
        icon: '/favicon.png',
    },
};

const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}/#garvin-dholakiya`,
    name: 'Garvin Dholakiya',
    givenName: 'Garvin',
    familyName: 'Dholakiya',
    url: siteUrl,
    image: `${siteUrl}/favicon.png`,
    jobTitle: 'AI Software Developer & Workflow Architect',
    description: 'Garvin Dholakiya builds AI automation systems, workflow architecture, React Native mobile apps, Swift iOS apps, AI agents, and full-stack product experiences.',
    knowsAbout: [
        'AI Automation',
        'Workflow Architecture',
        'AI Agents',
        'Prompt Engineering',
        'Claude',
        'Codex',
        'Google AI Studio',
        'Gemini',
        'React Native',
        'Swift iOS',
        'Meta AI Glasses applications',
        'Next.js',
        'n8n',
        'Make.com',
        'mypostshare.com',
    ],
    sameAs: [
        'https://mypostshare.com',
    ],
};

const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: 'Garvin Dholakiya Portfolio',
    url: siteUrl,
    description: 'Portfolio, projects, case studies, and services by Garvin Dholakiya.',
    author: {
        '@id': `${siteUrl}/#garvin-dholakiya`,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            <body>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify([personJsonLd, websiteJsonLd]) }}
                />
                <SiteShell>{children}</SiteShell>
            </body>
        </html>
    );
}
