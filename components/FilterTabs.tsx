import React from 'react';
import { ProjectCategory } from '../types';

interface FilterTabsProps {
  activeCategory: ProjectCategory;
  setCategory: (category: ProjectCategory) => void;
}

const CATEGORIES: ProjectCategory[] = ['All', 'Projects', 'Case Studies', 'UI Experiments', 'Freelance', 'Startup'];

export const FilterTabs: React.FC<FilterTabsProps> = ({ activeCategory, setCategory }) => {
  return (
    <div className="w-full bg-white dark:bg-black border-b border-gray-100 dark:border-neutral-800 mb-4 sm:rounded-lg sm:border sticky top-[60px] md:top-0 z-30 transition-colors">
      <div className="flex overflow-x-auto no-scrollbar py-3 px-4 gap-2">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`whitespace-nowrap px-5 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                isActive
                  ? 'bg-gray-900 text-white dark:bg-white dark:text-black'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-neutral-800 dark:text-gray-300 dark:hover:bg-neutral-700'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
};