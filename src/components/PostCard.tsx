"use client";

import React from 'react';
import { Project, UserProfile } from '@/types';
import { LikeIcon, CommentIcon, ShareIcon, BookmarkIcon, MoreIcon } from './Icons';

interface PostCardProps {
    post: Project;
    user: UserProfile;
    onClick?: () => void;
}

export const PostCard: React.FC<PostCardProps> = ({ post, user, onClick }) => {
    return (
        <div className="bg-white dark:bg-black border-b border-gray-200 dark:border-neutral-800 sm:border sm:rounded-lg mb-4 sm:mb-8 max-w-[470px] w-full mx-auto transition-all hover:shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 p-[2px]">
                        <img
                            src={user.avatarUrl}
                            alt={user.username}
                            className="w-full h-full rounded-full border-2 border-white dark:border-black object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold text-gray-900 dark:text-white leading-none hover:opacity-70 cursor-pointer transition-opacity">
                            {user.username}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{post.title}</span>
                    </div>
                </div>
                <button className="text-gray-900 dark:text-white hover:opacity-60 transition-opacity">
                    <MoreIcon />
                </button>
            </div>

            {/* Image */}
            <div
                className="w-full aspect-square bg-gray-100 dark:bg-neutral-900 overflow-hidden relative group cursor-pointer active:scale-[0.98] transition-transform duration-200 ease-out"
                onClick={onClick}
            >
                <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out md:group-hover:scale-[1.03]"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white/90 text-black text-sm font-semibold px-4 py-2 rounded-full transform scale-95 group-hover:scale-100 transition-transform duration-200">View Details</span>
                </div>
            </div>

            {/* Action Bar */}
            <div className="flex justify-between items-center px-3 pt-3 pb-2">
                <div className="flex items-center gap-4 text-gray-900 dark:text-white">
                    <button className="hover:opacity-60 transition-opacity active:scale-90 duration-150"><LikeIcon /></button>
                    <button className="hover:opacity-60 transition-opacity active:scale-90 duration-150"><CommentIcon /></button>
                    <button className="hover:opacity-60 transition-opacity active:scale-90 duration-150"><ShareIcon /></button>
                </div>
                <button className="hover:opacity-60 transition-opacity text-gray-900 dark:text-white active:scale-90 duration-150"><BookmarkIcon /></button>
            </div>

            {/* Likes */}
            <div className="px-3 mb-1">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">{post.likes.toLocaleString()} likes</span>
            </div>

            {/* Caption */}
            <div className="px-3 pb-2">
                <div className="text-sm text-gray-900 dark:text-white">
                    <span className="font-semibold mr-2">{user.username}</span>
                    <span>{post.description}</span>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1 mt-2">
                    {post.technologies.map(tech => (
                        <span key={tech} className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 cursor-pointer transition-colors">
                            #{tech.replace(/\s+/g, '')}
                        </span>
                    ))}
                </div>
            </div>

            {/* Comments Link */}
            <div className="px-3 pb-3">
                <button className="text-gray-500 dark:text-gray-400 text-sm hover:text-gray-700 dark:hover:text-gray-300 transition-colors">View all {post.comments} comments</button>
                <div className="text-[10px] text-gray-400 dark:text-gray-500 uppercase mt-1 tracking-wide">
                    {post.date}
                </div>
            </div>
        </div>
    );
};
