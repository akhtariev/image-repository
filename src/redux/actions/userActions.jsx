export const SET_USER = 'SET_USER';
export const REQUEST_DATA = 'REQUEST_DATA';

export const setUser = user => ({
  type: SET_USER,
  payload: user,
});

export const requestData = () => ({
  type: REQUEST_DATA,
});
