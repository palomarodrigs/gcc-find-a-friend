import { styled, keyframes } from 'styled-components'

const swipeRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(15px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`
export const ScrollToTopButton = styled.button`
  width: 4rem;
  height: 4rem;

  position: fixed;
  bottom: 2rem;
  right: 1rem;
  padding: 1rem;

  border-radius: 100%;
  background-color: ${({ theme }) => theme.COLORS.DARK_BLUE};
  animation: ${swipeRight} 0.3s ease-in;

  svg {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  @media (min-width: 1024px) {
    width: 5rem;
    height: 5rem;
    bottom: 2rem;
    right: 2rem;
    padding: 1.5rem;
  }
`
