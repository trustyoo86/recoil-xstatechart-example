import React from 'react';
import { Layout } from 'antd';
import { RecoilRoot } from 'recoil';

import './App.css';
import Routes from './Routes';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Layout className="layout">
          <Header>
            <div className="logo" />
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">
              <Routes />
            </div>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    </RecoilRoot>
  );
}

export default App;
