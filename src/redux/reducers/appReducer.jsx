import {
  INVALIDATE_UPLOAD,
  TOGGLE_UPLOAD,
  SUCCEED_UPLOAD,
  RESET_FEEDBACK,
  SET_IMAGES,
  BEGIN_LOADING_IMAGES,
  SET_MODE,
  UPDATE_FILTER,
} from '../actions/appActions';

const initialState = {
  isUploading: false,
  didInvalidate: false,
  succeeded: false,
  isLoadingImages: false,
  privateImages: [],
  publicImages: [],
  isPublicMode: true,
  filter: null,
};

const appReducer = (state = initialState, { type, payload }) => {
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
    case UPDATE_FILTER:
      return { ...state, filter: payload === '' ? null : payload };
    case SET_IMAGES:
      return {
        ...state,
        publicImages: payload.public,
        privateImages: payload.private,
        isLoadingImages: false };
    case SET_MODE:
      return { ...state, isPublicMode: payload };
    default:
      return state;
  }
};

export default appReducer;
