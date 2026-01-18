import React from 'react';
import { 
  Home, 
  Search, 
  Briefcase, 
  User, 
  Heart, 
  MessageCircle, 
  Send, 
  MoreHorizontal, 
  Bookmark,
  Grid,
  Monitor,
  Github,
  Linkedin,
  FileText,
  Menu,
  X
} from 'lucide-react';

// Using currentColor (implicit) for most, or utility classes passed down.
// Adjusted specific fills/strokes to rely on parent text color usually, or explicit classes that handle dark mode in parents.

export const HomeIcon = ({ active }: { active?: boolean }) => <Home size={24} className={active ? "stroke-[3px] fill-none" : "stroke-[2px]"} />;
export const ProjectsIcon = ({ active }: { active?: boolean }) => <Search size={24} className={active ? "stroke-[3px]" : "stroke-[2px]"} />;
export const ExperienceIcon = ({ active }: { active?: boolean }) => <Briefcase size={24} className={active ? "stroke-[3px] fill-current" : "stroke-[2px]"} />;
export const AboutIcon = ({ active }: { active?: boolean }) => <User size={24} className={active ? "stroke-[3px] fill-current" : "stroke-[2px]"} />;
export const LikeIcon = ({ filled }: { filled?: boolean }) => <Heart size={24} className={filled ? "fill-red-500 stroke-red-500" : "hover:text-gray-500 dark:hover:text-gray-400"} />;
export const CommentIcon = () => <MessageCircle size={24} className="hover:text-gray-500 dark:hover:text-gray-400" />;
export const ShareIcon = () => <Send size={24} className="hover:text-gray-500 dark:hover:text-gray-400" />;
export const MoreIcon = () => <MoreHorizontal size={24} />;
export const BookmarkIcon = () => <Bookmark size={24} className="hover:text-gray-500 dark:hover:text-gray-400" />;
export const GridIcon = ({ active }: { active?: boolean }) => <Grid size={16} className={active ? "stroke-[2px] text-blue-500" : "text-gray-500 dark:text-gray-400"} />;
export const ContactIcon = () => <Send size={24} />;
export const ResumeIcon = () => <FileText size={24} />;
export const MenuIcon = () => <Menu size={24} />;
export const CloseIcon = () => <X size={24} />;
export { Github, Linkedin };
