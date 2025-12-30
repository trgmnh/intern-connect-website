import React from "react";
import { useLang } from '../../context/LangContext';
import { AboutUsHome } from '../../data/about_content';
import logo from '../../assets/internconnect_logo.png';
import { BriefCase, HotelApproved, Globe, ArrowToRight } from '../ui/Icons';

export const AboutHome = () => {
    const { language } = useLang();
    const content = AboutUsHome[language];
    return (
        <section className="relative w-full flex justify-center pt-10 lg:py-12 lg:px-10 mx-auto bg-[#F3F4F6]/70">
            <div className="w-full grid grid-cols-1 xl:grid-cols-[1fr_2.5fr] lg:max-w-[1440px] lg:gap-12 z-10">

                {/* LEFT CONTENT */}
                <div className="flex flex-col justify-center items-center px-6 lg:items-start gap-2 max-w-[600px] lg:mx-0 mx-auto">
                    <div className="flex py-3">
                        <img
                            src={logo}
                            alt="Intern Connect Logo"
                            className="w-24 h-auto object-contain"
                        />
                    </div>

                    <p className="text-sm leading-6 text-gray-700 text-center lg:text-justify max-w-[320px] mx-auto lg:max-w-[600px] hyphens-auto">
                        {content.paragraph}
                    </p>
                </div>

                {/* RIGHT CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-3 text-center lg:text-left gap-6 px-3 lg:px-0">

                    {/* CARD 1 */}
                    <div className="flex flex-col p-4 border border-gray-300 shadow-md md:shadow-none md:border-none py-6 lg:py-0">
                        <div className="w-fit bg-gray-200 p-2 mb-3 text-[#0057A0] mx-auto lg:mx-0">
                            <BriefCase className="w-5 h-5" />
                        </div>

                        <h2 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                            {content.heading1}
                        </h2>
                        <p className="text-sm leading-6 text-gray-700 text-center lg:text-justify hyphens-auto">
                            {content.paragraph1}
                        </p>
                        <a
                            href="/services"
                            className="mt-3 inline-flex mx-auto lg:mx-0 items-center gap-1.5 text-sm text-blue-500 hover:underline"
                        >
                            Learn more
                            <ArrowToRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* CARD 2 */}
                    <div className="flex flex-col p-4 border border-gray-300 shadow-md md:shadow-none md:border-none py-6 lg:py-0">
                        <div className="w-fit bg-gray-200 p-2 mb-3 text-[#0057A0] mx-auto lg:mx-0">
                            <HotelApproved className="w-5 h-5" />
                        </div>



                        <h2 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                            {content.heading2}
                        </h2>

                        <p className="text-sm leading-6 text-gray-700 text-center lg:text-justify hyphens-auto">
                            {content.paragraph2}
                        </p>

                        <a
                            href="/services"
                            className="mt-3 inline-flex mx-auto lg:mx-0 items-center gap-1.5 text-sm text-blue-500 hover:underline"
                        >
                            Learn more
                            <ArrowToRight className="w-4 h-4" />
                        </a>
                    </div>

                    {/* CARD 3 */}
                    <div className="flex flex-col p-4 border border-gray-300 shadow-md md:shadow-none md:border-none py-6 lg:py-0">
                        <div className="w-fit bg-gray-200 p-2 mb-3 text-[#0057A0] mx-auto lg:mx-0">
                            <Globe className="w-5 h-5" />
                        </div>

                        <h2 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                            {content.heading3}
                        </h2>

                        <p className="text-sm leading-6 text-gray-700 text-center lg:text-justify">
                            {content.paragraph3}
                        </p>

                        <a
                            href="/services"
                            className="mt-3 inline-flex mx-auto lg:mx-0 items-center gap-1.5 text-sm text-blue-500 hover:underline"
                        >
                            Learn more
                            <ArrowToRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>

    );
}