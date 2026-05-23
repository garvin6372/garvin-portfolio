import type { MetadataRoute } from 'next';
import { getBlogPosts } from '@/lib/content';

const siteUrl = 'https://garvin.jinnityai.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();
    const routes: MetadataRoute.Sitemap = [
        {
            url: siteUrl,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${siteUrl}/projects`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${siteUrl}/services`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${siteUrl}/blog`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
    ];

    const articles = getBlogPosts().map((post) => ({
        url: `${siteUrl}/blog/${post.id}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.72,
    }));

    return [...routes, ...articles];
}
