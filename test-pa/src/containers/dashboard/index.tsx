import Title from 'antd/es/typography/Title';
import React from 'react'
import styled from 'styled-components';
import { TimePicker } from 'antd';
import withEditableTable from '../../hoc/withEditableTable';
import { actual, reservation } from '../../data';

import { useDashboard } from './hooks/useDashboard';
import ChartActual from '../actual/components/chart';
import ForecastChart from '../reservation/components/chart';
export default function Dashboard() {

    const {
        columns,
    } = useDashboard({});

    const TableCustom = withEditableTable({
        data: actual.actual,
        columns: columns,
    });

    return (
        <>
            <CustomDivTitle>
                {/* <CustomLine /> */}
                <Title level={2} style={{ fontFamily: 'serif', textAlign: 'center', position: 'absolute', top: 75, paddingTop: "0 !important" }}>Welcome to Dashboard</Title>
                <CustomP>This page will provide an overview of the dashboard</CustomP>
                <CustomDiver />
                <TimePicker.RangePicker style={{ marginTop: 20 }} />
            </CustomDivTitle>
            <CustomRow >
                <CustomCol >
                    <div >TOTAL REVENUE</div>
                    <CustomTotal level={2} >53,320,167 VND</CustomTotal>
                </CustomCol>
                <CustomCol>
                    <div >ROOM REVENUE</div>
                    <CustomTotal level={2} >48,320,167 VND</CustomTotal>
                </CustomCol>
                <CustomCol >
                    <div>F&B REVENUE</div>
                    <CustomTotal level={2} >6,579,167 VND</CustomTotal>
                </CustomCol>
                <CustomCol >
                    <div >TOTAL ROOM SOLD</div>
                    <CustomTotal level={2} >27</CustomTotal>
                </CustomCol>
            </CustomRow>
            <CustomDiv>
                <Title level={4} style={{ fontFamily: 'serif', textAlign: 'start' }}>Manager Report</Title>
                <CustomDive />
                <TableCustom />
            </CustomDiv>

            <CustomChartActual>
                <ChartActual data={actual.actual} />
                <Title level={5} style={{ fontFamily: 'serif', fontStyle: 'italic', textAlign: 'center', fontSize: 14 }}>The chart represents actual data based on total renueve</Title>
            </CustomChartActual>
            <CustomChartReservation>
                <ForecastChart data={reservation?.reservation} selectedOption="thismonth" />
                <Title level={5} style={{ fontFamily: 'serif', fontStyle: 'italic', textAlign: 'center', fontSize: 14 }}>The chart displays data Reservation Forecast based on Total Occ, Arr. Rooms, Dep. Rooms.</Title>
            </CustomChartReservation>
        </>
    )
};
const CustomChartReservation = styled('div')((props) => {
    return {
        background: "#ffffff",
        padding: 30,
        marginTop: 20,
    }
});
const CustomChartActual = styled('div')((props) => {
    return {
        background: "#ffffff",
        padding: 30,
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
const CustomChart = styled('div')((props) => {
    return {
        display: 'flex',
    }
});
const CustomDive = styled('div')((props) => {
    return {
        marginTop: 10,
        border: '1px solid #ece5e5',
        marginLeft: 5,
        marginBottom: 20
    }
});
const CustomDiv = styled('div')((props) => {
    return {
        background: "#ffffff",
        padding: 30,
        marginTop: 20,

    }
});
const CustomTotal = styled(Title)((props) => {
    return {
        fontFamily: 'serif',
        textAlign: 'center',
        paddingTop: "0 !important",
        fontWeight: '500 !important',
    }
});
const CustomCol = styled('div')((props) => {
    return {
        marginLeft: "5px !important",
        marginRight: "5px !important",
        width: '400px',
        padding: 50,
        gap: 20,
        background: "#ffffff",
        textAlign: "center",
    }
});
const CustomRow = styled('div')((props) => {
    return {
        display: 'flex',
        marginTop: 20,
        marginLeft: "0px !important",
    }
});

const CustomDivTitle = styled('div')((props) => {
    return {
        background: "#ffffff",
        padding: 30,
        borderLeft: "5px solid green",
    }
});

const CustomP = styled('p')((props) => {
    return {
        paddingTop: 20,
        paddingLeft: 5
    }
});

const CustomDiver = styled('div')((props) => {
    return {
        marginTop: 20,
        border: '1px dashed #ece5e5',
        width: '400px',
        marginLeft: 5
    }
});