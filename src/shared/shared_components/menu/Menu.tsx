import React, {useCallback, useState} from 'react';
import s from './Menu.module.scss';
import {Burger} from "../../interactive/burger/Burger";
import {MenuDesk} from "./components/menuDesktop/menuDesk";
import {MenuMobile} from "./components/menuMobile/MenuMobile";
type menuType = {

};

export const Menu:React.FC<menuType> = (props) => {
   const {} = props;
   const [isBurger, setIsBurger] = useState<boolean>(false)
   const closeMenu = useCallback(() => setIsBurger(!isBurger), [isBurger])

   return (
       <>
          <Burger isBurger={isBurger} setIsBurger={setIsBurger}/>
          <MenuDesk/>
          <MenuMobile isBurger={isBurger} closeMenu={closeMenu}/>
       </>

   );
};
