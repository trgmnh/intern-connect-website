import React from "react";
import { useLang } from '../context/LangContext';
import { HeadingHome, HeadingAbout, ServicesHeading } from '../data/heading_content';
import { Star } from '../components/ui/Icons';

const Heading = ({ h2sub, h1main, paragraph, bgColor }) => {
    return (
        <div className={`flex flex-col items-center gap-1 py-8 px-5 text-center cursor-default ${bgColor}`}>
            <h2 className="text-xs font-medium text-[#0057A0] tracking-[0.20em] uppercase">
                {h2sub}
            </h2>
            <h1 className="text-3xl font-bold text-[#21272A] tracking-normal">
                {h1main}
            </h1>
            {/* <div className="flex items-center w-full max-w-xs gap-2 mt-1">
                <span className="flex-1 h-[0.5px] bg-gray-300"></span>

                <Star className="w-3 h-3 bg-gray-300" width={14} />
                <Star className="w-3 h-3 bg-gray-300" width={14} />
                <Star className="w-3 h-3 bg-gray-300" width={14} />

                <span className="flex-1 h-[0.5px] bg-gray-300"></span>
            </div> */}
            {paragraph && <p className="mt-2 max-w-3xl text-sm text-gray-600">{paragraph}</p>}
        </div>
    );
}

// const Heading = ({ h2sub, h1main, paragraph, bgColor = "white" }) => {
//     return (
//         <div className={`flex flex-col items-center gap-2 text-center cursor-default max-w-[1440px] mx-auto mt-6 py-6 bg-${bgColor}`}>
//             <h3 className="text-3xl px-6 font-bold">{h1main}</h3>

//             {/* Gradient line */}
//             {/* <div className="h-[4px] w-32 mx-6 bg-blue-900" /> */}
//         </div>
//     );
// }


export const HeadingAboutUs = () => {
    const { language } = useLang();
    const t = HeadingAbout.aboutus[language] || {};
    return <Heading h2sub={t.sub} h1main={t.main} paragraph={t.paragraph} />;
}
// Home Headings
export const HeadingPartner = () => {
    const { language } = useLang();
    const t = HeadingHome.partners[language] || {};
    return <Heading h2sub={t.sub} h1main={t.main} />;
}
export const HeadingChooseUs = () => {
    const { language } = useLang();
    const t = HeadingHome.chooseUs[language] || {};
    return <Heading h2sub={t.sub} h1main={t.main} />;
}

export const HeadingDestinations = () => {
    const { language } = useLang();
    const t = HeadingHome.destinations[language] || {};
    return <Heading h2sub={t.sub} h1main={t.main} />;
}

export const HeadingInternships = () => {
    const { language } = useLang();
    const t = HeadingHome.internships[language] || {};
    return <Heading h2sub={t.sub} h1main={t.main} />;
}

export const HeadingTestimonials = () => {
    const { language } = useLang();
    const t = HeadingHome.testimonials[language] || {};
    return <Heading h2sub={t.sub} h1main={t.main} />;
}

export const HeadingFAQ = () => {
    const { language } = useLang();
    const t = HeadingHome.faq[language] || {};
    return <Heading h2sub={t.sub} h1main={t.main} />;
}

// About Headings
export const HeadingCoreValues = () => {
    const { language } = useLang();
    const t = HeadingAbout.coreValues[language] || {};
    return <Heading h2sub={t.sub} h1main={t.main} paragraph={t.paragraph} />;
}

export const HeadingBOD = () => {
    const { language } = useLang();
    const t = HeadingAbout.boardOfDirectors[language] || {};
    return <Heading h2sub={t.sub} h1main={t.main} paragraph={t.paragraph} />;
}

export const HeadingActivities = () => {
    const { language } = useLang();
    const t = HeadingAbout.activities[language] || {};
    return <Heading h2sub={t.sub} h1main={t.main} />;
}

// Services Headings
export const HeadingOurServices = () => {
    const { language } = useLang();
    const t = ServicesHeading.services[language] || {};
    return <Heading h2sub={t.sub} h1main={t.main} />;
}

export const HeadingOurProcess = () => {
    const { language } = useLang();
    const t = ServicesHeading.process[language] || {};
    return <Heading h2sub={t.sub} h1main={t.main} />;
}

export const HeadingCommitments = () => {
    const { language } = useLang();
    const t = ServicesHeading.commitments[language] || {};
    return <Heading h2sub={t.sub} h1main={t.main} bgColor="gray" />;
}

export const HeadingFeatures = () => {
    const { language } = useLang();
    const t = ServicesHeading.features[language] || {};
    return <Heading h2sub={t.sub} h1main={t.main} />;
}

export const HeadingNews = () => {
    const { language } = useLang();
    const t = HeadingHome.news[language] || {};
    return <Heading h2sub={t.sub} h1main={t.main} />;
}
