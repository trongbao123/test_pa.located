import React from 'react';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import HeaderComponent from './components/header';
import { menuItems } from '../../data/menu';

const { Content, Footer, Sider } = Layout;

const Cms: React.FC = () => {
    return (
        <CustomLayout >
            <CustomSider
                breakpoint="lg"
                collapsedWidth="0"
            >
                <CustomTitle>
                    <img
                        style={{ width: 100, height: 70 }}
                        src="https://infotelvn.com/thumbs_size/banner/2015_12/logo_header_png/165x98_fw_logo_header.png"
                        alt="logo"
                    />
                </CustomTitle>
                <CustomMenu
                    theme="light"
                    mode="vertical"
                    defaultSelectedKeys={['1']}
                >
                    {menuItems.map((item) => (
                        <Menu.Item key={item.key} icon={item.icon}>
                            <Link to={item.path}>{item.label}</Link>
                        </Menu.Item>
                    ))}
                </CustomMenu>
            </CustomSider>
            <Layout>
                <HeaderComponent />
                <CustomContent>
                    <CustomContentBody>
                        <Outlet />
                    </CustomContentBody>
                </CustomContent>
                <CustomFooter >
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </CustomFooter >
            </Layout>
        </CustomLayout>
    );
};

const CustomLayout = styled(Layout)((props) => {
    return {
        // height: 'auto',
        minHeight: '100vh'
    }
});

const CustomFooter = styled(Footer)((props) => {
    return {
        textAlign: 'center',
    }
});

const CustomContentBody = styled('div')((props) => {
    return {
        borderRadius: 4,
        minHeight: 360,
    }
});

const CustomContent = styled(Content)((props) => {
    return {
        margin: '24px 16px 0',
    }
});

const CustomSider = styled(Sider)((props) => {
    return {
        borderRight: "1px solid #e0e0e0",
        background: "#ffffff !important",
    }
});

const CustomMenu = styled(Menu)((props) => {
    return {
        marginTop: 20,
        marginBottom: 20
    }
});

const CustomTitle = styled('div')((props) => {
    return {
        height: 64,
        borderBottom: "1px solid #e0e0e0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    }
})
export default Cms;