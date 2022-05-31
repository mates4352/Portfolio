import React, {useState} from 'react';
import s from './MenuMobile.module.scss';
import {NavLink} from "react-router-dom";
import {IconHome} from "../../../../icons/IconHome";
import {IconPerson} from "../../../../icons/IconPerson";
import {IconPortfolio} from "../../../../icons/IconPortfolio";
import {IconMessage} from "../../../../icons/IconMessage";

type menuMobileType = {
   isBurger: boolean
   closeMenu: any
};
export const MenuMobile: React.FC<menuMobileType> = React.memo((props) => {
       const {isBurger, closeMenu} = props;
       const isActive = isBurger ? s.header_active : '';
       const classLink = ({isActive}: any) => isActive ? `${s.link} ${s.active}` : s.link;

       return (
           <header className={`${s.header} ${isActive}`}>
              <nav className={s.menu}>
                 <ul className={s.list}>
                    <li className={s.item} onClick={closeMenu}>
                       <NavLink className={classLink} to='Home'>
                          <div className={s.icon}>
                             <IconHome/>
                          </div>

                          <span className={s.text}>HOME</span>
                       </NavLink>
                    </li>

                    <li className={s.item} onClick={closeMenu}>
                       <NavLink className={classLink} to='About'>
                          <div className={s.icon}>
                             <IconPerson/>
                          </div>

                          <span className={s.text}>ABOUT</span>
                       </NavLink>
                    </li>

                    <li className={s.item} onClick={closeMenu}>
                       <NavLink className={classLink} to='Portfolio'>
                          <div className={s.icon}>
                             <IconPortfolio/>
                          </div>

                          <span className={s.text}>PORTFOLIO</span>
                       </NavLink>
                    </li>

                    <li className={s.item} onClick={closeMenu}>
                       <NavLink className={classLink} to='Contact'>
                          <div className={s.icon}>
                             <IconMessage/>
                          </div>

                          <span className={s.text}>CONTACT</span>
                       </NavLink>
                    </li>
                 </ul>
              </nav>
           </header>
       );
    }
)
