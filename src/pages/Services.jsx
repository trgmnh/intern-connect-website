import React from "react";
import { useLang } from '../context/LangContext';
import * as All from '../layouts/Heading';
import { HeroServices } from "../layouts/Hero";
import { serviceInclude } from '../data/services';
import { CommitmentContent, ProcessContent } from '../data/content';
import { faqs } from '../data/faq';
import { testimonials } from '../data/testimonials';
import { BackgroundGradient } from '../components/ui/Background';
import { TestimonialsCard } from '../components/ui/Cards';
import { CollaborationFormats } from "../layouts/ThreeCardLayout";
import { BlogBanner, BannerContact } from "../layouts/Banner";
import { Destinations, Internships } from "../layouts/FourCardsLayout";
import aboutuspic from '../assets/card/aboutuspic.jpeg';
import { Button } from '../components/ui/Button';
import { FrequentAskedQuestionCard } from '../components/ui/Cards';
import { Link } from "react-router-dom";
import slide1 from '../assets/carousel/slide1.jpg';

const ServiceInclude = () => {
    const { language } = useLang();
    const service = serviceInclude[language];
    return (
        <section className="max-w-[1440px] mx-auto px-5 my-10">
            <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_2fr] items-stretch md:gap-10 ">
                <div className="h-full"><img src={slide1} alt="About Us" className='object-cover h-full shadow-lg md:hidden lg:block' /></div>
                <div className='flex flex-col md:shadow-md md:border md:border-gray-200 py-6 md:p-4 bg-white'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-2 ">
                        {service.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.id}
                                    className="flex flex-col items-center md:items-start gap-2 p-8 md:p-4 border border-gray-300 md:border-none shadow-md md:shadow-none duration-300"
                                >
                                    <div className="w-fit bg-gray-200 p-3 mb-4 rounded-lg text-[#0057A0]">
                                        {Icon && <Icon className="w-10 h-10" width={16} height={16} />}
                                    </div>

                                    <h3 className="text-xl font-semibold text-[#0057A0] text-center md:text-left">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed text-center md:text-justify">
                                        {item.description}
                                    </p>
                                </div>

                            );
                        })}
                    </div>
                    <div className="flex justify-center mt-10 md:my-5">
                        <Link to="/contact"><Button text={language === "en" ? "Talk to Our Team" : "Liên hệ Ngay"} arrow={true} /></Link>
                    </div>
                </div>
            </div>
            {/* <div className="hidden lg:block absolute -bottom-30 right-20 w-16 h-16">
                <span className="absolute bottom-0 right-0 w-full h-[4px] bg-[#0057A0]" />
                <span className="absolute bottom-0 right-0 h-full w-[4px] bg-[#d62828]" />
            </div> */}
        </section>

    );
}

const Process = () => {
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

const Commitment = () => {
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

const FrequentAskedQuestions = () => {
    const { language } = useLang();
    const faqData = faqs[language] || {};
    return (
        <section className="relative overflow-hidden bg-white">
            <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-24 relative">
                <div className="col-span-1 md:col-span-2 lg:col-span-3 flex flex-col gap-6">
                    {Object.values(faqData).map(({ question, answer }, index) =>
                        <FrequentAskedQuestionCard
                            key={index}
                            question={question}
                            answer={answer}
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

const Testimonials = () => {
    const { language } = useLang();
    const testimonialsData = testimonials[language] || [];

    return (
        <section className="relative overflow-hidden bg-white pb-12 min-h-[600px]">
            {/* 1️⃣ Background gradient layer */}
            <BackgroundGradient />

            {/* 2️⃣ Content layer */}
            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
                {testimonialsData.map(({ name, role, location, content }) => (
                    <TestimonialsCard
                        key={name}
                        name={name}
                        role={role}
                        location={location}
                        content={content}
                    />
                ))}
            </div>
        </section>


    );
};

const ServicesPage = () => (
    <>
        <HeroServices />
        {/* <All.HeadingOurServices /> */}
        <ServiceInclude />
        <All.HeadingFeatures />
        <CollaborationFormats />
        <BlogBanner />
        <All.HeadingDestinations />
        <Destinations />
        <All.HeadingInternships />
        <Internships />
        <BannerContact />
        <All.HeadingOurProcess />
        <Process />
        <All.HeadingCommitments />
        <Commitment />
        <All.HeadingTestimonials />
        <Testimonials />
        <All.HeadingFAQ />
        <FrequentAskedQuestions />
        {/* Add more sections if needed */}
    </>
);
export default ServicesPage;