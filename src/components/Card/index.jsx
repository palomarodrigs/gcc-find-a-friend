import { Container } from './styles'

export const Card = ({ desc, emoji, images }) => {
  return (
    <Container>
      <div className='emoji'>
        <span>{emoji}</span>
      </div>

      <div className='description'>
        <p>{desc}</p>
      </div>

      <div className='image'>
        {images &&
          images.map((image, index) => (
            <img key={index} src={image} alt='Demonstração da aplicação' />
          ))}
      </div>
    </Container>
  )
}
