import servicesbanner from '../assets/banner/servicesbanner.jpg';
import contactbanner from '../assets/banner/contactbanner.jpg';
import numbersbanner from '../assets/banner/numbersbanner.jpg';
import { ButtonTransparent } from '../components/ui/Button.jsx';
import { useLang } from '../context/LangContext.jsx';
import { Link } from "react-router-dom";
import { ServicesBanner, ContactBanner, Numbers } from '../data/banner.js';
import CountUp from '../libraries/CountUp.jsx';
import { useState, useEffect, useMemo, useRef } from "react";
import { fetchPostsList, fetchTags } from "../api/wordpress.js";
import { getPostImage } from "../utils/getPostImage.js";
import { truncate } from "../pages/News.jsx";
import { getTagColorById } from "../data/tags.js";

export const BannerService = () => {
    const { language } = useLang();
    const service = ServicesBanner[language];
    return (

        <section className="relative w-full h-[40vh] md:h-[20vh] lg:h-[35vh] overflow-hidden">
            {/* Background image */}
            <img
                src={servicesbanner}
                alt="Services Background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content wrapper (centers vertically) */}
            <div className="relative z-10 h-full flex items-center max-w-[1340px] w-full mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-[70%_30%] gap-6 w-full text-white">

                    {/* Left column */}
                    <div
                        className="
                            flex flex-col gap-2 justify-center
                            items-s text-center
                            md:items-start md:text-left
                            px-10
                            "
                    >
                        <h2 className="text-xs font-medium uppercase">
                            {service.smallHeader}
                        </h2>

                        <h1 className="text-2xl md:text-2xl font-semibold capitalize leading-tight">
                            {service.mainHeader}
                        </h1>

                        <p className="hidden md:block font-regular text-xs px-3 md:px-0 max-w-[90ch]">
                            {service.description}
                        </p>
                    </div>

                    {/* Right column */}
                    <div className="flex items-center justify-center px-5">
                        <Link to="/services">
                            <ButtonTransparent text={service.buttonText} />
                        </Link>
                    </div>

                </div>
            </div>
        </section>


    );
}

