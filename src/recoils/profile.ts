import { atom, selector, ReadWriteSelectorOptions } from 'recoil';
import axios from 'axios';

const PREFIX = 'PROFILE';

export const queryAtom = atom({
  key: `${PREFIX}/ATOM/QUERY`,
  default: '',
});

export const profileSelector = selector({
  key: `${PREFIX}/PROFILE`,
  get: async ({ get }) => {
    const query = get(queryAtom) || 'q';
    const res = await axios.get(`https://api.github.com/search/repositories?q=${query}`);
    return res.data;
  },
});
