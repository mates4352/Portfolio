import React from 'react';
import s from './Button.module.scss';
import {IconArrow} from "../../icons/IconArrow";
import {NavLink} from "react-router-dom";

type buttonProps = {
   children: string
   href?: string,
   to?: string,
};

export const Button:React.FC<buttonProps> = (props) => {
   const {children, href, to} = props;

   return (
       <>
          {
             to &&
             <NavLink className={s.button} to={to}>
               <span>{children}</span>

               <div className={s.button_icon}>
                 <IconArrow/>
               </div>
             </NavLink>
          }


          {
             href &&
             <a className={s.button} href={href} target='_blank' rel='noopener'>
               <span>{children}</span>

               <div className={s.button_icon}>
                 <IconArrow/>
               </div>
             </a>
          }
       </>

   );
};
