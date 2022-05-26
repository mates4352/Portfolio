import React from 'react';
import s from './About.module.scss';
import {BlockAnimation} from "../../shared/interactive/blockAnimation/BlockAnimation";
import {Info} from "./components/info/Info";

type aboutType = {

};

export const About:React.FC<aboutType> = (props) => {
   const {} = props;

   return (
       <section className={s.about}>
          <BlockAnimation/>

          <div className={s.container}>
             <hgroup className={s.title_wrap}>
                <h1 className={s.title}>SUMMARY</h1>
                <h2 className={s.subTitle}>ABOUT <span>ME</span></h2>
             </hgroup>

             <Info/>

             <section className={s.skills}>
                <h2 className={s.skills_title}>MY SKILLS</h2>

                <ul className={s.skills_list}>
                   <li className={s.skills_item}>
                      <article className={s.skills_skill}>
                         <h2 className={s.skills_title}>Html5</h2>
                      </article>

                      <article className={s.skills_skill}>
                         <h2 className={s.skills_title}>Css3</h2>
                      </article>

                      <article className={s.skills_skill}>
                         <h2 className={s.skills_title}>Sass</h2>
                      </article>

                      <article className={s.skills_skill}>
                         <h2 className={s.skills_title}>PostCss</h2>
                      </article>

                      <article className={s.skills_skill}>
                         <h2 className={s.skills_title}>Js</h2>
                      </article>

                      <article className={s.skills_skill}>
                         <h2 className={s.skills_title}>React</h2>
                      </article>

                      <article className={s.skills_skill}>
                         <h2 className={s.skills_title}>Angular</h2>
                      </article>

                      <article className={s.skills_skill}>
                         <h2 className={s.skills_title}>Gulp</h2>
                      </article>
                   </li>
                </ul>
             </section>

             <section className={s.experience}>
                <h2 className={s.experience_title}>
                   EXPERIENCE AND EDUCATION
                </h2>

                <div className={s.experience_wrap}>
                   <div className={s.experience_icon}></div>

                   <article className={s.experience_card}>
                      <data className={s.experience_data}>2020 - 2021</data>

                      <h2 className={s.experience__card_title}>WEB DEVELOPER</h2>

                      <p>
                         I am professionally engaged in website layout for various types of devices,
                         in projects I always use semantics, BEM, pixel perfect. I am learning the
                         layout for React on my own. Responsibly I approach the fulfillment of
                         assigned tasks, non-conflict, proactive.
                      </p>
                   </article>
                </div>
             </section>
          </div>
       </section>
   );
};
