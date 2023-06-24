import { Container } from './styles'

import { useState } from 'react'

import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Card } from './components/Card'
import { Button } from './components/Button'
import { Carousel } from './components/Carousel'

import PrototypeApp from './assets/prototype-app.svg'
import PrototypeAppBottom from './assets/prototype-app-bottom.svg'

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Container>
      <Header onToggleMenu={() => setIsMenuOpen(!isMenuOpen)} />

      <section id='hero' className={isMenuOpen ? 'menu-open' : ''}>
        <Hero />
      </section>

      <section id='about-app'>
        <h1>Um app não, uma caixinha de amigos...</h1>

        <div className='cards'>
          <Card
            emoji='🐕'
            desc={
              <>
                O <span>FindAFriend</span> é um produto desenvolvido para você encontrar o animal de
                estimação ideal ao seu estilo de vida!
              </>
            }
          />

          <Card
            emoji='🐈'
            desc={
              <>
                <span>ONGs</span> cadastram os bichinhos disponíveis para adoção informando
                características como: porte, nível de energia, nível de independência, sociabilidade
                e gênero.
              </>
            }
          />

          <Card
            emoji='🦮'
            desc={
              <>
                <span>Filtre os bichinhos</span> de acordo com suas preferências e lifestyle. Depois
                é só entrar em contato com a ONG para agendar uma visita e conhecer pessoalmente seu{' '}
                <span>match perfeito!</span>
              </>
            }
          />

          <Card images={[PrototypeApp, PrototypeAppBottom]} />
        </div>
      </section>

      <section id='friends-available'>
        <div className='friends-content'>
          <h2>
            Há muitos <br /> amigos esperando <br /> por você!
          </h2>

          <p>
            O FiendAFriend conecta pessoas que estão procurando por um animal de estimação com
            animais que precisam de um lar amoroso. É fácil de usar e você pode navegar por uma
            variedade de animais para encontrar aquele que melhor se adapta ao seu estilo de vida e
            necessidades.
          </p>

          <Button title='Acesse agora' />

          <div className='carousel-container'>
            <Carousel />
          </div>
        </div>
      </section>
    </Container>
  )
}

export default App
