import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import usa_icon from "../assets/usa_icon.svg";
import vietnam_icon from "../assets/vietnam_icon.svg";
import { navbar } from "../data/navbar";
import { useLang } from "../context/LangContext";
import { Location, Mail, Phone, Facebook, TikTok, Instagram } from "../components/ui/Icons";
import ScrollToTop from "../libraries/ScrollToTop";


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
        <div className="hidden md:flex bg-gradient-to-r from-[#0057A0] via-[#7b3a5d] to-[#d62828] text-white px-4 py-[2px] md:px-10 flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="mailto:recruitmentmanager@internconnectvn.com" className="flex items-center gap-2 hover:underline">
              <Mail className="w-3 h-3" />
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
        <div className="bg-white py-2 px-4 md:px-10 shadow-sm">
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
                <div className="relative hidden md:block group">
                  {/* Current language */}
                  <div className="w-6 h-4 overflow-hidden shadow-sm cursor-pointer">
                    <img
                      src={language === "en" ? usa_icon : vietnam_icon}
                      alt="Language"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Dropdown */}
                  <div
                    className="
                      absolute right-0 mt-2
                      w-8 bg-white shadow-md rounded-sm
                      opacity-0 invisible
                      group-hover:opacity-100 group-hover:visible
                      transition-all z-20
                    "
                  >
                    {language !== "en" && (
                      <button onClick={() => setLanguage("en")} className="w-full p-1 hover:bg-gray-100">
                        <img src={usa_icon} className="w-full h-6" />
                      </button>
                    )}

                    {language !== "vi" && (
                      <button onClick={() => setLanguage("vi")} className="w-full p-1 hover:bg-gray-100">
                        <img src={vietnam_icon} className="w-full h-6" />
                      </button>
                    )}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="flex items-center justify-center h-10 w-auto bg-gradient-to-tr from-[#0057A0] to-[#d62828] text-sm text-[#d62828] font-[600] p-[3px]"
                >
                  <div className="bg-white h-full w-full flex items-center justify-center px-4 pt-[1px] hover:bg-transparent hover:text-white transition-all">
                    {t.nav.contact}
                  </div>
                </Link>

              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setOpen(!open)}
                className="md:hidden p-2"
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
    fixed top-0 right-0 z-50 h-full w-[300px]
    bg-white shadow-xl
    transform transition-transform duration-300
    ${open ? "translate-x-0" : "translate-x-full"}
    md:hidden
  `}
      >
        <div className="flex flex-col h-full px-6 py-6 gap-8">

          {/* Header */}
          <div className="flex justify-between items-center">
            <img src={logo} alt="logo" className="h-10 w-auto" />
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              ✕
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col gap-6 font-medium">
            <Link to="/" onClick={() => setOpen(false)}>{t.nav.home}</Link>
            <Link to="/about" onClick={() => setOpen(false)}>{t.nav.about}</Link>
            <Link to="/services" onClick={() => setOpen(false)}>{t.nav.services}</Link>
            <Link to="/news" onClick={() => setOpen(false)}>{t.nav.blog}</Link>
          </nav>

          {/* Language Switch */}
          <div className="mt-auto flex gap-4 items-center text-sm">
            <button
              onClick={() => setLanguage("en")}
              className={language === "en" ? "underline text-[#0057A0]" : ""}
            >
              English
            </button>
            <span className="text-gray-400">/</span>
            <button
              onClick={() => setLanguage("vi")}
              className={language === "vi" ? "underline text-[#0057A0]" : ""}
            >
              Vietnamese
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;