import React, { useContext, useState } from 'react';

const ModalContext = React.createContext();
const UpdateModalContext = React.createContext();

export const useOpenned = () => {
    return useContext(ModalContext);
};

export const useOpennedUpdate = () => {
    return useContext(UpdateModalContext);
};

const ModalContextProvider = ({ children }) => {
    const [openned, setOpenned] = useState(false);


    const toggleOpenned = () => {
        setOpenned((prevState) => !prevState);
    };

    return (
        <ModalContext.Provider value={openned}>
            <UpdateModalContext.Provider value={toggleOpenned}>
                { children }
            </UpdateModalContext.Provider>
        </ModalContext.Provider>
    )
};

export default ModalContextProvider;
