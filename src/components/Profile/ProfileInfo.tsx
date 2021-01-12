/**
 * @todo github rest api (https://api.github.com/users/trustyoo86)
 */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const getRepositories = () => {
  let state = 'fending';
  let result;
  const suspender = axios.get('https://api.github.com/search/repositories?q=q')
    .then((res) => {
      setTimeout(() => {
        state = 'success';
        result = res.data;
      }, 5000);
    },
    (err) => {
      state = 'error';
      result = err;
    });

  return {
    read() {
      if (state === 'fending') {
        throw suspender;
      } else if (state === 'error') {
        throw result;
      } else if (state === 'success') {
        return result;
      }
    },
  };
};

const repoApi = getRepositories();

const ProfileInfo = () => {
  const { items } = repoApi.read();

  return (
    <div>
      <ul>
        {
          items.map((item, idx) => {
            return <li key={idx}>{item.full_name}</li>;
          })
        }
      </ul>
    </div>
  );
};

export default ProfileInfo;
