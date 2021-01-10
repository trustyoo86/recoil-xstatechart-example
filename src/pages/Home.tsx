import React from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const Home = () => {
  return (
    <div>
      <Typography>
        <Title level={3}>Recoil + XState Home!</Title>
      </Typography>
      <Link to="/profile">Go to github profile example</Link>
    </div>
  );
};

export default Home;
