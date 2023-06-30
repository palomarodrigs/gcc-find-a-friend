import { Container } from './styles'

import CardFriendsTop from '../../assets/card-friends1.png'
import CardFriendsBottom from '../../assets/card-friends2.png'
import IconMessage from '../../assets/icon-message.svg'

export const CardContact = () => {
  return (
    <Container>
      <img src={CardFriendsTop} alt='' />
      <img src={CardFriendsBottom} alt='' />

      <span>
        Entre <br /> em contato <br /> conosco
      </span>

      <div className='send-mail'>
        <img src={IconMessage} alt='' />
        <a href='mailto:findafriend@contact.com'>Clique aqui e envie um email</a>
      </div>
    </Container>
  )
}
