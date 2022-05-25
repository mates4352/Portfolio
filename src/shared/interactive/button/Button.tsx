import React from 'react';
import s from './Button.module.scss';
import {IconArrow} from "../../icons/IconArrow";
import {NavLink} from "react-router-dom";

type buttonProps = {
   children: string
   href: string,
};

export const Button:React.FC<buttonProps> = (props) => {
   const {children, href} = props;

   return (
       <NavLink className={s.button} to={href}>
          <span>{children}</span>

          <div className={s.button_icon}>
             <IconArrow/>
          </div>
       </NavLink>
   );
};
