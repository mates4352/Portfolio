import React from 'react';
import s from './Home.module.scss';
import {Button} from "../../shared/interactive/button/Button";
import {BlockAnimation} from "../../shared/interactive/blockAnimation/BlockAnimation";
import {BgAnimation} from "../../shared/interactive/animation/bgAnimation/BgAnimation";

type homeType = {

};

export const Home:React.FC<homeType> = (props) => {
   const {} = props;

   return (
       <section className={`${s.home} ${s.container}`}>
          <BlockAnimation/>
          <div className={s.bgAnimation}><BgAnimation/></div>

          <div className={s.image}></div>

            <div className={s.info}>
               <h2 className={s.title}>
                  I'M Sergey Saburkin.<b>WEB DEVELOPER</b>
               </h2>

               <p className={s.text}>
                  Good day! My name is Sergey for more than half a year, I have been
                  creating websites of various levels of complexity,
                  I began to study vertska in the summer of 2020, during which time
                  I acquired enough knowledge to perform complex project.
               </p>

               <Button href={'/About'}>More about me</Button>
            </div>
       </section>
   );
};
