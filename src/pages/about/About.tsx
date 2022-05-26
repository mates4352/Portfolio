import React from 'react';
import s from './About.module.scss';
import {BlockAnimation} from "../../shared/interactive/blockAnimation/BlockAnimation";
import {Info} from "./components/info/Info";
import {Skills} from "./components/skills/Skills";
import {Experience} from "./components/experience/Experience";

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
             <Experience/>
          </div>
       </section>
   );
};
