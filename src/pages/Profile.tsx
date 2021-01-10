/**
 * @todo github rest api (https://api.github.com/users/trustyoo86)
 */
import React from 'react';
import { Row, Col, Typography } from 'antd';

import { InsertProfile } from '@components/Profile';

const { Title } = Typography;

const Profile = () => {
  return (
    <div>
      <Typography>
        <Title level={3}>Github Profile</Title>
      </Typography>
      <Row>
        <Col span={12}>
          {/* profile input */}
          <InsertProfile />
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
