import React from 'react';
import s from './About.module.scss';
import {BlockAnimation} from "../../shared/interactive/blockAnimation/BlockAnimation";
import {Info} from "./components/info/Info";
import {Skills} from "./components/skills/Skills";
import {Experience} from "./components/experience/Experience";
import {WeveHeader} from "../../shared/interactive/animation/weveAnimation/WeveHeader";
import {WeveFooter} from "../../shared/interactive/animation/weveAnimation/WeveFooter";

type aboutType = {

};

export const About:React.FC<aboutType> = (props) => {
   const {} = props;

   return (
       <section className={s.about}>
          <BlockAnimation/>
          <div className={`${s.wave} ${s.wave_header}`}>
             <WeveHeader id={'header'}/>
          </div>

          <div className={s.container}>
             <hgroup className={s.title_wrap}>
                <h1 className={s.title}>SUMMARY</h1>
                <h2 className={s.subTitle}>ABOUT <span>ME</span></h2>
             </hgroup>

             <Info/>
             <Skills/>
             <Experience/>
          </div>

          <div className={`${s.wave} ${s.wave_footer}`}>
             <WeveFooter id={'footer'}/>
          </div>
       </section>
   );
};
