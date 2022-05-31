import React from 'react';

type IconLetterType = {};

export const IconLetter: React.FC<IconLetterType> = (props) => {
   const {} = props
   return (
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"
            style={{
               width: 'var(--icon_width, 24px)',
               height: 'var(--icon_height, 24px)',
               fill: 'var(--icon_fill, rgb(255,255,255))',
               display: 'flex',
               transition: 'fill 500ms ease'
            }}
       >
          <path d="M48.045 56.583l-12.216-10.029-26.586 31.389h77.628l-26.589-31.701-12.237
          10.341zM89.778 18.057h-83.445l41.724 35.094 41.721-35.094zM62.115 44.661l27.873
          33.252v-56.856l-27.873 23.604zM6.012 21.057v56.856l27.873-33.252-27.873-23.604z"/>
       </svg>

   );
};
