import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import { navbar } from "../data/navbar";
import { useLang } from "../context/LangContext";
import ScrollToTop from "../libraries/ScrollToTop";

import { Location, Mail, Phone, Facebook, TikTok, Instagram } from "../components/ui/Icons";


const Footer = () => {
    const { language } = useLang();
    const t = navbar[language];
    return (
        <footer className="relative w-full bg-[#f5f5f5] py-10 pb-16">
            <div className="mx-auto px-5">
                <div className="flex justify-center">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-[2fr_3fr_2fr] w-full max-w-[1440px]">

                        {/* Google Map */}
                        <div className="hidden lg:block w-96 h-auto aspect-[4/3] overflow-hidden rounded-md shadow-sm">
                            <iframe
                                src="https://www.google.com/maps?q=Miles%20International%20Consultancy%20210%20Huynh%20Van%20Banh%20Ho%20Chi%20Minh&output=embed"
                                width="100%"
                                height="100%"
                                className="w-full h-full border-0 "
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        {/* Company Info */}
                        <div className="flex flex-col justify-center items-center md:items-start w-full text-sm h-full px-16">

                            {/* Logo */}
                            <img
                                src={logo}
                                alt="Company Logo"
                                className="object-contain w-[72px] pb-5 mx-auto md:mx-0"
                            />

                            {/* Address */}
                            <a
                                href="https://maps.app.goo.gl/KdU4yuPejwF8AkuG9"
                                target="_blank"
                                className="flex flex-col items-center md:flex-row md:items-start gap-4 text-[#5C6370] w-full"
                            >
                                <Location className="w-6 md:w-3 h-auto shrink-0 mt-1" />
                                <p className="text-center md:text-left text-sm hover:underline">
                                    {t.footer.address}
                                </p>
                            </a>

                            {/* Email */}
                            <div className="flex flex-col items-center md:items-start gap-4 pt-4 text-[#5C6370] w-full">
                                <div className="flex flex-col items-center md:flex-row md:items-center gap-4 w-full min-w-0">
                                    <Mail className="w-6 md:w-3 h-auto shrink-0" />
                                    <a
                                        href="mailto:recruitmentmanager@internconnectvn.com"
                                        className="text-sm text-center md:text-left break-all sm:break-words hover:underline min-w-0"
                                    >
                                        recruitmentmanager@internconnectvn.com
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <a
                                href="tel:+84376884053"
                                className="flex flex-col items-center md:flex-row md:items-center gap-4 pt-3 text-[#5C6370]"
                            >
                                <Phone className="w-6 md:w-3 h-auto shrink-0" />
                                <span className="text-sm hover:underline">
                                    +84 37 688 4053
                                </span>
                            </a>

                        </div>


                        {/*Column 3*/}
                        <div className="flex flex-col justify-center px-5 py-4">
                            {/* Main + Explore */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col align-top text-sm py-4">
                                    <h2 className="block pb-3 font-semibold text-[#0A142F]">Main</h2>

                                    <Link to="/" className="py-1 text-[#5C6370] hover:text-[#0A142F] hover:font-medium transition-all" onClick={ScrollToTop}>
                                        {t.nav.home}
                                    </Link>

                                    <Link to="/about" className="py-1 text-[#5C6370] hover:text-[#0A142F] hover:font-medium transition-all" onClick={ScrollToTop}>
                                        {t.nav.about}
                                    </Link>

                                    <Link to="/services" className="py-1 text-[#5C6370] hover:text-[#0A142F] hover:font-medium transition-all" onClick={ScrollToTop}>
                                        {t.nav.services}
                                    </Link>

                                    <Link to="/news" className="py-1 text-[#5C6370] hover:text-[#0A142F] hover:font-medium transition-all" onClick={ScrollToTop}>
                                        {t.nav.blog}
                                    </Link>
                                </div>
                                <div className="flex flex-col text-sm py-3">
                                    <h2 className="block pb-3 font-semibold text-[#0A142F]">Explore</h2>
                                    <a href="#" className="py-1 font-regular text-[#5C6370] hover:text-[#0A142F] hover:font-medium transition-all">{t.footer.explore.destination}</a>
                                    <a href="#" className="py-1 font-regular text-[#5C6370] hover:text-[#0A142F] hover:font-medium transition-all">{t.footer.explore.internships}</a>
                                    <div className="w-full py-4">
                                        <div className="flex justify-start align-middle text-[#5C6370] gap-4">
                                            <a href="https://www.facebook.com/profile.php?id=61581832680507"
                                                aria-label="Facebook"
                                                target="_blank"
                                                rel="noopener noreferrer" className="cursor-pointer hover:opacity-80">
                                                <div className='relative p-2 border-[#5C6370]/30 border-[1px] rounded-full'><Facebook className="w-3 h-3" /></div>
                                            </a>
                                            <a href="https://www.tiktok.com/@weareinternconnect"
                                                aria-label="TikTok"
                                                target="_blank"
                                                rel="noopener noreferrer" className="cursor-pointer hover:opacity-80">
                                                <div className='relative p-2 border-[#5C6370]/30 border-[1px] rounded-full'><TikTok className="w-3 h-3" /></div>
                                            </a>
                                            <a href="https://www.instagram.com/internconnectvn/"
                                                aria-label="Instagram"
                                                target="_blank"
                                                rel="noopener noreferrer" className="cursor-pointer hover:opacity-80">
                                                <div className='relative p-2 border-[#5C6370]/30 border-[1px] rounded-full'><Instagram className="w-3 h-3" /></div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-[#0057A0] via-[#7b3a5d] to-[#d62828] text-white py-[3px] flex justify-center items-center">
                <p className="text-xs">&copy; {new Date().getFullYear()} InternConnect. All rights reserved.</p>
            </div>
        </footer >

    )
};
export default Footer;