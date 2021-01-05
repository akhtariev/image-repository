import { firestore } from '../../utils/firebase';

export const TOGGLE_UPLOAD = 'TOGGLE_UPLOAD';
export const RESET_FEEDBACK = 'RESET_FEEDBACK';
export const INVALIDATE_UPLOAD = 'INVALIDATE_UPLOAD';
export const SUCCEED_UPLOAD = 'SUCCEED_UPLOAD';
export const SET_IMAGES = 'SET_PUBLIC_IMAGES';
export const BEGIN_LOADING_IMAGES = 'BEGIN_LOADING_IMAGES';

export const toggleUpload = () => ({
  type: TOGGLE_UPLOAD,
});

export const resetFeedback = () => ({
  type: RESET_FEEDBACK,
});

export const invalidateUpload = () => ({
  type: INVALIDATE_UPLOAD,
});

export const succeedUpload = () => ({
  type: SUCCEED_UPLOAD,
});

export const setImages = images => ({
  type: SET_IMAGES,
  payload: images,
});

export const beginLoadingImages = () => ({
  type: BEGIN_LOADING_IMAGES,
});

export const loadImages = async dispatch => {
  try {
    dispatch(beginLoadingImages());
    const imagesRef = firestore.collection('images');
    const snapshot = await imagesRef.where('isPublic', '==', true).get();
    const result = [];
    snapshot.forEach(doc => result.push(doc.data()));
    dispatch(setImages(result));
  } catch (err) {
    dispatch(setImages([]));
  }
};
