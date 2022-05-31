import React from 'react';
import s from './Contact.module.scss';
import {BlockAnimation} from "../../shared/interactive/blockAnimation/BlockAnimation";
import {WeveHeader} from "../../shared/interactive/animation/weveAnimation/WeveHeader";
import {MainTitle} from "../../shared/shared_components/mainTitle/MainTitle";
import {WeveFooter} from "../../shared/interactive/animation/weveAnimation/WeveFooter";
import {IconPhone} from "../../shared/icons/IconPhone";
import {IconLinkedin} from "../../shared/icons/IconLinkedin";
import {IconTelegram} from "../../shared/icons/IconTelegram";
import {IconLetter} from "../../shared/icons/IconLetter";

type contactType = {

};

export const Contact:React.FC<contactType> = (props) => {
   const {} = props;

   return (
       <section className={s.contact}>
          <BlockAnimation/>
          <WeveHeader id={'header'}/>

          <div className={s.container}>
             <MainTitle mainTitle={'WORK'} title={'MY'} subTitle={'PORTFOLIO'}/>

             <p className={s.text}>
                Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
             </p>


             <ul className={s.list}>
                <li className={s.item}>
                   <a className={s.link} href="mailto:sergeysabyrkin@gmail.com" title='sergeysabyrkin@gmail.com' target='_blank' rel='noreferrer'>
                      <IconLetter/>
                   </a>
                </li>

                <li className={s.item}>
                   <a className={s.link} href="tel:+7 908-907-73-78" title='+7 908-907-73-78' target='_blank' rel='noreferrer'>
                      <IconPhone/>
                   </a>
                </li>

                <li className={s.item}>
                   <a className={s.link} href="https://www.linkedin.com/in/%D1%81%D0%B5%D1%80%D0%B3%D0%B5%D0%B9-%D1%81%D0%B0%D0%B1%D1%83%D1%80%D0%BA%D0%B8%D0%BD-7150a3210" target='_blank' rel='noreferrer'>
                      <IconLinkedin/>
                   </a>
                </li>

                <li className={s.item}>
                   <a className={s.link} href="https://t.me/SergeySabyrkin" target='_blank' rel='noreferrer'>
                      <IconTelegram/>
                   </a>
                </li>
             </ul>

          </div>
          <WeveFooter id={'footer'} isShowShip={false}/>
       </section>
   );
};
