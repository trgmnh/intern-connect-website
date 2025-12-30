import HeroHome from "../components/layouts/HeroHome.jsx";
import All from "../components/Heading.jsx";
import { AboutUsHome } from "../../data/content.js";

export const AboutHome = () => {
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

                    <p className="text-sm leading-6 text-gray-700 text-center lg:text-justify max-w-[320px] lg:max-w-[600px] hyphens-auto">
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
                                    className="mt-3 inline-flex mx-auto lg:mx-0 items-center gap-1.5 text-sm text-blue-500 hover:underline"
                                >
                                    Learn more
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


export const HomePage = () => (
    <>
        <HeroHome />
        <All.HeadingPartner />
        <LogoHotel />

        <All.HeadingDestinations />
        <Destinations />
        <All.HeadingInternships />
        <Internships />
        <BlogBanner />


        <AboutHome />
        <All.HeadingChooseUs />
        <WhyChooseUs />
        <BannerService />

        <ContactUsPage />
        {/* Add more sections if needed */}
    </>
);