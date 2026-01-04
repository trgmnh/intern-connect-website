import React from "react";
import { useLang } from '../context/LangContext';
import { Card } from "../components/ui/Cards";
import { PostCard } from "../pages/News.jsx";
import { collaboration } from '../data/threecardlayout';
import academicpartnership from '../assets/card/academicpartnership.jpg';
import mobilityprogram from '../assets/card/mobilityprogram.jpg';
import cobranding from '../assets/card/cobranding.jpg';
import posts from '../data/post.mock.json'
import { tagsmock } from '../data/tags.js';
import { Button } from "../components/ui/Button.jsx";
import { Link } from "react-router-dom";

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

export const HighlightedNews = () => {
    const highlighted = posts.slice(0, 3);

    return (
        <section className="flex flex-col items-center max-w-[1440px] mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[1440px] mx-auto mb-4 px-5">
                {highlighted.map(post => {
                    const resolvedTags = post.tags
                        .map(tagId => tagsmock[tagId])
                        .filter(Boolean);

                    return (
                        <PostCard key={post.id} post={post} tagsmock={tagsmock} />
                    );
                })}
            </div>
            <Link to="/news"><Button text="View All News" className="mx-auto" arrow={true} /></Link>
        </section>

    );
};







