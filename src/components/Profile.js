import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../styles/Profile.css';

const Profile = () => {
  const { user } = useAuth0();
  return (
    <div className='profile'>
      <img src={user.picture} alt={user.name} />
      <div className='profile__data'>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default Profile;
