import React from 'react';
import s from './style.module.css';

import ReactLogo from '../../assets/logo.png';


const HeaderBlock = ({ title, descr }) => {


  return (
    <>
      <div class={s.cover}>
        <div class={s.wrap}>
          {title && <h1 class={s.header}>{title}</h1>}
          <img src={ReactLogo} />
          {descr && <p class={s.descr}>{descr}</p>}
        </div>
      </div>
    </>
  )
}

export default HeaderBlock;
