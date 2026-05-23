import React from 'react';
import { ViewType, UserProfile } from '../types';
import { HomeIcon, ProjectsIcon, ExperienceIcon, AboutIcon, ContactIcon } from './Icons';

interface MobileNavProps {
  activeView: ViewType;
  setActiveView: (view: ViewType) => void;
  user: UserProfile;
}

export const MobileNav: React.FC<MobileNavProps> = ({ activeView, setActiveView, user }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-black border-t border-gray-200 dark:border-neutral-800 px-4 py-3 flex justify-between items-center z-50 md:hidden pb-safe transition-colors">
      <button onClick={() => setActiveView('home')} className="p-1 text-gray-900 dark:text-white">
        <HomeIcon active={activeView === 'home'} />
      </button>
      <button onClick={() => setActiveView('projects')} className="p-1 text-gray-900 dark:text-white">
        <ProjectsIcon active={activeView === 'projects'} />
      </button>
      <button onClick={() => setActiveView('experience')} className="p-1 text-gray-900 dark:text-white">
        <ExperienceIcon active={activeView === 'experience'} />
      </button>
      <button onClick={() => setActiveView('contact')} className="p-1 text-gray-900 dark:text-white">
         <ContactIcon />
      </button>
      <button onClick={() => setActiveView('about')} className="p-1">
        <div className={`w-6 h-6 rounded-full p-[1px] ${activeView === 'about' ? 'bg-black dark:bg-white' : 'bg-transparent'}`}>
             <img src={user.avatarUrl} alt="profile" className="w-full h-full rounded-full object-cover" />
        </div>
      </button>
    </div>
  );
};