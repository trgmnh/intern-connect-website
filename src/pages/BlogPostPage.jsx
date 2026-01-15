import { useParams } from "react-router-dom";
import { useEffect, useState, useRef, useMemo } from "react";
import { fetchPostBySlug, fetchTags } from "../api/wordpress";
import { HighlightedNews } from "../layouts/ThreeCardLayout";
import { useLang } from "../context/LangContext";
import { getTagColorById } from "../data/tags";
import { ContactUsPage } from "../pages/Contact";


const BlogPostSkeleton = () => {
    return (
        <div className="max-w-[948px] mx-auto px-4 py-10 animate-pulse">

            {/* Title */}
            <div className="h-10 w-3/4 bg-gray-200 rounded mb-6" />

            {/* Meta */}
            <div className="h-4 w-40 bg-gray-200 rounded mb-10" />

            {/* Featured image */}
            <div className="w-full h-[420px] bg-gray-200 rounded-xl mb-10" />

            {/* Paragraphs */}
            <div className="space-y-4">
                <div className="h-4 w-full bg-gray-200 rounded" />
                <div className="h-4 w-11/12 bg-gray-200 rounded" />
                <div className="h-4 w-10/12 bg-gray-200 rounded" />
                <div className="h-4 w-full bg-gray-200 rounded" />
                <div className="h-4 w-9/12 bg-gray-200 rounded" />
            </div>
        </div>
    );
};


const BlogPostPage = () => {
    const { slug } = useParams();
    const { language } = useLang();
    const [tagsMap, setTagsMap] = useState({});

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const tagsCacheRef = useRef(null);

    useEffect(() => {
        let mounted = true;

        // reset UI immediately
        setPost(null);
        setError(null);
        setLoading(true);

        async function load() {
            try {
                const data = await fetchPostBySlug(slug, language);
                if (!data) throw new Error("Post not found");

                let tagsData = tagsCacheRef.current;
                if (!tagsData) {
                    tagsData = await fetchTags();
                    tagsCacheRef.current = tagsData;
                }

                if (mounted) {
                    setPost(data);
                    setTagsMap(tagsData);
                }
            } catch (err) {
                if (mounted) setError(err.message);
            } finally {
                if (mounted) setLoading(false);
            }
        }

        load();
        return () => (mounted = false);
    }, [slug, language]);


    const tags = useMemo(() => {
        return post && tagsMap
            ? post.tags.map(id => tagsMap[id]).filter(Boolean)
            : [];
    }, [post, tagsMap]);

    return (
        <main>
            {/* Skeleton FIRST – layout mounts instantly */}
            {loading && <BlogPostSkeleton />}

            {/* Error */}
            {!loading && error && (
                <p className="py-10 text-center">{error}</p>
            )}

            {/* Real content */}
            {!loading && post && (
                <>
                    <article className=" mx-auto px-4 py-10">

                        <h1 className="text-3xl max-w-[948px] font-bold mb-3 mx-auto">
                            {post.title.rendered}
                        </h1>

                        <p className="text-xs text-gray-500 mb-4 mx-auto max-w-[948px] ">
                            {new Date(post.date).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                            })}
                        </p>
                        <div className="flex gap-2 mb-10 max-w-[948px] mx-auto">
                            {tags.map(tag => (
                                <span
                                    key={tag.id}
                                    className={`text-xs px-2 py-1 rounded-full ${getTagColorById(tag.id)}`}
                                >
                                    {tag.name}
                                </span>
                            ))}
                        </div>

                        {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                            <img
                                src={post._embedded["wp:featuredmedia"][0].source_url}
                                alt={post.title.rendered}
                                className="w-full max-h-[600px] mx-auto max-w-[1280px] object-cover mb-10"
                                loading="lazy"
                            />
                        )}

                        {/* 🔒 YOUR FORMATTING — UNTOUCHED */}
                        <div
                            className="
prose max-w-[948px] mx-auto text-left md:text-justify tracking-normal

    [&_h1]:text-xl [&_h1]:leading-[1.15]
    [&_h2]:text-lg [&_h2]:leading-[1.2]
    [&_h3]:text-md  [&_h3]:leading-[1.25]
    [&_h4]:text-sm [&_h4]:leading-[1.3]
    [&_h5]:text-sm [&_h5]:leading-[1.4]

    [&_h1]:mt-8 [&_h1]:mb-4
    [&_h2]:mt-8 [&_h2]:mb-3
    [&_h3]:mt-6 [&_h3]:mb-3
    [&_h4]:mt-6 [&_h4]:mb-2
    [&_h5]:mt-5 [&_h5]:mb-2

   [&_p]:text-gray-700
[&_p]:leading-[2]
[&_p]:my-3

    prose-img:rounded-xl
    prose-img:mx-auto
    prose-img:my-10

    prose-a:text-blue-600
    prose-a:no-underline
    hover:prose-a:underline

    prose-blockquote:border-l-4
    prose-blockquote:border-gray-300
    prose-blockquote:pl-6
    prose-blockquote:italic
    prose-blockquote:text-gray-600
    
"
                            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                        />
                    </article>

                    <div className="max-w-[1080px] mx-auto mb-10 px-0">
                        <h2 className="text-2xl font-semibold pb-6 px-5">
                            {language === "en" ? "All Posts" : "Tất cả bài viết"}
                        </h2>
                        <HighlightedNews excludeId={post.id} lang={language} />
                        <div className="py-10 pb-6"><ContactUsPage /></div>
                    </div>
                </>
            )}
        </main>
    );
};

export default BlogPostPage;
