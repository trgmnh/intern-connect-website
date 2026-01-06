import React from "react";
import servicesbanner from '../assets/banner/servicesbanner.jpg';
import contactbanner from '../assets/banner/contactbanner.jpg';
import numbersbanner from '../assets/banner/numbersbanner.jpg';
import { ButtonTransparent } from '../components/ui/Button.jsx';
import { useLang } from '../context/LangContext.jsx';
import { Link } from "react-router-dom";
import { ServicesBanner, ContactBanner, Numbers } from '../data/banner.js';
import CountUp from '../libraries/CountUp.jsx';
import blogbanner from '../assets/banner/blogbanner.jpg';

export const BannerService = () => {
    const { language } = useLang();
    const service = ServicesBanner[language];
    return (

        <section className="relative w-full h-[40vh] lg:h-[35vh] overflow-hidden">
            {/* Background image */}
            <img
                src={servicesbanner}
                alt="Services Background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content wrapper (centers vertically) */}
            <div className="relative z-10 h-full flex items-center max-w-[1440px] w-full mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-6 w-full text-white">

                    {/* Left column */}
                    <div
                        className="
                            flex flex-col gap-2 justify-center
                            items-s text-center
                            md:items-start md:text-left
                            px-10
                            "
                    >
                        <h2 className="text-xs font-medium uppercase">
                            {service.smallHeader}
                        </h2>

                        <h1 className="text-2xl md:text-2xl font-semibold capitalize leading-tight">
                            {service.mainHeader}
                        </h1>

                        <p className="hidden md:block font-regular text-xs px-3 md:px-0 max-w-[90ch]">
                            {service.description}
                        </p>
                    </div>

                    {/* Right column */}
                    <div className="flex items-center justify-center px-5">
                        <Link to="/services">
                            <ButtonTransparent text={service.buttonText} />
                        </Link>
                    </div>

                </div>
            </div>
        </section>


    );
}

export const BannerContact = () => {
    const { language } = useLang();
    const contact = ContactBanner[language];
    return (

        <section className="relative w-full h-[40vh] lg:h-[40vh] overflow-hidden">
            {/* Background image */}
            <img
                src={contactbanner}
                alt="Contact Background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content wrapper (centers vertically) */}
            <div className="relative z-10 h-full flex items-center justify-center mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-[7fr_3fr] gap-6 w-full max-w-[1440px] px-4 text-white">

                    {/* Left column */}
                    <div
                        className="
                        flex flex-col gap-2 justify-start
                        items-center text-center
                        md:items-start md:text-left
                        "
                    >
                        <h2 className="text-sm font-medium uppercase">
                            {contact.smallHeader}
                        </h2>

                        <h1 className="text-2xl font-semibold capitalize leading-tight">
                            {contact.mainHeader}
                        </h1>

                        <p className="hidden md:block font-sm px-3 md:px-0 max-w-[80ch]">
                            {contact.description}
                        </p>
                    </div>

                    {/* Right column */}
                    <div className="flex items-center justify-center lg:justify-end">
                        <Link to="/contact">
                            <ButtonTransparent text={contact.buttonText} />
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}

export const BannerNumbers = () => {
    const { language } = useLang();
    const numbers = Numbers[language];
    return (
        <section className="relative flex w-full h-[90vh] md:h-[40vh] lg:h-[300px] overflow-hidden mt-14">
            {/* Background image */}
            <img
                src={numbersbanner}
                alt="Numbers Background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content wrapper */}
            <div className="relative z-10 h-full flex items-center max-w-[1350px] w-full mx-auto px-5 sm:px-6 lg:px-10">
                <div className="w-full text-white">

                    {/* Header */}
                    <div className="text-center mb-4">
                        <h2 className="text-2xl lg:text-3xl font-semibold">
                            {numbers.heading}
                        </h2>
                        <p className="mt-2 text-sm text-white/80">
                            {numbers.sub}
                        </p>
                    </div>


                    {/* Numbers grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 lg:py-7">
                        <div className="flex flex-col items-center">
                            <h2 className="text-4xl md:text-6xl font-bold"><CountUp
                                from={0}
                                to={5000}
                                separator=","
                                direction="up"
                                duration={1}
                                className="count-up-text"
                            />+</h2>
                            <p className="text-md mt-2 text-white/90">{numbers.studentconnected}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h2 className="text-4xl md:text-6xl font-bold"><CountUp
                                from={0}
                                to={30}
                                separator=","
                                direction="up"
                                duration={1}
                                className="count-up-text"
                            />+</h2>
                            <p className="text-md mt-2 text-white/90">{numbers.countries}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h2 className="text-4xl md:text-6xl font-bold"><CountUp
                                from={0}
                                to={100}
                                separator=","
                                direction="up"
                                duration={1}
                                className="count-up-text"
                            />+</h2>
                            <p className="text-md mt-2 text-white/90">{numbers.partners}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h2 className="text-4xl md:text-6xl font-bold"><CountUp
                                from={0}
                                to={95}
                                separator=","
                                direction="up"
                                duration={1}
                                className="count-up-text"
                            />%</h2>
                            <p className="text-md mt-2 text-white/90">{numbers.success}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}



export const BlogBanner = () => {
    const { language } = useLang();
    return (

        <section className="relative w-full h-[70vh] lg:h-[40vh] overflow-hidden lg:px-4">
            {/* Background image */}
            <img
                src={blogbanner}
                alt="Blog Background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content wrapper (centers vertically) */}
            <div className="relative z-10 h-full flex items-center justify-center max-w-[1450px] mx-auto px-5">
                <div className="grid grid-cols-1 md:grid-cols-[7fr_3fr] gap-6 w-full text-white">

                    {/* Left column */}
                    <div
                        className="
          flex flex-col gap-2 justify-center lg:justify-start
          items-s text-center
          md:items-start md:text-left
          px-5 md:px-0
        "
                    >
                        <h2 className="text-sm font-medium uppercase">
                            INSIGHTS · GLOBAL INTERNSHIPS · 2025 TRENDS
                        </h2>

                        <h1 className="text-2xl font-semibold capitalize leading-tight">
                            International Internships in 2025: What Students and Employers Need to Know</h1>

                        <p className="font-regular text-sm px-3 md:px-0 max-w-[90ch] line-clamp">
                            International internship programs are evolving rapidly as visa policies tighten, universities strengthen accreditation standards, and employers demand more job-ready candidates. In...
                        </p>
                    </div>

                    {/* Right column */}
                    <div className="flex items-center justify-center lg:justify-end">
                        <Link to="/news/international-internships-2025-what-students-and-employers-need-to-know">
                            <ButtonTransparent text="Read Article" />
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}
