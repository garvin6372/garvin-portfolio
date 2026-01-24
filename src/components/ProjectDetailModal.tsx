"use client";

import React, { useRef, useState } from 'react';
import { Project } from '@/types';
import { X, ChevronLeft, ChevronRight, Github, ExternalLink } from 'lucide-react';

interface ProjectDetailModalProps {
    project: Project;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
    hasNext: boolean;
    hasPrev: boolean;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
    project, onClose, onNext, onPrev, hasNext, hasPrev
}) => {
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    const images = project.images && project.images.length > 0 ? project.images : [project.imageUrl];

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentImgIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    // Swipe logic
    const onTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const onTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const onTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;
        const distance = touchStartX.current - touchEndX.current;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            if (images.length > 1 && currentImgIndex < images.length - 1) {
                nextImage();
            } else if (hasNext) {
                onNext();
                setCurrentImgIndex(0);
            }
        } else if (isRightSwipe) {
            if (images.length > 1 && currentImgIndex > 0) {
                prevImage();
            } else if (hasPrev) {
                onPrev();
                setCurrentImgIndex(0);
            }
        }

        // Reset
        touchStartX.current = null;
        touchEndX.current = null;
    };

    return (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-0 sm:p-4 animate-fade-in">
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 z-[110] text-white p-2 hover:bg-white/10 rounded-full transition-colors active:scale-90"
            >
                <X size={32} />
            </button>

            {/* Main Project Nav Buttons (Desktop) */}
            {hasPrev && (
                <button
                    onClick={() => { onPrev(); setCurrentImgIndex(0); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-[110] text-white p-3 hover:bg-white/10 rounded-full hidden lg:block transition-colors active:scale-90"
                    title="Previous Project"
                >
                    <ChevronLeft size={48} />
                </button>
            )}
            {hasNext && (
                <button
                    onClick={() => { onNext(); setCurrentImgIndex(0); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-[110] text-white p-3 hover:bg-white/10 rounded-full hidden lg:block transition-colors active:scale-90"
                    title="Next Project"
                >
                    <ChevronRight size={48} />
                </button>
            )}

            {/* Content Container */}
            <div
                className="bg-white dark:bg-neutral-900 w-full h-full sm:h-auto sm:max-h-[90vh] sm:max-w-6xl rounded-none sm:rounded-xl overflow-hidden flex flex-col md:flex-row relative shadow-2xl transition-colors animate-scale-in origin-center"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                {/* Image Section */}
                <div className="w-full md:w-[65%] h-[40vh] md:h-auto bg-black flex items-center justify-center relative group">
                    <img
                        key={images[currentImgIndex]}
                        src={images[currentImgIndex]}
                        alt={`${project.title} - ${currentImgIndex + 1}`}
                        className="w-full h-full object-contain animate-fade-in"
                    />

                    {/* Image Indicators */}
                    {images.length > 1 && (
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                            {images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={(e) => { e.stopPropagation(); setCurrentImgIndex(idx); }}
                                    className={`w-2 h-2 rounded-full transition-all ${idx === currentImgIndex ? 'bg-white w-4' : 'bg-white/40'
                                        }`}
                                />
                            ))}
                        </div>
                    )}

                    {/* Internal Image Navigation */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-2 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity active:scale-90"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-2 top-1/2 -translate-y-1/2 text-white p-2 hover:bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity active:scale-90"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </>
                    )}
                </div>

                {/* Info Section */}
                <div className="flex-1 flex flex-col p-6 overflow-y-auto max-h-[60vh] md:max-h-none">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4 border-b border-gray-100 dark:border-neutral-800 pb-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 p-[2px]">
                            <div className="w-full h-full rounded-full bg-white dark:bg-black p-0.5">
                                <img
                                    src={`https://ui-avatars.com/api/?name=GD&background=0095f6&color=fff`}
                                    alt="avatar"
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-sm text-gray-900 dark:text-white">garvin_dholakiya</h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{project.category} • {project.date}</p>
                        </div>
                        <button className="ml-auto text-blue-500 font-semibold text-sm hover:text-blue-700 transition-colors">Follow</button>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                            {project.longDescription || project.description}
                        </p>

                        <div className="mb-6">
                            <h4 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map(tech => (
                                    <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-gray-200 text-xs rounded-full font-medium hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors cursor-default">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-neutral-800">
                        <div className="grid grid-cols-1 gap-3">
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition-colors active:scale-98 duration-150"
                            >
                                <ExternalLink size={18} /> View Demo
                            </a>
                            {/* <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 text-gray-900 dark:text-white rounded-lg font-semibold transition-colors active:scale-98 duration-150"
              >
                <Github size={18} /> Source Code
              </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
