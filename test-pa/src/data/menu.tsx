import { BarsOutlined, FieldTimeOutlined, FileSyncOutlined, HomeOutlined } from "@ant-design/icons";

export const menuItems = [
    {
        key: 'dashboard',
        path: '/dashboard',
        label: 'Dashboard',
        icon: <HomeOutlined style={{ color: '#4caf50' }} />,
    },
    {
        key: 'actual_data',
        path: '/actual-data',
        label: 'Actual data',
        icon: <BarsOutlined style={{ color: '#795548 ' }} />,
    },
    {
        key: 'reservation_forecast',
        path: '/reservation-forecast',
        label: 'Reservation forecast',
        icon: <FileSyncOutlined style={{ color: '#ff5722' }} />,
    },
    {
        key: 'period_detail',
        path: '/period-detail',
        label: 'Period detail',
        icon: <FieldTimeOutlined style={{ color: '#673ab7' }} />,
    },
]