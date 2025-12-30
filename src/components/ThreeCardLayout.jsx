import React from "react";
import { useLang } from '../context/LangContext';
import { Card } from "./ui/Cards"
import { activities, collaboration } from '../data/threecardlayout';
import academicpartnership from '../assets/card/academicpartnership.jpg';
import mobilityprogram from '../assets/card/mobilityprogram.jpg';
import cobranding from '../assets/card/cobranding.jpg';
import activites from '../assets/card/activities.jpg';
import candidateselectionImg from '../assets/card/candidateselection.jpeg';

export const Activities = () => {
    const { language } = useLang();
    const activity = activities[language] || [];
    return (
        <div className="flex justify-start lg:grid-cols-[2fr_1fr] gap-6 max-w-[1440px] mx-auto lg:justify-items-stretch lg:grid mb-20 px-5">
            <img src={candidateselectionImg} alt="Activities" className="w-full h-full aspect-[2/1] object-cover shadow-lg" />
            <div>
                {activity.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.id}
                            className="flex flex-col items-center md:items-start border md:border-none border-gray-300 shadow-md md:shadow-none duration-300"
                        >
                            <div className="px-8 py-6 flex flex-col gap-2 w-full">
                                <div className="w-fit bg-gray-200 p-3 mb-3 rounded-lg text-[#0057A0]">
                                    {Icon && <Icon className="w-10 h-10" width={20} height={20} />}
                                </div>

                                <h3 className="text-xl font-semibold text-[#0057A0] text-center md:text-left">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed text-center md:text-justify">
                                    {item.description}
                                </p>
                            </div>
                        </div>

                    );
                })}
            </div>
        </div >
    );
}

export const CollaborationFormats = () => {
    const { language } = useLang();
    const collab = collaboration[language] || [];
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-5 mb-20 justify-items-center max-w-[1440px] mx-auto lg:justify-items-stretch">
            <Card
                key=""
                imageSrc={academicpartnership}
                title={collab.academicsupport.title}
                description={collab.academicsupport.description}
            />

            <Card
                key=""
                imageSrc={mobilityprogram}
                title={collab.mobilityprogram.title}
                description={collab.mobilityprogram.description}
            />

            <Card
                key=""
                imageSrc={cobranding}
                title={collab.cobranding.title}
                description={collab.cobranding.description}
            />
        </div>

    );
}





