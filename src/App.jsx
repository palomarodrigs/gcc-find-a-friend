import { Container } from './styles'

import { useState } from 'react'

import { Header } from './components/Header'
import { Hero } from './components/Hero'

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Container>
      <Header onToggleMenu={() => setIsMenuOpen(!isMenuOpen)} />

      <main className={isMenuOpen ? 'menu-open' : ''}>
        <Hero />
      </main>
    </Container>
  )
}

export default App
