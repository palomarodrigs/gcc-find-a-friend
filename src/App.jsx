import { Container } from './styles'

import { useState } from 'react'

import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Card } from './components/Card'

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
    </Container>
  )
}

export default App
