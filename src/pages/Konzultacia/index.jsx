import konz_main from "../../assets/konz_main.jpg";
import { DialogBank } from "../../components/DialogBank";

export const KonzultaciaPage = () => {
  return (
    <div className="flex flex-col gap-4 py-4 px-4 items-center justify-center md:flex-row lg:gap-8 md:py-20 md:px-60">
      <div className="flex w-full items-stretch justify-center lg:w-1/2">
        <img
          src={konz_main}
          alt="ProfilePicture"
          className="h-full rounded-lg object-fit"
        />
      </div>
      <div className="flex flex-col w-full lg:w-1/2">
        <h1 className="text-bold text-4xl text-center">
          Objednajte sa na konzultáciu
        </h1>
        <br />
        <div className="text-justify text-lg">
          <p>
            Ak máte záujem o individuálnu konzultáciu týkajúcu sa prejedania
            alebo emočného hladu, napíšte mi e-mail
            (dietologicka@dietologicka.eu) - odpoviem každému, len poprosím o
            Vašu trpezlivosť pri čakaní na odpoveď ☺.
          </p>
          <br />
          <p>
            Po predchádzajúcej dohode sa vieme stretnúť osobne v mojej
            kancelárii v Košiciach. Stretnutie trvá 50 minút, odchádzate z neho
            s odpoveďami na všetky svoje otázky. Honorár vo výške 40€ môžete
            poukázať vopred na{" "}
            <DialogBank
              accountName="Profi Food"
              iban="SK8102000000002989436154"
              bankCode="0200"
              bankInfo="SUBA (Všeobecná úverová banka, Moldavská 32, 040 01 Košice)"
              swift="SUBASKBX"
            />{" "}
            alebo zaplatiť po ukončení stretnutia v hotovosti.
          </p>
          <br />
          <p>
            Ak by ste uprednostnili telefonickú konzultáciu, ktorej dĺžka je
            rovnako 50 minút, honorár 40€ prosím poukázať vopred na účet
            najneskôr 24 hodín pred každou konzultáciou.
          </p>
        </div>
      </div>
    </div>
  );
};
