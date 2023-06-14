import { FriendsWrapper } from './styles'

import Friend1 from '../../assets/friend1.png'
import Friend2 from '../../assets/friend2.png'
import Friend3 from '../../assets/friend3.png'
import Friend4 from '../../assets/friend4.png'

export const FriendsInCity = () => {
  return (
    <FriendsWrapper>
      <div className='friends'>
        <img id='friend1' src={Friend1} alt='Imagem de um cachorro' />
        <img id='friend2' src={Friend2} alt='Imagem de um gato' />
        <img id='friend3' src={Friend3} alt='Imagem de um cachorro' />
        <img id='friend4' src={Friend4} alt='Imagem de um gato' />
      </div>

      <div className='friends-city'>
        <p>
          <span>324 amigos </span>
          na sua cidade
        </p>
      </div>
    </FriendsWrapper>
  )
}
