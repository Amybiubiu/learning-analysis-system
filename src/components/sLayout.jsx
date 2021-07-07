import React from 'react'
import { Layout, Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import './index.css'
import { DesktopOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons'
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    ContainerOutlined,
    MailOutlined,
  } from '@ant-design/icons'
const { Header, Content, Sider } = Layout
const { SubMenu } = Menu

const SLayout = (props) => {
    const { children } = props
    return (
        <Layout className="lay" style={{ minHeight: '100vh' }}>
            <Sider className="sider">
                <div className="logo">学生系统</div>
                <Menu theme="dark" defaultSelectedKeys={['4']} mode="inline" style={{ padding: 0 }}>
                        <Menu.Item icon={<PieChartOutlined />}>
                            <NavLink to="/student/grade" className="link">
                                成绩
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item icon={<DesktopOutlined />}>
                            <NavLink to="/student/recommend" className="link">
                                推荐
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item icon={<ContainerOutlined />}>
                            <NavLink to="/student/predict" className="link">
                                预警
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item icon={<AppstoreOutlined />}>
                            <NavLink to="/student/cloud" className="link">
                                词云
                            </NavLink>
                        </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '40px 16px', background: '#fff', padding: '30px'}}>{children}</Content>
            </Layout>
        </Layout>
    )
}

export default SLayout
