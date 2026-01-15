import { StarFill, Add, Minus, ArrowToRight } from "./Icons";
import { useState } from "react";
import { Link } from "react-router-dom";

// for internship and destination cards
export const Card = ({ image, title, description, link }) => {
    return (
        <div
            className={`relative overflow-hidden rounded-lg group aspect-[5/3]`}
        >
            {/* Background image */}
            <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                loading="lazy"
            />

            {/* Overlay */}
            <div className={`absolute inset-0 bg-black bg-opacity-40`} />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end p-5 text-white">
                <h3 className="text-xl font-semibold leading-snug mb-1">
                    {title}
                </h3>

                {description && (
                    <p className="block text-sm text-white/90 leading-relaxed line-clamp-3 ">
                        {description}
                    </p>
                )}

            </div>

        </div>
    );
};


export const TestimonialsCard = ({ name, role, location, content }) => {
    return (
        <div className="bg-white p-8 rounded-md shadow-md flex flex-col h-full border-[1px] border-gray-200">
            <div className="flex items-center w-full max-w-xs gap-2 text-yellow-500 pb-[6px]">
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

