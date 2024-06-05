import { Button } from '../components/ui/Button';
import PropTypes from 'prop-types';

export const ButtonBasic = ({ onClick, link, color, size, children }) => {
  return (
    <Button
      onClick={onClick}
      link={link}
      variant="secondary"
      className={`w-full bg-${color} hover:bg-${color}/90 size-${size}`}
    >
      <div className="text-white font-bold font-2xl">{children}</div>
    </Button>
  );
};

ButtonBasic.propTypes = {
  onClick: PropTypes.bool,
  link: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.any,
};
