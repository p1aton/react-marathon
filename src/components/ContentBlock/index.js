import React from 'react';
import s from './style.module.css';

import ReactLogo from '../../assets/logo.png';

/*
*Компонент контент блок
*/
const ContentBlock = ({title, hideBackground = false, descr, content}) => {
  const styleCover = hideBackground ? { backgroundImage: 'none'} : {};

  return (
    <>
      <div class={s.cover} style={styleCover}>
        <div class={s.wrap}>
          {title && <h1 class={s.header}>{title}</h1>}
          <img src = {ReactLogo} />
          {descr && <p class={s.descr}>{descr}</p>}
          <p class={s.content}>{content}</p>
        </div>
      </div>
    </>
  )
}

export default ContentBlock;