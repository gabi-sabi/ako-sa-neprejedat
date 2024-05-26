import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Button } from "./components/ui/Button";
import { Footer } from "./components/Footer";
import "./App.css";

export const App = () => {
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
              <h2 className="text-white text-5xl font-thin">
                s nami!
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
              <Button>Prvá pomoc</Button>
              <Button>Podporná skupina</Button>
              <Button>Konzultácia</Button>
              <Button>Hry</Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};
