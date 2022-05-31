import React from 'react';

type IconPersonType = {};

export const IconPerson: React.FC<IconPersonType> = (props) => {
   const {} = props
   return (
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            style={{
               width: 'var(--icon_width, 24px)',
               height: 'var(--icon_height, 24px)',
               fill: 'var(--icon_fill, rgb(255,255,255))',
               display: 'flex',
               transition: 'fill 500ms ease'
            }}>
          <rect/>
          <path d="M12,11A4,4,0,1,0,8,7,4,4,0,0,0,12,11Z"/>
          <path d="M18,21a1,1,0,0,0,1-1A7,7,0,0,0,5,20a1,1,0,0,0,1,1Z"/>
       </svg>
   );
};
