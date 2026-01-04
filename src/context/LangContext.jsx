import { createContext, useContext, useEffect, useState } from "react";

const LangContext = createContext();

export const LangProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem("language") || "vi";
    });

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);

    return (
        <LangContext.Provider value={{ language, setLanguage }}>
            {children}
        </LangContext.Provider>
    );
};

export const useLang = () => useContext(LangContext);
