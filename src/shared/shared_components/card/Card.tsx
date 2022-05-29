import React, {useState} from 'react';
import s from './Card.module.scss';
import {Popup} from "../popup/Popup";

type cardType = {
   nameProject: string
};

export const Card:React.FC<cardType> = (props) => {
   const {nameProject} = props;
   const [isShowPopup, setIsShowPopup] = useState<boolean>(false);
   const closePopup = () => {
      setIsShowPopup(!isShowPopup)
   }

   return (
       <>
          <article className={s.card} onClick={closePopup} >
             <h2 className={s.title}>{nameProject}</h2>
          </article>

          {isShowPopup && <Popup nameProject={nameProject} closePopup={closePopup}/>}
       </>
   );
};
