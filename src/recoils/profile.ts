import { selector } from 'recoil';
import axios from 'axios';

const PREFIX = 'PROFILE';

export const profileSelector = selector({
  key: `${PREFIX}/PROFILE`,
  get: async () => {
    const res = await axios.get('https://api.github.com/search/repositories?q=q');
    return res.data;
  },
});
