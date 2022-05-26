import React from 'react';
import s from './About.module.scss';
import {BlockAnimation} from "../../shared/interactive/blockAnimation/BlockAnimation";
import {Info} from "./components/info/Info";
import {Skills} from "./components/skills/Skills";

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
             <Skills/>

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
