import React from 'react';
import s from './Button.module.scss';
import {IconArrow} from "../../icons/IconArrow";

type buttonProps = {
   children: string
   href: string,
};

export const Button:React.FC<buttonProps> = (props) => {
   const {children, href} = props;

   return (
       <a className={s.button} href={href}>
          <span>{children}</span>

          <div className={s.button_icon}>
             <IconArrow/>
          </div>
       </a>
   );
};
