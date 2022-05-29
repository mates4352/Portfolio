import React from 'react';
import s from './Popup.module.scss';

type popupType = {
   nameProject: string
   closePopup: () => void;
};

export const Popup:React.FC<popupType> = (props) => {
   const {nameProject, closePopup} = props;

   return (
       <section className={s.popup}>
          <h2 className={s.title}>{nameProject}</h2>

          <button className={s.button} type='button' onClick={closePopup}></button>
       </section>
   );
};
