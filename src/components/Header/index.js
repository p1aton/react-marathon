import React from 'react';
import s from './style.module.css';


const Header = ({children}) => {

  return <h1 className ={s.header}>{children}</h1>
  
}