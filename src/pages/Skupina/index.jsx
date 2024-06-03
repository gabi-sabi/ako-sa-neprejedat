import profilemockup2 from "../../assets/profilemockup2.jpg";
import { SelectTimeSlot } from "@/components/SelectTimeSlot";
import { Button } from "../../components/ui/Button";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";

export const SkupinaPage = () => {
  return (
    <div className="grid grid-cols-2 gap-8 py-20 px-60 items-center justify-center">
      <div className="grid items-stretch justify-center">
        <img
          src={profilemockup2}
          alt="ProfilePicture"
          className="h-96 rounded-lg object-cover"
        />
      </div>
      <div>
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
              Každé stretnutie je viazané úhradou poplatku 10€ na účet. Link k
              pripojeniu posielam na e-mail vždy bezprostredne po obdržaní
              platby. Teším sa na vás.
            </p>
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
            <SelectTimeSlot
              value1="pondelok 16. 9. 2024 19:00-20:00"
              value2="štvrtok 19. 9. 2024 19:00-20:00"
              value3="pondelok 23. 9. 2024 19:00-20:00"
              value4="štvrtok 26. 9. 2024 19:00-20:00"
            />
            <Button type="submit" size="lg" className="w-full">
              Príjdem
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
