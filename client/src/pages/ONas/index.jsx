import { AboutUs } from '@/components/ProfileCard';
import konz_about_cut from '../../assets/konz_about_cut.jpg';
import skupina_about_cut from '../../assets/skupina_about_cut.jpg';

export const ONasPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 lg:flex-row md:flex-col sm:flex-col">
      <AboutUs
        img={skupina_about_cut}
        name="Gabriela Sabolová"
        email="gsabolova5@gmail.com"
        webUrl="https://www.instagram.com/gabsabolova/"
      >
        <p className="leading-normal my-8 lg:w-2/4 md:w-4/5 sm:w-4/5">
          Prejedať som sa začala, keď som v 5. triede prestúpila na novú školu.
          Hory sladkostí mi pomohli zabudnúť, že nemám žiadnych kamarátov.
          Neskôr som objavila, že prejedanie otupí nielen osamelosť, ale aj
          stres, zlosť a smútok.
        </p>
        <p className="leading-normal my-8 lg:w-2/4 md:w-4/5 sm:w-4/5">
          V priebehu rokov som vyskúšala všetky dostupné metódy a terapie.
          Uzdravenie prišlo, až keď som stretla ľudí, ktorí si prešli podobnou
          skúsenosťou, prijali ma medzi seba a dali mi pocítiť, že nie som sama.
          Najviac ma prekvapilo, že neexisstuje jeden zázračný univerzálny liek,
          ktorý by fungoval pre všetkých.{' '}
        </p>
      </AboutUs>
      <AboutUs
        img={konz_about_cut}
        name="Gabriela Sabolová"
        email="dietologicka@dietologicka.eu"
        webUrl="http://www.dietologicka.eu/"
      >
        <p className="leading-normal my-8 lg:w-2/4 md:w-4/5 sm:w-4/5">
          Pokiaľ mi pamäť siaha, nikdy som nemohla jesť tak bezstarostne ako
          ostatní ľudia. V detstve ma často bolievalo bruško, zvracala som po
          každej oslave. Snažila som sa pozorovať, ktoré potraviny a jedlá mi
          nerobia dobre...{' '}
        </p>
        <p className="leading-normal my-8 lg:w-2/4 md:w-4/5 sm:w-4/5">
          Hľadala som odpovede v knihách, skúšala som nekonzumovať to i ono...
          výsledky však boli chabé... Pre tieto svoje skúsenosti som bola často
          terčom kritiky i emočného vydierania... no kdesi v hĺbke duše som už
          vtedy vedela, že pre každého z nás existuje jedinečný stravovací
          systém, ktorý nebolí...
        </p>
      </AboutUs>
    </div>
  );
};
