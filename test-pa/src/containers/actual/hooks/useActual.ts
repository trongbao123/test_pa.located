import { useMemo, useState } from "react";
import RenderFeild from "../components/render-feild";
import RenderButton from "../components/render-button";

const useActual = (options: any) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const getColor = useMemo(() => {
        return (code: any) => {
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

            return colorMap[code] || '#8b8b8b';
        }
    }, []);

    const rowSelection = {
        defaultSelectedRowKeys: selectedRowKeys,
        selectedRowKeys: selectedRowKeys,
        onChange: (selectedRowKeys: any, selectedRows: any) => {
            setSelectedRowKeys(selectedRowKeys)
        },
        getCheckboxProps: (record: any) => ({
            disabled: record.disabled,
        }),
    };

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
        {
            title: 'Actions',
            dataIndex: 'actions',
            align: 'center',
            width: 50,
            render: (_: any, index: any) => {
                return (
                    RenderButton({})
                );
            },
        },
    ], []);

    return {
        columns,
        rowSelection,
        getColor
    }
}

export default useActual;