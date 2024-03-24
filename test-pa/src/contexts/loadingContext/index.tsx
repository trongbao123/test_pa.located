
import React, { createContext, useContext, ReactNode } from 'react';
import useLoadingContext from './hooks/useLoadingContext';
/*import/no-anonymous-default-export*/
import Loading from '../../components/loading';


interface LoadingContextProps {
    isLoading: boolean;
    typeLoading: string;
    setIsLoading: (isLoading: boolean) => void;
    setTypeLoading: (typeLoading: string) => void;
}

export const LoadingContext = createContext<LoadingContextProps>({
    isLoading: false,
    typeLoading: "",
    setIsLoading: () => { },
    setTypeLoading: () => { }
});

interface LoadingProviderProps {
    children: ReactNode;
}

export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {

    const { isLoading, setIsLoading, setTypeLoading, typeLoading } = useLoadingContext();

    return (
        <LoadingContext.Provider value={{ isLoading, setIsLoading, setTypeLoading, typeLoading }}>
            {isLoading === true && <Loading type={typeLoading} />}
            {children}
        </LoadingContext.Provider>
    );
};

export const useLoading = (): LoadingContextProps => useContext(LoadingContext);