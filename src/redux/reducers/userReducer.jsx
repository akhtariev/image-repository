import { SET_USER } from '../actions/userActions';

const initialState = null;

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return payload;
    default:
      return state;
  }
};

export default userReducer;
