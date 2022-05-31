import React from 'react';
import planet_1 from './../../../../assets/images/planet.svg'
import planet_2 from './../../../../assets/images/planet_2.svg'
import planet_3 from './../../../../assets/images/planet_3.svg'
import s from './PlanetsMoon.module.scss';

type planetsMoonType = {
   
};

export const PlanetsMoon:React.FC<planetsMoonType> = (props) => {
   const {} = props;

   return (
       <div className={s.planet}>
          <svg viewBox="0 0 160 156" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
             <path id="path" d="M160 78C160 121.078 117.974 156 76 156C34.0264 156 0 121.078 0 78C0 34.9218 34.0264 0 76 0C117.974 0 160 34.9218 160 78Z" />

             <image width={24} height={24} href={planet_1} x="-150px" y="20px" style={{transform: 'rotate(274deg)'}}>
                <animateMotion dur="10s" repeatCount="indefinite" rotate="auto">
                   <mpath xlinkHref="#path"/>
                </animateMotion>
             </image>

             <image width={24} height={24} href={planet_2} x="-150px" y="20px" style={{transform: 'rotate(274deg)'}}>
                <animateMotion dur="5s" repeatCount="indefinite" rotate="auto">
                   <mpath xlinkHref="#path"/>
                </animateMotion>
             </image>

             <image width={24} height={24} href={planet_3} x="-150px" y="20px" style={{transform: 'rotate(274deg)'}}>
                <animateMotion dur="25s" repeatCount="indefinite" rotate='auto'>
                   <mpath xlinkHref="#path"/>
                </animateMotion>
             </image>
          </svg>
       </div>
   );
};

