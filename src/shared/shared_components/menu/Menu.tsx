import React from 'react';
import s from './Menu.module.scss';
import {Link} from "./Link/Link";
type menuType = {

};

export const Menu:React.FC<menuType> = (props) => {
   const {} = props;

   return (
       <header className={s.header}>
          <nav className={s.menu}>
             <ul className={s.list}>
                <li className={s.item}>
                   <Link href='/Home' icon={'HOME'}>HOME</Link>
                </li>

                <li className={s.item}>
                   <Link href='/About' icon={'PERSON'}>ABOUT</Link>
                </li>

                <li className={s.item}>
                   <Link href='/Portfolio' icon={'LETTER'}>PORTFOLIO</Link>
                </li>

                <li className={s.item}>
                   <Link href='/Contact' icon={'MESSAGE'}>CONTACT</Link>
                </li>
             </ul>
          </nav>
       </header>
   );
};
