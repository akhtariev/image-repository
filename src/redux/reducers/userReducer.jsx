import { SET_USER, TOGGLE_UPLOAD } from '../actions/userActions';

const initialState = { auth: null, isUploading: false };

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return { ...state, auth: payload };
    case TOGGLE_UPLOAD:
      return { ...state, isUploading: !state.isUploading };
    default:
      return state;
  }
};

export default userReducer;
