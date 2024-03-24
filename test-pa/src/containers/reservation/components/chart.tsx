import React from 'react';
import useForecastChart from '../hooks/useForecastChart';
import { Props } from '../interface';

const ForecastChart: React.FC<Props> = (props) => {
    const { chartRef } = useForecastChart({ ...props });

    return <div ref={chartRef}></div>;
};

export default ForecastChart;