import React, {useState} from 'react';
import s from './App.module.scss';
import {Home} from "./pages/home/Home";
import {Menu} from "./shared/shared_components/menu/Menu";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {Theme} from "./shared/interactive/theme/Theme";
import {About} from "./pages/about/About";
import {Portfolio} from "./pages/portfolio/Portfolio";
import {Contact} from "./pages/contact/Contact";

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
                <Route path={"/My_Portfolio"} element={<Navigate replace to="/Home"/>}/>
                <Route path="Home" element={<Home/>}/>
                <Route path="About" element={<About/>}/>
                <Route path="Portfolio" element={<Portfolio/>}/>
                <Route path="Contact" element={<Contact/>}/>
             </Routes>
             <Menu/>
          </BrowserRouter>
       </div>
   );
}
