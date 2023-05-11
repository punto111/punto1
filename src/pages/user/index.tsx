import React from 'react';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import './index.css'
import { Link } from 'react-router-dom';
const items1: MenuProps['items'] = [{
  key: '1',
  label: <Link to="/">主页面</Link>,
},{
  key: '2',
  label: <Link to="/user">用户页面</Link>,
},{
  key: '3',
  label:  <Link to="/info">信息页面</Link>,
}]
const { Header, Content } = Layout;

function UserPage() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
      </Header>
      <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
        用户页面
      </Content>
    </Layout>
  );
}

export default UserPage;
