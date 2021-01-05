import { SET_USER } from '../actions/userActions';

const initialState = { auth: null, isUploading: false, didInvalidate: false, succeeded: false };

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return { ...state, auth: payload };
    default:
      return state;
  }
};

export default userReducer;
