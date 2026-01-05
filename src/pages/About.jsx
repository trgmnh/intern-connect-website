import React from 'react';
import { HeroAbout } from '../layouts/Hero';
import { BannerNumbers, BannerService } from '../layouts/Banner';
import { coreValues } from '../data/content';
import { AboutUs } from '../data/content';
import { VisionMissionContent } from '../data/content';
import { MrDaniel, MrsVi } from '../data/bodcontent';
import aboutImage from '../assets/card/aboutus1.jpeg';
import logo from '../assets/logo.png';
import daniel from '../assets/bod/mrdaniel.png';
import mrsvy from '../assets/bod/mrsvy.png';
import { Globe, Connect, Award, PersonCheckedFill, PeopleFill, Eye, BriefCase, GraphUpArrow } from '../components/ui/Icons';
import { useLang } from '../context/LangContext';
import * as All from '../layouts/Heading';
import candidateselectionImg from '../assets/card/candidateselection.jpeg';
import { activities } from '../data/threecardlayout';
import Carousel from '../libraries/Carousel';
import slide1 from '../assets/carousel/slide1.jpg';
import slide2 from '../assets/carousel/slide2.jpeg';
import slide3 from '../assets/carousel/slide3.jpg';
import slide4 from '../assets/carousel/slide4.jpg';
import slide5 from '../assets/carousel/slide5.jpeg';

const AboutImage = () => {
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
                        < div className='h-full flex flex-col gap-8 p-4 md:p-8 border border-gray-300 shadow-md'>

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
                                    <p className="text-gray-700 text-sm md:text-justify leading-normal hyphens-auto">
                                        {content.description2}
                                    </p>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <div className="w-fit bg-gray-200 p-2 rounded-lg text-[#0057A0]">
                                        <Connect className="w-20 h-20 sm:w-16 sm:h-16" />
                                    </div>
                                    <p className="text-gray-700 text-sm text-justify leading-normal hyphens-auto">
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

const CoreValues = () => {
    const { language } = useLang();
    const content = coreValues[language];
    return (
        <div className="px-8 mb-20">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-8 shadow-md border border-gray-200 flex flex-col items-center justify-end text-center">
                    <div className="w-14 h-14 bg-[#E8E8E8] text-[#0057A0] rounded-full flex items-center justify-center mb-6">
                        <Award width="24" height="24" className="w-10 h-10 text-blue-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{content.quality}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {content.qualitydesc}
                    </p>
                </div>

                <div className="bg-white p-8 shadow-md border border-gray-200 flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-[#E8E8E8] text-[#0057A0] rounded-full flex items-center justify-center mb-6">
                        <PersonCheckedFill width="24" height="24" className="w-10 h-10 text-blue-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{content.responsibility}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {content.responsibilitydesc}
                    </p>
                </div>

                <div className="bg-white p-8 shadow-md border border-gray-200 flex flex-col items-center justify-end text-center">
                    <div className="w-14 h-14 bg-[#E8E8E8] text-[#0057A0] rounded-full flex items-center justify-center mb-6">
                        <PeopleFill width="24" height="24" className="w-10 h-10 text-blue-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{content.connection}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {content.connectiondesc}
                    </p>
                </div>
            </div>
        </div>
    );
}

const BoardOfDirectors = () => {
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

const VisionMission = () => {
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

const Activities = () => {
    const { language } = useLang();
    const activity = activities[language] || [];
    return (
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 max-w-[1440px] mx-auto lg:justify-items-stretch lg:grid mb-20 px-5">
            <Carousel
                images={[
                    slide1,
                    slide2,
                    slide3,
                    slide4,
                    slide5
                ]}
            />            <div className="grid grid-cols-1 gap-6 md:gap-0">
                {activity.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.id}
                            className="flex flex-col items-center md:items-start border md:border-none border-gray-300 shadow-md md:shadow-none duration-300"
                        >
                            <div className="px-8 py-2 flex flex-col gap-2 w-full">
                                <div className="mx-auto md:mx-0 w-fit bg-gray-200 p-3 my-3 rounded-lg text-[#0057A0]">
                                    {Icon && <Icon className="w-10 h-10" width={20} height={20} />}
                                </div>

                                <h3 className="text-xl font-semibold text-[#0057A0] text-center md:text-left">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed text-center md:text-justify">
                                    {item.description}
                                </p>
                            </div>
                        </div>

                    );
                })}
            </div>
        </div >
    );
}

const AboutPage = () => (
    <>
        <HeroAbout />
        <All.HeadingAboutUs />
        <AboutImage />
        <VisionMission />
        <All.HeadingCoreValues />
        <CoreValues />
        {/* Add more sections if needed */}
        <BannerNumbers />
        <All.HeadingBOD />
        <BoardOfDirectors />

        <All.HeadingActivities />
        <Activities />
        <BannerService />

    </>
);

export default AboutPage;