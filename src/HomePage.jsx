import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { ButtonBasic } from './components/ButtonBasic';

export const HomePage = () => {
  return (
    <div className="flex flex-col">
      <main className="flex flex-1 flex-col items-center justify-center font-sans h-auto">
        <div className="flex flex-row items-center justify-center gap-4">
          <div className=" w-1/2 flex flex-col items-center gap-20">
            <h1 className="text-white text-center text-5xl">
              <span className="font-thin break-all">AKO SA PRESTAŤ</span>{' '}
              <span className="font-black">PREJEDAŤ?</span>
            </h1>
            <h2 className="text-white text-5xl font-thin italic">s nami!</h2>
          </div>
          <div className=" w-1/2 grid grid-cols-1  justify-items-center">
            <div className="w-1/2 grid gap-4">
              <Link to="/prvapomoc">
                <ButtonBasic size="lg" color="light-red">
                  Prvá pomoc
                </ButtonBasic>
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
        </div>
      </main>
    </div>
  );
};
