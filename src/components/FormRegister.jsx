import { SelectTimeSlot } from "@/components/SelectTimeSlot";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/Button";

export const FormRegister = () => {
  return (
    <>
      <div className="flex flex-col flex-1 gap-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Konzultácia</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec
            tristique leo. Duis tempor vel orci a luctus. Nulla lobortis
            venenatis nisl at sagittis. Donec scelerisque elementum lectus eu
            finibus. Cras rutrum convallis turpis, sit amet scelerisque arcu
            viverra non. Duis ultricies laoreet dapibus. Vestibulum posuere
            purus non dolor eleifend, quis pellentesque mauris efficitur.
          </p>
        </div>
        <form className="grid gap-4 flex-1">
          <div className="grid gap-2">
            <Label htmlFor="name">Meno</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <SelectTimeSlot value1="11:00" value2="17:00" />
          <Button type="submit" size="lg" className="w-full">
            Rezervovať
          </Button>
        </form>
      </div>
    </>
  );
};
