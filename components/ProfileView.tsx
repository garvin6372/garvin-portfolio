
import React from 'react';
import { UserProfile, Project, Skill, Experience, ViewType } from '../types';
import { GridIcon, Github, Linkedin, Briefcase, Mail, FileText, ExternalLink, MapPin } from 'lucide-react';
import { ACHIEVEMENTS, EXPERIENCE, CURRENT_STATUS, TESTIMONIALS } from '../constants';

interface ProfileViewProps {
  user: UserProfile;
  projects: Project[];
  skills: Skill[];
  setActiveView: (view: ViewType) => void;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ user, projects, skills, setActiveView }) => {
  // Group Skills
  const frontendSkills = skills.filter(s => s.category === 'frontend');
  const backendSkills = skills.filter(s => s.category === 'backend');
  const aiSkills = skills.filter(s => s.category === 'ai');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="max-w-[935px] mx-auto px-4 sm:px-8 py-8 w-full animate-fade-in">

      {/* 1. Profile Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start mb-10 sm:mb-12">
        {/* Avatar */}
        <div className="flex-shrink-0 sm:mr-16 mb-6 sm:mb-0 relative group cursor-pointer">
          <div className="w-24 h-24 sm:w-36 sm:h-36 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 p-[2px]">
            <img
              src={user.avatarUrl}
              alt={user.username}
              className="w-full h-full rounded-full border-4 border-white dark:border-black object-cover"
            />
          </div>
          {/* Availability Badge for Mobile */}
          <div className="absolute bottom-1 right-1 sm:hidden bg-white dark:bg-black rounded-full p-1 border border-gray-100 dark:border-neutral-800 shadow-sm">
            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col flex-grow items-center sm:items-start text-center sm:text-left w-full">
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-2">
            <h1 className="text-xl text-gray-900 dark:text-white font-normal mr-2">{user.username}</h1>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <button className="bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 text-gray-900 dark:text-white font-semibold px-6 py-1.5 rounded-lg text-sm transition-colors flex items-center justify-center gap-2">
                <FileText size={16} /> Resume
              </button>
              <button
                onClick={() => setActiveView('contact')}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-1.5 rounded-lg text-sm transition-colors flex items-center justify-center gap-2"
              >
                <Mail size={16} /> Contact
              </button>
            </div>
          </div>

          {/* Stats - Clickable to Scroll */}
          <div className="flex gap-8 mb-5 mt-4 sm:mt-2 text-base">
            <button onClick={() => scrollToSection('projects-grid')} className="text-center sm:text-left group">
              <span className="font-bold text-gray-900 dark:text-white block sm:inline mr-1">{user.stats.projects}</span>
              <span className="text-gray-900 dark:text-white group-hover:text-gray-500 transition-colors">projects</span>
            </button>
            <button onClick={() => scrollToSection('experience-section')} className="text-center sm:text-left group">
              <span className="font-bold text-gray-900 dark:text-white block sm:inline mr-1">{user.stats.experience}</span>
              <span className="text-gray-900 dark:text-white group-hover:text-gray-500 transition-colors">exp</span>
            </button>
            <button onClick={() => scrollToSection('skills-section')} className="text-center sm:text-left group">
              <span className="font-bold text-gray-900 dark:text-white block sm:inline mr-1">{user.stats.techStack}</span>
              <span className="text-gray-900 dark:text-white group-hover:text-gray-500 transition-colors">stack</span>
            </button>
          </div>

          {/* Bio */}
          <div className="text-sm sm:text-base w-full max-w-lg">
            <div className="font-semibold text-gray-900 dark:text-white mb-1">{user.fullName}</div>
            <div className="text-gray-500 dark:text-gray-400 mb-2 flex items-center justify-center sm:justify-start gap-1">
              {user.title}
              <span className="hidden sm:inline-block w-1.5 h-1.5 bg-gray-300 dark:bg-gray-600 rounded-full mx-1"></span>
              <span className="text-green-600 dark:text-green-500 text-xs font-bold border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/30 px-1.5 py-0.5 rounded">Open to work</span>
            </div>
            <div className="whitespace-pre-line text-gray-800 dark:text-gray-200 mb-3 leading-relaxed">
              {user.bio}
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-medium text-gray-500 dark:text-gray-400">
              <a href="#" className="text-blue-900 dark:text-blue-400 flex items-center gap-1 hover:underline">
                <Github size={14} /> github.com/{user.username}
              </a>
              <span className="flex items-center gap-1">
                <MapPin size={14} /> {user.location}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Currently Working On */}
      <div className="mb-10 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20 rounded-xl p-4 flex items-center gap-4">
        <span className="text-2xl">{CURRENT_STATUS.emoji}</span>
        <div>
          <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide">Currently Working On</span>
          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{CURRENT_STATUS.text}</p>
        </div>
      </div>

      {/* 3. Skills Grid (Categorized) */}
      <div id="skills-section" className="mb-12">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4 uppercase tracking-widest">Tech Stack</h3>
        <div className="space-y-6">
          {/* Frontend */}
          <div>
            <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-3 ml-1">Frontend</h4>
            <div className="flex flex-wrap gap-3">
              {frontendSkills.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-gray-100 dark:bg-neutral-800 px-3 py-2 rounded-lg border border-transparent hover:border-gray-300 dark:hover:border-neutral-600 transition-colors">
                  {skill.icon && <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain" />}
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Backend */}
          <div>
            <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-3 ml-1">Backend</h4>
            <div className="flex flex-wrap gap-3">
              {backendSkills.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-gray-100 dark:bg-neutral-800 px-3 py-2 rounded-lg border border-transparent hover:border-gray-300 dark:hover:border-neutral-600 transition-colors">
                  {skill.icon && <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain" />}
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
          {/* AI */}
          <div>
            <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-3 ml-1">Automation & AI</h4>
            <div className="flex flex-wrap gap-3">
              {aiSkills.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-gray-100 dark:bg-neutral-800 px-3 py-2 rounded-lg border border-transparent hover:border-gray-300 dark:hover:border-neutral-600 transition-colors">
                  {skill.icon && <img src={skill.icon} alt={skill.name} className="w-5 h-5 object-contain" />}
                  <span className="text-sm font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Projects Grid */}
      {/* <div id="projects-grid" className="mb-12">
        <div className="flex items-center justify-center border-t border-gray-200 dark:border-neutral-800 mb-6">
          <div className="flex items-center gap-2 border-t border-gray-900 dark:border-white -mt-px py-4 px-2">
            <GridIcon size={14} className="text-gray-900 dark:text-white" />
            <span className="text-xs font-bold text-gray-900 dark:text-white tracking-widest">PROJECTS</span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-8">
          {projects.map(proj => (
            <div key={proj.id} className="aspect-square relative group bg-gray-100 dark:bg-neutral-800 cursor-pointer overflow-hidden rounded-sm md:rounded-lg">
              <img src={proj.imageUrl} alt={proj.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                <span className="text-white font-bold text-sm mb-1">{proj.title}</span>
                <span className="text-gray-300 text-xs line-clamp-2">{proj.description}</span>
                <div className="mt-3 flex gap-2">
                  <span className="text-[10px] bg-white/20 text-white px-2 py-1 rounded-full">{proj.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* 5. Experience Timeline */}
      <div id="experience-section" className="mb-12">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-widest">Experience</h3>
        <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {EXPERIENCE.map(exp => (
            <div key={exp.id} className="flex-shrink-0 w-[280px] bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-black border border-gray-100 dark:border-neutral-800 overflow-hidden">
                  <img src={exp.logo} alt={exp.company} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-gray-900 dark:text-white leading-tight">{exp.company}</h4>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{exp.period}</span>
                </div>
              </div>
              <div className="mb-3">
                <span className="block font-medium text-sm text-blue-600 dark:text-blue-400 mb-1">{exp.role}</span>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Achievements & Certifications */}
      <div className="mb-12">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-widest">Achievements</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {ACHIEVEMENTS.map(ach => (
            <div key={ach.id} className="bg-gray-50 dark:bg-neutral-900 rounded-xl p-4 flex flex-col items-center text-center border border-gray-100 dark:border-neutral-800">
              <span className="text-2xl mb-2">{ach.icon}</span>
              <span className="font-bold text-sm text-gray-900 dark:text-white leading-tight mb-1">{ach.title}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">{ach.organization}</span>
              <span className="text-[10px] text-gray-400 dark:text-gray-500 mt-1">{ach.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 7. Testimonials */}
      <div className="mb-16">
        <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-6 uppercase tracking-widest">What Clients Say</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {TESTIMONIALS.map(t => (
            <div key={t.id} className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 p-6 rounded-xl relative">
              <div className="absolute top-4 left-4 text-4xl text-gray-200 dark:text-neutral-700 font-serif leading-none">"</div>
              <p className="relative z-10 text-sm text-gray-700 dark:text-gray-300 italic mb-4 pt-2">
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-neutral-800">
                  <img src={`https://ui-avatars.com/api/?name=${t.author}&background=random`} alt={t.author} className="rounded-full" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900 dark:text-white">{t.author}</div>
                  <div className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wide">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 8. Availability & Contact Footer */}
      <div className="bg-gradient-to-br from-gray-900 to-black dark:from-neutral-900 dark:to-black text-white rounded-2xl p-8 text-center shadow-lg mb-8">
        <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold mb-4 border border-green-500/30">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          AVAILABLE FOR NEW PROJECTS
        </div>
        <h2 className="text-2xl font-bold mb-2">Ready to build something amazing?</h2>
        <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
          Whether you need a full-stack web app, an AI automation workflow, or a custom bot, let's discuss how I can help.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <button
            onClick={() => setActiveView('contact')}
            className="bg-white text-black hover:bg-gray-100 font-bold px-8 py-3 rounded-lg text-sm transition-colors"
          >
            Book a Call
          </button>
          <a
            href="mailto:garvindholakiya511@gmail.com"
            className="bg-transparent border border-white/20 hover:bg-white/10 text-white font-bold px-8 py-3 rounded-lg text-sm transition-colors flex items-center justify-center"
          >
            Email Me
          </a>
        </div>
      </div>

      {/* Footer Links */}
      <div className="flex flex-col items-center gap-4 text-xs text-gray-400 dark:text-gray-600 pb-8">
        <div className="flex gap-4">
          <span className="hover:text-gray-600 dark:hover:text-gray-400 cursor-pointer">LinkedIn</span>
          <span className="hover:text-gray-600 dark:hover:text-gray-400 cursor-pointer">GitHub</span>
          <span className="hover:text-gray-600 dark:hover:text-gray-400 cursor-pointer">Twitter</span>
        </div>
        <div>
          © 2026 GARVIN DHOLAKIYA
        </div>
      </div>
    </div>
  );
};
