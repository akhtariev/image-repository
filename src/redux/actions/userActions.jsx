export const SET_USER = 'SET_USER';

export const TOGGLE_UPLOAD = 'TOGGLE_UPLOAD';

export const setUser = user => ({
  type: SET_USER,
  payload: user,
});

export const toggleUpload = () => ({
  type: TOGGLE_UPLOAD,
});
