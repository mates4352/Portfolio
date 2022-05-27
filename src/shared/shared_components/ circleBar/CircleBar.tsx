import React from 'react';
import s from './CircleBar.module.scss';

type circleBarType = {
   children: string
};

export const CircleBar: React.FC<circleBarType> = (props) => {
   const {children} = props;

   return (
       <div className={s.CircleBar}>
          <svg viewBox="0 0 200 200"
               style={{
                  width: 'var(--CircleBar_width, 150px)',
                  height: 'var(--CircleBar_height, 150px)',
                  display: 'flex'
               }}
          >
             <g>
                <circle r="80" cx="100" cy="100" fill="none" stroke-width="12" stroke="var(--background_secondary_one)" style={{transition: 'stroke 500ms ease'}}></circle>
                <circle r="80" cx="100" cy="100" fill="none" stroke-width="12" stroke="var(--background_secondary)" style={{transition: 'stroke 500ms ease', transform: 'rotate(270deg)', transformOrigin: 'center center'}} stroke-dasharray="505" strokeDashoffset={`calc(505 - (505 * ${children}) / 100)`}></circle>
             </g>
          </svg>

          <span className={s.title}>{children}%</span>
       </div>
   );
};
