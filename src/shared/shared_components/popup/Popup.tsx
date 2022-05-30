import React from 'react';
import s from './Popup.module.scss';
import {projectType} from "../../../bll/redux/reducers/portfolio-reducer";

type popupType = {
   project: projectType
   closePopup: () => void;
};

export const Popup:React.FC<popupType> = (props) => {
   const {closePopup} = props;
   const {title, image, alt, gitHubLink, pageLink, technologies} = props.project;

   return (
       <section className={s.popup} >
          <div className={s.bg} onClick={closePopup}></div>

          <div className={s.body}>
             <h2 className={s.title}>{title}</h2>

             <dl className={s.list}>
                <div className={s.item}>
                   <dt className={s.key}>technologies:</dt>
                   <dd className={s.caption}>
                      {technologies.map((technology) => technology)}
                   </dd>
                </div>

                <div className={s.item}>
                   <dt className={s.key}>GitHub:</dt>
                   <dd className={s.caption}>
                      <a className={s.caption} href={gitHubLink} target='_blank' rel='noreferrer'>Link</a>
                   </dd>
                </div>
             </dl>



             <a href={pageLink} target='_blank' rel='noreferrer'>
                <img className={s.image} src={image} alt={alt}/>
             </a>
             <button className={s.button} type='button' onClick={closePopup}></button>
          </div>
       </section>
   );
};
