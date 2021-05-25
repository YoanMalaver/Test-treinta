import React from 'react';
import '../styles/Informacion.css';
import imagen from '../assets/DobleScreen.png';

const Informacion = () => {
  return (
    <>
      <div className='infomain'>
        <div className='text'>
          {' '}
          <h1>Treinta - ¡Aplicación financiera gratuita!</h1>
          <p>
            Gestiona las transacciones de tu negocio, conoce la utilidad de tu
            negocio en cualquier momento y registra y cobra deudas 3 veces más
            eficazmente. Ayuda a tu negocio a crecer más con Treinta, la
            aplicación financiera gratuita. ¡Treinta es gratis, seguro y fácil
            de usar!
          </p>
          <p>La contabilidad de tu negocio en tu mano</p>
        </div>
        <div className='image'>
          <img src={imagen} alt='imagen smartphone' />
        </div>
      </div>
    </>
  );
};

export default Informacion;
