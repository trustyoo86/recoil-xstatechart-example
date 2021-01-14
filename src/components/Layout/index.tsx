import React, { FC } from 'react';
import { Menu, Layout, Breadcrumb } from 'antd';
import styled from 'styled-components';

const { Header, Content, Footer } = Layout;

const styles = {
  container: {
    padding: '50px 50px',
  },
  ContentMain: styled.div`
    min-height: 280px;
    padding: 24px;
    background: #ffffff;
  `,
};

interface IProps {
  children?: any;
}

const PageLayout: FC<IProps> = ({ children }: IProps) => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="1">Home</Menu.Item>
        </Menu>
      </Header>
      <Content style={styles.container}>
        <styles.ContentMain>
          {children}
        </styles.ContentMain>
      </Content>
      <Footer>
        test footer
      </Footer>
    </Layout>
  );
};

export default PageLayout;
