import React from 'react';

type IconLinkedinType = {};

export const IconLinkedin: React.FC<IconLinkedinType> = (props) => {
   const {} = props
   return (
       <svg viewBox="0 0 124 124" xmlns="http://www.w3.org/2000/svg"
            style={{
               width: 'var(--icon_width, 24px)',
               height: 'var(--icon_height, 24px)',
               fill: 'var(--icon_fill, rgb(255,255,255))',
               display: 'flex'
            }}
       >
          <g>
             <path d="M102.4,70.7v28.5c0,0.7-0.6,1.3-1.3,1.3H86.4c-0.7,0-1.3-0.6-1.3-1.3V72.7
               c0-7-2.5-11.8-8.8-11.8c-4.8,0-7.6,3.2-8.9,6.3c-0.5,1.1-0.6,2.7-0.6,4.2v27.8c0,0.7-0.6,1.3-1.3,1.3H50.9
               c-0.7,0-1.3-0.6-1.3-1.3c0-7.1,0.2-41.4,0-49.4c0-0.7,0.6-1.3,1.3-1.3h14.7c0.7,0,1.3,0.6,1.3,1.3v6.1c0,0.1-0.1,0.1-0.1,0.2
               h0.1v-0.2c2.3-3.5,6.4-8.6,15.6-8.6C93.9,47.3,102.4,54.8,102.4,70.7L102.4,70.7z M24,100.6h14.7c0.7,0,1.3-0.6,1.3-1.3V49.8
               c0-0.7-0.6-1.3-1.3-1.3H24c-0.7,0-1.3,0.6-1.3,1.3v49.5C22.8,100,23.3,100.6,24,100.6z"/>
             <circle cx="30.9" cy="32.7" r="9.3"/>
          </g>
       </svg>
   );
};
