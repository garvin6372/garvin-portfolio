"use client";

import React, { useRef, useState, useEffect } from 'react';
import { Skill } from '@/types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface StoriesProps {
    skills: Skill[];
}

export const Stories: React.FC<StoriesProps> = ({ skills }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [showLeft, setShowLeft] = useState(false);
    const [showRight, setShowRight] = useState(true);

    const checkScroll = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        setShowLeft(scrollLeft > 0);
        setShowRight(scrollLeft < scrollWidth - clientWidth - 10);
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, [skills]);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 200;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
            setTimeout(checkScroll, 300);
        }
    };

    return (
        <div className="relative max-w-[470px] mx-auto mb-6 group">
            {/* Scroll Buttons */}
            {showLeft && (
                <button
                    onClick={() => scroll('left')}
                    className="hidden sm:block absolute -left-3 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-neutral-800 rounded-full p-1.5 shadow-md border border-gray-100 dark:border-neutral-700 text-gray-700 dark:text-gray-200 transition-all hover:scale-110"
                >
                    <ChevronLeft size={20} />
                </button>
            )}

            {showRight && (
                <button
                    onClick={() => scroll('right')}
                    className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-neutral-800 rounded-full p-1.5 shadow-md border border-gray-100 dark:border-neutral-700 text-gray-700 dark:text-gray-200 transition-all hover:scale-110"
                >
                    <ChevronRight size={20} />
                </button>
            )}

            {/* Stories Container */}
            <div className="bg-white dark:bg-black border-b border-gray-200 dark:border-neutral-800 sm:border sm:rounded-lg py-4 overflow-hidden transition-colors">
                <div
                    ref={scrollRef}
                    onScroll={checkScroll}
                    className="flex gap-4 overflow-x-auto px-4 no-scrollbar scroll-smooth"
                >
                    {skills.map((skill, idx) => {
                        // Determine ring color based on skill name or index for variety
                        const ringColors = [
                            'border-purple-500',
                            'border-orange-500',
                            'border-yellow-500',
                            'border-blue-500',
                            'border-green-500',
                            'border-pink-500'
                        ];
                        const ringColor = ringColors[idx % ringColors.length];

                        return (
                            <div key={idx} className="flex flex-col items-center flex-shrink-0 cursor-pointer group/item">
                                <div className={`w-[66px] h-[66px] rounded-full p-[2px] mb-1 border-2 ${ringColor} group-hover/item:scale-105 transition-transform duration-200`}>
                                    <div className="w-full h-full rounded-full bg-white dark:bg-black flex items-center justify-center border-2 border-white dark:border-black overflow-hidden relative">
                                        {skill.icon ? (
                                            <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain p-1.5" />
                                        ) : (
                                            <span className="font-bold text-xs text-gray-900 dark:text-white">
                                                {skill.name.substring(0, 2).toUpperCase()}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <span className="text-xs text-gray-800 dark:text-gray-200 truncate w-[70px] text-center">
                                    {skill.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
