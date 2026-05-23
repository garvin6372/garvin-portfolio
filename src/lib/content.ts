import fs from 'node:fs';
import path from 'node:path';

export type ProjectContent = {
    id: string;
    slug: string;
    title: string;
    category: string;
    type: 'project' | 'achievement' | 'update';
    imageUrl: string;
    images: string[];
    description: string;
    longDescription: string;
    technologies: string[];
    likes: number;
    comments: number;
    date: string;
    demoUrl: string;
    repoUrl: string;
    body: string;
};

export type SkillContent = {
    name: string;
    category: 'AI & Automation' | 'Frontend' | 'Backend & APIs' | 'Productivity & Workflow';
    description: string;
};

export type ExperienceContent = {
    role: string;
    company: string;
    period: string;
    description: string;
};

export type ProfileContent = {
    fullName: string;
    title: string;
    location: string;
    workingHours: string;
    bio: string;
    mission: string;
    availabilityText: string;
    stats: {
        projects: string;
        experience: string;
        techStack: string;
        liveApps: string;
    };
};

const root = process.cwd();
const contentDir = path.join(root, 'content');
const projectDir = path.join(contentDir, 'projects');
const blogDir = path.join(contentDir, 'blog');

function readContentFile(filePath: string) {
    return fs.readFileSync(filePath, 'utf8');
}

function splitFrontmatter(raw: string) {
    if (!raw.startsWith('---')) {
        return { frontmatter: '', body: raw.trim() };
    }

    const end = raw.indexOf('\n---', 3);
    if (end === -1) {
        return { frontmatter: '', body: raw.trim() };
    }

    return {
        frontmatter: raw.slice(3, end).trim(),
        body: raw.slice(end + 4).trim(),
    };
}

function parseFrontmatter(raw: string) {
    const result: Record<string, string | string[]> = {};
    const lines = raw.split(/\r?\n/);
    let activeArrayKey = '';

    for (const line of lines) {
        const arrayItem = line.match(/^\s*-\s+(.+)$/);
        if (arrayItem && activeArrayKey) {
            const existing = result[activeArrayKey];
            result[activeArrayKey] = Array.isArray(existing) ? [...existing, arrayItem[1].trim()] : [arrayItem[1].trim()];
            continue;
        }

        const pair = line.match(/^([\w-]+):\s*(.*)$/);
        if (!pair) continue;

        activeArrayKey = '';
        const [, key, value] = pair;
        if (!value) {
            activeArrayKey = key;
            result[key] = [];
            continue;
        }

        result[key] = value.trim();
    }

    return result;
}

