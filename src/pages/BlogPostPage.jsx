import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPostBySlug } from "../api/wordpress";
import { HighlightedNews } from "../layouts/ThreeCardLayout";
import { useLang } from "../context/LangContext";

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

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let mounted = true;

        async function load() {
            try {
                setLoading(true);
                setError(null);

                const data = await fetchPostBySlug(slug, language);

                if (!data) throw new Error("Post not found");
                if (mounted) setPost(data);
            } catch (err) {
                if (mounted) setError(err.message);
            } finally {
                if (mounted) setLoading(false);
            }
        }

        load();
        return () => (mounted = false);
    }, [slug, language]);

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
                    <article className="max-w-[948px] mx-auto px-4 py-10">

                        <h1 className="text-3xl font-bold mb-4">
                            {post.title.rendered}
                        </h1>

                        <p className="text-sm text-gray-500 mb-8">
                            {new Date(post.date).toLocaleDateString("en-GB", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                            })}
                        </p>

                        {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                            <img
                                src={post._embedded["wp:featuredmedia"][0].source_url}
                                alt={post.title.rendered}
                                className="w-full max-h-[600px] object-cover mb-10"
                                loading="lazy"
                            />
                        )}

                        {/* 🔒 YOUR FORMATTING — UNTOUCHED */}
                        <div
                            className="
prose max-w-none text-justify

    [&_h1]:text-3xl [&_h1]:leading-[1.15]
    [&_h2]:text-2xl [&_h2]:leading-[1.2]
    [&_h3]:text-xl  [&_h3]:leading-[1.25]
    [&_h4]:text-lg [&_h4]:leading-[1.3]
    [&_h5]:text-md leading-[1.35]
    [&_h6]:text-sm [&_h6]:leading-[1.4]

    [&_h1]:mt-8 [&_h1]:mb-4
    [&_h2]:mt-8 [&_h2]:mb-3
    [&_h3]:mt-6 [&_h3]:mb-3
    [&_h4]:mt-6 [&_h4]:mb-2
    [&_h5]:mt-5 [&_h5]:mb-2
    [&_h6]:mt-4 [&_h6]:mb-2

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

                    <div className="max-w-[1080px] mx-auto px-5 lg:px-10 mb-10">
                        <h2 className="text-2xl font-semibold pb-6 px-5">
                            {language === "en" ? "All Posts" : "Tất cả bài viết"}
                        </h2>
                        <HighlightedNews excludeId={post.id} />
                    </div>
                </>
            )}
        </main>
    );
};

export default BlogPostPage;
