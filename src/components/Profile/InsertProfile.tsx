import React, { useCallback, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { Machine } from 'xstate';
import { useMachine } from '@xstate/react';

const toggleMachine = Machine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: {
      on: { TOGGLE: 'active' },
    },
    active: {
      on: { TOGGLE: 'inactive' },
    },
  },
});

interface IProps {
  ctx?: string;
  onClick?: Function;
}

function InsertProfile({ onClick = () => console.log('test') }: IProps) {
  const [value, setValue] = useState('');
  const [current, send] = useMachine(toggleMachine);
  const active = current.matches('active');

  const changeHandler = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const val = target.value;
    setValue(val);
  };

  const clickHandler = () => {
    onClick();
  };

  return (
    <Form>
      <Form.Item
        label="Username"
        name="username">
        <Input placeholder="Username 입력" value={value} onChange={changeHandler} />
        <Button onClick={clickHandler} disabled={!active}>검색 {active ? '활성' : '비활성'} </Button>
      </Form.Item>
    </Form>
  );
}

export default InsertProfile;