export const BannerContact = () => {
    const { language } = useLang();
    const contact = ContactBanner[language];
    return (

        <section className="relative w-full h-[40vh] md:h-[30vh] lg:h-[40vh] overflow-hidden">
            {/* Background image */}
            <img
                src={contactbanner}
                alt="Contact Background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content wrapper (centers vertically) */}
            <div className="relative z-10 h-full flex items-center justify-center mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-[7fr_3fr] gap-6 w-full max-w-[1340px] px-4 text-white">

                    {/* Left column */}
                    <div
                        className="
                        flex flex-col gap-2 justify-start
                        items-center text-center
                        md:items-start md:text-left
                        "
                    >
                        <h2 className="text-sm font-medium uppercase">
                            {contact.smallHeader}
                        </h2>

                        <h1 className="text-2xl font-semibold capitalize leading-tight">
                            {contact.mainHeader}
                        </h1>

                        <p className="hidden md:block font-sm px-3 md:px-0 max-w-[80ch]">
                            {contact.description}
                        </p>
                    </div>

                    {/* Right column */}
                    <div className="flex items-center justify-center lg:justify-end">
                        <Link to="/contact">
                            <ButtonTransparent text={contact.buttonText} />
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}

export const BannerNumbers = () => {
    const { language } = useLang();
    const numbers = Numbers[language];
    return (
        <section className="relative flex w-full h-[80vh] md:h-[40vh] lg:h-[300px] overflow-hidden mt-14">
            {/* Background image */}
            <img
                src={numbersbanner}
                alt="Numbers Background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content wrapper */}
            <div className="relative z-10 h-full flex items-center max-w-[1440px] w-full mx-auto px-5 sm:px-6 lg:px-10">
                <div className="w-full text-white">

                    {/* Header */}
                    <div className="text-center mb-4">
                        <h2 className="text-2xl lg:text-3xl font-semibold">
                            {numbers.heading}
                        </h2>
                        <p className="mt-2 text-sm text-white/80">
                            {numbers.sub}
                        </p>
                    </div>


                    {/* Numbers grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 lg:py-7">
                        <div className="flex flex-col items-center">
                            <h2 className="text-5xl md:text-6xl font-bold"><CountUp
                                from={0}
                                to={5000}
                                separator=","
                                direction="up"
                                duration={1}
                                className="count-up-text"
                            />+</h2>
                            <p className="text-md mt-2 text-white/90">{numbers.studentconnected}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h2 className="text-5xl md:text-6xl font-bold"><CountUp
                                from={0}
                                to={30}
                                separator=","
                                direction="up"
                                duration={1}
                                className="count-up-text"
                            />+</h2>
                            <p className="text-md mt-2 text-white/90">{numbers.countries}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h2 className="text-5xl md:text-6xl font-bold"><CountUp
                                from={0}
                                to={100}
                                separator=","
                                direction="up"
                                duration={1}
                                className="count-up-text"
                            />+</h2>
                            <p className="text-md mt-2 text-white/90">{numbers.partners}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <h2 className="text-5xl md:text-6xl font-bold"><CountUp
                                from={0}
                                to={95}
                                separator=","
                                direction="up"
                                duration={1}
                                className="count-up-text"
                            />%</h2>
                            <p className="text-md mt-2 text-white/90">{numbers.success}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

const BlogBannerSkeleton = () => (
    <section className="relative w-full overflow-hidden">
        {/* Grey background */}
        <div className="absolute inset-0 bg-gray-200" />

        <div className="relative z-10 py-16 max-w-[1280px] mx-auto px-5">
            <div className="grid grid-cols-1 md:grid-cols-[5fr_3fr] gap-12 w-full animate-pulse">
                {/* Left */}
                <div className="flex flex-col gap-4">
                    <div className="h-5 w-24 bg-gray-300 rounded" />
                    <div className="h-6 w-4/5 bg-gray-300 rounded" />
                    <div className="h-4 w-full bg-gray-300 rounded" />
                    <div className="h-4 w-11/12 bg-gray-300 rounded" />
                    <div className="h-4 w-10/12 bg-gray-300 rounded" />
                    <div className="h-10 w-32 bg-gray-300 rounded mt-2" />
                </div>

                {/* Right */}
                <div className="aspect-[5/3] w-full bg-gray-300 rounded" />
            </div>
        </div>
    </section>
);

export const BlogBanner = () => {
    const { language } = useLang();

    const [posts, setPosts] = useState([]);
    const [tagsMap, setTagsMap] = useState({});
    const [loading, setLoading] = useState(true);

    const postsCacheRef = useRef(new Map());
    const tagsCacheRef = useRef(null);

    useEffect(() => {
        let mounted = true;
        setLoading(true);

        async function loadData() {
            try {
                // 🔹 POSTS
                let postsData;
                if (postsCacheRef.current.has(language)) {
                    postsData = postsCacheRef.current.get(language);
                } else {
                    postsData = await fetchPostsList({
                        perPage: 4,
                        lang: language,
                    });
                    postsCacheRef.current.set(language, postsData);
                }

                // 🔹 TAGS
                let tagsData;
                if (tagsCacheRef.current) {
                    tagsData = tagsCacheRef.current;
                } else {
                    tagsData = await fetchTags();
                    tagsCacheRef.current = tagsData;
                }

                if (!mounted) return;

                setPosts(postsData);
                setTagsMap(tagsData);
            } catch (err) {
                console.error(err);
            } finally {
                if (mounted) setLoading(false);
            }
        }

        loadData();
        return () => (mounted = false);
    }, [language]);

    const sortedPosts = useMemo(() => {
        return [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
    }, [posts]);

    const fourthPost = sortedPosts[3];

    const tags = useMemo(() => {
        return fourthPost
            ? fourthPost.tags.map(id => tagsMap[id]).filter(Boolean)
            : [];
    }, [fourthPost, tagsMap]);

    return (
        <section className="relative w-full overflow-hidden lg:px-4">
            {loading && <BlogBannerSkeleton />}

            {!loading && fourthPost && (
                <>
                    <div className="absolute inset-0 bg-gray-800"></div>

                    <div className="relative z-10 h-full flex items-center py-16 max-w-[1280px] mx-auto px-5">
                        <div className="grid grid-cols-1 md:grid-cols-[5fr_3fr] gap-12 w-full text-white">
                            {/* Left */}
                            <div className="flex flex-col justify-center gap-3">
                                <div className="flex gap-2">
                                    {tags.map(tag => (
                                        <span
                                            key={tag.id}
                                            className={`text-xs px-2 py-1 rounded-full ${getTagColorById(tag.id)}`}
                                        >
                                            {tag.name}
                                        </span>
                                    ))}
                                </div>

                                <h1 className="text-2xl font-semibold">
                                    {fourthPost.title.rendered}
                                </h1>

                                <p className="text-sm leading-relaxed text-justify mb-2">
                                    {truncate(
                                        fourthPost.excerpt.rendered.replace(/(<([^>]+)>)/gi, ""),
                                        420
                                    )}
                                </p>

                                <Link to={`/news/${fourthPost.slug}`}>
                                    <ButtonTransparent text="Read Article" />
                                </Link>
                            </div>

                            {/* Right */}
                            <Link to={`/news/${fourthPost.slug}`}>
                                <img
                                    src={getPostImage(fourthPost)}
                                    alt={fourthPost.title.rendered}
                                    className="aspect-[5/3] w-full object-cover hover:scale-105 transition rounded-md"
                                />
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
};

