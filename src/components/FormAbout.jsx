import { Button } from "../components/ui/Button";

export const FormAbout = () => {
  return (
    <div className="flex flex-col items-center justify-between flex-1">
      <div className="flex-1 flex flex-col justify-center">
        <img
          src="#"
          width={400}
          height={500}
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
