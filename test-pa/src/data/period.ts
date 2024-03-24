export const period = [
    {
        report_date: '2024-02-23',
        total: {
            total_actual: {
                count: 18,
                percentage_count: 100,
                sales: 7750000,
                percentage_sales: 100
            },
            adults_actual: {
                count: 16,
                percentage_count: 89,
                sales: 7750000,
                percentage_sales: 100
            },
            children_actual: {
                count: 2,
                percentage_count: 11,
                sales: 0,
                percentage_sales: 0
            }
        },
        outlet: [
            {
                outlet_code: 'FLA',
                outlet_name: 'Flavours Restaurant',
                total: {
                    total_actual: {
                        count: 1,
                        percentage_count: 6,
                        sales: 0,
                        percentage_sales: 0
                    },
                    adults_actual: {
                        count: 1,
                        percentage_count: 0,
                        sales: 0,
                        percentage_sales: 0
                    },
                    children_actual: {
                        count: 0,
                        percentage_count: 0,
                        sales: 0,
                        percentage_sales: 0
                    }
                },
                breakfast: {
                    total: {
                        total_actual: {
                            count: 1,
                            percentage_count: 0,
                            sales: 0,
                            percentage_sales: 0
                        },
                        adults_actual: {
                            count: 1,
                            percentage_count: 0,
                            sales: 0,
                            percentage_sales: 0
                        },
                        children_actual: {
                            count: 1,
                            percentage_count: 0,
                            sales: 0,
                            percentage_sales: 0
                        }
                    },
                    records: {
                        '15:41:19': {
                            room: '1001',
                            guest_names: 'Nguyen Hoang Long',
                            package_code: 'ABF',
                            count: 2,
                            pax: 'adults',
                            remark: ''
                        },
                        '15:41:20': {
                            room: '1001',
                            guest_names: 'Nguyen Hoang Long',
                            package_code: 'ABF',
                            count: 2,
                            pax: 'adults',
                            remark: ''
                        }
                    }
                },
                lunch: {
                    total: {
                        total_actual: {
                            count: 2,
                            percentage_count: 0,
                            sales: 0,
                            percentage_sales: 0
                        },
                        adults_actual: {
                            count: 2,
                            percentage_count: 0,
                            sales: 0,
                            percentage_sales: 0
                        },
                        children_actual: {
                            count: 2,
                            percentage_count: 0,
                            sales: 0,
                            percentage_sales: 0
                        }
                    },
                    records: {
                        '16:41:19': {
                            room: '1002',
                            guest_names: 'Phan Le Minh An',
                            package_code: 'ABF',
                            count: 2,
                            pax: 'adults',
                            remark: ''
                        },
                        '16:41:20': {
                            room: '1002',
                            guest_names: 'Phan Le Minh An',
                            package_code: 'ABF',
                            count: 2,
                            pax: 'adults',
                            remark: ''
                        }
                    }
                },
                dinner: {
                    total: {
                        total_actual: {
                            count: 3,
                            percentage_count: 0,
                            sales: 0,
                            percentage_sales: 0
                        },
                        adults_actual: {
                            count: 3,
                            percentage_count: 0,
                            sales: 0,
                            percentage_sales: 0
                        },
                        children_actual: {
                            count: 3,
                            percentage_count: 0,
                            sales: 0,
                            percentage_sales: 0
                        }
                    },
                    records: {
                        '12:41:19': {
                            room: '1003',
                            guest_names: 'Tien Len',
                            package_code: 'ABF',
                            count: 2,
                            pax: 'adults',
                            remark: ''
                        },
                        '12:41:20': {
                            room: '1003',
                            guest_names: 'Tien Len',
                            package_code: 'ABF',
                            count: 2,
                            pax: 'adults',
                            remark: ''
                        }
                    }
                }
            }
        ]
    },

];



// [
//     {
//         "report_date": "2024-02-23",
//         "count_adults": 16,
//         "count_children": 2,
//         "count_total": 18,
//         "sales_adults": 7750000,
//         "sales_children": 0,
//         "sales_total": 7750000,
//         "percentage_adults": 100,
//         "percentage_children": 0,
//         "percentage_total": 100,
//         children: [
//             {
//                 "outlet_code": "FLA",
//                 "outlet_name": "Flavours Restaurant",
//                 "count_adults": 1,
//                 "count_children": 0,
//                 "count_total": 1,
//                 "sales_adults": 0,
//                 "sales_children": 0,
//                 "sales_total": 0,
//                 "percentage_adults": 0,
//                 "percentage_children": 0,
//                 "percentage_total": 0,
//                 children: [
//                     {
//                         period: 'Breakfast',
//                         count_adults: 1,
//                         count_children: 1,
//                         count_total: 1,
//                         sales_adults: 0,
//                         sales_children: 0,
//                         sales_total: 0,
//                         percentage_adults: 0,
//                         percentage_children: 0,
//                         percentage_total: 0,
//                         children: [
//                             {
//                                 room: '1001',
//                                 guest_names: 'Nguyen Hoang Long',
//                                 package_code: 'ABF',
//                                 count: 2,
//                                 pax: 'adults',
//                                 remark: '',
//                                 time: '15:41:19'
//                             },
//                             {
//                                 room: '1001',
//                                 guest_names: 'Nguyen Hoang Long',
//                                 package_code: 'ABF',
//                                 count: 2,
//                                 pax: 'adults',
//                                 remark: '',
//                                 time: '15:41:20'
//                             }
//                         ]
//                     },
//                     {
//                         period: 'lunch',
//                         count_adults: 1,
//                         count_children: 1,
//                         count_total: 1,
//                         sales_adults: 0,
//                         sales_children: 0,
//                         sales_total: 0,
//                         percentage_adults: 0,
//                         percentage_children: 0,
//                         percentage_total: 0,
//                         children: [
//                             {
//                                 room: '1001',
//                                 guest_names: 'Nguyen Hoang Long',
//                                 package_code: 'ABF',
//                                 count: 2,
//                                 pax: 'adults',
//                                 remark: '',
//                                 time: '16:41:19'
//                             },
//                             {
//                                 room: '1002',
//                                 guest_names: 'Nguyen Hoang Long',
//                                 package_code: 'ABF',
//                                 count: 2,
//                                 pax: 'adults',
//                                 remark: '',
//                                 time: '16:41:20'
//                             }
//                         ]
//                     },
//                     {
//                         period: 'dinner',
//                         count_adults: 1,
//                         count_children: 1,
//                         count_total: 1,
//                         sales_adults: 0,
//                         sales_children: 0,
//                         sales_total: 0,
//                         percentage_adults: 0,
//                         percentage_children: 0,
//                         percentage_total: 0,
//                         children: [
//                             {
//                                 room: '1003',
//                                 guest_names: 'Nguyen Hoang Long',
//                                 package_code: 'ABF',
//                                 count: 2,
//                                 pax: 'adults',
//                                 remark: '',
//                                 time: '12:41:20'
//                             },
//                             {
//                                 room: '1003',
//                                 guest_names: 'Nguyen Hoang Long',
//                                 package_code: 'ABF',
//                                 count: 2,
//                                 pax: 'adults',
//                                 remark: '',
//                                 time: '16:41:21'
//                             }
//                         ]
//                     },
//                 ]
//             }
//         ]
//     }
// ]