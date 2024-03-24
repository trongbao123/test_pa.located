import React, { ReactElement } from 'react'
import styled from 'styled-components';

type Props = {
    feild?: string | number,
    isLine?: boolean,
    icon?: string | React.ReactNode | ReactElement,
    className?: string
}
function RenderFeild(props: Props) {
    const { feild, isLine, icon, className } = props || {};

    return (
        <>
            {
                isLine === true ? <CustomP >{feild}{icon}</CustomP>
                    : <CustomFeild >
                        <p>{icon}</p>
                        <CustomP className={className} >{feild}</CustomP>
                    </CustomFeild>
            }
        </>

    )
}


const CustomFeild = styled("div")((props) => {
    return {
        display: 'flex',
        justifyContent: 'space-between'
    }
});

const CustomP = styled("p")((props: any) => {
    const { className } = props || {};
    return {
        textAlign: className ? className : 'end'
    }
});
export default RenderFeild;