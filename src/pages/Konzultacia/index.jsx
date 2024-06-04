import profilemockup from "../../assets/profilemockup.jpg";

export const KonzultaciaPage = () => {
  return (
    <div className="grid grid-cols-2 gap-8 py-20 px-60 items-center justify-center">
      <div className="grid items-stretch justify-center">
        <img
          src={profilemockup}
          alt="ProfilePicture"
          className="h-96 rounded-lg object-cover"
        />
      </div>
      <div className="gap-6">
        <h1 className="text-bold text-4xl">Objednajte sa na konzultáciu</h1>
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
            poukázať vopred na účet alebo zaplatiť po ukončení stretnutia v
            hotovosti.
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
