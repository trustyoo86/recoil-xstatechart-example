import React from 'react';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';

const testState = atom({
  key: 'testState',
  default: 'test',
});

const testSelector = selector({
  key: 'testSelectorState',
  get: ({ get }) => {
    return get(testState);
  },
});

const Home = () => {
  // const [test, setTest] = useRecoilState(testState);
  const test = useRecoilValue(testSelector);

  return (
    <div>
      Home {test}
    </div>
  );
};

export default Home;
