export interface DataPoint {
    id?: number;
    date_time?: string | Date;
    total_occ?: number;
    arr_rooms?: number;
    dep_rooms?: number;
    room_revenue?: number;
    average_rate?: number;
    day_use_rooms?: number;
    no_show_rooms?: number;
    adl_chl?: number;
}

export interface Props {
    data: DataPoint[];
    selectedOption?: string;
}