export type Result = {
    room?: string;
    guest_names?: string;
    package_code?: string;
    count?: number;
    pax?: string;
    remark?: string;
    time?: string;
};
export interface FlattenedOutlet {
    period?: string;
    report_date?: string;
    outlet_code?: string;
    outlet_name?: string;
    count_adults?: number;
    count_children?: number;
    count_total?: number;
    sales_adults?: number;
    sales_children?: number;
    sales_total?: number;
    percentage_adults?: number;
    percentage_children?: number;
    percentage_total?: number;
    children: any[];
    outlet?: any;
    total?: any;
};

export type Props = {
    data?: any[]
}