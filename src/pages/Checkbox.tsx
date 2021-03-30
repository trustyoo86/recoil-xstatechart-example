import React from 'react';
import { Row, Col, Typography, Form, Checkbox } from 'antd';
import { useMachine } from '@xstate/react';

import { checkMachine } from '../machines/checkMachine';

const { Title } = Typography;

function CheckboxExample() {
  const [current, send] = useMachine(checkMachine);

  const changeHandler = (e) => {
    send('CHECK', {
      name: e.target.name,
      checked: e.target.checked,
    });
  };

  return (
    <div>
      <Typography>
        <Title level={3}>Xstate checkbox</Title>
      </Typography>

      <Row>
        <Col span={12}>
          <Form>
            <Typography>
              <Title level={4}>All checked</Title>
            </Typography>
            <Form.Item>
              <Checkbox checked={current.context.allChecked}>All checked</Checkbox>
            </Form.Item>
            <Form.Item>
              <Checkbox name="checkbox1" onChange={changeHandler}>Checkbox1</Checkbox>
            </Form.Item>
            <Form.Item>
              <Checkbox name="checkbox2" onChange={changeHandler}>Checkbox2</Checkbox>
            </Form.Item>
            <Form.Item>
              <Checkbox name="checkbox3" onChange={changeHandler}>Checkbox3</Checkbox>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default CheckboxExample;