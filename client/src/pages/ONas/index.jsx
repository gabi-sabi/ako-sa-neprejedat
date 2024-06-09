import { AboutUs } from '@/components/ProfileCard'
import konz_about_cut from '../../assets/konz_about_cut.jpg'
import skupina_about_cut from '../../assets/skupina_about_cut.jpg'

export const ONasPage = () => {
  return (
    <div className="flex flex-row justify-center gap-4">
      <AboutUs
        name="Gabriela Sabolova"
        img={konz_about_cut}
        email="dietologicka@dietologicka.eu"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae
          vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Duis ornare, quam
          eu efficitur vehicula, odio lacus tincidunt eros, non tincidunt eros nisl sit amet eros.
          Mauris auctor eros nec quam dapibus, ut ultricies nisi luctus. Aenean fermentum felis at
          ex dignissim, id scelerisque tortor vehicula. Phasellus aliquet nunc ut ante tinc
        </p>
      </AboutUs>
      <AboutUs
        name="Gabriela Sabolova"
        img={skupina_about_cut}
        email="gsabolova5@gmail.com"
      >
        <p className="leading-normal ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae
          vestibulum vestibulum. Cras venenatis euismod malesuada. Nulla facilisi. Duis ornare, quam
          eu efficitur vehicula, odio lacus tincidunt eros, non tincidunt eros nisl sit amet eros.
          Mauris auctor eros nec quam dapibus, ut ultricies nisi luctus. Aenean fermentum felis at
          ex dignissim, id scelerisque tortor vehicula. Phasellus aliquet nunc ut ante tinc test
        </p>
      </AboutUs>
    </div>
  )
}
