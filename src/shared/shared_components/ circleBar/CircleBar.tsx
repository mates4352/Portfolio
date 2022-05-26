import React from 'react';
import s from './CircleBar.module.scss';

type circleBarType = {};
export const CircleBar: React.FC<circleBarType> = (props) => {
   const {} = props;

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
                <circle r="80" cx="100" cy="100" fill="none" stroke-width="12" stroke="#333"></circle>
                <circle r="80" cx="100" cy="100" fill="none" stroke-width="12" stroke="var(--color_secondary)" style={{transition: 'stroke 500ms ease'}} stroke-dasharray="452.16 50.24" stroke-dashoffset="125"></circle>
             </g>
          </svg>

          <span className={s.title}>90%</span>
       </div>
   );
};
