import { Link } from 'react-router-dom';

export const GameButton = ({ to, name }) => {
  return (
    <>
      <Link to={to} className="md:w-1/2 m-4">
        <div
          className="bg-white   text-center rounded-lg"
          style={{ color: 'var(--nude)' }}
        >
          <h1 className="font-bold text-4xl p-8 ">{name}</h1>
        </div>
      </Link>
    </>
  );
};
