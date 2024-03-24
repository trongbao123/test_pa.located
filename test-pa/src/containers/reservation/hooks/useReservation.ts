import { useCallback, useState } from "react";
import { DataPoint } from "../interface";

type Options = {

}
const useReservation = (options: Options) => {

    const [selectedOption, setSelectedOption] = useState('thismonth');

    const handledSelectMonth = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
    }, [selectedOption]);

    return {
        selectedOption,
        handledSelectMonth
    }
};

export default useReservation;