import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthenticatedApp from './components/AuthenticatedApp';
import LandingPage from './components/common/LandingPage';
import Status from './components/common/Status';
import { auth } from './utils/firebase';
import { setUser } from './redux/actions/userActions';

const App = () => {
  const userState = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    setIsLoggingIn(true);
    auth.onAuthStateChanged(userAuth => {
      dispatch(setUser(userAuth));
      setIsLoggingIn(false);
    });
  }, [setIsLoggingIn, dispatch]);

  if (isLoggingIn) {
    return <Status message='Authenticating...' loading />;
  }

  // if (userState.isUploading) {
  //   return <Status message='Uploading images...' loading />;
  // }

  return (
    <>
      {userState.auth && (<AuthenticatedApp />)}
      {!userState.auth && (
        <LandingPage />
      )}
    </>
  );
};
export default App;
