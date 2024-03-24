import { useMemo } from "react";
import RenderFeild from "../../actual/components/render-feild";

export const useDashboard = (options: any) => {
    const columns = useMemo(() => [
        {
            title: 'Property',
            dataIndex: 'property',
            width: 200,
            editable: true,
            align: 'center',
        },
        {
            title: 'Total Room in Hotel',
            dataIndex: 'total_room_in_hotel',
            width: 200,
            editable: true,
            align: 'center',
            render: (_: any, record: any) => {
                return RenderFeild({ feild: record.total_room_in_hotel });
            }
        },

        {
            title: 'Room Revenue',
            dataIndex: 'room_revenue',
            width: 200,
            align: 'center',
            editable: true,
            render: (_: any, record: any) => {
                return RenderFeild({ feild: record.room_revenue, icon: '$' });
            }
        },
        {
            title: 'F&B Revenue',
            dataIndex: 'f_b_revenue',
            align: 'center',
            width: 200,
            editable: true,
            render: (_: any, record: any) => {
                return RenderFeild({ feild: record.f_b_revenue, icon: '$' });
            }
        },
        {
            title: 'Other Revenue',
            dataIndex: 'other_revenue',
            align: 'center',
            width: 200,
            editable: true,
            render: (_: any, record: any) => {
                return RenderFeild({ feild: record.other_revenue, icon: '$' });
            }
        },
        {
            title: 'Total Revenue',
            dataIndex: 'total_revenue',
            align: 'center',
            width: 200,
            editable: true,
            render: (_: any, record: any) => {
                return RenderFeild({ feild: record.total_revenue, icon: '$' });
            }
        },
        {
            title: 'OCC %',
            dataIndex: 'occ',
            align: 'center',
            width: 200,
            editable: true,
            render: (_: any, record: any) => {
                return RenderFeild({ feild: record.occ, icon: '%', isLine: true });
            }
        },
    ], []);
    return {
        columns
    }
}