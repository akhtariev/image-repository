import { INVALIDATE_UPLOAD, TOGGLE_UPLOAD, SUCCEED_UPLOAD, RESET_FEEDBACK } from '../actions/appActions';

const initialState = {
  isUploading: false,
  didInvalidate: false,
  succeeded: false,
  privateImages: [],
  publicImages: [],
};

const userReducer = (state = initialState, { type }) => {
  switch (type) {
    case TOGGLE_UPLOAD:
      return { ...state, isUploading: true };
    case INVALIDATE_UPLOAD:
      return { ...state, isUploading: false, didInvalidate: true };
    case SUCCEED_UPLOAD:
      return { ...state, isUploading: false, succeeded: true };
    case RESET_FEEDBACK:
      return { ...state, isUploading: false, didInvalidate: false, succeeded: false };
    default:
      return state;
  }
};

export default userReducer;
