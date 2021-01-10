import React from 'react';
import { Form, Input } from 'antd';

const InsertProfile = () => {
  return (
    <Form>
      <Form.Item
        label="Username"
        name="username">
        <Input placeholder="Username 입력" />
      </Form.Item>
    </Form>
  );
};

export default InsertProfile;
