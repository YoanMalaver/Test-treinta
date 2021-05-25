import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import ButtonLogin from './ButtonLogin';
import ButtonLogout from './ButtonLogout';

import { useAuth0 } from '@auth0/auth0-react';
import Profile from './Profile';

const Menu = () => {
  const { isLoading, isAuthenticated } = useAuth0();
  // carga del boton Logout
  if (isLoading) return <div>Loading...</div>;

  return !isAuthenticated ? (
    <>
      <div className='navbar'>
        <ul>
          <li>
            <Link className='links' to='/'>
              Información Treinta
            </Link>
          </li>
          <li>
            <Link to='/mapa'>Mapa Negocios</Link>
          </li>
          <li>
            <ButtonLogin />
          </li>
          <li>
            <ButtonLogout />
          </li>
        </ul>
      </div>
    </>
  ) : (
    <>
      <div className='navbar'>
        <ul>
          <li>
            <Link className='links' to='/'>
              Información Treinta
            </Link>
          </li>
          <li>
            <Link to='/mapa'>Mapa Negocios</Link>
          </li>
          <li>
            <Profile />
          </li>
          <li>
            <ButtonLogin />
          </li>
          <li>
            <ButtonLogout />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Menu;
