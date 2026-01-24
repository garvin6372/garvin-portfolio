"use client";

import React from 'react';
import { Experience } from '@/types';

interface ExperienceViewProps {
    experiences: Experience[];
}

export const ExperienceView: React.FC<ExperienceViewProps> = ({ experiences }) => {
    return (
        <div className="max-w-[470px] mx-auto pt-4 sm:pt-8 px-4 w-full pb-20">
            <h2 className="text-xl font-bold mb-6 px-2 dark:text-white">Experience</h2>
            <div className="relative border-l border-gray-200 dark:border-neutral-800 ml-3 space-y-8">
                {experiences.map((exp) => (
                    <div key={exp.id} className="mb-10 ml-6 relative">
                        <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-10 bg-white dark:bg-black border border-gray-200 dark:border-neutral-800 shadow-sm overflow-hidden">
                            <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                        </span>
                        <div className="bg-white dark:bg-neutral-900 p-4 rounded-lg border border-gray-100 dark:border-neutral-800 shadow-sm">
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                                {exp.role}
                            </h3>
                            <span className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">{exp.company}</span>
                            <time className="block mb-3 text-xs font-normal leading-none text-gray-400 dark:text-gray-500">{exp.period}</time>
                            <p className="mb-4 text-base font-normal text-gray-600 dark:text-gray-300">{exp.description}</p>
                            <div className="flex gap-2">
                                <span className="text-xs bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded">Full-time</span>
                                <span className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded">Remote</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
