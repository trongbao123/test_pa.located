import { useCallback, useMemo } from "react";
import { FlattenedOutlet, Props, Result } from "../interface";
import { Table } from "antd";

export const usePeriod = (options: Props) => {
    const { data } = options || {};

    const flattenData = useCallback((data: any) => {
        return data.map((item: FlattenedOutlet) => {
            const { report_date, total: { adults_actual, children_actual, total_actual }, outlet } = item;

            const flattenedItem = {
                report_date,
                count_adults: adults_actual.count,
                count_children: children_actual.count,
                count_total: total_actual.count,
                sales_adults: adults_actual.sales,
                sales_children: children_actual.sales,
                sales_total: total_actual.sales,
                percentage_adults: adults_actual.percentage_count,
                percentage_children: children_actual.percentage_count,
                percentage_total: total_actual.percentage_count,
                children: outlet.map((outletItem: any) => {
                    const { outlet_code, outlet_name, total: { adults_actual, children_actual, total_actual }, ...periodData } = outletItem;

                    const flattenedOutlet = {
                        outlet_code,
                        outlet_name,
                        count_adults: adults_actual.count,
                        count_children: children_actual.count,
                        count_total: total_actual.count,
                        sales_adults: adults_actual.sales,
                        sales_children: children_actual.sales,
                        sales_total: total_actual.sales,
                        percentage_adults: adults_actual.percentage_count,
                        percentage_children: children_actual.percentage_count,
                        percentage_total: total_actual.percentage_count,
                        children: Object.entries(periodData).map(([period, periodData]) => {
                            const { total: { adults_actual, children_actual, total_actual }, records, ...rest } = periodData as any || {};

                            const flattenedPeriodData = {
                                period,
                                count_adults: adults_actual.count,
                                count_children: children_actual.count,
                                count_total: total_actual.count,
                                sales_adults: adults_actual.sales,
                                sales_children: children_actual.sales,
                                sales_total: total_actual.sales,
                                percentage_adults: adults_actual.percentage_count,
                                percentage_children: children_actual.percentage_count,
                                percentage_total: total_actual.percentage_count,
                                children: Object.entries(records).map(([time, record]) => {
                                    const { room, guest_names, package_code, count, pax, remark } = record as Result || {};
                                    return {
                                        room: room,
                                        guest_names: guest_names,
                                        package_code: package_code,
                                        count: count,
                                        pax: pax,
                                        remark: remark,
                                        time
                                    }
                                }),
                                ...rest
                            };
                            return flattenedPeriodData;
                        })
                    };
                    return flattenedOutlet;
                })
            };
            return flattenedItem;
        });
    }, [data]);

    const columns = useMemo(() => {
        return [
            Table.EXPAND_COLUMN,
            {
                title: 'Report Date',
                dataIndex: 'report_date',
                key: 'report_date',
                editable: true
            },

            {
                title: 'RVC',
                dataIndex: 'outlet_code',
                key: 'outlet_code',
                editable: true
            },
            {
                title: 'Period',
                dataIndex: 'period',
                key: 'period',
                editable: true,
            },

            {
                title: 'Count Adults',
                dataIndex: 'count_adults',
                key: 'count_adults',
                editable: true,
                valueType: 'number',
            },
            {
                title: 'Count Children',
                dataIndex: 'count_children',
                key: 'count_children',
                editable: true
            },

            {
                title: 'Sales Adults',
                dataIndex: 'sales_adults',
                key: 'sales_adults',
                editable: true
            },
            {
                title: 'Sales Children',
                dataIndex: 'sales_children',
                key: 'sales_children',
                editable: true
            },
            {
                title: 'Count',
                dataIndex: 'count_total',
                key: 'count_total',
                editable: true
            },
            {
                title: 'Sales %',
                dataIndex: 'percentage_adults',
                key: 'percentage_adults',
                editable: true
            },
            {
                title: 'Sales',
                dataIndex: 'sales_total',
                key: 'sales_total',
                editable: true
            },
            {
                title: 'Count %',
                dataIndex: 'percentage_total',
                key: 'percentage_total',
                editable: true
            }
        ]
    }, [data]);

    return {
        flattenData,
        columns,
    }
}