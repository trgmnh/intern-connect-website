import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPostBySlug } from "../api/wordpress";

const BlogPostPage = () => {
    const { slug } = useParams();

    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function load() {
            try {
                setLoading(true);
                const data = await fetchPostBySlug(slug);
                if (!data) throw new Error("Post not found");
                setPost(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        load();
    }, [slug]);

    if (loading) return <p className="py-10 text-center">Loading…</p>;
    if (error) return <p className="py-10 text-center">{error}</p>;

    return (
        <article className="max-w-[843px] mx-auto px-5 lg:px-10 py-12 leading-relaxed">
            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold mb-3">
                {post.title.rendered}
            </h1>

            {/* Date */}
            <p className="text-sm text-gray-500 mb-8">
                {new Date(post.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                })}
            </p>

            {/* Featured image */}
            {post._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
                <img
                    src={post._embedded["wp:featuredmedia"][0].source_url}
                    alt={post.title.rendered}
                    className="w-full max-h-[600px] object-cover rounded-lg mb-10"
                    loading="lazy"
                />
            )}


            {/* Content */}
            <div
                className="
    prose prose-lg max-w-none text-justify

    /* Headings */
    prose-headings:font-bold 
    prose-h1:text-4xl md:prose-h1:text-5xl
    prose-h2:text-3xl md:prose-h2:text-4xl
    prose-h3:text-2xl md:prose-h3:text-3xl
    prose-h4:text-xl
    prose-headings:mt-10
    prose-headings:mb-10

    /* Paragraphs */
    prose-p:text-gray-700
    prose-p:leading-relaxed
    prose-p:my-6

    /* Images */
    prose-img:rounded-xl
    prose-img:mx-auto
    prose-img:my-10

    /* Links */
    prose-a:text-blue-600
    prose-a:no-underline
    hover:prose-a:underline

    /* Lists */
    prose-ul:my-6
    prose-li:my-2

    /* Blockquotes */
    prose-blockquote:border-l-4
    prose-blockquote:border-gray-300
    prose-blockquote:pl-6
    prose-blockquote:italic
    prose-blockquote:text-gray-600
  "
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
        </article>
    );
};

export default BlogPostPage;
