"use client";

import React from 'react';
import { UserProfile, ProjectCategory } from '@/types';
import { PROJECTS, TESTIMONIALS, CURRENT_STATUS, SKILLS } from '@/lib/constants';

interface RightPanelProps {
    user: UserProfile;
    setCategory?: (category: ProjectCategory) => void;
}

export const RightPanel: React.FC<RightPanelProps> = ({ user, setCategory }) => {
    const featuredProjects = PROJECTS.filter(p => p.type === 'project').slice(0, 2); // Show top 2 as per design
    const featuredSkills = SKILLS.slice(0, 6);

    const handleCategoryClick = () => {
        if (setCategory) {
            setCategory('Projects');
        }
    };

    return (
        <div className="hidden lg:block w-[320px] pt-8 pl-8 transition-colors">

            {/* 1. Profile Header */}
            <div className="flex items-start gap-4 mb-6">
                <div className="relative">
                    <img src={user.avatarUrl} alt={user.username} className="w-14 h-14 rounded-full object-cover border border-gray-100 dark:border-neutral-800" />
                    <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white dark:border-black"></div>
                </div>
                <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-900 dark:text-white">{user.fullName}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mb-1">{user.title}</span>
                    <span className="text-[10px] font-bold text-green-600 dark:text-green-500">Open for work</span>
                </div>
            </div>

            <div className="mb-8 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                {user.tagline} • {user.location}
            </div>

            {/* 2. Stats - Row Layout - Updated visual weight */}
            <div className="flex justify-between text-center mb-8 border-b border-gray-100 dark:border-neutral-800 pb-6 px-1">
                <div>
                    <span className="block text-xl font-bold text-gray-900 dark:text-white mb-1">{user.stats.projects}</span>
                    <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wide">Projects</span>
                </div>
                <div>
                    <span className="block text-xl font-bold text-gray-900 dark:text-white mb-1">{user.stats.experience}</span>
                    <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wide">Experience</span>
                </div>
                <div>
                    <span className="block text-xl font-bold text-gray-900 dark:text-white mb-1">{user.stats.techStack}</span>
                    <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wide">Tech Stack</span>
                </div>
                <div>
                    <span className="block text-xl font-bold text-gray-900 dark:text-white mb-1">{user.stats.liveApps}</span>
                    <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wide">Live Apps</span>
                </div>
            </div>

            {/* 3. Tech Stack */}
            <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-bold text-gray-500 dark:text-gray-400">Tech Stack</span>
                    <button onClick={handleCategoryClick} className="text-xs font-semibold text-blue-500 hover:text-blue-700 transition-colors">Filter Feed</button>
                </div>
                <div className="flex flex-wrap gap-2">
                    {featuredSkills.map((skill, idx) => (
                        <span
                            key={idx}
                            className="cursor-pointer px-3 py-1.5 bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 text-xs font-semibold text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
                        >
                            {skill.name}
                        </span>
                    ))}
                </div>
            </div>

            {/* 4. Featured Projects */}
            <div className="mb-8">
                <span className="block text-sm font-bold text-gray-500 dark:text-gray-400 mb-3">Featured Projects</span>
                <div className="space-y-4">
                    {featuredProjects.map(proj => (
                        <div key={proj.id} className="flex items-start gap-3 group cursor-pointer hover:bg-gray-50 dark:hover:bg-neutral-900 rounded-lg p-1 -ml-1 transition-colors">
                            <img src={proj.imageUrl} alt={proj.title} className="w-10 h-10 rounded-md object-cover" />
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">{proj.title}</span>
                                <span className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-tight">{proj.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 5. Currently Working On */}
            <div className="mb-8 bg-blue-50 dark:bg-blue-900/10 rounded-lg p-4 border border-blue-100 dark:border-blue-900/20">
                <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 block mb-2 uppercase tracking-wide">Currently Working On</span>
                <div className="flex items-start gap-3">
                    <span className="text-lg animate-pulse">{CURRENT_STATUS.emoji}</span>
                    <span className="text-sm text-gray-900 dark:text-gray-100 font-medium leading-snug">{CURRENT_STATUS.text}</span>
                </div>
            </div>

            {/* 6. Testimonial */}
            {TESTIMONIALS.length > 0 && (
                <div className="mb-8">
                    <p className="text-xs italic text-gray-600 dark:text-gray-400 mb-2 leading-relaxed">"{TESTIMONIALS[0].text}"</p>
                    <div className="flex flex-col">
                        <span className="text-xs font-bold text-gray-900 dark:text-white">{TESTIMONIALS[0].author}</span>
                        <span className="text-[10px] text-gray-500 dark:text-gray-500">{TESTIMONIALS[0].role}</span>
                    </div>
                </div>
            )}

            {/* Footer Copyright */}
            <div className="mt-12 text-[10px] text-gray-300 dark:text-gray-700">
                © 2024 GARVIN DHOLAKIYA
            </div>
        </div>
    );
};
