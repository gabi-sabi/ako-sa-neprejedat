import React from "react";
import { Routes, Route } from "react-router-dom"
import { HomePage} from "./HomePage"
import { PrvaPomoc} from "./components/PrvaPomoc"
import { Skupina } from "./components/Skupina";
import { Konzultacia } from "./components/Konzultacia";
import { Hry } from "./components/Hry"
import "./App.css";


export const App = () => {
  return (
    <>
       <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/prvapomoc" element={ <PrvaPomoc/> } />
        <Route path="/skupina" element={ <Skupina/> } />
        <Route path="/konzultacia" element={ <Konzultacia/> } />
        <Route path="/hry" element={ <Hry/> } />
      </Routes>
    </>
  );
};

