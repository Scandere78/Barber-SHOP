'use client';

import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ContextType {
    error: string | null;
    message: string | null;
    setError: (message: string) => void;
    setMessage: (message: string) => void;
    clearError: () => void;
    clearMessage: () => void;
}

const PopUpContext = createContext<ContextType | undefined>(undefined);

export const PopUpProvider = ({ children }: { children: ReactNode }) => {
    const [error, setErrorState] = useState<string | null>(null);
    const [message, setMessageState] = useState<string | null>(null);

    const setError = (message: string) => setErrorState(message);
    const setMessage = (message: string) => setMessageState(message);

    const clearError = () => setErrorState(null);
    const clearMessage = () => setMessageState(null);

    return (
        <PopUpContext.Provider value={{ error, message, setError, clearError, setMessage, clearMessage }}>
            {children}
        </PopUpContext.Provider>
    );
};
export const useMessage = () => {
    const context = useContext(PopUpContext);
    if (!context) throw new Error('useMessage must be used within an MessageProvider');
    return context;
};

export const useError = () => {
    const context = useContext(PopUpContext);
    if (!context) throw new Error('useError must be used within an ErrorProvider');
    return context;
};

