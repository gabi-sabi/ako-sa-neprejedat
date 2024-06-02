import { FormRegister } from "../../components/FormRegister";
import { FormAbout } from "../../components/FormAbout";

export const KonzultaciaPage = () => {
  return (
    <div className="flex flex-row gap-8 max-w-6xl mx-auto p-4 md:p-8 items-stretch">
      <FormAbout />
      <FormRegister />
    </div>
  );
};
