"use client";

import React, { useState, useEffect } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { MobileNav } from '@/components/MobileNav';
import { TopBar } from '@/components/TopBar';
import { RightPanel } from '@/components/RightPanel';
import { PostCard } from '@/components/PostCard';
import { Stories } from '@/components/Stories';
import { ProfileView } from '@/components/ProfileView';
import { ExperienceView } from '@/components/ExperienceView';
import { FilterTabs } from '@/components/FilterTabs';
import { ProjectDetailModal } from '@/components/ProjectDetailModal';
import { CURRENT_USER, PROJECTS, SKILLS, EXPERIENCE } from '@/lib/constants';
import { ViewType, Project, ProjectCategory } from '@/types';
import { Search, Send, Briefcase, User } from 'lucide-react';
import LinkedInBadge from '@/components/LinkedInBadge';

export default function Home() {
    const [activeView, setActiveView] = useState<ViewType>('home');
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // Theme Toggle Effect needed for Tailwind dark mode class
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    // Dynamic Title
    useEffect(() => {
        const titles: Record<ViewType, string> = {
            home: 'Garvin Dholakiya | AI Workflow Expert',
            projects: 'Projects | Garvin Dholakiya',
            about: 'About Me | Garvin Dholakiya',
            experience: 'Experience | Garvin Dholakiya',
            contact: 'Contact | Garvin Dholakiya',
            resume: 'Resume | Garvin Dholakiya'
        };
        document.title = titles[activeView] || 'Garvin Dholakiya | Developer Portfolio';
    }, [activeView]);

    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    // Filter Logic
    const filteredProjects = activeCategory === 'All'
        ? PROJECTS
        : PROJECTS.filter(p => p.category === activeCategory);

    // Modal Logic
    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
    };

    const handleNextProject = () => {
        if (!selectedProject) return;
        const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
        if (currentIndex < filteredProjects.length - 1) {
            setSelectedProject(filteredProjects[currentIndex + 1]);
        }
    };

    const handlePrevProject = () => {
        if (!selectedProject) return;
        const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
        if (currentIndex > 0) {
            setSelectedProject(filteredProjects[currentIndex - 1]);
        }
    };

    // Render content based on active view
    const renderContent = () => {
        switch (activeView) {
            case 'home':
                return (
                    <div className="max-w-[470px] w-full mx-auto pt-4 pb-20 sm:pb-8">
                        <Stories skills={SKILLS} />
                        <FilterTabs activeCategory={activeCategory} setCategory={setActiveCategory} />

                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((project, index) => (
                                <div key={project.id} style={{ animationDelay: `${index * 0.1}s` }} className="animate-fade-in-up opacity-0">
                                    <PostCard
                                        post={project}
                                        user={CURRENT_USER}
                                        onClick={() => handleProjectClick(project)}
                                    />
                                </div>
                            ))
                        ) : (
                            <div className="py-20 text-center text-gray-500 dark:text-gray-400 animate-fade-in">
                                No posts found in {activeCategory}
                            </div>
                        )}
                    </div>
                );
            case 'about':
                return <ProfileView user={CURRENT_USER} projects={PROJECTS} skills={SKILLS} setActiveView={setActiveView} />;
            case 'experience':
                return <ExperienceView experiences={EXPERIENCE} />;
            case 'projects':
                // Reusing a grid layout similar to profile but just projects
                return (
                    <div className="max-w-[935px] mx-auto p-2 pb-20 w-full">
                        <div className="relative mb-4 sm:hidden">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-4 w-4 text-gray-400" />
                            </div>
                            <input type="text" className="bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Search projects..." />
                        </div>
                        <h2 className="text-lg font-bold mb-4 px-2 hidden sm:block dark:text-white">All Projects</h2>
                        <div className="grid grid-cols-3 gap-1 sm:gap-4">
                            {PROJECTS.map((proj, i) => (
                                <div
                                    key={i}
                                    className="aspect-square relative group bg-gray-100 dark:bg-neutral-800 cursor-pointer overflow-hidden animate-fade-in"
                                    style={{ animationDelay: `${i * 0.05}s` }}
                                    onClick={() => handleProjectClick(proj)}
                                >
                                    <img src={proj.imageUrl} alt={proj.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <span className="text-white font-bold text-sm text-center px-2">{proj.title}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'contact':
                return (
                    <div className="w-full max-w-2xl mx-auto px-4 pt-8 pb-24">
                        <div className="bg-white dark:bg-black sm:border border-gray-200 dark:border-neutral-800 rounded-xl overflow-hidden shadow-sm animate-scale-in">
                            <div className="flex flex-col md:flex-row h-full md:h-[600px]">
                                {/* Sidebar (visual simulation of messages list) */}
                                <div className="hidden md:flex flex-col w-[300px] border-r border-gray-200 dark:border-neutral-800">
                                    <div className="p-4 border-b border-gray-200 dark:border-neutral-800 flex justify-between items-center">
                                        <span className="font-bold text-lg dark:text-white">garvin_dholakiya</span>
                                        <Send size={20} className="dark:text-white" />
                                    </div>
                                    <div className="flex-1 overflow-y-auto">
                                        <div className="p-4 flex items-center gap-3 bg-gray-50 dark:bg-neutral-900 cursor-pointer">
                                            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                                                <Briefcase size={20} className="text-blue-600" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-sm dark:text-white">Hire Me</div>
                                                <div className="text-xs text-gray-500 dark:text-gray-400">Start a new project...</div>
                                            </div>
                                        </div>
                                        <div className="p-4 flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-neutral-900 cursor-pointer transition-colors opacity-60">
                                            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                                                <User size={20} className="text-purple-600" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-sm dark:text-white">Collab</div>
                                                <div className="text-xs text-gray-500 dark:text-gray-400">Open to ideas...</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact Form Area */}
                                <div className="flex-1 flex flex-col h-full bg-white dark:bg-black">
                                    <div className="p-4 border-b border-gray-200 dark:border-neutral-800 flex items-center gap-3">
                                        <div className="md:hidden">
                                            <span className="font-bold text-lg dark:text-white">Messages</span>
                                        </div>
                                        <div className="hidden md:flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                                <Briefcase size={14} className="text-blue-600" />
                                            </div>
                                            <span className="font-semibold dark:text-white">Hire Me Inquiry</span>
                                        </div>
                                    </div>

                                    <div className="flex-1 p-6 overflow-y-auto">
                                        <div className="flex flex-col items-center justify-center mb-8 text-center">
                                            <div className="w-20 h-20 rounded-full border-2 border-gray-200 dark:border-neutral-700 p-1 mb-3">
                                                <img src={CURRENT_USER.avatarUrl} alt="profile" className="w-full h-full rounded-full object-cover" />
                                            </div>
                                            <h3 className="font-bold text-lg dark:text-white">Garvin Dholakiya</h3>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</p>
                                            <button
                                                onClick={() => setActiveView('about')}
                                                className="mt-4 bg-gray-100 dark:bg-neutral-800 text-sm font-semibold px-4 py-1.5 rounded-lg dark:text-white"
                                            >
                                                View Profile
                                            </button>
                                        </div>

                                        <form
                                            className="space-y-4 max-w-sm mx-auto"
                                            onSubmit={async (e) => {
                                                e.preventDefault();
                                                const submitButton = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement;
                                                const originalText = submitButton.innerText;

                                                try {
                                                    submitButton.disabled = true;
                                                    submitButton.innerText = 'Sending...';

                                                    const formData = new FormData(e.currentTarget);
                                                    const data = Object.fromEntries(formData.entries());

                                                    const response = await fetch('https://aikit.jinnityai.com/webhook/7e66cc38-91e7-45a9-924c-d4ac959b8f8e', {
                                                        method: 'POST',
                                                        headers: {
                                                            'Content-Type': 'application/json',
                                                        },
                                                        body: JSON.stringify(data),
                                                    });

                                                    if (response.ok) {
                                                        // alert('Message sent successfully!');
                                                        (e.target as HTMLFormElement).reset();
                                                    } else {
                                                        throw new Error('Failed to send message');
                                                    }
                                                } catch (error) {
                                                    console.error('Error:', error);
                                                    alert('Failed to send message. Please try again.');
                                                } finally {
                                                    submitButton.disabled = false;
                                                    submitButton.innerText = originalText;
                                                }
                                            }}
                                        >
                                            <div>
                                                <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase">Your Name</label>
                                                <input name="name" required type="text" className="w-full bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-lg p-3 text-sm focus:outline-none focus:border-gray-400 dark:focus:border-neutral-500 dark:text-white" placeholder="John Doe" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase">Email</label>
                                                <input name="email" required type="email" className="w-full bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-lg p-3 text-sm focus:outline-none focus:border-gray-400 dark:focus:border-neutral-500 dark:text-white" placeholder="john@example.com" />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase">Project Type</label>
                                                <select name="projectType" className="w-full bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-lg p-3 text-sm focus:outline-none focus:border-gray-400 dark:focus:border-neutral-500 dark:text-white">
                                                    <option>Freelance Project</option>
                                                    <option>Full-time Opportunity</option>
                                                    <option>Mentorship</option>
                                                    <option>Just saying hi</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase">Message</label>
                                                <textarea name="message" required rows={4} className="w-full bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-700 rounded-lg p-3 text-sm focus:outline-none focus:border-gray-400 dark:focus:border-neutral-500 dark:text-white" placeholder="Tell me about your project..."></textarea>
                                            </div>
                                            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                                                <Send size={18} /> Send Message
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case 'resume':
                return (
                    <div className="flex flex-col items-center justify-center py-10 animate-fade-in">
                        <div className="bg-white dark:bg-neutral-900 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-neutral-800">
                            <LinkedInBadge theme={isDarkMode ? 'dark' : 'light'} />
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex min-h-screen bg-white md:bg-gray-50 dark:bg-black dark:md:bg-black text-gray-900 dark:text-white transition-colors duration-200">
            {/* Navigation */}
            <Sidebar activeView={activeView} setActiveView={setActiveView} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <TopBar setActiveView={setActiveView} />

            {/* Main Content Area */}
            <main className="flex-1 flex justify-center w-full md:pl-[72px] lg:pl-[245px] pt-[60px] md:pt-0">
                <div className="w-full max-w-[935px] flex justify-center">
                    {/* Feed / Active View */}
                    <div
                        key={activeView}
                        className="w-full max-w-[600px] lg:max-w-none lg:w-[600px] lg:mr-8 pt-4 sm:pt-8 min-h-screen animate-fade-in"
                    >
                        {renderContent()}
                    </div>

                    {/* Right Panel (Desktop only) */}
                    {activeView === 'home' && (
                        <div className="hidden lg:block animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            <RightPanel user={CURRENT_USER} setCategory={setActiveCategory} />
                        </div>
                    )}
                </div>
            </main>

            {/* Mobile Bottom Nav */}
            <MobileNav activeView={activeView} setActiveView={setActiveView} user={CURRENT_USER} />

            {/* Project Detail Modal */}
            {selectedProject && (
                <ProjectDetailModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                    onNext={handleNextProject}
                    onPrev={handlePrevProject}
                    hasNext={filteredProjects.findIndex(p => p.id === selectedProject.id) < filteredProjects.length - 1}
                    hasPrev={filteredProjects.findIndex(p => p.id === selectedProject.id) > 0}
                />
            )}
        </div>
    );
}
