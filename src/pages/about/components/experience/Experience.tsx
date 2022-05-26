import React from 'react';
import s from './Experience.module.scss';
import {IconHome} from "../../../../shared/icons/IconHome";

type experienceType = {

};

export const Experience:React.FC<experienceType> = (props) => {
   const {} = props;

   return (
       <section className={s.experience}>
          <h2 className={s.title}>
             EXPERIENCE AND EDUCATION
          </h2>

          <ul className={s.list}>
             <li className={s.item}>
                <div className={s.icon}>
                   <IconHome/>
                </div>

                <article className={s.card}>
                   <span className={s.date}>2020-2021</span>

                   <h2 className={s.card_title}>Freelance WEB DEVELOPER</h2>

                   <p className={s.text}>
                      Creation of landing pages of different levels of complexity,
                      complex creation of animation. Creating an app for react
                   </p>
                </article>
             </li>

             <li className={s.item}>
                <div className={s.icon}>
                   <IconHome/>
                </div>

                <article className={s.card}>
                   <span className={s.date}>2021-2022</span>

                   <h2 className={s.card_title}>WEB DEVELOPER</h2>

                   <p className={s.work}>Work: <span>Picasel agency</span></p>

                   <p className={s.text}>
                      I am engaged in the creation of landings of
                      different levels of complexity, support for
                      legacy code on projects, and I am engaged in
                      the development of layout for angular and react.
                   </p>
                </article>
             </li>

             <li className={s.item}>
                <div className={s.icon}>
                   <IconHome/>
                </div>

                <article className={s.card}>
                   <span className={s.date}>2021-2022</span>

                   <h2 className={s.card_title}>Mentor HTML/CSS</h2>

                   <p className={s.work}>Work: <span>It-incubator</span></p>

                   <p className={s.text}>
                      I am engaged in the creation of landings of
                      different levels of complexity, support for
                      legacy code on projects, and I am engaged in
                      the development of layout for angular and react.
                   </p>
                </article>
             </li>
          </ul>
       </section>
   );
};
