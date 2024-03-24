import { useCallback, useEffect, useMemo, useState } from "react";
export const useAuthProvider = (props: any) => {

    const {
        loginRoute = "/login"
    } = props || {};


    const [user, setUser] = useState(null);


    const saveUser = useCallback((data: any) => {
        if (data && (data as any)?.data?.user && (data as any)?.data?.token) {
            setUser((data as any)?.data)
            localStorage.setItem("user", JSON.stringify((data as any)?.data));
        } else {
            localStorage.clear();
        }
    }, [loginRoute]);

    const checkAuth = useCallback(async () => {

        try {
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        } catch (error: any) {
            throw error;
        }
    }, [user]);

    useEffect(() => {
        checkAuth();
        return () => { };
    }, [loginRoute]);

    const logout = useCallback(async () => {
        try {
            localStorage.clear();
            setUser(null);
        } catch (error: any) {
            throw error;
        }
    }, [user]);

    return {
        user,
        setUser,
        loginRoute,
        logout,
        saveUser
    }
}


