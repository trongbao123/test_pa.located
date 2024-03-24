import { Form } from "antd";
import { useCallback, useMemo, useState } from "react";
import Notification from "../../../components/notification";

const useEditTable = (options: any) => {
    const {
        columns,
        data
    } = options || {};

    const [form] = Form.useForm();
    const [editingKey, setEditingKey] = useState('');
    const [dataList, setDataList] = useState(data);

    //kiểm tra có cấp nhật hay không
    const isEditing = useMemo(() => {
        return (record: any) => {
            return record.key === editingKey;
        };
    }, [editingKey]);

    // cập nhật
    const edit = useCallback((record: any) => {
        form.setFieldsValue({ ...record });
        setEditingKey(record.id);
    }, [form, setEditingKey]);

    //huỷ cập nhật
    const cancel = useCallback(() => {
        setEditingKey('');
    }, []);

    //tao hangf mới
    const save = useCallback(async (key: React.Key) => {
        try {
            const row = await form.validateFields();
            const newData = [...dataList];
            const index = newData.findIndex((item) => key === item.key);

            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, { ...item, ...row });
                setDataList(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                setDataList(newData);
                setEditingKey('');
            }
        } catch (errInfo: any) {
            const {
                statusCode,
                message,
                success,
            } = errInfo || {};

            Notification({ statusCode, message, success });
        }
    }, [dataList, form]);

    //xoá hàng
    const handleDelete = useCallback((key: React.Key) => {
        const newData = [...dataList];
        const index = newData.findIndex((item) => key === item.key);
        newData.splice(index, 1);
        setDataList(newData);
    }, [dataList]);

    // tính tổng sum
    const calculateColumnTotal = useMemo(() => {
        return (data: any[], columnNames: string[]) => {
            const columnTotals: { [key: string]: number } = {};

            columnNames.forEach((columnName) => {
                columnTotals[columnName] = 0;
            });

            data.forEach((record) => {
                columnNames.forEach((columnName) => {
                    const value = record[columnName];

                    if (typeof value === 'string') {
                        const sanitizedValue = value.replace(/,/g, '');
                        const numericValue = parseFloat(sanitizedValue);

                        if (!isNaN(numericValue)) {
                            columnTotals[columnName] += numericValue;
                        }
                    } else {
                        const numericValue = Number(value);

                        if (!isNaN(numericValue)) {
                            columnTotals[columnName] += numericValue;
                        }
                    }
                });
            });

            return columnTotals;
        };
    }, []);

    // render cell
    const generateOnCell = useCallback(
        (col: any) => (record: any) => ({
            record,
            inputType: col.dataType === 'number' ? 'number' : 'text',
            dataIndex: col.dataIndex,
            title: col.title,
            editing: isEditing(record),
            ...record,
            ...col
        }),
        [isEditing]
    );

    // nhóm cột
    const mergedColumns = useMemo(() => {
        return columns.map((col: any) => {
            if (!col.editable) {
                return col;
            }

            return {
                ...col,
                onCell: generateOnCell(col)
            };
        });
    }, [columns, generateOnCell]);

    return {
        form,
        editingKey,
        isEditing,
        edit,
        cancel,
        save,
        handleDelete,
        mergedColumns,
        calculateColumnTotal,
    }
}

export default useEditTable;