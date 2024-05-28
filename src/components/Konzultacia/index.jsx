import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";


export const Konzultacia = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <main className="flex flex-1 flex-col items-center justify-center font-sans h-auto">
          <h1 className="font-bold text-white text-4xl">Konzultácia</h1>
        </main>
        <Footer />
      </div>
    </>
  )
}
