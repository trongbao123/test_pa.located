import Title from 'antd/es/typography/Title'
import React from 'react'
import styled from 'styled-components';
import ForecastChart from './components/chart';
import { reservation } from '../../data';
import useReservation from './hooks/useReservation';

type Props = {}
function Reservation(props: Props) {
    const {
        selectedOption,
        handledSelectMonth
    } = useReservation({ ...props });

    return (
        <>
            <CustomDivTitle>
                <CustomTitle level={2}>Reservation Forecast</CustomTitle>
                <CustomDiver />
                <CustomResevation>
                    <CustomSelect onChange={handledSelectMonth}>
                        <option value="thismonth">This Month</option>
                        <option value="3months">3 Months</option>
                        <option value="6months">6 Months</option>
                    </CustomSelect>
                    <CustomUl>
                        <CustomLi >
                            <CustomDivSPH />
                            <CustomP>Total Occ</CustomP>
                        </CustomLi>
                        <CustomLi >
                            <CustomlineArrRooms />
                            <CustomP>Arr Rooms</CustomP>
                        </CustomLi>
                        <CustomLi >
                            <CustomlineDepRooms />
                            <CustomP>Dep Rooms</CustomP>
                        </CustomLi>
                    </CustomUl>
                </CustomResevation>
                <ForecastChart data={reservation?.reservation} selectedOption={selectedOption} />
                <Title level={5} style={{ fontFamily: 'serif', fontStyle: 'italic', textAlign: 'center', fontSize: 14 }}>The chart displays data Reservation Forecast based on Total Occ, Arr. Rooms, Dep. Rooms.</Title>
            </CustomDivTitle>
        </>
    )
};

const CustomResevation = styled('div')((props) => {
    return {
        display: 'flex',
        justifyContent: 'space-evenly',
    }
});
const CustomP = styled('p')((props) => {
    return {
        paddingLeft: 10
    }
});
const CustomUl = styled('ul')((props) => {
    return {
        backgroundColor: "#ffffff",
        borderRadius: 5,
        border: '1.5px solid #db7f50',
        width: 200,
    }
});
const CustomLi = styled('li')((props) => {
    return {
        display: 'flex',
    }
});
const CustomDivSPH = styled('div')((props) => {
    return {
        marginTop: 10,
        width: 20,
        backgroundColor: '#42a58b',
        height: 20
    }
});
const CustomlineArrRooms = styled('div')((props) => {
    return {
        marginTop: 10,
        width: 20,
        backgroundColor: 'red',
        height: 20
    }
});
const CustomlineDepRooms = styled('div')((props) => {
    return {
        marginTop: 10,
        width: 20,
        backgroundColor: '#db7f50',
        height: 20
    }
});
const CustomSelect = styled('select')((props) => {
    return {
        width: 200,
        padding: 5,
        border: '1.5px solid #42a58b',
        color: "#42a58b",
        borderRadius: 5,
        height: 30,
        marginTop: 15
    }
});
const CustomTitle = styled(Title)((props) => {
    return {
        fontFamily: 'serif',
        textAlign: 'center',
        position: 'absolute',
        top: 75
    }
});
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

export default Reservation;