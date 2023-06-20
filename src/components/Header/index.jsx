import { FiMenu, FiX } from 'react-icons/fi'
import { Container } from './styles'

import { useState } from 'react'

import Logo from '../../assets/logo.svg'

export const Header = ({ onToggleMenu }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Container>
      <img src={Logo} alt='Logo FindAFriend' />

      <ul>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about-app'>Sobre o app</a>
        </li>
        <li>
          <a href='#'>Animais disponíveis</a>
        </li>
        <li>
          <a href='#'>Sobre a FindAFriend</a>
        </li>
        <li>
          <a href='#'>Contato</a>
        </li>
      </ul>

      <div className='menu'>
        <button
          onClick={() => {
            setIsOpen(!isOpen)
            onToggleMenu(!isOpen)
          }}
        >
          {isOpen ? <FiX id='close' /> : <FiMenu />}
        </button>

        {isOpen && (
          <nav>
            <div className='line'></div>

            <ul>
              <li>
                <a href='#'>Home</a>
              </li>
              <li>
                <a href='#about-app'>Sobre o app</a>
              </li>
              <li>
                <a href='#'>Animais disponíveis</a>
              </li>
              <li>
                <a href='#'>Sobre a FindAFriend</a>
              </li>
              <li>
                <a href='#'>Contato</a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </Container>
  )
}
