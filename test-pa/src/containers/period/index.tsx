import React from 'react'
import { period } from '../../data/period';
import { usePeriod } from './hooks/usePeriod';
import styled from 'styled-components';
import withEditableTable from '../../hoc/withEditableTable';
import RenderDetail from './components/RenderDetail';
import Title from 'antd/es/typography/Title';
import { Button } from 'antd';
function Period() {

    const {
        flattenData,
        columns
    } = usePeriod({ data: period });

    const flattenedPeriod = flattenData(period);


    const TablePeriod = withEditableTable({
        data: flattenedPeriod,
        columns,
        key: 'period',
        expandable: {
            expandedRowRender: (record: any) => {
                if (record?.room && record?.guest_names && record?.package_code && record?.count && record?.pax) {
                    return RenderDetail({ data: record });
                } else {
                    return null
                }

            },
        }

    });

    return (
        <CustomDivTitle>
            <div style={{ display: 'flex', justifyContent: 'end', marginBottom: 10 }}>
                <CustomButton>Down Excel</CustomButton>
            </div>
            <CustomTitle level={2}>Period Detail</CustomTitle>

            <CustomDiver />
            <div style={{ marginTop: 20 }}>
                <TablePeriod />
            </div>
        </CustomDivTitle>
    )
}
const CustomButton = styled(Button)((props) => {
    return {
        width: 125,
        backgroundColor: 'green',
        color: 'white',
    }
});
const CustomDiver = styled('hr')((props) => {
    return {
        marginTop: 20
    }
});

const CustomTitle = styled(Title)((props) => {
    return {
        fontFamily: 'serif',
        textAlign: 'center',
        position: 'absolute',
        top: 90
    }
});

const CustomDivTitle = styled('div')((props) => {
    return {
        background: "#ffffff",
        padding: 30
    }
});


export default Period;