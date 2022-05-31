import React from 'react';

type IconTelegramType = {};

export const IconTelegram: React.FC<IconTelegramType> = (props) => {
   const {} = props
   return (
       <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
            style={{
               width: 'var(--icon_width, 24px)',
               height: 'var(--icon_height, 24px)',
               fill: 'var(--icon_fill, rgb(255,255,255))',
               display: 'flex',
               transition: 'fill 500ms ease'
            }}
       >
          <path d="M9.78,18.65L10.06,14.42L17.74,7.5C18.08,7.19 17.67,7.04 17.22,7.31L7.74,13.3L3.64,12C2.76,11.75
          2.75,11.14 3.84,10.7L19.81,4.54C20.54,4.21 21.24,4.72 20.96,5.84L18.24,18.65C18.05,19.56 17.5,19.78
          16.74,19.36L12.6,16.3L10.61,18.23C10.38,18.46 10.19,18.65 9.78,18.65Z"/>
       </svg>
   );
};
