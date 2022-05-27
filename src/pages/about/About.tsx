import React from 'react';
import s from './About.module.scss';
import {BlockAnimation} from "../../shared/interactive/blockAnimation/BlockAnimation";
import {Info} from "./components/info/Info";
import {Skills} from "./components/skills/Skills";
import {Experience} from "./components/experience/Experience";
import {WeveHeader} from "../../shared/interactive/animation/weveAnimation/WeveHeader";
import {WeveFooter} from "../../shared/interactive/animation/weveAnimation/WeveFooter";
import {MainTitle} from "../../shared/shared_components/mainTitle/MainTitle";

type aboutType = {

};

export const About:React.FC<aboutType> = (props) => {
   const {} = props;

   return (
       <section className={s.about}>
          <BlockAnimation/>
          <WeveHeader id={'header'}/>

          <div className={s.container}>
             <MainTitle mainTitle={'SUMMARY'} title={'ABOUT'} subTitle={'ME'}/>

             <Info/>
             <Skills/>
             <Experience/>
          </div>

          <WeveFooter id={'footer'}/>
       </section>
   );
};
