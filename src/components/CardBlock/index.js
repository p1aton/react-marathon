import React from 'react';
import s from './style.module.scss';

/*
*Компонент контент блок
*/
const CardBlock = ({title, hideBackground = false, descr, content, children}) => {
  const styleCover = hideBackground ? { backgroundImage: 'none'} : {};

  return (
    <>
      <div class={s.cover} style={styleCover}>
        <div class={s.wrap}>
          {title && <h1 class={s.header}>{title}</h1>}
          {descr && <p class={s.descr}>{descr}</p>}
          {children}
          <p class={s.content}>{content}</p>
        </div>
      </div>
    </>
  )
}

export default CardBlock;