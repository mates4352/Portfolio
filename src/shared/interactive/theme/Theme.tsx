import React from 'react';
import s from './Theme.module.scss'
import sun from './../../../assets/images/sun.svg';
import moon from './../../../assets/images/moon.svg';

type themeType = {
   isTheme: boolean
   setIsTheme: (isTheme: boolean) => void
};

export const Theme:React.FC<themeType> = (props) => {
   const {isTheme, setIsTheme} = props;
   const setThemeClass = (isTheme: boolean) => {
      return isTheme ? s.active : ''
   }

   return (
       <>
          <div className={`${s.block} ${!isTheme ? s.block_active : ''}`}></div>
          <ul className={s.theme}>
             <li className={`${s.item} ${setThemeClass(!isTheme)}`}>
                <button onClick={() => setIsTheme(!isTheme)} className={s.button} type='button'>
                   <img className={`${s.image} ${s.sun}`} src={sun} alt="Изображение солнца"/>
                </button>
             </li>

             <li className={`${s.item} ${setThemeClass(isTheme)}`}>
                <button onClick={() => setIsTheme(!isTheme)} className={s.button} type='button'>
                   <img className={`${s.image} ${s.moon}`} src={moon} alt="Изображение луны"/>
                </button>
             </li>
          </ul>
       </>
   );
};
