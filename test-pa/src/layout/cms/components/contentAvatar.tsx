import { LogoutOutlined, MailOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
    logout: () => void
}

function ContentAvatar(props: Props) {
    const { logout } = props || {};
    return (
        <CustomPopover >
            <CustomMenu to={"#"}>
                <SettingOutlined />
                <CustomSpan>Setting</CustomSpan>
            </CustomMenu>
            <CustomMenu to={"#"}>
                <UserOutlined />
                <CustomSpan>Profile</CustomSpan>
            </CustomMenu>
            <CustomMenu to={"#"}>
                <MailOutlined />
                <CustomSpan>Message</CustomSpan>
            </CustomMenu>
            <hr style={{ width: '100%' }} />
            <CustomMenu to={"#"} onClick={logout}>
                <LogoutOutlined />
                <CustomSpan>Logout</CustomSpan>
            </CustomMenu>
        </CustomPopover>
    )
}
const CustomSpan = styled('span')((props) => {
    return {
        paddingLeft: 10
    }
});

const CustomPopover = styled('div')((props) => {
    return {
        width: 100,
    }
});
const CustomMenu = styled(Link)((props) => {
    return {
        display: 'flex',
        color: '#726e6e',
        justifyContent: 'flex-start',
        paddingTop: 5,
    }
});

export default ContentAvatar;