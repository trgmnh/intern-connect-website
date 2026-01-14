import { HeroHome } from "../layouts/Hero.jsx";
import { HeadingPartner, HeadingInternships, HeadingDestinations, HeadingNews, HeadingChooseUs } from "../layouts/Heading.jsx";
import { LogoHotel } from "../layouts/LogoHotel.jsx";
import { Destinations, Internships } from "../layouts/FourCardsLayout.jsx";
import { BlogBanner, BannerService, BannerContact } from "../layouts/Banner.jsx";
import { AboutUsHome } from "../data/content.js";
import { whyChooseUs } from "../data/content.js";
import { ArrowToRight } from "../components/ui/Icons.jsx";
import { ContactUsPage } from "./Contact.jsx";
import { useLang } from "../context/LangContext.jsx";
import logo from "../assets/logo.png";
import { HighlightedNews } from "../layouts/ThreeCardLayout.jsx";


const AboutHome = () => {
    const { language } = useLang();
    const content = AboutUsHome[language];

    return (
        <section className="relative w-full flex justify-center pt-10 lg:py-12 lg:px-10 mx-auto bg-[#F3F4F6]/70">
            <div className="w-full grid grid-cols-1 xl:grid-cols-[1fr_2.5fr] lg:max-w-[1440px] lg:gap-12 z-10">

                {/* LEFT CONTENT */}
                <div className="flex flex-col justify-center items-center px-6 lg:items-start gap-2 max-w-[600px] mx-auto lg:mx-0">
                    <div className="flex py-3">
                        <img
                            src={logo}
                            alt="Intern Connect Logo"
                            className="w-24 h-auto object-contain"
                        />
                    </div>

                    <p className="text-sm leading-6 text-gray-700 text-center lg:text-justify max-w-[320px] lg:max-w-[600px] hyphens-auto mb-6 md:mb-0">
                        {content.left.paragraph}
                    </p>
                </div>

                {/* RIGHT CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-3 lg:px-0">
                    {content.right.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.id}
                                className="flex flex-col p-4 py-6 border border-gray-300 shadow-md md:border-none md:shadow-none"
                            >
                                <div className="w-fit bg-gray-200 p-2 mb-3 text-[#0057A0] mx-auto lg:mx-0">
                                    <Icon className="w-5 h-5" />
                                </div>

                                <h2 className="text-lg font-semibold text-gray-900 mb-2 leading-snug text-center lg:text-left">
                                    {item.heading}
                                </h2>

                                <p className="text-sm leading-6 text-gray-700 text-center lg:text-justify hyphens-auto">
                                    {item.paragraph}
                                </p>

                                <a
                                    href="/services"
                                    className="mt-3 inline-flex mx-auto lg:mx-0 items-center gap-1.5 text-sm text-[#0057A0] font-medium hover:underline"
                                >
                                    {language === "en" ? "Learn More" : "Tìm Hiểu Thêm"}
                                    <ArrowToRight className="w-4 h-4" />
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const WhyChooseUs = () => {
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

const HomePage = () => (
    <>
        <HeroHome />
        <HeadingPartner />
        <LogoHotel />
        <HeadingNews />
        <HighlightedNews />
        <div className="md:py-16 md:px-10 md:bg-slate-800"><ContactUsPage /></div>
        <HeadingDestinations />
        <Destinations />
        <HeadingInternships />
        <Internships />
        <BannerService />
        <AboutHome />
        <HeadingChooseUs />
        <WhyChooseUs />
        {/* Add more sections if needed */}
    </>
);

export default HomePage;