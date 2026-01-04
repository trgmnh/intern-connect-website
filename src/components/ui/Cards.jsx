import React from "react";
import { StarFill, Add, Minus, ArrowToRight, ArrowUpRight } from "./Icons";
import { useState } from "react";
import { useLang } from '../../context/LangContext';
import { Link } from "react-router-dom";
import { getTagColorById } from "../../data/tags";

import { getPostImage } from "src/pages/News";
import img101 from 'src/assets/posts/101.jpg';
import img102 from 'src/assets/posts/102.jpg';
import img103 from 'src/assets/posts/103.jpg';
import img104 from 'src/assets/posts/104.jpg';
import img105 from 'src/assets/posts/105.jpg';
import img106 from 'src/assets/posts/106.jpg';
import img107 from 'src/assets/posts/107.jpg';
import img108 from 'src/assets/posts/108.jpg';
import img109 from 'src/assets/posts/109.jpg';
import img110 from 'src/assets/posts/110.jpg';

const mockImages = {
    101: img101,
    102: img102,
    103: img103,
    104: img104,
    105: img105,
    106: img106,
    107: img107,
    108: img108,
    109: img109,
    110: img110,
};

// for internship and destination cards
export const Card = ({
    imageSrc,
    title,
    description,
    link,
    pointer = false,
}) => {
    return (
        <Link to={link} >
            <div
                className={`
                group bg-white h-full border border-gray-200 shadow-md
                hover:shadow-xl transition-shadow
                flex flex-col overflow-hidden
                ${pointer ? "cursor-pointer" : ""}
            `}
            >
                {/* Image wrapper */}
                <div className="relative overflow-hidden aspect-[4.5/3]">
                    <img
                        src={imageSrc}
                        alt={title}
                        className="
                        w-full h-full object-cover object-center
                        transition-transform duration-500 ease-out
                        group-hover:scale-110
                        will-change-transform
                    "
                    />
                    <div className="
        absolute inset-0 bg-black/0
        group-hover:bg-black/10
        transition-colors duration-300
    " />
                </div>

                {/* Content */}
                <div className="p-5 gap-2 flex flex-col justify-between flex-grow">
                    <div className="flex flex-col gap-3">
                        <h3 className="text-lg font-semibold leading-tight">{title}</h3>
                        <p className="text-sm text-gray-600 leading-snug">{description}</p></div>

                    {link && (
                        <a
                            href={link}
                            className="
                            mt-4 text-regular inline-flex justify-start items-center gap-2
                            text-blue-700 font-semibold hover:underline 
                        "
                        >
                            Learn more
                            <ArrowToRight className="w-3 h-3" width={12} />
                        </a>
                    )}
                </div>
            </div> </Link>
    );
};


export const TestimonialsCard = ({ name, role, location, content }) => {
    return (
        <div className="bg-white p-8 rounded-md shadow-md flex flex-col h-full border-[1px] border-gray-200">
            <div className="flex items-center w-full max-w-xs gap-2 text-yellow-500 pb-1">
                <StarFill className="w-3 h-3" width={16} />
                <StarFill className="w-3 h-3" width={16} />
                <StarFill className="w-3 h-3" width={16} />
                <StarFill className="w-3 h-3" width={16} />
                <StarFill className="w-3 h-3" width={16} />
            </div>
            <p className="text-gray-600 text-sm font-medium">{location}</p>

            <p className="text-gray-700 text-sm mt-4 flex-grow text-justify leading-relaxed">"{content}"</p>
            <div className="mt-4">
                <h4 className="text-md font-semibold text-gray-900">{name}</h4>

                <p className="text-gray-600 text-sm">{role}</p>

            </div>
        </div>
    );
};

export const FrequentAskedQuestionCard = ({ question, answer }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-white p-6 rounded-md border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            {/* Header */}
            <button
                onClick={() => setOpen(!open)}
                className="flex w-full justify-between items-center text-left"
            >
                <div className="flex gap-4 justify-center items-center">
                    <h3 className="text-lg font-semibold text-gray-900">
                        {question}
                    </h3></div>

                {open ? (
                    <Minus className="w-5 h-5 text-gray-500" />
                ) : (
                    <Add className="w-5 h-5 text-gray-500" />
                )}
            </button>

            {/* Answer */}
            <div
                className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"
                    }`}
            >
                <div className="overflow-hidden">
                    <p className="text-gray-700 text-base leading-relaxed max-w-[870px] text-justify">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
};

export const PostCard = ({ post, tagsmock }) => {
    const stripHtml = (html) => html.replace(/<[^>]+>/g, "");
    const truncate = (text, max) => (text.length > max ? text.slice(0, max) + "…" : text);
    const tags = post.tags.map(id => tagsmock[id]).filter(Boolean);
    const previewLength = 120;
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    return (
        <Link to={`/blog/${post.slug}`} className="group flex flex-col h-full overflow-hidden">
            {/* Image */}
            <div className="relative w-full aspect-[4.5/3] overflow-hidden">
                <img
                    src={getPostImage(post)}
                    alt={post.title.rendered}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="py-4 flex flex-col justify-between gap-2">
                {/* Date */}
                <p className="text-xs text-gray-500">
                    {new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>

                {/* Title */}
                <div className="flex justify-between gap-2 items-start">
                    <h3 className="text-2xl md:text-xl font-semibold leading-snug">{post.title.rendered}</h3>
                    <ArrowUpRight />
                </div>

                {/* Excerpt */}
                <p className="text-xs text-gray-600 leading-relaxed">
                    {truncate(stripHtml(post.content.rendered), 120)}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 pt-1">
                    {post.tags.map(tagId => {
                        const tag = tagsmock[tagId];
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
