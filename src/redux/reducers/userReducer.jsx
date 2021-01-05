import { REQUEST_DATA, SET_USER } from '../actions/userActions';

const initialState = { auth: null, hasRequestedData: false };

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return { ...state, auth: payload };
    case REQUEST_DATA:
      return { ...state, hasRequestedData: true };
    default:
      return state;
  }
};

export default userReducer;
