import { createContext, useContext, useState } from "react";

const LangContext = createContext();

export const LangProvider = ({ children }) => {
    const [language, setLanguage] = useState("en");

    return (
        <LangContext.Provider value={{ language, setLanguage }}>
            {children}
        </LangContext.Provider>
    );
};

export const useLang = () => useContext(LangContext);
