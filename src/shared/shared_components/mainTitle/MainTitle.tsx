import React from 'react';
import s from './MainTitle.module.scss';

type mainTitleType = {
   mainTitle: string
   title: string
   subTitle: string
};

export const MainTitle:React.FC<mainTitleType> = (props) => {
   const {mainTitle, title, subTitle} = props;

   return (
       <hgroup className={s.hgroup}>
          <h1 className={s.title}>{mainTitle}</h1>
          <h2 className={s.subTitle}>{title} <span>{subTitle}</span></h2>
       </hgroup>
   );
};
