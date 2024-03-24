import { useState } from "react";

const useLoadingContext = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [typeLoading, setTypeLoading] = useState("");

    return {
        isLoading,
        setIsLoading,
        typeLoading,
        setTypeLoading
    }
}

export default useLoadingContext