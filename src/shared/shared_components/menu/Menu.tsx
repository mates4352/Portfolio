import React, {useCallback, useMemo, useState} from 'react';
import s from './Menu.module.scss';
import {Burger} from "../../interactive/burger/Burger";
import {MenuDesk} from "./components/menuDesktop/menuDesk";
import {MenuMobile} from "./components/menuMobile/MenuMobile";
import {CSSTransition} from "react-transition-group";
type menuType = {

};

export const Menu:React.FC<menuType> = (props) => {
   const {} = props;
   const [isBurger, setIsBurger] = useState<boolean>(false)
   const closeMenu = useCallback(() => setIsBurger(!isBurger), [isBurger])
   let media:any = null;
   return (
       <>
          <Burger isBurger={isBurger} setIsBurger={setIsBurger}/>

          <MenuDesk/>
          <CSSTransition
              in={isBurger}
              timeout={500}
              mountOnEnter
              classNames='menuMobile'
              unmountOnExit
          >
             <MenuMobile isBurger={isBurger} closeMenu={closeMenu}/>
          </CSSTransition>
       </>

   );
};
