import { useCallback, useEffect, useRef } from "react";
import * as d3 from 'd3';
import { Props } from "../interface";

const useForecastChart = (options: Props) => {
    const { data, selectedOption } = options || {};
    const chartRef = useRef(null);

    const drawChart = useCallback(() => {
        let initailWidth = 0;

        switch (selectedOption) {
            case 'thismonth':
                initailWidth = 2200
                break;
            case '3months':
                initailWidth = 6500
                break;
            case '6months':
                initailWidth = 11000
                break;
            default:
                initailWidth = 1000
                break;
        }
        const margin = { top: 20, right: 30, bottom: 30, left: 60 };
        const width = initailWidth - margin.left - margin.right;
        const height = 300 - margin.top - margin.bottom;
        const containerWidth = width + margin.left + margin.right;

        const svg = d3
            .select(chartRef.current)
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', 310)
            .append('g')
            .attr('transform', `translate(${margin.left},${margin.top})`);

        const filteredData = data.filter((d: any) => d.date_time !== undefined);
        const parsedData = filteredData.map((d: any) => ({
            ...d,
            date_time: new Date(d.date_time)
        }));
        let filteredParsedData = parsedData;
        switch (selectedOption) {
            case 'thismonth':
                filteredParsedData = parsedData.filter(
                    (d) => d.date_time.getMonth() === 1
                );
                initailWidth = 2000
                break;
            case '3months':
                filteredParsedData = parsedData.filter(
                    (d) =>
                        d.date_time.getMonth() >= 1 && d.date_time.getMonth() <= 3
                );
                initailWidth = 6000
                break;
            case '6months':
                initailWidth = 9500
                break;
            default:
                break;
        }

        const xScale = d3
            .scaleTime()
            .domain([
                d3.min(filteredParsedData, (d) => d.date_time),
                d3.max(filteredParsedData, (d) => d.date_time)
            ])
            .range([0, width]);

        const yScale = d3
            .scaleLinear()
            .domain([0, d3.max(data, (d: any) => Math.max(d.arr_rooms, d.dep_rooms, d.total_occ)) as number])
            .range([height, 0]);

        const lineTotalOcc = d3
            .line()
            .x((d: any) => xScale(new Date(d.date_time)))
            .y((d: any) => yScale(d.total_occ));

        const lineArrRooms = d3
            .line()
            .x((d: any) => xScale(new Date(d.date_time)))
            .y((d: any) => yScale(d.arr_rooms));

        const lineDepRooms = d3
            .line()
            .x((d: any) => xScale(new Date(d.date_time)))
            .y((d: any) => yScale(d.dep_rooms));

        const dateFormatter = d3.timeFormat('%d-%m-%Y');
        const xAxisTickFormat = (date: any) => {
            const tickDate = new Date(date);
            const formattedDate = dateFormatter(tickDate);
            return `${formattedDate}`;
        };

        const xAxis = d3.axisBottom(xScale).tickFormat(xAxisTickFormat);

        const oneDayInterval = d3.timeDay.every(1);
        xAxis.ticks(oneDayInterval);
        const dotGroup = svg.append('g').attr('class', 'dot-group');
        const tooltip = svg.append('g').attr('class', 'tooltip');
        dotGroup
            .selectAll('.dot')
            .data(filteredParsedData)
            .enter()
            .append('circle')
            .attr('class', 'dot')
            .attr('cx', (d) => {
                return xScale(d?.date_time);
            })
            .attr('cy', (d) => {
                if (d?.dep_rooms) return yScale(d?.dep_rooms);
                if (d?.arr_rooms) return yScale(d?.arr_rooms);
                if (d?.total_occ) return yScale(d?.total_occ);
                return 0;
            })
            .attr('r', 5)
            .style('fill', (d) => {
                if (d?.dep_rooms) return '#42a58b';
                if (d?.arr_rooms) return 'red';
                if (d?.total_occ) return '#db7f50';
                return '';
            })
            .style('opacity', 0)
            .on('mouseenter', (event, d) => {
                tooltip.selectAll('.tooltip-text').remove();
                const tooltipContainer = tooltip.append('g')
                    .attr('class', 'tooltip-container');
                let tooltipText = '';
                if (d?.date_time) tooltipText += 'Date: ' + xAxisTickFormat(d?.date_time) + '\n' + ',';
                if (d?.arr_rooms) tooltipText += 'Arr Rooms: ' + d.arr_rooms + '\n' + ',';
                if (d?.dep_rooms) tooltipText += 'Dep Rooms: ' + d.dep_rooms + '\n' + ',';
                if (d?.total_occ) tooltipText += 'Total Occ: ' + d.total_occ + '.';

                tooltipContainer.append('text')
                    .attr('class', 'tooltip-text')
                    .attr('x', xScale(d?.date_time) + 15)
                    .attr('y', () => {
                        return yScale(Math.max(d?.arr_rooms, d?.dep_rooms, d?.total_occ)) - 15;
                    })
                    .text(tooltipText)
                    .style('fill', 'green')
                    .style('text-anchor', 'start')
                    .attr('dy', '-5em');
                d3.select(event.target).style('opacity', 1);
            })
            .on('mouseleave', () => {
                tooltip.selectAll('.tooltip-container').remove();
                dotGroup.selectAll('.dot').style('opacity', 0);
            });

        svg
            .append('g')
            .attr('class', 'x-axis')
            .attr('transform', `translate(0, ${height})`)
            .call(xAxis)
            .selectAll('text')
            .style('fill', '#42a58b')
            .style('font-size', '12px')
            .style('text-anchor', 'middle')
            .attr('dx', '-0.5em')
            .attr('dy', '1.5em');

        svg
            .append('g')
            .attr('class', 'y-axis')
            .call(d3.axisLeft(yScale))
            .selectAll('text')
            .style('fill', '#42a58b')
            .style('font-size', '12px');

        svg
            .append('path')
            .datum(filteredParsedData)
            .attr('class', 'line total-occ')
            .attr('d', lineTotalOcc)
            .style('stroke', '#42a58b')
            .style('fill', 'none');

        svg
            .append('path')
            .datum(filteredParsedData)
            .attr('class', 'line arr-rooms')
            .attr('d', lineArrRooms)
            .style('stroke', 'red')
            .style('fill', 'none');

        svg
            .append('path')
            .datum(filteredParsedData)
            .attr('class', 'line dep-rooms')
            .attr('d', lineDepRooms)
            .style('stroke', '#db7f50')
            .style('fill', 'none');

        d3.select(chartRef.current)
            .on('mouseenter', function () {
                if (containerWidth > 700) {
                    d3.select(this)
                        .style('overflow-x', 'scroll')
                }
            })
            .on('mouseleave', function () {
                d3.select(this)
                    .style('overflow-x', 'hidden')
                    .style('padding-bottom', '0');
            });

    }, [data, selectedOption]);

    useEffect(() => {
        drawChart();
        return () => {
            d3.select(chartRef.current)?.selectAll('*').remove();
        }
    }, [data, selectedOption]);

    return { chartRef };
}

export default useForecastChart;