import { createContext, useContext, useState } from 'react';

export const CaptaiDataContext = createContext();

export const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateCaptain = (captainData) => {
        setCaptain(captainData);
    };
    const value ={
        captain,
        setCaptain,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaptain
    };
    return (
        <CaptaiDataContext.Provider value={value}>
            {children}
        </CaptaiDataContext.Provider>
    );

    
    
};

export default CaptainContext;