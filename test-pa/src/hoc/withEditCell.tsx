import React from 'react';
import { Input, InputNumber, Form } from 'antd';

interface EditableCellProps {
    editing: boolean;
    dataIndex: string;
    title: string;
    inputType: 'text' | 'number';
    record: any;
    index: number;
    children: React.ReactNode;
}

const withEditableCell: React.FC<EditableCellProps> = (props) => {
    const { editing, dataIndex, title, inputType, children } = props || {};
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
    return (
        <td>
            {editing ? (
                <Form.Item
                    key={dataIndex}
                    name={dataIndex}
                    style={{ margin: 0 }}
                    rules={[{
                        required: true,
                        message: `Please Input ${title}!`
                    }]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};

export default withEditableCell;