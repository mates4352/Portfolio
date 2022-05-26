import React from 'react';
import s from './Burger.module.scss';
type burgerType = {
   isBurger: boolean
   setIsBurger: (isBurger: boolean) => void
};

export const Burger:React.FC<burgerType> = (props) => {
   const {isBurger, setIsBurger} = props;
   const isActive = isBurger ? s.burger_active : '';

   return (
       <button onClick={() => setIsBurger(!isBurger)} className={`${s.burger} ${isActive}`} aria-label='Кнопка открыть меню'>
          <span></span>
       </button>
   );
};
