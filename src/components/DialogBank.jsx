import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../components/ui/dialog";
import { Button } from "../components/ui/Button";
import PropTypes from "prop-types";

export const DialogBank = ({
  accountName,
  iban,
  bankCode,
  bankInfo,
  swift,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <span className="text-dark-blue transition duration-150 ease-in-out hover:text-dark-blue-600 focus:text-darkblue-600 cursor-pointer font-bold underline underline-offset-2">
          účet
        </span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Bankové spojenie</DialogTitle>
          <DialogDescription>
            <div className="grid w-full grid-cols-2 text-black">
              <div>
                <span>Názov účtu:</span>
              </div>
              <div>
                <span>{accountName}</span>
              </div>
              <div>
                <span>IBAN:</span>
              </div>
              <div>
                <span>{iban}</span>
              </div>
              <div>
                <span>Kód banky:</span>
              </div>
              <div>
                <span>{bankCode}</span>
              </div>
              <div>
                <span>Označenie banky:</span>
              </div>
              <div>
                <span>{bankInfo}</span>
              </div>
              <div>
                <span>SWIFT kód:</span>
              </div>
              <div>
                <span>{swift}</span>
              </div>
              <br />
            </div>
            <p>
              Pri platbe uveďte, prosím, do správy pre prijímateľa meno a
              priezvisko klienta.
            </p>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="ghost" onClick={handleCloseDialog}>
            Zavrieť
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

DialogBank.propTypes = {
  accountName: PropTypes.string,
  iban: PropTypes.string,
  bankCode: PropTypes.string,
  bankInfo: PropTypes.string,
  swift: PropTypes.string,
};
