import React from 'react';
import s from './About.module.scss';
import {BlockAnimation} from "../../shared/interactive/blockAnimation/BlockAnimation";
import {Button} from "../../shared/interactive/button/Button";

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
                <h2 className={s.subTitle}>ABOUT ME</h2>
             </hgroup>

             <section className={s.info}>
                <div className={s.info_wrap}>
                   <h2 className={s.info_title}>PERSONAL INFORMATION</h2>

                   <dl className={s.info_list}>
                      <div className={s.info_wrap}>
                         <dt className={s.info_key}>Name:</dt>
                         <dd className={s.info_caption}>Sergey</dd>
                      </div>

                      <div className={s.info_wrap}>
                         <dt className={s.info_key}>Telephone:</dt>
                         <dd className={s.info_caption}>+7 908 907 73 78</dd>
                      </div>

                      <div className={s.info_wrap}>
                         <dt className={s.info_key}>Surname:</dt>
                         <dd className={s.info_caption}>Saburkin</dd>
                      </div>

                      <div className={s.info_wrap}>
                         <dt className={s.info_key}>Mail:</dt>
                         <dd className={s.info_caption}>sergeysabyrkin@gmail.com</dd>
                      </div>

                      <div className={s.info_wrap}>
                         <dt className={s.info_key}>Age:</dt>
                         <dd className={s.info_caption}>23</dd>
                      </div>

                      <div className={s.info_wrap}>
                         <dt className={s.info_key}>Telegram:</dt>
                         <dd className={s.info_caption}>@SergeySabyrkin</dd>
                      </div>

                      <div className={s.info_wrap}>
                         <dt className={s.info_key}>Nationality:</dt>
                         <dd className={s.info_caption}>Russia</dd>
                      </div>

                      <div className={s.info_wrap}>
                         <dt className={s.info_key}>freelancer:</dt>
                         <dd className={s.info_caption}>There is experience</dd>
                      </div>
                   </dl>

                   <Button href={'https://drive.google.com/file/d/1TMa0VFhyPhFT3m-Sbb5ZeD3ai6xhAu4Y/view?usp=sharing'}>DOWNLOAD CV</Button>
                </div>


                <ul className={s.info_list_cards}>
                   <li className={s.info_item_card}>
                      <article className={s.info_card}>
                         <h2 className={s.info_card_title}>2</h2>
                         <p className={s.info_card_text}>YEAR OF EXPERIENCE</p>
                      </article>
                   </li>

                   <li className={s.info_item_card}>
                      <article className={s.info_card}>
                         <h2 className={s.info_card_title}>50</h2>
                         <p className={s.info_card_text}>COMPLETED PROJECTS</p>
                      </article>
                   </li>

                   <li className={s.info_item_card}>
                      <article className={s.info_card}>
                         <h2 className={s.info_card_title}>2</h2>
                         <p className={s.info_card_text}>COMPLETED BIG PROJECTS</p>
                      </article>
                   </li>

                   <li className={s.info_item_card}>
                      <article className={s.info_card}>
                         <h2 className={s.info_card_title}>2</h2>
                         <p className={s.info_card_text}>COMPLETED COURSE</p>
                      </article>
                   </li>
                </ul>
             </section>

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
