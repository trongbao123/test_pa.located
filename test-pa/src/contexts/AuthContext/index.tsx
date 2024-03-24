import React, { createContext, useContext } from "react";
import { useAuthProvider } from "./hooks/useAuthProvider";

export const AuthContext = createContext<any>(null);

const AuthProvider = (props: any) => {

    const {
        children,
    } = props || {};

    const {
        user,
        setUser,
        logout,
        saveUser,
    } = useAuthProvider(props);

    return (
        <AuthContext.Provider value={{ user, setUser, logout, saveUser }}>
            {children}
        </AuthContext.Provider>
    );
};


const useAuth = () => {

    const context = useContext(AuthContext);

    if (!context) {

        throw new Error('useAuth must be used within a AuthProvider');
    }
    return context;
};

export {
    AuthProvider,
    useAuth
};
