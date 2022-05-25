import React from 'react';
import s from './Menu.module.scss';
import {NavLink} from "react-router-dom";
import {IconHome} from "../../icons/IconHome";
import {IconPerson} from "../../icons/IconPerson";
import {IconMessage} from "../../icons/IconMessage";
type menuType = {

};

export const Menu:React.FC<menuType> = (props) => {
   const {} = props;
   const classLink = ({isActive}: any) => isActive ? `${s.link} ${s.active}` : s.link;

   return (
       <header className={s.header}>
          <nav className={s.menu}>
             <ul className={s.list}>
                <li className={s.item}>
                   <NavLink className={classLink} to={'/Home'}>
                      <span className={s.text}>HOME</span>

                      <div className={s.icon}>
                         <IconHome/>
                      </div>
                   </NavLink>
                </li>

                <li className={s.item}>
                   <NavLink className={classLink} to={'/About'}>
                      <span className={s.text}>ABOUT</span>

                      <div className={s.icon}>
                         <IconPerson/>
                      </div>
                   </NavLink>
                </li>

                <li className={s.item}>
                   <NavLink className={classLink} to={'/Portfolio'}>
                      <span className={s.text}>PORTFOLIO</span>

                      <div className={s.icon}>
                         <IconMessage/>
                      </div>
                   </NavLink>
                </li>

                <li className={s.item}>
                   <NavLink className={classLink} to={'/Contact'}>
                      <span className={s.text}>CONTACT</span>

                      <div className={s.icon}>
                         <IconMessage/>
                      </div>
                   </NavLink>
                </li>
             </ul>
          </nav>
       </header>
   );
};
