import React from "react";
import { Link } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./HomePage.css";
import { ButtonBasic } from "./components/ButtonBasic";

export const HomePage = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <main className="flex flex-1 flex-col items-center justify-center font-sans h-auto">
          <div className="flex flex-row items-center justify-center gap-4">
            <div className="flex flex-col items-center">
              <h1 className="text-white text-5xl">
                <span className="font-thin break-all">AKO SA PRESTAŤ</span>{" "}
                <span className="font-bold">PREJEDAŤ?</span>
              </h1>
              <h2 className="text-white text-5xl font-thin">s nami!</h2>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <Link to="/prvapomoc">
                <ButtonBasic color="light-red">Prvá pomoc</ButtonBasic>
              </Link>
              <Link to="/skupina">
                <ButtonBasic color="light-brown">Podporná skupina</ButtonBasic>
              </Link>
              <Link to="/konzultacia">
                <ButtonBasic color="dark-blue">Konzultácia</ButtonBasic>
              </Link>
              <Link to="/hry">
                <ButtonBasic color="light-yellow">Hry</ButtonBasic>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};
