import React from 'react';
import s from './Info.module.scss';
import {Button} from "../../../../shared/interactive/button/Button";
import person from './../../../../assets/images/person.jpeg';

type infoType = {
   
};

export const Info:React.FC<infoType> = (props) => {
   const {} = props;

   return (
       <section className={s.info}>
          <div className={s.wrap}>
             <h2 className={s.title}>PERSONAL INFORMATION</h2>

             <img className={s.person} src={person} alt=""/>

             <dl className={s.list}>
                <div className={s.list_item}>
                   <dt className={s.key}>Name:</dt>
                   <dd className={s.caption}>Sergey</dd>
                </div>

                <div className={s.list_item}>
                   <dt className={s.key}>Telephone:</dt>
                   <dd className={s.caption}>+7 908 907 73 78</dd>
                </div>

                <div className={s.list_item}>
                   <dt className={s.key}>Surname:</dt>
                   <dd className={s.caption}>Saburkin</dd>
                </div>

                <div className={s.list_item}>
                   <dt className={s.key}>Mail:</dt>
                   <dd className={s.caption}>sergeysabyrkin@gmail.com</dd>
                </div>

                <div className={s.list_item}>
                   <dt className={s.key}>Age:</dt>
                   <dd className={s.caption}>23</dd>
                </div>

                <div className={s.list_item}>
                   <dt className={s.key}>Telegram:</dt>
                   <dd className={s.caption}>@SergeySabyrkin</dd>
                </div>

                <div className={s.list_item}>
                   <dt className={s.key}>Nationality:</dt>
                   <dd className={s.caption}>Russia</dd>
                </div>

                <div className={s.list_item}>
                   <dt className={s.key}>freelancer:</dt>
                   <dd className={s.caption}>There is experience</dd>
                </div>
             </dl>

             <Button href={'https://drive.google.com/file/d/1TMa0VFhyPhFT3m-Sbb5ZeD3ai6xhAu4Y/view?usp=sharing'}>DOWNLOAD CV</Button>
          </div>


          <ul className={s.sublist}>
             <li className={s.sublist_item}>
                <article className={s.card}>
                   <h2 className={s.card_title}>2</h2>
                   <p className={s.card_text}>YEAR OF EXPERIENCE</p>
                </article>
             </li>

             <li className={s.sublist_item}>
                <article className={s.card}>
                   <h2 className={s.card_title}>50</h2>
                   <p className={s.card_text}>COMPLETED PROJECTS</p>
                </article>
             </li>

             <li className={s.sublist_item}>
                <article className={s.card}>
                   <h2 className={s.card_title}>2</h2>
                   <p className={s.card_text}>COMPLETED BIG PROJECTS</p>
                </article>
             </li>

             <li className={s.sublist_item}>
                <article className={s.card}>
                   <h2 className={s.card_title}>2</h2>
                   <p className={s.card_text}>COMPLETED COURSE</p>
                </article>
             </li>
          </ul>
       </section>
   );
};
