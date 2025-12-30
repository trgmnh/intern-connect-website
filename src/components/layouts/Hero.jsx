import React, { useState } from 'react';
import homebg from '../assets/hero/home.jpg';
import aboutbg from '../assets/hero/about.jpg';
import servicesbg from '../assets/hero/services.jpg';
import newsbg from '../assets/hero/news.jpg';
import contactbg from '../assets/hero/contact.jpg';
import { ButtonTransparent } from '../ui/Button';
import { useLang } from '../../context/LangContext';
import { About, Home, Sections } from '../../data/hero_content';
import { Link } from "react-router-dom";
import { Star, StarFill } from '../ui/Icons';


export const HeroHome = () => {
    const [open, setOpen] = useState(false);
    const { language, setLanguage } = useLang();
    const home = Home[language];

    return (
        <section className="relative w-full h-[60vh] sm:h-[60vh] screen overflow-hidden">
            {/* Background image */}
            <img
                src={homebg}
                alt="Home Background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-6 items-center lg:items-start justify-center h-full text-white sm:pl-20 mx-5 max-w-2xl text-center lg:text-left">
                <div className="flex justify-center md:justify-start items-center w-full max-w-xs gap-2 mt-3">
                    <Star className="w-2 h-2 bg-gray-300" width={16} />
                    <Star className="w-2 h-2 bg-gray-300" width={16} />
                    <Star className="w-2 h-2 bg-gray-300" width={16} />
                    <Star className="w-2 h-2 bg-gray-300" width={16} />
                    <Star className="w-2 h-2 bg-gray-300" width={16} />
                </div>
                <h1 className="text-3xl sm:text-4xl font-semibold capitalize">{home.title}</h1>
                <p className="font-regular text-sm pb-1">{home.paragraph}</p>
                <Link to="/services"><ButtonTransparent text={home.button} /></Link>
            </div>
        </section>
    );
};

// ...existing code...
export const HeroAbout = () => {
    const [open, setOpen] = useState(false);
    const { language, setLanguage } = useLang();
    const about = About[language];

    return (
        <section className="relative w-full h-[70vh] sm:h-[60vh] screen overflow-hidden">
            {/* Background image */}
            <img
                src={aboutbg}
                alt="About Background"
                className="absolute inset-0 w-full h-[80vh] object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/55"></div>

            {/* Content */}

            <div className="relative z-10 flex flex-col gap-5 items-center justify-center h-full text-white px-7 max-w-4xl mx-auto text-center">
                <h2 className="text-xs font-regular tracking-wider">{about.welcome}</h2>
                <h1 className="text-2xl sm:text-3xl font-semibold">{about.title}</h1>
                <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 bg-white" width={16} height={16} />
                    <Star className="w-5 h-5 bg-white" width={16} height={16} />
                    <Star className="w-5 h-5 bg-white" width={16} height={16} />
                    <Star className="w-5 h-5 bg-white" width={16} height={16} />
                    <Star className="w-5 h-5 bg-white" width={16} height={16} />
                </div>
                <p className="font-regular text-sm max-w-[60ch] leading-normal">{about.paragraph}</p>
                <Link to="/contact"><ButtonTransparent text={about.button} /></Link>
            </div>
        </section>
    );
};

const HeroSection = ({ background, content }) => {
    const { language } = useLang();
    const t = content[language];

    return (
        <section className="relative w-full h-[30vh] sm:h-[40vh] overflow-hidden">
            {/* Background image */}
            <img
                src={background}
                alt="Hero Background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col gap-4 items-center md:items-start justify-center h-full text-white px-6 lg:px-20 max-w-[1440px] text-left">
                <h1 className="text-2xl sm:text-3xl font-semibold">{t.title}</h1>
                <p className="font-regular text-sm max-w-[60ch] text-center md:text-left">{t.paragraph}</p>
            </div>
        </section>
    );
};

export const HeroServices = () => <HeroSection background={servicesbg} content={Sections.services} />;
export const HeroNews = () => <HeroSection background={newsbg} content={Sections.news} />;
export const HeroContact = () => <HeroSection background={contactbg} content={Sections.contact} />;
