import React from 'react'
import styled from 'styled-components';

export default function RenderDetail(props: any) {
    const { data } = props || {};

    return (
        <>
            <CustomTr>
                <CustomTd>
                    Room: {data?.room}
                </CustomTd>
                <CustomTd>Guest Name: {data?.guest_names}</CustomTd>
                <CustomTd>Count: {data?.count}</CustomTd>
                <CustomTd>Pax: {data?.pax}</CustomTd>
                <CustomTd>Time: {data?.time}</CustomTd>
                <CustomTd>Package Code: {data?.package_code}</CustomTd>
                <CustomTd>Remark: {data?.remark}</CustomTd>
            </CustomTr>
        </>
    )
}
const CustomTd = styled('td')((props) => {
    return {
        textAlign: 'center',
        paddingLeft: 25,
        paddingRight: 25,
        borderRight: '1px solid #f0f0f0',
    }
});

const CustomTr = styled('tr')((props) => {
    return {
        position: 'absolute',
        zIndex: 9999,
        left: 0,
        backgroundColor: 'white',
        width: '1125px',
        padding: '5px',
        textAlign: 'center',
        bottom: 20
    }
});
