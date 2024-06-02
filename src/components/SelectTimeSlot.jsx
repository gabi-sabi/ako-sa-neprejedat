import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "../components/ui/select";
import { Label } from "../components/ui/label";
import PropTypes from "prop-types";

export const SelectTimeSlot = ({ value1, value2 }) => {
  return (
    <div className="grid gap-2">
      <Label htmlFor="time">Čas</Label>
      <Select>
        <SelectTrigger className="h-auto">
          <SelectValue
            placeholder={
              <div className="flex flex-col items-start">
                <span className="font-semibold uppercase text-[0.65rem]">
                  Vyberte čas
                </span>
                <span className="font-normal">{value1}</span>
              </div>
            }
          />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={value1}>{value1}</SelectItem>
          <SelectItem value={value2}>{value2}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

SelectTimeSlot.propTypes = {
  value1: PropTypes.string,
  value2: PropTypes.node,
};
