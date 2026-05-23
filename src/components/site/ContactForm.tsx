'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

const webhookUrl = 'https://aikit.jinnityai.com/webhook/7e66cc38-91e7-45a9-924c-d4ac959b8f8e';

export function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

    async function submit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setStatus('sending');
        const form = event.currentTarget;
        const data = Object.fromEntries(new FormData(form).entries());

        try {
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error('Failed to send message');
            form.reset();
            setStatus('sent');
        } catch {
            setStatus('error');
        }
    }

    return (
        <form className="contact-form" onSubmit={submit}>
            <label>
                Name
                <input name="name" required placeholder="Your name" />
            </label>
            <label>
                Email
                <input name="email" required type="email" placeholder="you@example.com" />
            </label>
            <label>
                Project Type
                <select name="projectType">
                    <option>AI automation</option>
                    <option>Full-stack product</option>
                    <option>Workflow audit</option>
                    <option>Consultation</option>
                </select>
            </label>
            <label>
                Message
                <textarea name="message" required rows={5} placeholder="Tell me what you want to build." />
            </label>
            <button className="btn btn-primary" disabled={status === 'sending'} type="submit">
                <Send size={17} />
                {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'sent' && <p className="form-status success">Message sent. I will get back to you soon.</p>}
            {status === 'error' && <p className="form-status error">Something went wrong. Please try again.</p>}
        </form>
    );
}
