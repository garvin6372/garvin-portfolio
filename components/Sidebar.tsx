import React, { useState, useRef, useEffect } from 'react';
import { ViewType } from '../types';
import { HomeIcon, ProjectsIcon, ExperienceIcon, AboutIcon, ContactIcon, ResumeIcon, MenuIcon } from './Icons';
import { Moon, Sun } from 'lucide-react';

interface SidebarProps {
  activeView: ViewType;
  setActiveView: (view: ViewType) => void;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView, toggleTheme, isDarkMode }) => {
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { id: 'home', label: 'Home', icon: HomeIcon },
    { id: 'projects', label: 'Projects', icon: ProjectsIcon },
    { id: 'experience', label: 'Experience', icon: ExperienceIcon },
    { id: 'about', label: 'Profile', icon: AboutIcon },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setShowMoreMenu(false);
        }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="fixed left-0 top-0 h-full w-[72px] lg:w-[245px] bg-white dark:bg-black border-r border-gray-200 dark:border-neutral-800 z-50 hidden md:flex flex-col px-3 py-8 transition-colors">
      {/* Logo */}
      <div className="mb-8 px-3 lg:mb-10">
        <h1 className="hidden lg:block text-xl font-bold tracking-tight cursor-pointer dark:text-white hover:opacity-80 transition-opacity">Garvin Dholakiya</h1>
        <div className="lg:hidden flex justify-center hover:bg-gray-100 dark:hover:bg-neutral-900 p-2 rounded-lg transition-colors cursor-pointer active:scale-95 duration-200">
           <span className="text-2xl font-bold">G</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 space-y-2">
        {menuItems.map((item) => {
           const isActive = activeView === item.id;
           return (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id as ViewType)}
              className={`flex items-center gap-4 w-full p-3 rounded-xl transition-all duration-200 group ${
                isActive 
                  ? 'font-bold text-gray-900 dark:text-white bg-gray-100 dark:bg-neutral-800 shadow-sm' 
                  : 'text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-neutral-900'
              }`}
            >
              <div className="group-hover:scale-110 transition-transform duration-200 ease-out">
                <item.icon active={isActive} />
              </div>
              <span className={`hidden lg:block text-base ${isActive ? "font-bold" : "font-normal"} transition-all`}>{item.label}</span>
            </button>
          );
        })}
        
        {/* Contact (Special Action) */}
        <button
           onClick={() => setActiveView('contact')}
           className={`flex items-center gap-4 w-full p-3 rounded-xl transition-all duration-200 group text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-neutral-900 ${activeView === 'contact' ? 'bg-gray-100 dark:bg-neutral-800 font-bold' : ''}`}
        >
            <div className="group-hover:scale-110 transition-transform duration-200 ease-out">
                <ContactIcon />
            </div>
            <span className="hidden lg:block text-base font-normal">Messages</span>
        </button>

         {/* Resume */}
        <a
           href="#"
           className={`flex items-center gap-4 w-full p-3 rounded-xl transition-all duration-200 group text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-neutral-900`}
        >
            <div className="group-hover:scale-110 transition-transform duration-200 ease-out">
                <ResumeIcon />
            </div>
            <span className="hidden lg:block text-base font-normal">Resume</span>
        </a>
      </div>

      {/* More Options */}
      <div className="relative" ref={menuRef}>
          {showMoreMenu && (
              <div className="absolute bottom-14 left-0 w-64 bg-white dark:bg-neutral-900 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_12px_rgba(255,255,255,0.1)] p-2 overflow-hidden border border-gray-100 dark:border-neutral-800 animate-scale-in origin-bottom-left">
                  <button 
                    onClick={toggleTheme}
                    className="flex items-center gap-3 w-full p-3 hover:bg-gray-50 dark:hover:bg-neutral-800 rounded-lg text-left transition-colors"
                  >
                      {isDarkMode ? <Sun size={18} className="text-white" /> : <Moon size={18} />}
                      <span className="text-sm font-medium dark:text-white">Switch appearance</span>
                      {isDarkMode && <span className="ml-auto text-xs text-gray-400">Dark</span>}
                  </button>
                  <button className="flex items-center gap-3 w-full p-3 hover:bg-gray-50 dark:hover:bg-neutral-800 rounded-lg text-left transition-colors">
                      <span className="text-sm font-medium dark:text-white">Settings</span>
                  </button>
                  <button className="flex items-center gap-3 w-full p-3 hover:bg-gray-50 dark:hover:bg-neutral-800 rounded-lg text-left transition-colors border-t border-gray-100 dark:border-neutral-800">
                      <span className="text-sm font-medium dark:text-white">Log out</span>
                  </button>
              </div>
          )}
          <button 
            onClick={() => setShowMoreMenu(!showMoreMenu)}
            className={`flex items-center gap-4 w-full p-3 rounded-xl text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-neutral-900 mt-auto transition-all duration-200 ${showMoreMenu ? 'font-bold bg-gray-100 dark:bg-neutral-800' : ''}`}
          >
            <MenuIcon />
            <span className="hidden lg:block text-base font-normal">More</span>
          </button>
      </div>
    </div>
  );
};