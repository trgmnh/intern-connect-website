import React from 'react';
import { HeroNews } from '../layouts/Hero';
import { useLang } from '../context/LangContext';
import { ArrowUpRight } from '../components/ui/Icons';
import { Link } from 'react-router-dom';
import { getTagColorById } from '../data/tags.js';
import { useState, useEffect } from 'react';
import { getPostImage } from '../utils/getPostImage.js';
import { fetchPostsList, fetchTags } from "../api/wordpress";
import { Suspense } from 'react';

const excerptCache = new Map();

export const cleanExcerpt = (html) => {
    if (!html) return "";
    if (excerptCache.has(html)) return excerptCache.get(html);

    const div = document.createElement("div");
    div.innerHTML = html;
    const text = div.textContent?.trim() || "";

    excerptCache.set(html, text);
    return text;
};


const formatDate = date =>
    new Date(date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });

const truncate = (text, max) =>
    text.length > max ? text.slice(0, max) + "…" : text;

const NewsSkeleton = () => {
    return (
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-10 space-y-10">
            <div className="h-[220px] bg-gray-200 animate-pulse" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="space-y-4">
                        <div className="aspect-[4.5/3] bg-gray-200 animate-pulse" />
                        <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
                        <div className="h-3 bg-gray-200 rounded w-full animate-pulse" />
                        <div className="h-3 bg-gray-200 rounded w-5/6 animate-pulse" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export const FeaturedPostCard = ({ post, tagsfetch }) => {
    const tags = post.tags.map(id => tagsfetch[id]).filter(Boolean);
    const previewLength = 200;
    return (
        <Link to={`/news/${post.slug}`} className="group">
            <div className="flex flex-col gap-3 overflow-hidden">
                {/* Image */}
                <div className="overflow-hidden md:aspect-[3/1]">
                    <img
                        src={getPostImage(post)}
                        alt={post.title.rendered}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading='lazy'
                        decoding='async'
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
                            <h3 className="text-lg font-bold leading-tight md:leading-normal">{post.title.rendered}</h3>
                            <ArrowUpRight />
                        </div>

                        {/* Excerpt */}
                        <p className="text-sm text-gray-600 text-justify leading-relaxed mr-10">
                            {truncate(cleanExcerpt(post.excerpt.rendered), previewLength)}
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

export const CompactPostCard = ({ post, tagsfetch }) => {
    const tags = post.tags.map(id => tagsfetch[id]).filter(Boolean);
    const previewLength = 120;

    return (
        <Link to={`/news/${post.slug}`} className="grid grid-cols-1 md:grid-cols-2 gap-4 group">
            {/* Image */}
            <div className="w-full h-auto overflow-hidden shrink-0 md:aspect-[4.2/3]">
                <img
                    src={getPostImage(post)}
                    loading='lazy'
                    decoding='async'
                    alt={post.title.rendered}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* excerpt */}
            <div className="flex flex-col justify-between pb-2">
                <div className="flex flex-col gap-2"><p className="text-xs text-gray-500">
                    {formatDate(post.date)}
                </p>

                    <div className="flex justify-between gap-2">
                        <h3 className="text-lg font-bold leading-snug">{post.title.rendered}</h3>
                        <ArrowUpRight />
                    </div>

                    <p className="text-xs text-gray-600 leading-relaxed ">
                        {truncate(cleanExcerpt(post.excerpt.rendered), previewLength)}
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

const StandardPostCard = ({ post, tagsfetch }) => {
    const tags = post.tags.map(id => tagsfetch[id]).filter(Boolean);
    const previewLength = 420;

    return (
        <Link to={`/news/${post.slug}`} className="group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
                {/* Image */}
                <div className="overflow-hidden lg:aspect-[2.5/1]">
                    <img
                        src={getPostImage(post)}
                        alt={post.title.rendered}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading='lazy'
                        decoding='async'
                    />
                </div>

                {/* excerpt */}
                <div className="flex flex-col justify-center gap-5">
                    <div className="flex flex-col gap-2"><p className="text-xs text-gray-500">
                        {formatDate(post.date)}
                    </p>

                        <div className="flex justify-between">
                            <h3 className="text-xl font-bold">{post.title.rendered}</h3>
                            <ArrowUpRight />
                        </div>


                        <p className="text-sm text-gray-600 text-justify leading-relaxed mr-10">
                            {truncate(cleanExcerpt(post.excerpt.rendered), previewLength)}
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

export const PostCard = ({ post, tagsfetch }) => {
    const truncate = (text, max) => (text.length > max ? text.slice(0, max) + "…" : text);

    return (
        <Link to={`/news/${post.slug}`} className="group flex flex-col h-full bg-white overflow-hidden hover:shadow-xl transition-shadow">
            {/* Image */}
            <div className="relative w-full aspect-[5/3] overflow-hidden">
                <img
                    src={getPostImage(post)}
                    alt={post.title.rendered}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading='lazy'
                    decoding='async'
                />
            </div>

            {/* excerpt */}
            <div className="py-4 flex flex-col justify-between gap-2 group-hover:px-4">
                {/* Date */}
                <p className="text-xs text-gray-500">
                    {new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>

                {/* Title */}
                <div className="flex justify-between gap-2 items-start">
                    <h3 className="text-lg font-bold leading-snug group-hover:underline">{post.title.rendered}</h3>
                    <ArrowUpRight />
                </div>

                {/* Excerpt */}
                <p className="text-xs text-gray-600 leading-relaxed">
                    {truncate(cleanExcerpt(post.excerpt.rendered), 120)}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 pt-1">
                    {post.tags.map(tagId => {
                        const tag = tagsfetch[tagId];
                        if (!tag) return null;
                        return (
                            <span
                                key={tag.id}
                                className={`text-[10px] px-2 py-[2px] rounded-full ${getTagColorById(tag.id)}`}
                            >
                                {tag.name}
                            </span>
                        );
                    })}
                </div>
            </div>
        </Link>
    );
};

export const RecentPosts = ({ posts, tagsfetch }) => {
    if (!posts || posts.length < 4) return null;

    const recent = React.useMemo(() => {
        return [...posts]
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 4);
    }, [posts]);

    const [featured, second, third, fourth] = recent;

    return (
        <section className="max-w-[1440px] mx-auto px-5 lg:px-10 py-10">

            <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.5fr] gap-6 overflow-hidden">
                {/* Left column */}
                <FeaturedPostCard post={featured} tagsfetch={tagsfetch} />

                {/* Right column */}
                <div className="flex flex-col gap-6 md:mb-5">
                    <CompactPostCard post={second} tagsfetch={tagsfetch} />
                    <CompactPostCard post={third} tagsfetch={tagsfetch} />
                </div>
            </div>

            {/* Bottom row */}
            <div className="grid grid-cols-1 gap-6 mt-6">
                <StandardPostCard post={fourth} tagsfetch={tagsfetch} />
            </div>
        </section>
    );
};

const PostsGrid = ({ posts, tagsfetch }) => {
    const POSTS_PER_PAGE = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const { language } = useLang();
    const totalPages = React.useMemo(
        () => Math.ceil(posts.length / POSTS_PER_PAGE),
        [posts.length]
    );
    // Get posts for the current page
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

    return (
        <section className="bg-white">
            <div className="max-w-[1440px] px-4 lg:px-10 py-10 mx-auto ">
                <h1 className='flex text-2xl font-bold pb-6'>{language === "en" ? "All Posts" : "Tất cả bài viết"}</h1>
                {/* Grid of posts */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentPosts.map(post => (
                        <PostCard key={post.id} post={post} tagsfetch={tagsfetch} />
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
        </section>
    );
};

const NewsPage = () => {
    const [posts, setPosts] = useState([]);
    const [tags, setTags] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { language } = useLang();

    useEffect(() => {
        let mounted = true;

        async function load() {
            try {
                setLoading(true);

                const [postsData, tagsData] = await Promise.all([
                    fetchPostsList({ perPage: 6, lang: language }),
                    fetchTags()
                ]);

                if (!mounted) return;

                setPosts(postsData);
                setTags(tagsData);
            } catch (e) {
                if (mounted) setError("Failed to load news");
            } finally {
                if (mounted) setLoading(false);
            }
        }

        load();
        return () => (mounted = false);
    }, [language]);

    return (
        <>
            {/* Hero always renders */}
            <HeroNews />

            {/* Skeleton shows immediately */}
            {loading && <NewsSkeleton />}

            {/* Error */}
            {!loading && error && (
                <p className="py-10 text-center">{error}</p>
            )}

            {/* Real content */}
            {!loading && posts.length > 0 && (
                <>
                    <RecentPosts posts={posts.slice(0, 4)} tagsfetch={tags} />

                    <Suspense fallback={null}>
                        <PostsGrid posts={posts} tagsfetch={tags} />
                    </Suspense>
                </>
            )}
        </>
    );
};
export default NewsPage;