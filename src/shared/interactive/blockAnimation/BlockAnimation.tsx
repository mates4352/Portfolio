import React from 'react';
import s from './BlockAnimation.module.scss';

type blockAnimationType = {

};

export const BlockAnimation:React.FC<blockAnimationType> = (props) => {
   const {} = props;

   return (
       <div className={s.animation_bg}></div>
   )
};
