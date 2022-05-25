import React from 'react';
import s from './App.module.scss';
import {Home} from "./pages/home/Home";
import {Menu} from "./shared/shared_components/menu/Menu";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

type appType = {

}

export const App:React.FC<appType> = () => {
  const classTheme = false ? s.light_theme : s.dark_theme;
  return (
      <div className={`${s.app} ${classTheme}`}>
         <BrowserRouter>
            <Routes>
               <Route path={"/"} element={<Navigate replace to="/Home"/>}/>
               <Route path="Home" element={<Home/>}/>
            </Routes>
            <Menu/>
         </BrowserRouter>
      </div>
  );
}
