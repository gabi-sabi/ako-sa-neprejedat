import { Link } from 'react-router-dom';
import { ButtonBasic } from './components/ButtonBasic';
import { EmailForm } from './components/EmailForm';

export const HomePage = ({data}) => {
  console.log({data})
  return (
    <><div className="flex flex-1 flex-col items-center justify-center gap-16 h-auto mx-4 lg:flex-row lg:mx-20">
      <div className=" w-full flex flex-col items-center gap-10 md:w-1/2 lg:gap-20">
        <h1 className="text-white text-center text-3xl md:text-4xl lg:text-5xl">
          <span className="font-thin break-all">AKO SA PRESTAŤ</span>
          <span className="font-black">PREJEDAŤ?</span>
        </h1>
        <h2 className="text-white font-thin italic text-3xl md:text-4xl lg:text-5xl">
          s nami!
        </h2>
        <p>{data}</p>
      </div>
      <div className=" w-full grid grid-cols-1 justify-items-center md:w-1/2">
        <div className="w-full grid gap-4 md:2/3 lg:w-1/2">
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
    </div><EmailForm /></>
  );
};
