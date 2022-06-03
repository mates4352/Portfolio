import React from 'react';
import s from './Portfolio.module.scss';
import {BlockAnimation} from "../../shared/interactive/blockAnimation/BlockAnimation";
import {WeveHeader} from "../../shared/interactive/animation/weveAnimation/WeveHeader";
import {MainTitle} from "../../shared/shared_components/mainTitle/MainTitle";
import {Card} from "../../shared/shared_components/card/Card";
import sait_1 from './../../assets/images/sait1.jpg';
import sait_2 from './../../assets/images/sait2.jpg';
import sait_3 from './../../assets/images/sait3.jpg';
import sait_4 from './../../assets/images/sait4.jpg';
import sait_5 from './../../assets/images/sait5.jpg';
import sait_6 from './../../assets/images/sait6.jpg';
import sait_7 from './../../assets/images/sait7.jpg';
import sait_8 from './../../assets/images/sait8.jpg';
import sait_9 from './../../assets/images/sait9.jpg';
import sait_10 from './../../assets/images/sait10.jpg';
import sait_11 from './../../assets/images/sait11.jpg';
import sait_12 from './../../assets/images/sait12.jpg';
import {WeveFooter} from "../../shared/interactive/animation/weveAnimation/WeveFooter";

type portfolioType = {
   projects: Array<projectType>,
}

export type projectType = {
   title: string,
   type: string
   image: string
   alt: string
   pageLink: string
   gitHubLink: string
   technologies: Array<string>,
}

const projects:Array<projectType> = [
   {
      title: 'Eukanuba DRY',
      type: 'Work project',
      image: sait_10,
      alt: 'Eukanuba DRY',
      pageLink: 'https://mates4352.github.io/Eukanuba-DRY',
      gitHubLink: 'https://github.com/PicaselAgency/Eukanuba-DRY-landings',
      technologies: ['Html5, ', 'Css3, ', 'Scss, ', 'gulp ']
   },
   {
      title: 'Multifunction',
      type: 'Work project',
      image: sait_9,
      alt: 'Multifunction',
      pageLink: 'https://vigorous-yonath-2e405c.netlify.app/',
      gitHubLink: 'https://github.com/PicaselAgency/Multifunction-Landings',
      technologies: ['Html5, ', 'Css3, ', 'Scss, ', 'gulp']
   },
   {
      title: 'Dry Indoor',
      type: 'Work project',
      image: sait_8,
      alt: 'Dry Indoor',
      pageLink: 'https://celebrated-cassata-6d730e.netlify.app',
      gitHubLink: 'https://github.com/mates4352/DRY-INDOOR-LONG',
      technologies: ['Html5, ', 'Css3, ', 'Scss, ', 'gulp']
   },
   {
      title: 'Service Manager',
      type: 'Pet project',
      image: sait_1,
      alt: 'Service-manager',
      pageLink: 'https://mates4352.github.io/Dart-service-manager',
      gitHubLink: 'https://github.com/mates4352/Dart-service-manager',
      technologies: ['Html5, ', 'Css3, ', 'less, ', 'Pug, ', 'Js ']
   },
   {
      title: 'Choice Of Restaurant',
      type: 'Test project',
      image: sait_7,
      alt: 'Choice Of Restaurant',
      pageLink: 'https://unrivaled-douhua-d0b1a9.netlify.app',
      gitHubLink: 'https://github.com/mates4352/choice-of-restaurant',
      technologies: ['Html5, ', 'Css3, ', 'Scss, ', 'Js, ', 'gulp']
   },
   {
      title: 'Dream House',
      type: 'Pet project',
      image: sait_2,
      alt: 'Dream House',
      pageLink: 'https://mates4352.github.io/Dream_House',
      gitHubLink: 'https://github.com/mates4352/Dream_House',
      technologies: ['Html5, ', 'Css3, ', 'Scss, ', 'Js, ', 'php, ', 'wordpress ', 'gulp ']
   },
   {
      title: 'Pet Care',
      type: 'Test project',
      image: sait_3,
      alt: 'Pet Care',
      pageLink: 'https://mates4352.github.io/PetCare',
      gitHubLink: 'https://github.com/mates4352/PetCare',
      technologies: ['Html5, ', 'Css3, ', 'Scss, ', 'Js ', 'gulp, ']
   },
   {
      title: 'SALE OF CATS',
      type: 'Test project',
      image: sait_4,
      alt: 'SALE OF CATS',
      pageLink: 'https://mates4352.github.io/Sale-of-cats',
      gitHubLink: 'https://github.com/mates4352/Sale-of-cats',
      technologies: ['Html5, ', 'Css3, ', 'Scss, ', 'Js, ', 'gulp']
   },
   {
      title: 'Service',
      type: 'Pet project',
      image: sait_6,
      alt: 'Service',
      pageLink: 'https://mates4352.github.io/service',
      gitHubLink: 'https://github.com/mates4352/service',
      technologies: ['Html5, ', 'Css3, ', 'Less, ', 'Pug, ', 'Js ',]
   },
   {
      title: 'Helicopter Photoshop',
      type: 'Pet project',
      image: sait_5,
      alt: 'Helicopter photoshop',
      pageLink: 'https://mates4352.github.io/Helicopter-Photoshop',
      gitHubLink: 'https://github.com/mates4352/Helicopter-photoshoot',
      technologies: ['Html5, ', 'Css3, ', 'Scss, ', 'Js, ', 'React']
   },
   {
      title: 'Todolist',
      type: 'Pet project',
      image: sait_12,
      alt: 'Todolist',
      pageLink: 'https://mates4352.github.io/React-todolist',
      gitHubLink: 'https://github.com/mates4352/React-todolist',
      technologies: ['Html5, ', 'Css3, ', 'Scss, ', 'Material-Ui, ', 'Js, ', 'React, ', 'Redux, ', 'React-redux',]
   },
]

type portfolioPageType = {};

export const Portfolio: React.FC<portfolioPageType> = (props) => {
   const {} = props;

   return (
       <section className={s.portfolio}>
          <BlockAnimation/>
          <WeveHeader id={'header'}/>

          <div className={s.container}>
             <MainTitle mainTitle={'WORK'} title={'MY'} subTitle={'PORTFOLIO'}/>

             <ul className={s.list}>
                {projects.map((project: projectType, index: number) =>
                    <li className={s.item} key={index}>
                       <Card project={project}/>
                    </li>
                )}
             </ul>
          </div>
          <WeveFooter id={'footer'}/>
       </section>
   );
};
