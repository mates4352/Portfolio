import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Link.module.scss';
import {IconHome} from "../../../icons/IconHome";
import {IconPerson} from "../../../icons/IconPerson";
import {IconMessage} from "../../../icons/IconMessage";
import {IconLetter} from "../../../icons/IconLetter";
import {IconArrow} from "../../../icons/IconArrow";
import {IconPortfolio} from "../../../icons/IconPortfolio";

type linkType = {
   children: string
   href: string
   icon: string
};

export const Link:React.FC<linkType> = (props) => {
   const {children, icon, href} = props;
   const classLink = ({isActive}: any) => isActive ? `${s.link} ${s.active}` : s.link;

   return (
       <NavLink className={classLink} to={href}>
          <span className={s.text}>{children}</span>

          <div className={s.icon}>
             {icon === 'HOME' && <IconHome/>}
             {icon === 'PERSON' && <IconPerson/>}
             {icon === 'PORTFOLIO' && <IconPortfolio/>}
             {icon === 'MESSAGE' && <IconMessage/>}
          </div>
       </NavLink>
   );
};
