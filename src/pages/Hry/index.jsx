import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const GameButton = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="bg-white text-center rounded-lg text-light-brown w-full py-8 hover:bg-slate-100 text-4xl font-bold"
    >
      {children}
    </Link>
  )
}

GameButton.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node,
}

export const HryPage = () => {
  return (
    <>
      <main className="flex flex-col items-start justify-center font-sans h-auto gap-4 px-12 md:px-32 lg:px-64">
        <GameButton to="/dychacie-cvicenie">Dychacie cvicenie</GameButton>
        <GameButton to="/pocitanie">Pocitanie</GameButton>
        <GameButton to="/rozdiely">Rozdiely</GameButton>
      </main>
    </>
  )
}
