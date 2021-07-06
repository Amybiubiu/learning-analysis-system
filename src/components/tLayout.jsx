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
                <div className="logo">老师系统</div>
                <Menu theme="dark" defaultSelectedKeys={['4']} mode="inline" style={{ padding: 0 }}>
                        <Menu.Item icon={<PieChartOutlined />}>
                            <NavLink to="/teacher/grade" className="link">
                                成绩
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item icon={<DesktopOutlined />}>
                            <NavLink to="/teacher/predict" className="link">
                                预测
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item icon={<ContainerOutlined />}>
                            <NavLink to="/teacher/ban" className="link">
                                干预
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item icon={<AppstoreOutlined />}>
                            <NavLink to="/teacher/positivity" className="link">
                                学生积极性
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
