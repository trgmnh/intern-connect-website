import { useEffect, useState } from "react";

export default function Carousel({
    images = [],
    autoPlay = true,
    interval = 2000
}) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (!autoPlay || images.length <= 1) return;

        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [autoPlay, interval, images.length]);

    if (!images.length) return null;

    return (
        <div className="relative w-full h-full overflow-hidden shadow-lg">
            {images.map((src, i) => (
                <img
                    key={i}
                    src={src}
                    alt=""
                    className={`
                        absolute inset-0 w-full h-full object-cover
                        transition-opacity duration-700
                        ${i === index ? "opacity-100" : "opacity-0"}
                    `}
                    draggable={false}
                />
            ))}

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-2 h-2 rounded-full transition
                            ${i === index ? "bg-white" : "bg-white/50"}
                        `}
                    />
                ))}
            </div>
        </div>
    );
}
