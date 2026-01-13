import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import usa_icon from "../assets/usa_icon.svg";
import vietnam_icon from "../assets/vietnam_icon.svg";
import { navbar } from "../data/navbar";
import { useLang } from "../context/LangContext";
import { Mail, Phone, Facebook, TikTok, Instagram, House, People, BriefCaseNoFill, MegaPhone, TelephoneNoFill } from "../components/ui/Icons";
import ScrollToTop from "../libraries/ScrollToTop";
import { SocialLink } from "../pages/Contact";


const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="
      relative px-1 py-2 whitespace-nowrap
      text-sm text-[#575757] font-[500]
      transition-colors hover:text-black
      after:content-['']
      after:absolute after:left-1/2 after:-translate-x-1/2
      after:-bottom-[2px] rounded-full
      after:h-[2px] after:w-full
      after:bg-gradient-to-r after:from-[#0057A0] after:to-[#d62828]
      after:scale-x-0 after:origin-center
      after:transition-transform
      hover:after:scale-x-100
    "
    onClick={ScrollToTop}
  >
    {children}
  </Link>
);


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLang();
  const t = navbar[language]
  return (
    <>
      <nav className="w-full font-display">
        {/* Top Bar */}
        <div className="hidden md:flex bg-gradient-to-r from-[#0057A0] via-[#7b3a5d] to-[#d62828] text-white px-4 py-[4px] md:px-10 flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="mailto:recruitmentmanager@internconnectvn.com" className="flex items-center gap-2 hover:underline">
              <Mail className="w-4 md:w-3 h-auto" />
              <span className="hidden text-xs sm:inline">recruitmentmanager@internconnectvn.com</span>
            </a>
            <a href="tel:+84376884053" className="flex items-center gap-2 hover:underline">
              <Phone className="w-3 h-3" />
              <span className="text-xs">+84 37 688 4053</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/profile.php?id=61581832680507" target='blank' className="cursor-pointer hover:opacity-80">
              <Facebook className="w-3 h-3" />
            </a>
            <a href="https://www.tiktok.com/@weareinternconnect" target='blank' className="cursor-pointer hover:opacity-80">
              <TikTok className="w-3 h-3" />
            </a>
            <a href="https://www.instagram.com/internconnectvn/" target='blank' className="cursor-pointer hover:opacity-80">
              <Instagram className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="bg-white py-[5px] px-4 lg:px-10 shadow-sm">
          <div className="flex items-center justify-between md:grid md:grid-cols-3">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={logo} alt="logo" className="h-12 w-auto" />
            </Link>

            {/* Menu (true center) */}
            <div className="hidden md:flex justify-center gap-10 ">
              <NavLink to="/">{t.nav.home}</NavLink>
              <NavLink to="/about">{t.nav.about}</NavLink>
              <NavLink to="/services">{t.nav.services}</NavLink>
              <NavLink to="/news">{t.nav.blog}</NavLink>
            </div>

            {/* Right side */}
            <div className="flex items-center justify-end gap-4">
              {/* Desktop CTA */}
              <div className="flex items-center gap-6 font-semibold">
                <div className="flex items-center gap-3 font-semibold text-sm">
                  {/* Left label */}
                  <span className={language === "en" ? "text-gray-800" : "text-gray-400"}>
                    EN
                  </span>

                  {/* Switch */}
                  <button
                    onClick={() => setLanguage(language === "en" ? "vi" : "en")}
                    className="
      relative w-16 h-8
      bg-gray-200 rounded-full
      shadow-inner
      transition-colors
    "
                  >
                    {/* Knob */}
                    <span
                      className={`
        absolute top-1 left-1
        w-6 h-6 rounded-full
        bg-white shadow
        flex items-center justify-center
        transition-transform duration-300 ease-in-out
        ${language === "vi" ? "translate-x-8" : "translate-x-0"}
      `}
                    >
                      <img
                        src={language === "en" ? usa_icon : vietnam_icon}
                        alt="Language"
                        className="w-6 h-6 rounded-full object-cover"
                      />
                    </span>
                  </button>

                  {/* Right label */}
                  <span className={language === "vi" ? "text-gray-800" : "text-gray-400"}>
                    VI
                  </span>
                </div>



                <Link
                  to="/contact"
                  className="hidden lg:flex items-center justify-center h-10 w-auto bg-gradient-to-tr from-[#0057A0] to-[#d62828] text-sm text-[#d62828] font-[600] p-[3px]"
                >
                  <div className="bg-white h-full w-full flex items-center justify-center px-4 hover:bg-transparent hover:text-white transition-all">
                    {t.nav.contact}
                  </div>
                </Link>

              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setOpen(!open)}
                className="lg:hidden p-2"
                aria-label="Toggle menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5"
                  />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {/* Mobile Sidebar Backdrop */}
      <div
        className={`
    fixed inset-0 z-40 bg-black/40 transition-opacity
    ${open ? "opacity-100 visible" : "opacity-0 invisible"}
    md:hidden
  `}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`
    fixed top-0 right-0 z-50 h-full w-[320px]
    bg-white shadow-xl rounded-l-md
    transform transition-transform duration-300
    ${open ? "translate-x-0" : "translate-x-full"}
    md:hidden
  `}
      >
        <div className="flex flex-col h-full px-6 py-6 gap-8">

          {/* Header */}
          <div className="flex items-center justify-between">
            <img src={logo} alt="logo" className="h-12 w-auto" />

            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="text-2xl text-gray-600 hover:text-black"
            >
              ✕
            </button>
          </div>

          {/* Nav Links */}
          <nav className=" flex flex-col gap-2">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="
      flex items-center gap-5
      px-2 py-4 rounded-xl
      text-lg font-semibold
      text-slate-800
      hover:bg-slate-100
      transition
    "
            >
              <House className="w-7 h-7" />
              {t.nav.home}
            </Link>

            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="
      flex items-center gap-5
      px-2 py-4 rounded-xl
      text-lg font-semibold
      text-slate-800
      hover:bg-slate-100
      transition
    "
            >
              <People className="w-7 h-7" />
              {t.nav.about}
            </Link>

            <Link
              to="/services"
              onClick={() => setOpen(false)}
              className="
      flex items-center gap-5
      px-2 py-4 rounded-xl
      text-lg font-semibold
      text-slate-800
      hover:bg-slate-100
      transition
    "
            >
              <BriefCaseNoFill className="w-7 h-7" />
              {t.nav.services}
            </Link>

            <Link
              to="/news"
              onClick={() => setOpen(false)}
              className="
      flex items-center gap-5
      px-2 py-4 rounded-xl
      text-lg font-semibold
      text-slate-800
      hover:bg-slate-100
      transition
    "
            >
              <MegaPhone className="w-7 h-7" />
              {t.nav.blog}
            </Link>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="
      flex items-center gap-5
      px-2 py-4 rounded-xl
      text-lg font-semibold
      text-slate-800
      hover:bg-slate-100
      transition
    "
            >
              <TelephoneNoFill className="w-7 h-7" />
              {language === "en" ? "Contact" : "Liên hệ"}
            </Link>
          </nav>

          {/* Bottom Section */}
          <div className="mt-auto flex flex-col gap-6">
            {/* Social Links */}
            <div className="flex gap-5 text-[#5C6370]">
              <SocialLink
                href="https://www.facebook.com/profile.php?id=61581832680507"
                label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </SocialLink>

              <SocialLink
                href="https://www.tiktok.com/@weareinternconnect"
                label="TikTok"
              >
                <TikTok className="w-6 h-6" />
              </SocialLink>

              <SocialLink
                href="https://www.instagram.com/internconnectvn/"
                label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </SocialLink>
            </div>

            <span className="h-px w-full bg-slate-400" />

            {/* Language Switch */}
            <div className="flex items-center gap-4 text-sm">
              <button
                onClick={() => setLanguage("en")}
                className={language === "en" ? "underline text-[#0057A0]" : "text-gray-500"}
              >
                {language === "en" ? "English" : "Tiếng Anh"}
              </button>

              <span className="text-gray-400">/</span>

              <button
                onClick={() => setLanguage("vi")}
                className={language === "vi" ? "underline text-[#0057A0]" : "text-gray-500"}
              >
                {language === "vi" ? "Tiếng Việt" : "Vietnamese"}
              </button>
            </div>
          </div>

        </div>
      </div >
    </>
  );
};

export default Navbar;