function stripMarkdown(value: string) {
    return value
        .replace(/\*\*(.*?)\*\*/g, '$1')
        .replace(/[`#>-]/g, '')
        .trim();
}

function extractSection(body: string, heading: string) {
    const escapedHeading = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = new RegExp(`### ${escapedHeading}\\s*([\\s\\S]*?)(?=\\n### |\\n## |$)`, 'i');
    return body.match(pattern)?.[1].trim() ?? '';
}

function extractListItems(section: string) {
    return section
        .split(/\r?\n/)
        .map((line) => line.match(/^-\s+(.*)$/)?.[1])
        .filter((line): line is string => Boolean(line))
        .map(stripMarkdown);
}

function extractMetadataNumber(section: string, label: string, fallback: number) {
    const value = section.match(new RegExp(`\\*\\*${label}:\\*\\*\\s*([^\\n]+)`, 'i'))?.[1];
    return Number.parseInt(value ?? '', 10) || fallback;
}

function extractMetadataText(section: string, label: string, fallback: string) {
    return section.match(new RegExp(`\\*\\*${label}:\\*\\*\\s*([^\\n]+)`, 'i'))?.[1]?.trim() ?? fallback;
}

export function getProjects(): ProjectContent[] {
    return fs.readdirSync(projectDir)
        .filter((file) => file.endsWith('.md'))
        .map((file) => {
            const raw = readContentFile(path.join(projectDir, file));
            const { frontmatter, body } = splitFrontmatter(raw);
            const data = parseFrontmatter(frontmatter);
            const metadata = extractSection(body, 'Metadata');
            const title = String(data.title ?? body.match(/^##\s+(.+)$/m)?.[1] ?? file.replace(/\.md$/, ''));
            const id = String(data.id ?? file.replace(/\.md$/, ''));
            const summary = stripMarkdown(extractSection(body, 'Summary'));
            const details = stripMarkdown(extractSection(body, 'Details'));
            const images = Array.isArray(data.images) ? data.images : [];
            const imageUrl = String(data.image ?? images[0] ?? '/assets/project_images/project_1_1.png');

            return {
                id,
                slug: id,
                title,
                category: String(data.category ?? 'Projects'),
                type: String(data.type ?? 'project') as ProjectContent['type'],
                imageUrl,
                images: images.length ? images : [imageUrl],
                description: summary,
                longDescription: details || summary,
                technologies: extractListItems(extractSection(body, 'Technology Stack')),
                likes: extractMetadataNumber(metadata, 'Likes', 0),
                comments: extractMetadataNumber(metadata, 'Comments', 0),
                date: extractMetadataText(metadata, 'Date', 'Recent'),
                demoUrl: extractMetadataText(metadata, 'Demo', '#'),
                repoUrl: extractMetadataText(metadata, 'Repo', '#'),
                body,
            };
        })
        .sort((a, b) => {
            if (a.id === 'intro-post') return -1;
            if (b.id === 'intro-post') return 1;
            if (a.id === 'proj12') return -1;
            if (b.id === 'proj12') return 1;
            return a.title.localeCompare(b.title);
        });
}

export function getProjectBySlug(slug: string) {
    return getProjects().find((project) => project.slug === slug);
}

export function getBlogPosts(): ProjectContent[] {
    if (!fs.existsSync(blogDir)) return [];

    return fs.readdirSync(blogDir)
        .filter((file) => file.endsWith('.md'))
        .map((file) => {
            const raw = readContentFile(path.join(blogDir, file));
            const { frontmatter, body } = splitFrontmatter(raw);
            const data = parseFrontmatter(frontmatter);
            const metadata = extractSection(body, 'Metadata');
            const title = String(data.title ?? body.match(/^##\s+(.+)$/m)?.[1] ?? file.replace(/\.md$/, ''));
            const id = String(data.id ?? file.replace(/\.md$/, ''));
            const summary = stripMarkdown(extractSection(body, 'Summary'));
            const problem = stripMarkdown(extractSection(body, 'Problem'));
            const solution = stripMarkdown(extractSection(body, 'Solution'));
            const results = stripMarkdown(extractSection(body, 'Results'));
            const details = [problem, solution, results].filter(Boolean).join('\n\n');
            const images = Array.isArray(data.images) ? data.images : [];
            const imageUrl = String(data.image ?? images[0] ?? '/assets/project_images/mypostshare.png');

            return {
                id,
                slug: id,
                title,
                category: String(data.category ?? 'Case Study'),
                type: 'project' as const,
                imageUrl,
                images: images.length ? images : [imageUrl],
                description: summary,
                longDescription: details || summary,
                technologies: extractListItems(extractSection(body, 'Technology Stack')),
                likes: extractMetadataNumber(metadata, 'Likes', 0),
                comments: extractMetadataNumber(metadata, 'Comments', 0),
                date: extractMetadataText(metadata, 'Date', 'Recent'),
                demoUrl: extractMetadataText(metadata, 'Demo', '#'),
                repoUrl: extractMetadataText(metadata, 'Repo', '#'),
                body,
            };
        })
        .sort((a, b) => a.title.localeCompare(b.title));
}

export function getBlogPostBySlug(slug: string) {
    return getBlogPosts().find((post) => post.slug === slug);
}

export function getProfile(): ProfileContent {
    const raw = readContentFile(path.join(contentDir, 'about.md'));
    const { body } = splitFrontmatter(raw);

    return {
        fullName: 'Garvin Dholakiya',
        title: stripMarkdown(extractSection(body, 'Tagline')) || 'AI Workflow Expert | Vibe Coder',
        location: 'Gujarat, India',
        workingHours: '10 AM - 8 PM IST',
        bio: stripMarkdown(extractSection(body, 'Bio')),
        mission: stripMarkdown(extractSection(body, 'Mission')),
        availabilityText: 'Open for new automation, AI agent, and product engineering work.',
        stats: {
            projects: '25+',
            experience: '3+ Years',
            techStack: '15+',
            liveApps: '12+',
        },
    };
}

export function getSkills(): SkillContent[] {
    const raw = readContentFile(path.join(contentDir, 'skills.md'));
    const { body } = splitFrontmatter(raw);
    const groups: SkillContent[] = [];
    let category: SkillContent['category'] = 'Productivity & Workflow';

    body.split(/\r?\n/).forEach((line) => {
        const heading = line.match(/^###\s+(.+)$/)?.[1] as SkillContent['category'] | undefined;
        if (heading) {
            category = heading;
            return;
        }

        const item = line.match(/^-\s+\*\*(.+?)\*\*\s+(?:--|-|—|â€”)\s+(.+)$/);
        if (item) {
            groups.push({ name: item[1], description: stripMarkdown(item[2]), category });
            return;
        }

        const simple = line.match(/^-\s+(.+)$/);
        if (simple) {
            groups.push({ name: stripMarkdown(simple[1]), description: '', category });
        }
    });

    return groups;
}

export function getExperience(): ExperienceContent[] {
    const raw = readContentFile(path.join(contentDir, 'experience.md'));
    const { body } = splitFrontmatter(raw);
    const chunks = body.split(/\n---\n/).map((chunk) => chunk.trim()).filter(Boolean);

    return chunks.map((chunk) => {
        const role = chunk.match(/^###\s+(.+)$/m)?.[1] ?? 'Software Developer';
        const companyPeriod = chunk.match(/\*\*(.+?)\*\*\s+[^\w]*(.+)$/m);
        const description = chunk.split(/\r?\n/).slice(3).join(' ').trim();

        return {
            role,
            company: companyPeriod?.[1] ?? 'Freelance',
            period: companyPeriod?.[2] ?? 'Present',
            description,
        };
    });
}

export function getHomeData() {
    return {
        profile: getProfile(),
        skills: getSkills(),
        projects: getProjects(),
        experience: getExperience(),
    };
}
