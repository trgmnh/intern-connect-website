import React from "react";
import { StarFill, Add, Minus, ArrowToRight, ArrowUpRight } from "./Icons";
import { useState } from "react";
import { useLang } from '../../context/LangContext';
import { Link } from "react-router-dom";

// for internship and destination cards
export const Card = ({
    imageSrc,
    title,
    description,
    link,
    pointer = false,
    cta
}) => {
    const { languague } = useLang();
    return (
        <Link to={link} >
            <div
                className={`
                group bg-white h-full border border-gray-200 shadow-md
                hover:shadow-xl transition-shadow duration-300
                rounded-md
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
                            {cta}
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

