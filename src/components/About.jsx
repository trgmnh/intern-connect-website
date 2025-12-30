import daniel from '../assets/bod/mrdaniel.png';
import mrsvy from '../assets/bod/mrsvy.png';
import React from "react";
import { useLang } from '../context/LangContext';
import { MrDaniel, MrsVi } from '../data/bodcontent';
import aboutImage from '../assets/card/aboutus1.jpeg';
import { Globe, Connect, HotelApproved, PeopleFill, BriefCase, GraphUpArrow, ArrowToRight, Eye, ChatFill, IncreasingBarChart, HumanRaiseHand } from './ui/Icons';
import logo from '../assets/logo.png';
import { AboutUsHome, AboutUs, VisionMissionContent, whyChooseUs, ProcessContent, CommitmentContent } from '../data/content';
import logohorizontal from '../assets/logohorizontal.svg';
import logohorizontal2 from '../assets/logo2.png';


export const BoardOfDirectors = () => {
    const { language } = useLang();
    const danielContent = MrDaniel[language];
    const vyContent = MrsVi[language];

    return (
        <section className="bg-white pb-4 px-7 sm:px-10 lg:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12">

                {/* Mrs. Vi */}
                <div className="flex flex-col items-center text-center max-w-lg mx-auto">
                    <div className="relative w-64 h-64 mb-8 flex justify-center">
                        {/* Circle background */}
                        <div className="absolute bottom-0 w-48 h-48 bg-gray-200 rounded-full"></div>

                        {/* Image */}
                        <img
                            src={mrsvy}
                            alt="Mrs. Vi Tran"
                            className="relative z-10 max-h-70 object-contain"
                        />
                    </div>

                    <div className='bg-gradient-to-r from-[#0057A0] to-[#d62828] px-7 py-3'><h3 className="text-2xl font-bold text-[#ffffff]">
                        {vyContent.name}</h3></div>

                    <p className="text-xl font-semibold text-gray-500 my-4">
                        {vyContent.position}
                    </p>
                    <p className="text-sm text-justify text-gray-600 leading-relaxed max-w-lg">
                        {vyContent.description}
                    </p>
                </div>

                {/* Mr. Daniel */}
                <div className="flex flex-col items-center text-center max-w-lg mx-auto mb-10 md:mb-0">
                    <div className="relative w-64 h-64 mb-8 flex justify-center">
                        {/* Circle background */}
                        <div className="absolute bottom-0 w-48 h-48 bg-gray-200 rounded-full"></div>

                        {/* Image */}
                        <img
                            src={daniel}
                            alt="Mr. Daniel Krestschmar"
                            className="relative z-10 max-h-70 object-contain"
                        />
                    </div>

                    <div className='bg-gradient-to-l from-[#d62828] to-[#0057A0] px-7 py-3'><h3 className="text-2xl font-bold text-[#ffffff]">
                        {danielContent.name}</h3></div>
                    <p className="text-xl font-semibold text-gray-500 my-4">
                        {danielContent.position}
                    </p>
                    <p className="text-sm text-justify text-gray-600 leading-relaxed max-w-md">
                        {danielContent.description}
                    </p>
                </div>

            </div>
        </section >
    );
};

export const AboutImage = () => {
    const { language } = useLang();
    const content = AboutUs[language];

    return (
        <section className=" w-full">
            <div className="relative max-w-[1440px] mx-auto px-6">
                <div className="w-full grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10">

                    {/* Image */}
                    <img
                        src={aboutImage}
                        alt="About Us"
                        className="w-full h-full object-cover shadow-lg"
                    />

                    {/* Content */}
                    <div className="flex flex-col justify-start text-justify">


                        {/* Logo + paragraph */}
                        < div className='h-full flex flex-col gap-8 p-8 border border-gray-300 shadow-md'>

                            <div className="flex flex-col justify-start relative overflow-hidden">
                                <img
                                    src={logo}
                                    alt="Intern Connect Logo"
                                    className="
                        w-16 sm:w-20 h-auto mb-4 object-contain
                    "
                                />


                                <p className="text-gray-700 text-sm sm:text-justify text-justify leading-normal">
                                    {content.description1}
                                </p>
                            </div>

                            {/* Two feature blocks */}
                            <div className="grid grid-cols-1 sm:grid-cols-[2fr_3fr] gap-8">
                                <div className="flex flex-col gap-4">
                                    <div className="w-fit bg-gray-200 p-2 rounded-lg text-[#0057A0]">
                                        <Globe className="w-12 h-12 sm:w-16 sm:h-16" />
                                    </div>
                                    <p className="text-gray-700 text-sm sm:text-justify text-justify leading-normal">
                                        {content.description2}
                                    </p>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <div className="w-fit bg-gray-200 p-2 rounded-lg text-[#0057A0]">
                                        <Connect className="w-20 h-20 sm:w-16 sm:h-16" />
                                    </div>
                                    <p className="text-gray-700 text-sm sm:text-justify text-justify leading-normal">
                                        {content.description3}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative corner (desktop only) */}
                <div className="hidden lg:block absolute -top-8 -left-1 w-16 h-16 pointer-events-none">
                    <span className="absolute top-0 left-0 w-full h-[6px] bg-[#0057A0]" />
                    <span className="absolute top-0 left-0 h-full w-[6px] bg-[#d62828]" />
                </div>
            </div >

        </section >

    );
}

