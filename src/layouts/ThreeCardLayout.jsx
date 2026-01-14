import { useLang } from '../context/LangContext';
import { Card } from "../components/ui/Cards";
import { PostCard } from "../pages/News.jsx";
import { collaboration } from '../data/threecardlayout';
import academicpartnership from '../assets/card/academicpartnership.jpg';
import mobilityprogram from '../assets/card/mobilityprogram.jpg';
import cobranding from '../assets/card/cobranding.jpg';
import { Button } from "../components/ui/Button.jsx";
import { Link } from "react-router-dom";
import { fetchPostsList, fetchTags } from "../api/wordpress";
import { useEffect, useState } from "react";

export const CollaborationFormats = () => {
    const { language } = useLang();
    const collab = collaboration[language] || [];
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-5 mb-16 justify-items-center max-w-[1440px] mx-auto lg:justify-items-stretch">
            <Card
                key=""
                imageSrc={academicpartnership}
                title={collab.academicsupport.title}
                description={collab.academicsupport.description}
            />

            <Card
                key=""
                imageSrc={mobilityprogram}
                title={collab.mobilityprogram.title}
                description={collab.mobilityprogram.description}
            />

            <Card
                key=""
                imageSrc={cobranding}
                title={collab.cobranding.title}
                description={collab.cobranding.description}
            />
        </div>

    );
}




export const HighlightedNews = ({ excludeId }) => {
    const [posts, setPosts] = useState([]);
    const [tags, setTags] = useState({});
    const [loading, setLoading] = useState(true);
    const { language } = useLang();

    useEffect(() => {
        async function load() {
            try {
                setLoading(true); // optional but correct
                const [postsData, tagsData] = await Promise.all([
                    fetchPostsList({
                        perPage: 3,
                        exclude: excludeId,
                        language: language,
                    }),
                    fetchTags(),
                ]);

                setPosts(postsData);
                setTags(tagsData);
            } catch (e) {
                console.error("HighlightedNews fetch error", e);
            } finally {
                setLoading(false);
            }
        }

        load();
    }, [excludeId, language]);

    if (loading)
        return (
            <div className="max-w-[1400px] mx-auto px-5 lg:px-10 pb-20 space-y-10">
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
        )
    return (
        <section className="flex flex-col items-center mb-6 md:mb-10 mx-auto w-full px-5">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-2 md:mb-8 max-w-[1440px] mx-auto">
                {posts.map(post => (
                    <PostCard
                        key={post.id}
                        post={post}
                        tagsfetch={tags}
                    />
                ))}
            </div>

            <Link to="/news">
                <Button text="View All News" className="mx-auto" arrow />
            </Link>
        </section>
    );
};







