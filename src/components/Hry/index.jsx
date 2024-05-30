import { Header } from "../Header";
import { Footer } from "../Footer";

export const Hry = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <main className="flex flex-1 flex-col items-center justify-center font-sans h-auto">
          <h1 className="font-bold text-white text-4xl">Hry</h1>
        </main>
        <Footer />
      </div>
    </>
  );
};
