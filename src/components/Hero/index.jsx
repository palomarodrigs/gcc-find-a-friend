import { Container } from './styles'

import { FriendsInCity } from '../FriendsInCity'
import { Button } from '../Button'

import CardsMobile from '../../assets/cards-mobile.png'
import CardsDesktop from '../../assets/cards-desktop.png'

export const Hero = () => {
  return (
    <Container>
      <div className='main-section'>
        <FriendsInCity />

        <h1>
          Leve <br />a felicidade <br /> para o seu lar
        </h1>

        <p className='main-text'>
          Encontre o animal de estimação ideal <br /> para seu estilo de vida!
        </p>
      </div>

      <div className='cards-section'>
        <img
          className='cards-mobile'
          src={CardsMobile}
          alt='Cards com uma imagem de um cachorro no centro'
        />

        <img
          src={CardsDesktop}
          className='cards-desktop'
          alt='Cards com uma imagem de um cachorro no centro'
        />

        <Button title='Acesse agora' />
      </div>
    </Container>
  )
}
