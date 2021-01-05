export const TOGGLE_UPLOAD = 'TOGGLE_UPLOAD';
export const RESET_FEEDBACK = 'RESET_FEEDBACK';
export const INVALIDATE_UPLOAD = 'INVALIDATE_UPLOAD';
export const SUCCEED_UPLOAD = 'SUCCEED_UPLOAD';

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
