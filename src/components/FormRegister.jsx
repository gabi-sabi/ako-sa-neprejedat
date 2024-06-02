import { SelectTimeSlot } from "@/components/SelectTimeSlot";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/Button";
import PropTypes from "prop-types";

export const FormRegister = ({
  title,
  text,
  buttonText,
  timeSlot1,
  timeSlot2,
}) => {
  return (
    <>
      <div className="flex flex-col flex-1 gap-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">{text}</p>
        </div>
        <form className="grid gap-4 flex-1">
          <div className="grid gap-2">
            <Label htmlFor="name">Meno a priezvisko</Label>
            <Input id="name" placeholder="Zadejte meno a priezvisko" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" placeholder="Zadajte e-mail" />
          </div>
          <SelectTimeSlot value1={timeSlot1} value2={timeSlot2} />
          <Button type="submit" size="lg" className="w-full">
            {buttonText}
          </Button>
        </form>
      </div>
    </>
  );
};

FormRegister.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string,
  timeSlot1: PropTypes.string,
  timeSlot2: PropTypes.string,
};
