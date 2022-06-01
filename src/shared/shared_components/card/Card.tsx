import React, {useState} from 'react';
import s from './Card.module.scss';
import {Popup} from "../popup/Popup";
import {projectType} from "../../../pages/portfolio/Portfolio";
import {CSSTransition} from "react-transition-group";

type cardType = {
   project: projectType,
};

export const Card:React.FC<cardType> = (props) => {
   const {title, image, alt} = props.project;
   const [isShowPopup, setIsShowPopup] = useState<boolean>(false);
   const closePopup = () => {
      setIsShowPopup(!isShowPopup)
   }

   return (
       <>
          <article className={s.card} onClick={closePopup} >
             <h2 className={s.title}>{title}</h2>
             <img className={s.image} src={image} alt={alt}/>
          </article>

          <CSSTransition
              in={isShowPopup} timeout={500}
              classNames='isShowPopup'
              mountOnEnter
              unmountOnExit>
             <Popup project={props.project} closePopup={closePopup}/>
          </CSSTransition>
       </>
   );
};