export const VisionMission = () => {
    const { language } = useLang();
    const content = VisionMissionContent[language];

    return (
        <section className=" w-full py-10">
            <div className="relative max-w-[1440px] mx-auto px-6">
                <div className="w-full grid grid-cols-1 lg:grid-cols-[1.5fr_3fr] gap-6 h-auto">
                    <div className="flex flex-col justify-start">
                        <div className='bg-gradient-to-r from-[#d62828] to-[#0057A0] py-3'>
                            <h1 className="text-2xl text-center font-bold text-white">{content.VisionTitle}</h1>
                        </div>
                        <div className="flex items-center h-full px-7 py-8 md:px-6 gap-6 text-[#0057A0] my-auto shadow-md border-gray-300 border">
                            <div className='bg-gray-200 p-2 rounded-lg'>
                                <Eye className="text-[#0057A0]" width="20" height="20" /></div>
                            <p className="text-gray-700 text-sm text-justify">
                                {content.Vision}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start">
                        <div className='bg-gradient-to-r from-[#d62828] to-[#0057A0] py-3'>
                            <h1 className="text-2xl text-center font-bold text-white">{content.MissionTitle}</h1>
                        </div >
                        <div className="flex flex-col justify-start px-7 py-8 md:px-6 gap-6 shadow-md border-gray-300 border"><div className="flex items-center gap-6 text-[#0057A0]">
                            <div className='bg-gray-200 p-2 rounded-lg'>
                                <PeopleFill className="text-[#0057A0]" width="20" height="20" /></div>
                            <p className="text-gray-700 text-sm text-justify hyphens-auto">
                                {content.Mission1}
                            </p>
                        </div>

                            <div className="flex items-center gap-6 text-[#0057A0]">
                                <div className='bg-gray-200 p-2 rounded-lg'>
                                    <BriefCase className="text-[#0057A0]" width="20" height="20" /></div>
                                <p className="text-gray-700 text-sm text-justify hyphens-manual">
                                    {content.Mission2}
                                </p>
                            </div>
                            <div className="flex items-center gap-6 text-[#0057A0]">
                                <div className='bg-gray-200 p-2 rounded-lg'>
                                    <GraphUpArrow className="text-[#0057A0]" width="20" height="20" /></div>
                                <p className="text-gray-700 text-sm text-justify hyphens-manual">
                                    {content.Mission3}
                                </p>
                            </div></div>
                    </div>
                </div>
                <div className="hidden lg:block absolute -bottom-8 right-0 w-16 h-16">
                    <span className="absolute bottom-0 right-0 w-full h-[6px] bg-[#0057A0]" />
                    <span className="absolute bottom-0 right-0 h-full w-[6px] bg-[#d62828]" />
                </div>
            </div >
        </section >
    );
}


