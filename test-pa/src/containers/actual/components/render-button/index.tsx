import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Popconfirm } from 'antd';
import React from 'react'
import styled from 'styled-components';

type Props = {
    handleDelete?: () => void
    handleEdit?: () => void
}
function RenderButton(props: Props) {

    const { handleDelete, handleEdit } = props || {};
    return (
        <CustomFeild >
            <CustomPopconfirm
                title="Sure to edit?"
                onConfirm={handleEdit}
            >
                <EditOutlined style={{ color: '#03a9f4 ' }} />
            </CustomPopconfirm>
            <CustomPopconfirm
                title={"Sure to delete?"}
                onConfirm={handleDelete}
            >
                <DeleteOutlined style={{ color: '#f44336' }} />
            </CustomPopconfirm>
        </CustomFeild>
    )
}
const CustomFeild = styled("div")((props) => {
    return {
        display: 'flex',
        justifyContent: 'space-between'
    }
});

const CustomPopconfirm = styled(Popconfirm)((props) => {
    return {
        fontSize: 15,
        cursor: "pointer"
    }
});


export default RenderButton;