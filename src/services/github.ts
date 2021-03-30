import axios from 'axios';

async function search(q) {
  const res = await axios.get(`https://api.github.com/search/repositories?q=${q}`);

  if (res.status !== 200) {
    throw new Error('api error');
  }

  return res.data;
}

export default search;
