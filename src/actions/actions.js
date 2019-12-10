import fetch from 'unfetch';

import { SET_USER_LISTS } from './actionTypes';

export const loadUserLists = () => dispatch => {
  return fetch('https://api.github.com/users?per_page=6')
  .then(result => result.json())
  .then(result => {
    dispatch({
      type: SET_USER_LISTS,
      payload: result
    });
  })
  .catch(error => {
    throw error;
  });
};
