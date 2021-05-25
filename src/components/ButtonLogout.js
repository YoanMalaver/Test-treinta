import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const ButtonLogout = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <>
        <button className='button' onClick={() => logout()}>
          Log Out
        </button>
      </>
    )
  );
};

export default ButtonLogout;
