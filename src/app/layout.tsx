import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Garvin Dholakiya | AI Workflow Expert',
    description: 'AI Workflow Expert & Vibe Coder. Building smart automation systems to help businesses work faster & smarter.',
    icons: {
        icon: '/favicon.png', // Assuming favicon.png will be moved to public
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}
