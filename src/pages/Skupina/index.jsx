import { useState } from "react";
import { toast } from "react-hot-toast";
import skupina_main from "../../assets/skupina_main.jpg";
import { SelectTimeSlot } from "@/components/SelectTimeSlot";
import { Button } from "../../components/ui/Button";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../../components/ui/dialog";

export const SkupinaPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseDialog = () => {
    setIsOpen(false);
  };

  const notify = () =>
    toast.success(
      <p className="text-center text-2xl">
        <span>
          Rezervácia prebehla{" "}
          <span className="font-bold text-light-green">úspešne!</span>
        </span>
        <br />
        <span>Teším sa na vás online.</span>
      </p>,
      {
        duration: 8000,
        position: "top-center",
        icon: "👏",
      },
    );

  return (
    <div className="flex flex-row gap-8 py-20 px-60 items-center justify-center">
      <div className="flex w-1/2 items-stretch justify-center">
        <img
          src={skupina_main}
          alt="ProfilePicture"
          className="h-full rounded-lg object-fit"
        />
      </div>
      <div className="flex flex-col w-1/2">
        <h1 className="text-bold text-4xl">Podporná skupina</h1>
        <br />
        <div className="grid gap-4">
          <div className="text-justify text-lg">
            <p>
              V našej online podpornej skupine nájdete kontinuálnu podporu,
              empatické povzbudenie a overené praktické nástroje na zvládnutie
              akýchkoľvek záchvatov prejedania. Stretávame sa online pravideľne
              v pondelok a vo štvrtok od 19:00 do 20:00 na platforme Meet.
              Môžete sa samozrejme zúčastniť aj pod prezývkou a vôbec nemusíte
              mať zapnutú kameru.
            </p>
            <br />
            <p>
              Každé stretnutie je viazané úhradou poplatku 10€ na{" "}
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
                      <div className="grid w-full grid-cols-2">
                        <div>
                          <span>Názov účtu:</span>
                        </div>
                        <div>
                          <span>Profi Food</span>
                        </div>
                        <div>
                          <span>IBAN:</span>
                        </div>
                        <div>
                          <span>SK8102000000002989436154</span>
                        </div>
                        <div>
                          <span>Kód banky:</span>
                        </div>
                        <div>
                          <span>0200</span>
                        </div>
                        <div>
                          <span>Označenie banky:</span>
                        </div>
                        <div>
                          <span>
                            SUBA (Všeobecná úverová banka, Moldavská 32, 040 01
                            Košice)
                          </span>
                        </div>
                        <div>
                          <span>SWIFT kód:</span>
                        </div>
                        <div>
                          <span>SUBASKBX</span>
                        </div>
                        <br />
                      </div>
                      <p>
                        Pri platbe uveďte, prosím, do správy pre prijímateľa
                        meno a priezvisko klienta.
                      </p>
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button type="button" onClick={handleCloseDialog}>
                      Zavrieť
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
              . Link k pripojeniu posielam na e-mail vždy bezprostredne po
              obdržaní platby. Teším sa na vás.
            </p>
          </div>
          <form className="grid gap-4 flex-1">
            <div className="grid gap-2">
              <Label htmlFor="name">Meno a priezvisko</Label>
              <Input
                className="cursor-pointer"
                id="name"
                placeholder="Zadejte meno a priezvisko"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                className="cursor-pointer"
                id="email"
                type="email"
                placeholder="Zadajte e-mail"
                required
              />
            </div>
            <SelectTimeSlot
              value1="pondelok 16. 9. 2024 19:00-20:00"
              value2="štvrtok 19. 9. 2024 19:00-20:00"
              value3="pondelok 23. 9. 2024 19:00-20:00"
              value4="štvrtok 26. 9. 2024 19:00-20:00"
            />
            <Button type="submit" size="lg" className="w-full" onClick={notify}>
              Príjdem
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
