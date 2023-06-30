import { Container } from './styles'

import IconDog from '../../assets/icon-dog.svg'

export const Footer = () => {
  return (
    <Container>
      <div className='logo'>
        <img src={IconDog} alt='' />
        <p>
          <strong>Find</strong>A<strong>Friend</strong>
        </p>
      </div>

      <div className='copyright'>
        <span>2023 ® FindAFriend</span>
        <span>All rights reserved</span>
      </div>
    </Container>
  )
}
