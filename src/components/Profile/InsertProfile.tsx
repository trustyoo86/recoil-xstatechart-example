import React from 'react';
import { Form, Input } from 'antd';
import { useRecoilState } from 'recoil';

import { queryAtom } from '@recoils/profile';

function InsertProfile() {
  const [query, setQuery] = useRecoilState(queryAtom);

  const onChange = ({ target }) => {
    const val = target.value;
    setQuery(val);
  };

  return (
    <Form>
      <Form.Item
        label="Username"
        name="username">
        <Input
          placeholder="Username 입력"
          value={query}
          onChange={onChange} />
      </Form.Item>
    </Form>
  );
}

export default InsertProfile;
