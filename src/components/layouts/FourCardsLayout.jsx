import { Card } from "../ui/Cards"
import React from "react";
import { useLang } from '../../context/LangContext';
import { destinations, internships } from '../../data/fourcardlayout';
import australiaImg from '../assets/card/australia.jpg';
import thailandImg from '../assets/card/thailand.jpg';
import uaeImg from '../assets/card/uae.jpg';
import vietnamImg from '../assets/card/vietnam.jpg';
import frontofficeImg from '../assets/card/frontoffice.jpg';
import fnbImg from '../assets/card/foodbev.jpg';
import culinaryImg from '../assets/card/culinary.jpg';
import managementImg from '../assets/card/management.jpg';
import { BackgroundGradient } from '../ui/Background';
import { Search, } from '../ui/Icons';

export const Destinations = () => {
    const { language } = useLang();
    const destination = destinations[language] || [];
    return (
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-[1440px] mx-auto mb-10">
            <Card
                key="Australia"
                imageSrc={australiaImg}
                title={destination.australia.title}
                description={destination.australia.description}
                link="/australia"
                pointer={true}
            />
            <Card
                key="Thailand"
                imageSrc={thailandImg}
                title={destination.thailand.title}
                description={destination.thailand.description}
                link="/thailand"
                pointer={true}
            />
            <Card
                key="UAE"
                imageSrc={uaeImg}
                title={destination.uae.title}
                description={destination.uae.description}
                link="/uae"
                pointer={true}
            />
            <Card
                key="Vietnam"
                imageSrc={vietnamImg}
                title={destination.vietnam.title}
                description={destination.vietnam.description}
                link="/vietnam"
                pointer={true}
            />
        </div>
    );
}

export const Internships = () => {
    const { language } = useLang();
    const internship = internships[language] || [];
    return (
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-[1440px] mx-auto mb-20">
            <Card
                key="Front Office"
                imageSrc={frontofficeImg}
                title={internship.frontoffice.title}
                description={internship.frontoffice.description}
                link="#"
                pointer={true}
            />
            <Card
                key="Food & Beverage"
                imageSrc={fnbImg}
                title={internship.fnb.title}
                description={internship.fnb.description}
                link="#"
                pointer={true}
            />
            <Card
                key="Culinary"
                imageSrc={culinaryImg}
                title={internship.culinary.title}
                description={internship.culinary.description}
                link="#"
                pointer={true}
            />
            <Card
                key="Management"
                imageSrc={managementImg}
                title={internship.management.title}
                description={internship.management.description}
                link="#"
                pointer={true}
            />
        </div>
    );
}