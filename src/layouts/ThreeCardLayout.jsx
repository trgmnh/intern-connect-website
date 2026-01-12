import React from "react";
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-5 mb-20 justify-items-center max-w-[1440px] mx-auto lg:justify-items-stretch">
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
    }, [excludeId]);

    if (loading) return null;

    return (
        <section className="flex flex-col items-center mb-6 md:mb-10 mx-auto w-full px-5">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 max-w-[1440px] mx-auto">
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







