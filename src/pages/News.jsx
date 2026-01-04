import React, { use } from 'react';
import { HeroNews } from '../layouts/Hero';
import { useLang } from '../context/LangContext';
import { ArrowUpRight } from '../components/ui/Icons';
import { Link } from 'react-router-dom';
import posts from '../data/post.mock.json';
import { tagsmock } from '../data/tags.js';
import { getTagColorById } from '../data/tags.js';
import { useState } from 'react';
import { PostCard } from '../components/ui/Cards';

const stripHtml = html => html.replace(/<[^>]+>/g, "");

const formatDate = date =>
    new Date(date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

const truncate = (text, max) =>
    text.length > max ? text.slice(0, max) + "…" : text;

export const FeaturedPostCard = ({ post, tagsmock }) => {
    const tags = post.tags.map(id => tagsmock[id]).filter(Boolean);
    const previewLength = 200;
    return (
        <Link to={`/blog/${post.slug}`} className="group">
            <div className="flex flex-col gap-2 overflow-hidden">
                {/* Image */}
                <div className="overflow-hidden md:aspect-[3/1]">
                    <img
                        src={`src/assets/posts/${post.id}.jpg`}
                        alt={post.title.rendered}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Meta */}
                <div className="flex flex-col justify-between gap-4">
                    <div className="flex flex-col gap-1">
                        <p className="text-xs text-gray-500">
                            {formatDate(post.date)}
                        </p>

                        {/* Title */}
                        <div className="flex justify-between">
                            <h3 className="text-2xl lg:text-lg font-semibold leading-tight md:leading-normal">{post.title.rendered}</h3>
                            <ArrowUpRight />
                        </div>

                        {/* Excerpt */}
                        <p className="text-sm text-gray-600 text-justify leading-relaxed mr-10">
                            {truncate(stripHtml(post.content.rendered), previewLength)}
                        </p> </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {tags.map(tag => (
                            <span
                                key={tag.id}
                                className={`text-xs px-2 py-1 rounded-full ${getTagColorById(tag.id)}`}
                            >
                                {tag.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export const CompactPostCard = ({ post, tagsmock }) => {
    const tags = post.tags.map(id => tagsmock[id]).filter(Boolean);
    const previewLength = 120;

    return (
        <Link to={`/blog/${post.slug}`} className="grid grid-cols-1 md:grid-cols-2 gap-4 group">
            {/* Image */}
            <div className="w-full h-auto overflow-hidden shrink-0">
                <img
                    src={`src/assets/posts/${post.id}.jpg`}
                    alt={post.title.rendered}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between pb-2">
                <div className="flex flex-col gap-2"><p className="text-xs text-gray-500">
                    {formatDate(post.date)}
                </p>

                    <div className="flex justify-between gap-2">
                        <h3 className="text-2xl md:text-xl font-semibold leading-snug">{post.title.rendered}</h3>
                        <ArrowUpRight />
                    </div>

                    <p className="text-xs text-gray-600 leading-relaxed ">
                        {truncate(stripHtml(post.content.rendered), previewLength)}
                    </p>
                </div>

                <div className="flex flex-wrap gap-1 pt-1">
                    {tags.map(tag => (
                        <span
                            key={tag.id}
                            className={`text-[10px] px-2 py-[2px] rounded-full ${getTagColorById(tag.id)}`}
                        >
                            {tag.name}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
};

const StandardPostCard = ({ post, tagsmock }) => {
    const tags = post.tags.map(id => tagsmock[id]).filter(Boolean);
    const previewLength = 420;

    return (
        <Link to={`/blog/${post.slug}`} className="group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
                {/* Image */}
                <div className="overflow-hidden lg:aspect-[2.5/1]">
                    <img
                        src={`src/assets/posts/${post.id}.jpg`}
                        alt={post.title.rendered}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center gap-5">
                    <div className="flex flex-col gap-2"><p className="text-xs text-gray-500">
                        {formatDate(post.date)}
                    </p>

                        <div className="flex justify-between">
                            <h3 className="text-2xl font-semibold">{post.title.rendered}</h3>
                            <ArrowUpRight />
                        </div>


                        <p className="text-sm text-gray-600 text-justify leading-relaxed mr-10">
                            {truncate(stripHtml(post.content.rendered), previewLength)}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1">
                        {tags.map(tag => (
                            <span
                                key={tag.id}
                                className={`text-xs px-2 py-1 rounded-full ${getTagColorById(tag.id)}`}
                            >
                                {tag.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export const RecentPosts = () => {
    const recent = posts
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 4);

    const [featured, second, third, fourth] = recent;

    return (
        <section className="max-w-[1440px] mx-auto px-5 lg:px-10 py-10">

            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.5fr] gap-6 overflow-hidden">
                {/* Left column */}
                <FeaturedPostCard post={featured} tagsmock={tagsmock} />

                {/* Right column */}
                <div className="flex flex-col gap-6 md:mb-5">
                    <CompactPostCard post={second} tagsmock={tagsmock} />
                    <CompactPostCard post={third} tagsmock={tagsmock} />
                </div>
            </div>

            {/* Bottom row */}
            <div className="grid grid-cols-1 gap-6 mt-6">
                <StandardPostCard post={fourth} tagsmock={tagsmock} />
            </div>
        </section>
    );
};

const PostsGrid = ({ posts, tagsmock }) => {
    const POSTS_PER_PAGE = 3;
    const [currentPage, setCurrentPage] = useState(1);

    const { language } = useLang();
    const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

    // Get posts for the current page
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

    return (
        <div className="max-w-[1440px] mx-auto px-4 lg:px-10 py-10">
            <h1 className='flex text-2xl font-semibold pb-6'>{language === "en" ? "All Posts" : "Tất cả bài viết"}</h1>
            {/* Grid of posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {currentPosts.map(post => (
                    <PostCard key={post.id} post={post} tagsmock={tagsmock} />
                ))}
            </div>

            {/* Pagination controls */}
            <div className="flex justify-center mt-8 gap-3">
                {/* Previous button */}
                <button
                    className="px-3 py-1 border rounded-full hover:bg-gray-200 disabled:opacity-50 transition-all"
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                {/* Page numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                        key={page}
                        className={`px-3 py-1 border rounded-full ${page === currentPage ? "bg-gray-200" : ""
                            } transition-all`}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </button>
                ))}

                {/* Next button */}
                <button
                    className="px-3 py-1 border rounded-full hover:bg-gray-200 disabled:opacity-50 transition-all"
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};



const NewsPage = () => {
    return (
        <>
            <HeroNews />
            <RecentPosts />
            <PostsGrid posts={posts} tagsmock={tagsmock} />
        </>
    );
};

export default NewsPage;