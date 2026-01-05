import { useParams } from "react-router-dom";
import posts from "../data/post.mock.json";

const fetchPosts = async () => {
    const res = await fetch(
        "https://internconnectvn.com/wp-json/wp/v2/posts?_fields=id,slug,link,title,excerpt,content,author,date,categories,tags,featured_media"
    );
    const data = await res.json();
    return data; // already filtered
};

const BlogPostPage = () => {
    const { slug } = useParams();

    const post = posts.find(p => p.slug === slug);

    if (!post) return <p>Post not found</p>;

    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-4">{post.title.rendered}</h1>
            <p className="text-sm text-gray-500 mb-4">{new Date(post.date).toLocaleDateString()}</p>
            <img
                src={`src/assets/posts/${post.id}.jpg`}
                alt={post.title.rendered}
                className="w-full h-auto object-cover mb-6"
            />
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
    );
};

export default BlogPostPage;
