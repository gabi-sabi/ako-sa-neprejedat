import { Link } from 'react-router-dom';

export const GameButton = ({ to, children }) => {
  return (
    <>
      <Link to={to} className="md:w-1/2 m-4">
        <div
          className="bg-white   text-center rounded-lg"
          style={{ color: 'var(--nude)' }}
        >
          <h2 className="font-bold text-4xl p-8 ">{children}</h2>
        </div>
      </Link>
    </>
  );
};
