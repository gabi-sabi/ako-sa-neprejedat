import skupina_main from "../../assets/skupina_main.jpg";
import { FormSkupina } from "../../components/FormSkupina";
import { DialogBank } from "../../components/DialogBank";

export const SkupinaPage = () => {
  return (
    <div className="flex flex-col gap-4 py-4 px-4 items-center justify-center lg:flex-row lg:gap-8 lg:py-20 lg:px-60">
      <div className="flex w-full items-stretch justify-center lg:w-1/2">
        <img
          src={skupina_main}
          alt="ProfilePicture"
          className="h-full rounded-lg object-fit"
        />
      </div>
      <div className="flex flex-col w-full lg:w-1/2">
        <h1 className="text-bold text-4xl text-center">Podporná skupina</h1>
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
              <DialogBank
                accountName="Gabriela Sabolová"
                iban="SK7583605207004208607176"
                bankCode="8360"
                bankInfo="BREXSA (mBank S.A. Pribinova 10
                  811 09 Bratislava)"
                swift="BREXSKBX"
              />
              . Link k pripojeniu posielam na e-mail do 24 hodín po
              obdržaní platby. Teším sa na vás.
            </p>
          </div>
          <FormSkupina />
        </div>
      </div>
    </div>
  );
};
