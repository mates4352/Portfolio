import React, {useState} from 'react';
import s from './Home.module.scss';
import {Button} from "../../shared/interactive/button/Button";
import {BlockAnimation} from "../../shared/interactive/blockAnimation/BlockAnimation";
import {BgAnimation} from "../../shared/interactive/animation/bgAnimation/BgAnimation";

type homeType = {

};

export const Home:React.FC<homeType> = (props) => {
   const {} = props;

   return (
       <section className={s.home}>
          <BlockAnimation/>
          <div className={s.bgAnimation}><BgAnimation/></div>

          <div className={s.container}>
             <div className={s.image}></div>

             <div className={s.info}>
                <h2 className={s.title}>
                   I'M Sergey Saburkin.<b>WEB DEVELOPER</b>
                </h2>

                <p className={s.text}>
                   Good afternoon! For over a year now I
                   creation of sites of various levels of complexity.
                   Currently I work as a layout designer in a company
                   Picasel Agensy, works as an Html/Css mentor in companies
                   It-Incubator and Html Academy,
                </p>

                <Button to={'/About'}>More about me</Button>
             </div>
          </div>
       </section>
   );
};
