import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './HomePage';
import { PrvaPomocPage } from './pages/PrvaPomoc';
import { SkupinaPage } from './pages/Skupina';
import { KonzultaciaPage } from './pages/Konzultacia';
import { ONasPage } from './pages/ONas';
import { HryPage } from './pages/Hry';
import { Header } from '../src/components/Header';
import { Footer } from '../src/components/Footer';
import { Toaster } from 'react-hot-toast';
import './App.css';
import { BreathingExercisesPage } from './pages/Hry/Breathing exercises';
import { DiferenciesPage } from './pages/Hry/Diferencies';
import { CountingPage } from './pages/Hry/Counting';

export const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const callBackendAPI = async () => {
      try {
        const response = await fetch("/api")
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const body = await response.json();
        console.log({body})
        setData(body.message);
      } catch (error) {
        console.error(error.message);
      }
    };
    callBackendAPI();
  }, []);

  return (
    <>
      <Toaster />
      <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage data={data}/>} />
          <Route path="/prvapomoc" element={<PrvaPomocPage />} />
          <Route path="/skupina" element={<SkupinaPage />} />
          <Route path="/konzultacia" element={<KonzultaciaPage />} />
          <Route path="/o-nas" element={<ONasPage />} />
          <Route path="/hry" element={<HryPage />} />
          <Route
            path="/dychacie-cvicenie"
            element={<BreathingExercisesPage />}
          />
          <Route path="/rozdiely" element={<DiferenciesPage />} />
          <Route path="/pocitanie" element={<CountingPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};
