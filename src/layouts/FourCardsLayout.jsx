import { Card } from "../components/ui/Cards"
import React from "react";
import { useLang } from '../context/LangContext';
import { destinations, internships } from '../data/fourcardlayout';
import australiaImg from '../assets/card/australia.jpg';
import thailandImg from '../assets/card/thailand.jpg';
import uaeImg from '../assets/card/uae.jpg';
import vietnamImg from '../assets/card/vietnam.jpg';
import frontofficeImg from '../assets/card/frontoffice.jpg';
import fnbImg from '../assets/card/foodbev.jpg';
import culinaryImg from '../assets/card/culinary.jpg';
import managementImg from '../assets/card/management.jpg';

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
            // link="/contact"
            // pointer={true}
            // cta={destination.cta.link}
            />
            <Card
                key="Thailand"
                imageSrc={thailandImg}
                title={destination.thailand.title}
                description={destination.thailand.description}
            // link="/contact"
            // pointer={true}
            // cta={destination.cta.link}
            />
            <Card
                key="UAE"
                imageSrc={uaeImg}
                title={destination.uae.title}
                description={destination.uae.description}
            // link="/contact"
            // pointer={true}
            // cta={destination.cta.link}
            />
            <Card
                key="Vietnam"
                imageSrc={vietnamImg}
                title={destination.vietnam.title}
                description={destination.vietnam.description}
            // link="/contact"
            // pointer={true}
            // cta={destination.cta.link}
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
            // link="/contact"
            // pointer={true}
            // cta={internship.cta.link}
            />
            <Card
                key="Food & Beverage"
                imageSrc={fnbImg}
                title={internship.fnb.title}
                description={internship.fnb.description}
            // link="/contact"
            // pointer={true}
            // cta={internship.cta.link}
            />
            <Card
                key="Culinary"
                imageSrc={culinaryImg}
                title={internship.culinary.title}
                description={internship.culinary.description}
            // link="/contact"
            // pointer={true}
            // cta={internship.cta.link}
            />
            <Card
                key="Management"
                imageSrc={managementImg}
                title={internship.management.title}
                description={internship.management.description}
                // link="/contact"
                pointer={false}
            // cta={internship.cta.link}
            />
        </div>
    );
}