import { Link } from "react-router-dom";
import { Phone } from "../ui/Icons";
import { useLang } from '../../context/LangContext';

const FloatingContactCTA = () => {
    return (
        <div className="fixed bottom-5 right-4 md:bottom-10 md:right-10 z-50 flex items-center gap-3">

            {/* Message bubble (LEFT side) */}
            <div
                className="
    relative
    bg-white text-gray-800
    text-sm font-regular
    px-4 py-2
    rounded-lg
    shadow-md
    whitespace-nowrap
    before:content-['']
    before:absolute
    before:top-1/2"
            >
                {useLang().language === "en"
                    ? "Contact us!"
                    : "Liên hệ với chúng tôi!"}
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
          p-4
          rounded-full
          shadow-lg
          transition-all duration-500 ease-in-out
          hover:shadow-xl hover:scale-105
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        "
            >
                <Phone width={24} height={24} />
            </Link>
        </div>
    );
};

export default FloatingContactCTA;

