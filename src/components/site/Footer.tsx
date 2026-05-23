import Link from 'next/link';

export function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <Link className="brand footer-brand" href="/">GARVIN.IO</Link>
                <p>Built with technical precision for AI automation and product engineering.</p>
                <div>
                    <a href="https://github.com/" target="_blank" rel="noreferrer">Github</a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
                    <Link href="/services">Contact</Link>
                </div>
            </div>
            <Link className="floating-contact" href="/services" aria-label="Contact Garvin">
                ✉
            </Link>
        </footer>
    );
}
