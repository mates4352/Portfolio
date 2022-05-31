import React, {useState} from 'react';
import s from './Menu.module.scss';
import {Link} from "./Link/Link";
import {Burger} from "../../interactive/burger/Burger";
type menuType = {

};

export const Menu:React.FC<menuType> = (props) => {
   const {} = props;
   const [isBurger, setIsBurger] = useState<boolean>(false)
   const isActive = isBurger ? s.header_active : '';
   const closeMenu = () => {
      setIsBurger(!isBurger)
   }

   return (
       <>
          <Burger isBurger={isBurger} setIsBurger={setIsBurger}/>
          <header className={`${s.header} ${isActive}`}>
             <nav className={s.menu}>
                <ul className={s.list}>
                   <li onClick={closeMenu} className={s.item}>
                      <Link href='Home' icon={'HOME'}>HOME</Link>
                   </li>

                   <li onClick={closeMenu} className={s.item}>
                      <Link href='About' icon={'PERSON'}>ABOUT</Link>
                   </li>

                   <li onClick={closeMenu} className={s.item}>
                      <Link href='Portfolio' icon={'PORTFOLIO'}>PORTFOLIO</Link>
                   </li>

                   <li onClick={closeMenu} className={s.item}>
                      <Link href='Contact' icon={'MESSAGE'}>CONTACT</Link>
                   </li>
                </ul>
             </nav>
          </header>
       </>

   );
};
