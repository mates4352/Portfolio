import React from 'react';
import s from './Skills.module.scss'
import {CircleBar} from "../../../../shared/shared_components/ circleBar/CircleBar";

type skillsType = {

};

export const Skills:React.FC<skillsType> = (props) => {
   const {} = props;

   return (
       <section className={s.skills}>
          <h2 className={s.title}>MY SKILLS</h2>

          <ul className={s.list}>
             <li className={s.item}>
                <article className={s.skill}>
                   <CircleBar>90</CircleBar>
                   <h2 className={s.subTitle}>Html5</h2>
                </article>
             </li>

             <li className={s.item}>
                <article className={s.skill}>
                   <CircleBar>80</CircleBar>
                   <h2 className={s.subTitle}>Css3</h2>
                </article>
             </li>

             <li className={s.item}>
                <article className={s.skill}>
                   <CircleBar>70</CircleBar>
                   <h2 className={s.subTitle}>Sass</h2>
                </article>
             </li>

             <li className={s.item}>
                <article className={s.skill}>
                   <CircleBar>30</CircleBar>
                   <h2 className={s.subTitle}>Js</h2>
                </article>
             </li>

             <li className={s.item}>
                <article className={s.skill}>
                   <CircleBar>25</CircleBar>
                   <h2 className={s.subTitle}>TypeScript</h2>
                </article>
             </li>

             <li className={s.item}>
                <article className={s.skill}>
                   <CircleBar>40</CircleBar>
                   <h2 className={s.subTitle}>React</h2>
                </article>
             </li>

             <li className={s.item}>
                <article className={s.skill}>
                   <CircleBar>20</CircleBar>
                   <h2 className={s.subTitle}>Angular</h2>
                </article>
             </li>

             <li className={s.item}>
                <article className={s.skill}>
                   <CircleBar>50</CircleBar>
                   <h2 className={s.subTitle}>Gulp</h2>
                </article>
             </li>
          </ul>
       </section>
   );
};
