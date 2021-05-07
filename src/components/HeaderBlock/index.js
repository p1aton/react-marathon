import React from 'react';
import s from './style.module.css';
import ReactLogo from '../../assets/logo.png';

/*
? Компонент хеадер блок
*/

const HeaderBlock = ({ children  }) => {


  return (
    <>
      <div class={s.cover}>
        <div class={s.wrap}>
          <img src={ReactLogo} />
          {children}
        </div>
      </div>
    </>
  )
}

export default HeaderBlock;
