"use client";

import React from 'react';
import { Heart } from 'lucide-react';
import { ResumeIcon } from './Icons';

import { ViewType } from '@/types';

interface TopBarProps {
    setActiveView: (view: ViewType) => void;
}

export const TopBar: React.FC<TopBarProps> = ({ setActiveView }) => {
    return (
        <div className="fixed top-0 left-0 right-0 bg-white dark:bg-black border-b border-gray-200 dark:border-neutral-800 px-4 h-[60px] flex justify-between items-center z-50 md:hidden transition-colors">
            <span className="text-lg font-bold dark:text-white">Garvin Dholakiya</span>
            <div className="flex items-center gap-4">
                <button className="relative">
                    <Heart size={24} className="text-gray-900 dark:text-white" />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-black"></span>
                </button>
                <button
                    onClick={() => setActiveView('resume')}
                    className="text-gray-900 dark:text-white hover:opacity-70 transition-opacity"
                >
                    <ResumeIcon />
                </button>
            </div>
        </div>
    );
};
