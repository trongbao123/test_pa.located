import React from 'react'
import { Layout, Popover, Avatar, Badge } from 'antd';
import styled from 'styled-components';
import { BellOutlined, CloseOutlined, MailOutlined, SearchOutlined } from '@ant-design/icons';
import ContentAvatar from './contentAvatar';
import { useHeader } from '../hooks/useHeader';

type Props = {}
const { Header } = Layout;
function HeaderComponent(props: Props) {
    const {
        toggleInput,
        handleInputChange,
        isInputVisible,
        searchQuery,
        user,
        logout
    } = useHeader({ ...props })

    return (
        <CustomHeader >
            <div>
                {isInputVisible ? (
                    <CustomLeft >
                        <CustomCloseOutlined onClick={toggleInput} />
                        <CustomInput
                            type="text"
                            value={searchQuery}
                            onChange={handleInputChange}
                            placeholder='Search..................'
                        />
                    </CustomLeft>
                ) : (
                    <CustomSearchOutlined onClick={toggleInput} />
                )}
            </div>
            <CustomRight>
                <CustomBadge dot={true}>
                    <BellOutlined />
                </CustomBadge>
                <CustomBadge dot={true}>
                    <MailOutlined />
                </CustomBadge>
                <span style={{ marginRight: 10 }}>{(user as { name: string })?.name}</span>
                <Popover
                    trigger={"click"}
                    content={<ContentAvatar logout={logout} />}
                    placement='topRight'
                    style={{ cursor: 'pointer' }}
                >
                    <CustomAvatar size="large">
                        {(user as { name: string })?.name?.charAt(0).toUpperCase()}
                    </CustomAvatar>
                </Popover>
            </CustomRight>
        </CustomHeader>
    )
};

const CustomHeader = styled(Header)((props) => {
    return {
        padding: 0,
        background: "#ffffff",
        borderBottom: "1px solid #e0e0e0",
        display: 'flex',
        justifyContent: 'space-between',
    }
});

const CustomInput = styled('input')((props) => {
    return {
        padding: 10,
        background: "#ffffff",
        width: 350,
        borderBottomStyle: 'hidden',
        borderLeftStyle: 'hidden',
        borderRightStyle: 'hidden',
        borderTopStyle: 'hidden',
        fontSize: 15,
        ":focus": {
            outline: 'none',
        },
        '::placeholder': {
            color: '#e0e0e0',
        },
        ":focus-visible": {
            outline: 'none',
        }
    }
});

const CustomLeft = styled('div')((props) => {
    return {
        marginLeft: 20
    }
});
const CustomAvatar = styled(Avatar)((props) => {
    return {
        backgroundColor: '#f56a00',
        cursor: 'pointer',
    }
});
const CustomRight = styled('div')((props) => {
    return {
        marginRight: 20
    }
});

const CustomSearchOutlined = styled(SearchOutlined)((props) => {
    return {
        marginLeft: 20,
        fontSize: 16
    }
});
const CustomCloseOutlined = styled(CloseOutlined)((props) => {
    return {
        fontSize: 16,
        marginTop: 10
    }
});

const CustomBadge = styled(Badge)((props) => {
    return {
        fontSize: 16,
        marginRight: 30,
        cursor: 'pointer'
    }
});
export default HeaderComponent;