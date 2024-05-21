import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Button } from "./components/ui/Button";
import { Footer } from "./components/Footer";
import "./App.css";

export const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 items-center justify-center">
          <Button>Button</Button>
        </main>
        <Footer />
      </div>
    </>
  );
};
