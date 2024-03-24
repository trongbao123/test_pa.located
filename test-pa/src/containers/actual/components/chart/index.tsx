import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { ValueFn } from 'd3';
interface ChartProps {
    data?: Data[];
}

interface Data {
    property?: string | number;
    total_room_in_hotel?: number | string;
    room_revenue?: number | string;
    f_b_revenue?: number | string;
    other_revenue?: number | string;
    total_revenue?: number | string;
    occ?: number;
}

const ChartActual: React.FC<ChartProps> = ({ data }) => {
    const chartRef = useRef<SVGSVGElement | null>(null);
    const colorMap: { [key: string]: string } = {
        SPH: 'blue',
        PP02: 'red',
        SR01: 'green',
        SR02: 'yellow',
        SR03: 'orange',
        SR04: 'purple',
        SV01: 'pink',
        SV02: 'teal',
        SV03: 'gray',
        SV04: 'brown',
        KP01: 'cyan',
        KP02: 'magenta',
    };
    useEffect(() => {
        if (data && chartRef.current) {
            const svg = d3.select(chartRef.current);
            const width = 400;
            const height = 300;
            const margin = { top: 20, right: 20, bottom: 30, left: 50 };
            const innerWidth = width - margin.left - margin.right;
            const innerHeight = height - margin.top - margin.bottom;

            svg.selectAll('*').remove();

            const x = d3
                .scaleBand()
                .domain(data.map((d: any) => d.property || ''))
                .range([0, innerWidth])
                .padding(0.1);

            const y = d3
                .scaleLinear()
                .domain([0, d3.max(data, (d) => {
                    const totalRevenue = d.total_revenue;
                    if (typeof totalRevenue === 'string') {
                        return parseFloat(totalRevenue.replace(',', ''));
                    }
                    return 0;
                }) as number])
                .nice()
                .range([innerHeight, 0]);

            const xAxis = d3.axisBottom(x);
            const yAxis = d3.axisLeft(y).tickFormat((d) => `${d}`);

            const g = svg
                .append('g')
                .attr('transform', `translate(${margin.left}, ${margin.top})`);

            g.append('g')
                .attr('class', 'axis axis--x')
                .attr('transform', `translate(0, ${innerHeight})`)
                .call(xAxis);

            g.append('g')
                .attr('class', 'axis axis--y')
                .call(yAxis)
                .append('text')
                .attr('transform', 'rotate(-90)')
                .attr('y', 6)
                .attr('dy', '0.71em')
                .attr('text-anchor', 'end')
                .text('Revenue');

            g.selectAll('.bar')
                .data(data)
                .enter()
                .append('rect')
                .attr('class', 'bar')
                .attr('x', function (d: any) {
                    const property = (d as any)?.property;
                    const value = property !== undefined ? x(property) : null;
                    return value;
                } as ValueFn<SVGRectElement, Data, string | number | boolean | readonly (string | number)[] | null>)
                .attr('y', (d) => {
                    const totalRevenue = d.total_revenue;
                    if (typeof totalRevenue === 'string') {
                        return y(parseFloat(totalRevenue.replace(',', '')));
                    }
                    return 0;
                })
                .attr('width', x.bandwidth())
                .attr('height', (d) => {
                    const totalRevenue = d.total_revenue;
                    if (typeof totalRevenue === 'string') {
                        return innerHeight - y(parseFloat(totalRevenue.replace(',', '')));
                    }
                    return 0;
                }).style('fill', (d) => {
                    const code = d.property;
                    if (code !== undefined) {
                        return colorMap[code] || 'gray';
                    }
                    return 'gray';
                });
        }

        return () => {
            if (chartRef.current) {
                chartRef.current.innerHTML = '';
            }
        }
    }, [data, colorMap]);

    return (
        <svg ref={chartRef} width="500" height="300" key="svg">
            <g />
        </svg>
    );
};

export default ChartActual;
