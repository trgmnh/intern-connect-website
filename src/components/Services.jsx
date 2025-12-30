import { coreValues } from '../data/content';
import { useLang } from '../context/LangContext';
import { Award, PersonCheckedFill, PeopleFill } from './ui/Icons';
import { serviceInclude } from '../data/services';
import { Button } from './ui/Button';
import aboutuspic from '../assets/card/aboutuspic.jpeg';

export const CoreValues = () => {
    const { language } = useLang();
    const content = coreValues[language];
    return (
        <div class="px-8 mb-20">
            <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-white p-8 shadow-md border border-gray-200 flex flex-col items-center justify-end text-center">
                    <div class="w-14 h-14 bg-[#E8E8E8] text-[#0057A0] rounded-full flex items-center justify-center mb-6">
                        <Award width="24" height="24" className="w-10 h-10 text-blue-700" />
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">{content.quality}</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        {content.qualitydesc}
                    </p>
                </div>

                <div class="bg-white p-8 shadow-md border border-gray-200 flex flex-col items-center text-center">
                    <div class="w-14 h-14 bg-[#E8E8E8] text-[#0057A0] rounded-full flex items-center justify-center mb-6">
                        <PersonCheckedFill width="24" height="24" className="w-10 h-10 text-blue-700" />
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">{content.responsibility}</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        {content.responsibilitydesc}
                    </p>
                </div>

                <div class="bg-white p-8 shadow-md border border-gray-200 flex flex-col items-center justify-end text-center">
                    <div class="w-14 h-14 bg-[#E8E8E8] text-[#0057A0] rounded-full flex items-center justify-center mb-6">
                        <PeopleFill width="24" height="24" className="w-10 h-10 text-blue-700" />
                    </div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">{content.connection}</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">
                        {content.connectiondesc}
                    </p>
                </div>
            </div>
        </div>
    );
}

export const ServiceInclude = () => {
    const { language } = useLang();
    const service = serviceInclude[language];
    return (
        <section className="max-w-[1400px] mx-auto px-5 lg:px-20 mb-10">
            <div className="relative grid grid-cols-1 items-stretch gap-10">
                <img src={aboutuspic} alt="About Us" className='object-cover hidden' />
                <div className='flex flex-col'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-2">
                        {service.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.id}
                                    className="flex flex-col items-center md:items-start gap-2 p-8 md:p-4 border border-gray-300 lg:border-none shadow-md lg:shadow-none duration-300"
                                >
                                    <div className="w-fit bg-gray-200 p-3 mb-4 rounded-lg text-[#0057A0]">
                                        {Icon && <Icon className="w-10 h-10" width={16} height={16} />}
                                    </div>

                                    <h3 className="text-xl font-semibold text-[#0057A0] text-center md:text-left">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm leading-relaxed text-center md:text-justify">
                                        {item.description}
                                    </p>
                                </div>

                            );
                        })}
                    </div>
                    <div className="flex justify-center mt-12">
                        <Button text={language === "en" ? "Talk to Our Team" : "Liên hệ Ngay"} arrow={true} />
                    </div>
                </div>
            </div>
            {/* <div className="hidden lg:block absolute -bottom-30 right-20 w-16 h-16">
                <span className="absolute bottom-0 right-0 w-full h-[4px] bg-[#0057A0]" />
                <span className="absolute bottom-0 right-0 h-full w-[4px] bg-[#d62828]" />
            </div> */}
        </section>

    );
}