export const WhyChooseUs = () => {
    const { language } = useLang();
    const content = whyChooseUs[language];
    return (
        <section className="relative w-full flex justify-center items-center lg:px-10 max-w-[1600px] mx-auto mb-12">
            {/* First row: 3 items */}
            <div className="w-full flex flex-col gap-6 lg:gap-0 z-10 px-6 items-center">
                <div className="flex flex-col md:flex-row justify-center lg:items-start gap-6 flex-wrap">
                    {Object.values(content).slice(0, 3).map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="w-full max-w-[400px] lg:flex-1 flex flex-col items-center text-center p-8 border border-gray-300 shadow-lg md:shadow-none md:border-none"
                            >
                                <div className="w-fit bg-gray-200 p-2 mb-6 text-[#0057A0]">
                                    {Icon && <Icon className="w-8 h-8" />}
                                </div>
                                <h2 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                                    {item.benefit}
                                </h2>
                                <p className="text-sm leading-6 text-gray-700 text-center">
                                    {item[`p${index + 1}`]}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Second row: 2 items centered */}
                <div className="flex flex-col md:flex-row justify-center items-start gap-6 px-">
                    {Object.values(content).slice(3, 5).map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index + 3}
                                className="w-full max-w-[400px] lg:flex-1 flex flex-col items-center text-center p-8 border border-gray-200 shadow-lg md:shadow-none md:border-none"
                            >

                                <div className="w-fit bg-gray-200 p-2 mb-6 text-[#0057A0]">
                                    {Icon && <Icon className="w-8 h-8" />}
                                </div>
                                <h2 className="text-lg font-semibold text-gray-900 mb-2 leading-snug">
                                    {item.benefit}
                                </h2>
                                <p className="text-sm leading-6 text-gray-700 text-center">
                                    {item[`p${index + 4}`]}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>

    );
}

export const Process = () => {
    const { language } = useLang();
    const currentSteps = ProcessContent[language] || ProcessContent.en;

    return (
        <div className="max-w-[1440px] mx-auto py-6 px-2 bg-white">
            <div className="flex flex-col justify-center gap-8">

                {/* Row 1 – 4 items */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1440px] mx-auto gap-10">
                    {currentSteps.slice(0, 4).map((step) => (
                        <div key={step.id} className="w-full group">
                            <div className="flex flex-col items-center justify-start max-w-[280px] h-full gap-2">
                                <span className="text-7xl font-black text-[#0057A0] leading-none mb-4">
                                    {step.id}
                                </span>

                                <h3 className="text-xl font-semibold text-black px-2 text-center">
                                    {step.title}
                                </h3>

                                <p className="text-md text-gray-600 mb-6 leading-snug text-center">
                                    {step.description}
                                </p>

                                {/* Animated line */}
                                <div className="w-32 h-[2px] bg-gray-300 relative overflow-hidden group-hover:h-[3px] rounded-full">
                                    <div className="absolute top-0 left-0 h-full w-full
                                        bg-gradient-to-r from-[#0057A0] to-[#D62828]
                                        scale-x-0 origin-left
                                        transition-transform duration-200
                                        group-hover:scale-x-100"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Row 2 – 3 items */}
                <div className="flex flex-col md:flex-row justify-center gap-x-12 gap-y-8 max-w-[1440px] mx-auto px-5">
                    {currentSteps.slice(4, 7).map((step) => (
                        <div key={step.id} className="w-full flex justify-center group">
                            <div className="flex flex-col items-center text-center max-w-[300px] h-full justify-between">
                                <span className="text-7xl font-black text-[#0057A0] mb-4 leading-none">
                                    {step.id}
                                </span>

                                <h3 className="text-xl font-semibold text-black mb-2 px-2 flex items-center justify-center">
                                    {step.title}
                                </h3>

                                <p className="text-md text-gray-600 mb-6 leading-snug">
                                    {step.description}
                                </p>

                                {/* Animated line */}
                                <div className="w-28 h-[2px] bg-gray-300 relative overflow-hidden group-hover:h-[3px] rounded-full">
                                    <div className="absolute top-0 left-0 h-full w-full
                                        bg-gradient-to-r from-[#0057A0] to-[#D62828]
                                        scale-x-0 origin-left
                                        transition-transform duration-200
                                        group-hover:scale-x-100"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};



export const Commitment = () => {
    const { language } = useLang();
    const content = CommitmentContent[language] || CommitmentContent.en;

    return (
        <div className="max-w-7xl mx-auto py-8 px-4 bg-white">
            {/* 4-column grid for desktop, stacks on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                {content.map((item) => {
                    const Icon = item.icon;
                    return (
                        <div key={item.id} className="flex flex-col items-center text-center">
                            {/* Icon Container */}
                            <div className="mb-6 flex items-center justify-center text-[#8998B6]">
                                <Icon
                                    className="w-16 h-16 text-[#8E9AAF]"
                                    width={64}
                                    height={64}
                                    style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05))' }}
                                />
                            </div>

                            {/* Text Description */}
                            <p className="text-md text-gray-700 leading-relaxed max-w-[240px]">
                                {item.text}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
