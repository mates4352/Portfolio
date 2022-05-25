import React from 'react';
import s from './About.module.scss';
import {IconArrow} from "../../shared/icons/IconArrow";
import {Button} from "../../shared/interactive/button/Button";

type aboutType = {

};

export const About:React.FC<aboutType> = (props) => {
   const {} = props;

   return (
       <section className={`${s.about} ${s.container}`}>
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

               <Button href={'/'}>More about me</Button>
            </div>
       </section>
   );
};
