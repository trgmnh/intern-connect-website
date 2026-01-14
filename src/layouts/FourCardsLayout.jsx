import { useLang } from '../context/LangContext';
import { Link } from "react-router-dom";
import { opportunities } from '../data/fourcardlayout';
import { ArrowToRight } from '../components/ui/Icons';

const OpportunityCard = ({ image, title, description, link, cta }) => {
    return (
        <Link to={link} >
            <div
                className={`relative overflow-hidden rounded-xl group aspect-[5/3]`}
            >
                {/* Background image */}
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                    loading="lazy"
                />

                {/* Overlay */}
                <div className={`absolute inset-0 bg-black bg-opacity-40`} />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-5 text-white">
                    <h3 className="text-2xl font-semibold leading-snug mb-1">
                        {title}
                    </h3>

                    {description && (
                        <p className="hidden group-hover:block text-sm text-white/90 leading-relaxed line-clamp-3 ">
                            {description}
                        </p>
                    )}
                    <div
                        className="
                            mt-4 text-regular  justify-start items-center gap-2
                            text-white hidden group-hover:flex font-semibold
                        "
                    >
                        {cta}
                        <ArrowToRight className="w-3 h-3" width={12} />
                    </div>
                </div>

            </div>
        </Link>
    );
};


export const Opportunities = () => {
    const { language } = useLang();
    const opportunitiesData = Object.entries(opportunities[language] || {})
        .filter(([key]) => key !== "cta")
        .map(([key, value]) => ({
            id: key,
            ...value
        }));
    return (
        <section className="w-full max-w-[1440px] mx-auto px-5 lg:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {opportunitiesData.map(card => (
                    <OpportunityCard
                        key={card.id}
                        image={card.img}
                        title={card.title}
                        description={card.description}
                        link={card.slug}
                        pointer={true}
                        cta={opportunities[language].cta.link}
                    />))}
            </div>
        </section>
    );
}
