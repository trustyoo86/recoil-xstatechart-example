import React from 'react';
// import { Layout } from 'antd';
import { RecoilRoot } from 'recoil';

import './App.css';
import Routes from './Routes';
import Layout from '@components/Layout';
// const { Header, Content, Footer } = Layout;

function App() {
  return (
    <RecoilRoot>
      <Layout>
        <Routes />
      </Layout>
    </RecoilRoot>
  );
}

export default App;
