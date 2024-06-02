import { Button } from "../components/ui/Button";
import PropTypes from "prop-types";

export const FormAbout = ({ photo }) => {
  return (
    <div className="flex flex-col items-center justify-between flex-1">
      <div className="flex-1 flex flex-col justify-center">
        <img
          src={photo}
          width={300}
          height={400}
          alt="ProfilePicture"
          className="w-full h-auto rounded-lg object-cover"
        />
        <Button variant="outline" className="mt-4">
          O mne{" "}
        </Button>
      </div>
    </div>
  );
};

FormAbout.propTypes = {
  photo: PropTypes.string,
};
