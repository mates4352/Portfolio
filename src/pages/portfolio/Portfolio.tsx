import React from 'react';
import s from './Portfolio.module.scss';
import {BlockAnimation} from "../../shared/interactive/blockAnimation/BlockAnimation";
import {WeveHeader} from "../../shared/interactive/animation/weveAnimation/WeveHeader";
import {MainTitle} from "../../shared/shared_components/mainTitle/MainTitle";
import {Card} from "../../shared/shared_components/card/Card";

type portfolioType = {

};

export const Portfolio:React.FC<portfolioType> = (props) => {
   const {} = props;

   return (
       <section className={s.portfolio}>
          <BlockAnimation/>
          <WeveHeader id={'header'}/>

          <div className={s.container}>
             <MainTitle mainTitle={'WORK'} title={'MY'} subTitle={'PORTFOLIO'}/>

             <ul className={s.list}>
               <li className={s.item}>
                  <Card nameProject={'card'}/>
               </li>

                <li className={s.item}>
                   <Card nameProject={'card'}/>
                </li>

                <li className={s.item}>
                   <Card nameProject={'card'}/>
                </li>

                <li className={s.item}>
                   <Card nameProject={'card'}/>
                </li>

                <li className={s.item}>
                   <Card nameProject={'card'}/>
                </li>

                <li className={s.item}>
                   <Card nameProject={'card'}/>
                </li>

                <li className={s.item}>
                   <Card nameProject={'card'}/>
                </li>

                <li className={s.item}>
                   <Card nameProject={'card'}/>
                </li>

                <li className={s.item}>
                   <Card nameProject={'card'}/>
                </li>
             </ul>
          </div>
       </section>
   );
};
