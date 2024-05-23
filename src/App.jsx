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
        <main className=" flex-1 flex-col items-center justify-center font-sans h-auto text-center">
          <div className="items-center justify-center h-40">
            <div className="flex items-center justify-center h-auto">
              <div className="flex-col items-center justify-center h-auto">
                <h1 className="text-white text-5xl text-center">
                  <span className="font-thin break-all">AKO SA PRESTAŤ</span>{" "}
                  <span className="font-bold">PREJEDAŤ?</span>
                </h1>
              </div>
              <div className="flex-col items-center justify-center h-auto">
                <h2 className="text-white text-5xl font-thin text-center">
                  s nami!
                </h2>
              </div>
            </div>
            <div className="flex items-center justify-center h-16 text-center">
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
