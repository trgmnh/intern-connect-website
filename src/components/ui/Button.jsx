import React from "react";

export const ButtonTransparent = ({ text }) => {
    return (
        <button
            className="bg-transparent border-[1.5px] border-white text-sm hover:bg-gray-300/50 text-white font-semibold py-2 px-4 transition-all"
        >
            <div className="flex items-center gap-2">{text}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="mt-[1px]"
                    viewBox="0 0 16 16"
                >
                    <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                </svg></div>
        </button>
    );
};

export const Button = ({ text, width = "auto", arrow = false, rounded = "none" }) => {
    return (
        <button
            className={`bg-[#0057A0] border-[1.5px] border-white text-sm hover:bg-[#004080] rounded-${rounded} text-white font-medium py-3 px-4 transition-all w-${width}`}
        >
            <div className="flex items-center justify-center gap-2">{text}
                {arrow &&
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="mt-[1px]"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                        />
                    </svg>}
            </div>
        </button>
    );
};
