import React from 'react'
import withEditableTable from '../../hoc/withEditableTable';
import useActual from './hooks/useActual';
import { actual } from '../../data';
import Title from 'antd/es/typography/Title';
import styled from 'styled-components';
import { Button } from 'antd';
import ChartActual from './components/chart';

function Actual() {

    const {
        columns,
        rowSelection,
        getColor
    } = useActual({});

    const EditableTable = withEditableTable({
        columns,
        rowSelection,
        data: actual.actual,
        isSum: true,
        replacementColumn: 'property',
        pageSize: 10,
        summary: ['other_revenue', 'occ', 'total_room_in_hotel', "room_revenue", "f_b_revenue", 'total_revenue'],
    });

    return (
        <>
            <CustomDivTitle>
                <Title level={2} style={{ fontFamily: 'serif', textAlign: 'center', position: 'absolute', top: 75, paddingTop: "0 !important" }}>Actual Data</Title>
                <CustomDiver />
                <CustomHeader>
                    <ChartActual data={actual.actual} />
                    <CustomUl>
                        {actual.actual.map((item) => (
                            <CustomLi key={item.key}>
                                <CustomDivSPH color={getColor(item.property)} />
                                <CustomP>{item.property}</CustomP>
                            </CustomLi>
                        ))}
                    </CustomUl>
                </CustomHeader>
                <Title level={5} style={{ fontFamily: 'serif', fontStyle: 'italic', textAlign: 'center', fontSize: 14 }}>The chart represents actual data based on total renueve</Title>
            </CustomDivTitle>
            <CustomFeild>
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
                    <CustomButton>Add new</CustomButton>
                </div>
                <EditableTable />
            </CustomFeild>
        </>

    )
};
const CustomDiver = styled('hr')((props) => {
    return {
        marginTop: 20
    }
});
const CustomDivTitle = styled('div')((props) => {
    return {
        background: "#ffffff",
        padding: 30
    }
});
const CustomUl = styled('ul')((props) => {
    return {
        paddingTop: 30,
    }
});
const CustomP = styled('p')((props) => {
    return {
        paddingLeft: 10
    }
});
const CustomLi = styled('li')((props) => {
    return {
        display: 'flex',
    }
});
const CustomDivSPH = styled('div')((props) => {
    const { color } = props;
    return {
        marginTop: 10,
        width: 20,
        backgroundColor: color,
        height: 20
    }
});

const CustomButton = styled(Button)((props) => {
    return {
        width: 125,
    }
});

const CustomFeild = styled("div")((props) => {
    return {
        background: "#ffffff",
        padding: 20,
        marginTop: 20
    }
});
const CustomHeader = styled("div")((props) => {
    return {
        display: 'flex',
        justifyContent: 'center',
        background: "#ffffff",
        marginTop: 30
    }
});
export default Actual;