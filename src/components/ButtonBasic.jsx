import { Button } from "../components/ui/Button";
import PropTypes from "prop-types";

export const ButtonBasic = ({ onClick, link, children, color, size }) => {
  return (
    <Button
      onClick={onClick}
      link={link}
      variant="secondary"
      className={`w-full bg-${color} hover:bg-${color}/90 size-${size}`}
    >
      <div className="text-white font-bold font-2xl">
      {children}
      </div>
    </Button>
  );
};

ButtonBasic.propTypes = {
  onClick: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};
