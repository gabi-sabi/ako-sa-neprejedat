import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "../components/ui/select";
import { Label } from "./ui/label";
import PropTypes from "prop-types";

export const SelectTimeSlot = ({ value1, value2, value3, value4 }) => {
  return (
    <div className="grid gap-4 text-lg">
      <Label htmlFor="email">Termín</Label>
      <Select>
        <SelectTrigger className="h-auto">
          <SelectValue
            placeholder={
              <div className="flex flex-col items-start">
                <span className="font-semibold uppercase text-md">
                  Vyberte termín
                </span>
                <span className="text-md">{value1}</span>
              </div>
            }
          />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={value1}>{value1}</SelectItem>
          <SelectItem value={value2}>{value2}</SelectItem>
          <SelectItem value={value3}>{value3}</SelectItem>
          <SelectItem value={value4}>{value4}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

SelectTimeSlot.propTypes = {
  value1: PropTypes.string,
  value2: PropTypes.string,
  value3: PropTypes.string,
  value4: PropTypes.string,
};
