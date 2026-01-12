import React, { useCallback, useState } from "react";
import { useLang } from "../context/LangContext";
import logo from "../assets/logo.png";
import {
    Mail,
    Phone,
    Location,
    Facebook,
    Instagram,
    TikTok,
} from "../components/ui/Icons";
import { HeroContact } from "../layouts/Hero";
import { contact } from "../data/contactus";

export const ContactUsPage = () => {
    const { language } = useLang();
    const contactUsContent = contact[language] || {};
    const [loading, setLoading] = useState(false);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        if (loading) return;

        setLoading(true);

        try {
            const formData = new FormData(e.currentTarget);
            const payload = Object.fromEntries(formData.entries());

            const res = await fetch(
                "https://internconnectvn.com/wp-json/contact/v1/send",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                }
            );

            if (!res.ok) throw new Error("Network error");

            const result = await res.json();

            if (result?.success) {
                alert("Sent");
                e.currentTarget.reset();
            } else {
                alert("Failed");
            }
        } catch (err) {
            console.error(err);
            alert("Server error");
        } finally {
            setLoading(false);
        }
    }, [loading]);

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-gray-100/30 md:bg-white max-w-[1380px] mx-auto py-16"
        >
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-[4fr_5fr] md:border md:border-gray-200 md:shadow-md">
                {/* LEFT */}
                <div className="flex flex-col justify-between gap-6 items-center md:items-start md:border md:border-gray-200 md:shadow-xl md:py-14 md:px-12">
                    <div className="md:max-w-md px-6 md:px-0 text-center md:text-left">
                        <img
                            src={logo}
                            alt="Company Logo"
                            className="mx-auto md:mx-0 object-contain h-[100px] w-[100px] mb-6"
                        />

                        <h1 className="text-2xl font-semibold my-3">
                            {contactUsContent.heading}
                        </h1>
                        <p className="text-md lg:text-sm text-[#5C6370] mb-2">
                            {contactUsContent.subheading}
                        </p>
                    </div>

                    <div className="flex flex-col text-[#5C6370] gap-8 items-center md:items-start text-left px-5 md:px-0 w-full md:max-w-md">
                        {/* Email */}
                        <div className="flex flex-col items-center md:items-start gap-4 pt-4 w-full">
                            <div className="flex flex-row gap-4 w-full min-w-0">
                                <Mail className="w-5 h-5 shrink-0" />
                                <a
                                    href="mailto:recruitmentmanager@internconnectvn.com"
                                    className="text-md md:text-sm break-all hover:underline min-w-0"
                                >
                                    recruitmentmanager@internconnectvn.com
                                </a>
                            </div>
                        </div>

                        {/* Phone */}
                        <a
                            href="tel:+84376884053"
                            className="flex flex-row gap-4 w-full"
                        >
                            <Phone className="w-5 h-5 shrink-0" />
                            <span className="text-md md:text-sm">
                                {contactUsContent.phone}
                            </span>
                        </a>

                        {/* Address */}
                        <a
                            href="https://maps.app.goo.gl/KdU4yuPejwF8AkuG9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row gap-4 w-full"
                        >
                            <Location className="w-5 h-5 shrink-0" />
                            <p className="text-md md:text-sm">
                                {contactUsContent.address}
                            </p>
                        </a>
                    </div>

                    {/* Socials */}
                    <div className="w-full py-4">
                        <div className="flex justify-center md:justify-start gap-4 text-[#5C6370]">
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
                    </div>
                </div>

                <span className="flex md:hidden w-[90%] my-10 mx-auto h-[0.5px] bg-gray-300" />

                {/* RIGHT */}
                <div className="flex items-center justify-center px-5 md:px-0">
                    <div className="w-full max-w-2xl bg-white">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <NameFields content={contactUsContent} language={language} />

                            <Input
                                label={contactUsContent.form.email}
                                name="email"
                                type="email"
                                placeholder={contactUsContent.form.emailPlaceholder}
                            />

                            <Input
                                label={contactUsContent.form.phone}
                                name="phone"
                                type="tel"
                                placeholder={contactUsContent.form.phonePlaceholder}
                            />

                            <div>
                                <label className="block text-gray-600 text-sm font-medium mb-2">
                                    {contactUsContent.form.message}
                                </label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    placeholder={contactUsContent.form.messagePlaceholder}
                                    className="w-full bg-[#f1f4f9] text-sm p-4 text-gray-500 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                                />
                            </div>

                            <div className="flex justify-center md:justify-end pt-4">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="border-[3px] w-full bg-[#004a8d] hover:bg-[#003974] disabled:opacity-60 text-white text-md font-semibold py-4 px-10 transition-colors"
                                >
                                    {loading ? "Sending..." : contactUsContent.form.submit}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ---------- Helpers (no design impact) ---------- */

const SocialLink = ({ href, label, children }) => (
    <a
        href={href}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer hover:opacity-80"
    >
        <div className="p-2 border-[#5C6370]/30 border rounded-full">
            {children}
        </div>
    </a>
);

const Input = ({ label, ...props }) => (
    <div>
        <label className="block text-gray-600 text-sm font-medium mb-2">
            {label}
        </label>
        <input
            {...props}
            required
            className="w-full bg-[#f1f4f9] border-none p-4 text-gray-500 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
        />
    </div>
);

const NameFields = ({ content, language }) => {
    const isEN = language === "en";
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
                name="firstName"
                label={isEN ? content.form.firstName : content.form.lastName}
                placeholder={isEN ? "John" : "Nguyen Van"}
            />
            <Input
                name="lastName"
                label={isEN ? content.form.lastName : content.form.firstName}
                placeholder={isEN ? "Doe" : "A"}
            />
        </div>
    );
};

/* ---------- Page ---------- */

const ContactPage = () => (
    <>
        <HeroContact />
        <ContactUsPage />
    </>
);

export default ContactPage;
