import React from 'react';
import s from './App.module.scss';
import {About} from "./pages/about/About";

type appType = {

}

export const App:React.FC<appType> = () => {
  const classTheme = true ? s.light_theme : s.dark_theme;
  return (
    <div className={`${s.app} ${classTheme}`}>
      <About/>
    </div>
  );
}
