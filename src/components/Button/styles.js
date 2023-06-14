import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 55px;
  font-size: 1.4rem;
  font-weight: 800;

  border: 0;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.DARK_BLUE};

  &:disabled {
    opacity: 0.5;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;
    border-radius: 1.5rem;
  }
`
