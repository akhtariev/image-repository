import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import AuthenticatedApp from './components/AuthenticatedApp';
import Status from './components/common/Status';
import LandingPage from './components/common/LandingPage';

const App = () => {
  const { loading, isAuthenticated } = useAuth0();

  if (loading) {
    return <Status message='Authenticating...' loading />;
  }

  return (
    <>
      {isAuthenticated && (<AuthenticatedApp />)}
      {!isAuthenticated && (
        <LandingPage />
      )}
    </>
  );
};
export default App;
