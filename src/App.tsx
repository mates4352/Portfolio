import React, {useState} from 'react';
import s from './App.module.scss';
import {Home} from "./pages/home/Home";
import {Menu} from "./shared/shared_components/menu/Menu";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {Theme} from "./shared/interactive/theme/Theme";

type appType = {}

export const App: React.FC<appType> = () => {
   const [isTheme, setIsTheme] = useState<boolean>(false)
   const classTheme = isTheme ? s.light_theme : s.dark_theme;

   return (
       <div className={`${s.app} ${classTheme}`}>
          <Theme isTheme={isTheme} setIsTheme={setIsTheme}/>

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
