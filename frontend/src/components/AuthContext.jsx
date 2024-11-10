import React, { createContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(localStorage.getItem('token') || null);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setAuthToken(token); 
        }
    }, []); 

    const login = (token) => {
        localStorage.setItem('token', token);
        setAuthToken(token); 
    };

    const logout = () => {
        toast("Signing Out....", {
            duration: 2000,
        });

        setTimeout(() => {
            localStorage.removeItem('token');
            setAuthToken(null); 
        }, 2000); 
    };

    return (
        <AuthContext.Provider value={{ authToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
