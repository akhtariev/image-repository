import { INVALIDATE_UPLOAD, TOGGLE_UPLOAD, SUCCEED_UPLOAD, RESET_FEEDBACK, SET_IMAGES, BEGIN_LOADING_IMAGES } from '../actions/appActions';

const initialState = {
  isUploading: false,
  didInvalidate: false,
  succeeded: false,
  isLoadingImages: false,
  privateImages: [],
  publicImages: [],
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_UPLOAD:
      return { ...state, isUploading: true };
    case INVALIDATE_UPLOAD:
      return { ...state, isUploading: false, didInvalidate: true };
    case SUCCEED_UPLOAD:
      return { ...state, isUploading: false, succeeded: true };
    case RESET_FEEDBACK:
      return { ...state, isUploading: false, didInvalidate: false, succeeded: false };
    case BEGIN_LOADING_IMAGES:
      return { ...state, isLoadingImages: true };
    case SET_IMAGES:
      return { ...state, publicImages: payload, isLoadingImages: false };
    default:
      return state;
  }
};

export default userReducer;
