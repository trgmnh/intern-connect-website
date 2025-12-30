import React from 'react';
import { testimonials } from '../data/testimonials';
import { TestimonialsCard, FrequentAskedQuestionCard } from './ui/Cards';
import { useLang } from '../context/LangContext';
import { BackgroundGradient } from './ui/Background';
import { faqs } from '../data/faq';
import { Location, Mail, Phone } from './ui/Icons';
import { contact } from '../data/contactus';
import { Facebook, TikTok, Instagram } from './ui/Icons';
import logo from '../assets/logo.png';
import { useEffect, useRef } from "react";

export const Testimonials = () => {
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

export const FrequentAskedQuestions = () => {
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

export const ContactUsPage = () => {
    const { language } = useLang();
    const contactUsContent = contact[language] || [];
    // useEffect(() => {
    //     document.getElementById("contact")?.scrollIntoView({
    //         behavior: "smooth",
    //         timeline: 1000,
    //     });
    // }, []);
    return (
        <section id="contact" className="relative overflow-hidden bg-white max-w-[1440px] pt-8 lg:pt-20 mx-auto mb-20">
            <div className="relative z-10  grid grid-cols-1 md:grid-cols-[4fr_5fr] md:border md:border-gray-200 mx-10 md:shadow-md">
                <div className="flex flex-col justify-between gap-6
                items-center md:items-start
                md:border md:border-gray-200 md:shadow-xl px-4 md:py-14 md:px-12">

                    <div className="md:max-w-md px-6 md:px-0 text-center md:text-left">
                        <img
                            src={logo}
                            alt="Company Logo"
                            className="mx-auto md:mx-0 object-contain h-[100px] w-[100px] mb-6"
                        />

                        <h1 className="text-2xl font-semibold my-3">
                            {contactUsContent.heading}
                        </h1>
                        <p className="text-md lg:text-sm text-[#5C6370] mb-2 text-center md:text-left">
                            {contactUsContent.subheading}
                        </p>
                    </div>

                    <div className="flex flex-col text-[#5C6370] gap-8
                  items-center md:items-start
                  text-center md:text-left">

                        {/* Email */}
                        <div className="flex flex-col items-center md:flex-row gap-4 w-full">
                            <Mail className="w-5 h-5 shrink-0 text-[#5C6370]" />
                            <span className="text-md md:text-sm break-words">
                                {contactUsContent.email}
                            </span>
                        </div>

                        {/* Phone */}
                        <a href="tel:+84376884053"
                            className="flex flex-col items-center md:flex-row gap-4 w-full">
                            <Phone className="w-5 h-5 shrink-0 text-[#5C6370]" />
                            <span className="text-md md:text-sm break-words">
                                {contactUsContent.phone}
                            </span>
                        </a>

                        {/* Address */}
                        <a
                            href="https://maps.app.goo.gl/KdU4yuPejwF8AkuG9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center md:flex-row gap-4 w-full md:px-0"
                        >
                            <Location className="w-5 h-5 shrink-0" />
                            <p className="text-md md:text-sm leading-normal break-words">
                                {contactUsContent.address}
                            </p>
                        </a>

                    </div>
                    <div className="w-full">
                        <div className="w-full py-4">
                            <div className="flex justify-center md:justify-start align-middle text-[#5C6370] gap-4">
                                <a href="https://www.facebook.com/profile.php?id=61581832680507"
                                    aria-label="Facebook"
                                    target="_blank"
                                    rel="noopener noreferrer" className="cursor-pointer hover:opacity-80">
                                    <div className='relative p-2 border-[#5C6370]/30 border-[1px] rounded-full'><Facebook width={16} height={16} className="w-6 h-6" /></div>
                                </a>
                                <a href="https://www.tiktok.com/@weareinternconnect"
                                    aria-label="TikTok"
                                    target="_blank"
                                    rel="noopener noreferrer" className="cursor-pointer hover:opacity-80">
                                    <div className='relative p-2 border-[#5C6370]/30 border-[1px] rounded-full'><TikTok width={16} height={16} className="w-5 h-5" /></div>
                                </a>
                                <a href="https://www.instagram.com/internconnectvn/"
                                    aria-label="Instagram"
                                    target="_blank"
                                    rel="noopener noreferrer" className="cursor-pointer hover:opacity-80">
                                    <div className='relative p-2 border-[#5C6370]/30 border-[1px] rounded-full'><Instagram width={16} height={16} className="w-6 h-6" /></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <span className="flex md:hidden w-[90%] my-10 mx-auto h-[0.5px] bg-gray-300"></span>

                <div class="flex items-center justify-center">
                    <div class="w-full max-w-2xl bg-white p-4 md:p-10">
                        <form class="space-y-6">

                            <div class="flex flex-col md:flex-row gap-6">

                                {language == "en" ? (
                                    <>
                                        <div class="flex-1">
                                            <label class="block text-gray-600 text-sm font-medium mb-2">{contactUsContent.form.firstName}</label>
                                            <input name="firstName" type="text" placeholder="John" class="w-full bg-[#f1f4f9] border-none p-4 text-gray-500 text-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"></input>
                                        </div>
                                        <div class="flex-1">
                                            <label class="block text-gray-600 text-sm font-medium mb-2">{contactUsContent.form.lastName}</label>
                                            <input name="lastName" type="text" placeholder="Doe" class="w-full bg-[#f1f4f9] border-none p-4 text-gray-500 text-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"></input>
                                        </div>
                                    </>) : (
                                    <>
                                        <div class="flex-1">
                                            <label class="block text-gray-600 text-sm font-medium mb-2">{contactUsContent.form.lastName}</label>
                                            <input name="lastName" type="text" placeholder="Nguyen Van" class="w-full bg-[#f1f4f9] border-none p-4 text-gray-500 text-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"></input>
                                        </div>
                                        <div class="flex-1">
                                            <label class="block text-gray-600 text-sm font-medium mb-2">{contactUsContent.form.firstName}</label>
                                            <input name="firstName" type="text" placeholder="A" class="w-full bg-[#f1f4f9] border-none p-4 text-gray-500 text-sm placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"></input>
                                        </div>
                                    </>
                                )}
                            </div>
                            <div>
                                <label class="block text-gray-600 text-sm font-medium mb-2">{contactUsContent.form.email}</label>
                                <input type="email" placeholder={contactUsContent.form.emailPlaceholder} className="w-full bg-[#f1f4f9] text-sm border-none p-4 text-gray-500 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"></input>
                            </div>

                            <div>
                                <label class="block text-gray-600 text-sm font-medium mb-2">{contactUsContent.form.phone}</label>
                                <input type="tel" placeholder={contactUsContent.form.phonePlaceholder} className="w-full bg-[#f1f4f9] text-sm border-none p-4 text-gray-500 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none"></input>
                            </div>

                            <div>
                                <label class="block text-gray-600 text-sm font-medium mb-2">{contactUsContent.form.message}</label>
                                <textarea rows="4" placeholder={contactUsContent.form.messagePlaceholder} className="w-full bg-[#f1f4f9] text-sm border-none p-4 text-gray-500 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 outline-none resize-none"></textarea>
                            </div>

                            <div class="flex justify-center md:justify-end pt-4">
                                <button type="submit" class="border-[3px] w-full  bg-[#004a8d] hover:bg-[#003974] text-white text-md font-semibold py-4 px-10 transition-colors duration-200">
                                    {contactUsContent.form.submit}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </section >
    );
}

