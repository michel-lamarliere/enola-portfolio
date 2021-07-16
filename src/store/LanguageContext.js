import React , { useContext, useState, useEffect} from 'react';

const LanguageContext = React.createContext();
const LanguageUpdateContext = React.createContext();

export function useLanguage() {
    return useContext(LanguageContext);
}

export function useLanguageUpdate() {
    return useContext(LanguageUpdateContext);
}

export function LanguageProvider({ children }) {
    let [english, setEnglish] = useState(false);

    useEffect(() => {
        const data = localStorage.getItem('english');
        if (data !== undefined) {
            english = JSON.parse(data);
            setEnglish(english);
        } else {
            english = false;
            setEnglish(english);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('english', JSON.stringify(english));
    })

    function toggleLanguage() {
        setEnglish(prevLanguage => !prevLanguage);
    };

    return (
        <LanguageContext.Provider value={english}>
            <LanguageUpdateContext.Provider value={toggleLanguage}>
                <div>{ children }</div>
            </LanguageUpdateContext.Provider>
        </LanguageContext.Provider>
    )
}
