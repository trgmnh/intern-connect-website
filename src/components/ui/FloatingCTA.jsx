import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone } from "../ui/Icons";
import { useLang } from '../../context/LangContext';

const FloatingContactCTA = () => {
    const [pop, setPop] = useState(false);
    const { language } = useLang();

    useEffect(() => {
        const interval = setInterval(() => {
            // First pop
            setPop(true);
            setTimeout(() => {
                setPop(false);

                // Second pop immediately after first pop finishes
                setTimeout(() => {
                    setPop(true);
                    setTimeout(() => setPop(false), 200); // second pop duration
                }, 100); // small gap between pops
            }, 200); // first pop duration
        }, 5000); // repeat every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed bottom-8 right-8 md:bottom-10 md:right-10 z-20 flex items-center gap-4">
            {/* Message bubble */}
            <div
                className={`
          relative
          bg-white text-gray-800
          text-sm font-regular
          px-4 py-2
          rounded-lg
          shadow-md
          whitespace-nowrap
          transform
          transition-transform duration-200
          ${pop ? "scale-110" : "scale-100"}
        `}
            >
                {language === "en" ? "Contact us!" : "Liên hệ ngay với chúng tôi!"}
                <span
                    className="
            absolute top-1/2 -right-1
            w-2.5 h-2.5
            bg-white
            rotate-45
            -translate-y-1/2
          "
                />
            </div>

            {/* CTA button */}
            <Link
                to="/contact"
                aria-label="Contact us"
                className="
          flex items-center justify-center
          bg-gradient-to-r from-[#0057A0] to-[#D62828]
          hover:from-[#004080] hover:to-[#a32121]
          text-white
          p-6 md:p-4
          rounded-full
          shadow-lg
          transition-all duration-500 ease-in-out
          hover:shadow-xl hover:scale-105
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        "
            >
                <Phone className="w-6 h-6" />
            </Link>
        </div>
    );
};

export default FloatingContactCTA;
