import { firestore } from '../../utils/firebase';

export const TOGGLE_UPLOAD = 'TOGGLE_UPLOAD';
export const RESET_FEEDBACK = 'RESET_FEEDBACK';
export const INVALIDATE_UPLOAD = 'INVALIDATE_UPLOAD';
export const SUCCEED_UPLOAD = 'SUCCEED_UPLOAD';
export const SET_IMAGES = 'SET_PUBLIC_IMAGES';
export const SET_MODE = 'SET_MODE';
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

export const setMode = isPublic => ({
  type: SET_MODE,
  payload: isPublic,
});

export const beginLoadingImages = () => ({
  type: BEGIN_LOADING_IMAGES,
});

export const loadImages = async (dispatch, curUserId) => {
  try {
    dispatch(beginLoadingImages());
    const imagesRef = firestore.collection('images');
    const publicSnapshot = await imagesRef.where('isPublic', '==', true).get();
    const privateSnapshot = await imagesRef.where('uploadedBy', '==', curUserId).get();
    const result = {
      public: [],
      private: [],
    };
    publicSnapshot.forEach(doc => result.public.push(doc.data()));
    privateSnapshot.forEach(doc => result.private.push(doc.data()));
    dispatch(setImages(result));
  } catch (err) {
    dispatch(setImages([]));
  }
};
