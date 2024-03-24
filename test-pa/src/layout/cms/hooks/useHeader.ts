import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";

export const useHeader = (options: any) => {

    const [isInputVisible, setInputVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [user, setUser] = useState({});

    const navigate = useNavigate();
    const toggleInput = useCallback(() => {
        setInputVisible(!isInputVisible);
    }, [isInputVisible]);

    const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    }, []);

    const handleFormSubmit = useCallback((event: React.ChangeEvent<HTMLInputElement>, data: string) => {
        event.preventDefault();
        console.log('Search query:', data);
    }, []);



    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            setUser(user);
        } else {
            navigate('/login')
        }
        return () => {

        }
    }, []);

    const logout = useCallback(async () => {
        localStorage.removeItem('user');
        return navigate('/login')
    }, []);

    return {
        toggleInput,
        handleInputChange,
        handleFormSubmit,
        isInputVisible,
        searchQuery,
        user,
        logout
    }
}