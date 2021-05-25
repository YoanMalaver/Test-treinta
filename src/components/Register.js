import React from 'react';
import '../styles/Register.css';
import ButtonLogin from './ButtonLogin';

const Register = () => {
  return (
    <>
      <section className='register'>
        <form className='register__container--form'>
          <div className='form'>
            <h1> Formulario de registro</h1>
            <div className='group one'>
              <input type='text' name='email' />
              <span className='barra'> </span>
              <label>Email</label>
            </div>
            <div className='group'>
              <input type='text' name='name' />
              <span className='barra'> </span>
              <label>Nombre</label>
            </div>
            <div className='group'>
              <input type='password' name='password' />
              <span className='barra'> </span>
              <label>Contraseña</label>
            </div>
            <div className='group'>
              <input type='password' name='verificacion' />
              <span className='barra'> </span>
              <label>Verificación de Contraseña</label>
            </div>
            <button type='submit'>Crear cuenta</button>
            <p>O logueate con Auth0</p>
            <ButtonLogin />
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
