// dpendencies
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Row, Col, Typography, Form, Input } from 'antd';
import { useMachine } from '@xstate/react';

// machines
import { searchMachine, SearchContext } from '../machines/searchMachine';

const { Title } = Typography;

function Search() {
  const [ value, setValue ] = useState<string>('');
  const [ currentState, sendEvent ] = useMachine(searchMachine);

  useEffect(() => {
    if (value) {
      sendEvent('SEARCH', {
        q: value,
      });
    }
  }, [value]);
  
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <Typography>
        <Title level={3}>Xstate example</Title>
      </Typography>

      <Row>
        <Col span={12}>
          <Form>
            <Form.Item>
              <Input onChange={changeHandler} placeholder="검색어를 입력해 주세요" />
            </Form.Item>
          </Form>
        </Col>
      </Row>

      {
        currentState.matches('loaded') && currentState.context.result.length && (
          <ul>
            {
              currentState.context.result.map((item, idx) => {
                return <li key={idx}>{item['full_name']}</li>;
              })
            }
          </ul>
        )
      }

    </div>
  );
}

export default Search;
