import { Container } from './styles'

export function Button({ title, icon: Icon, ...rest }) {
  return (
    <Container type='button' {...rest}>
      {Icon && <Icon size={24} />}
      {title}
    </Container>
  )
}
