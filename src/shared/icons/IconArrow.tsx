import React from 'react';

type IconArrowType = {};

export const IconArrow: React.FC<IconArrowType> = (props) => {
   return (
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.414 12.414"
            style={{
               width: 'var(--icon_width, 24px)',
               height: 'var(--icon_height, 24px)',
               fill: 'var(--icon_fill, rgb(255,255,255))',
               display: 'flex'
            }}
       >
          <path d="M6.293,1.5c-0.391,0.391-0.391,1.023,0,1.414l2.293,2.293H1c-0.552,0-1,0.448-1,1s0.448,1,1,1
                  h7.586L6.293,9.5c-0.391,0.391-0.391,1.023,0,1.414C6.488,11.109,6.744,11.207,7,11.207s0.512-0.098,0.707-0.293l4.707-4.707
                  L7.707,1.5C7.316,1.109,6.684,1.109,6.293,1.5z"/>
       </svg>
   );
};
