import axios from 'axios';

async function search(q) {
  const res = await fetch(`https://api.github.com/search/repositories?q=${q}`);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error('api error');
  }

  return data;
}

export default search;
