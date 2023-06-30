import styled from 'styled-components'

export const Container = styled.div`
  width: 32rem;
  height: 19.7rem;

  padding: 3rem 3rem;
  margin-bottom: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1.3rem;

  border-radius: 2rem;
  border: 0.1rem solid ${({ theme }) => theme.COLORS.BORDER};
  background-color: ${({ theme }) => theme.COLORS.ROSE};

  .description {
    p {
      width: 22.6rem;
      font-size: 1.4rem;
      text-align: start;
      color: ${({ theme }) => theme.COLORS.DARK};
    }
  }

  img:nth-child(1) {
    width: 100%;
    position: absolute;
    top: -1.5rem;
  }

  img:nth-child(2) {
    display: none;
  }

  &:nth-child(4) {
    width: 100%;
    position: relative;

    padding: 0;
    margin-top: 6.5rem;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 0;
  }

  @media (min-width: 1024px) {
    width: 28rem;
    margin: 0;

    img {
      position: absolute;
    }

    img:nth-child(1) {
      width: 52.6rem;
      height: 34.8rem;
      top: -5.5rem;
    }

    img:nth-child(2) {
      display: block;
      width: 46.8rem;
      height: 26.2rem;
      bottom: -0.2rem;
      right: 0;
    }

    &:nth-child(3) {
      width: 59.2rem;

      p {
        width: 47.1rem;
        margin-top: 4rem;
      }
    }

    &:nth-child(4) {
      position: relative;
      width: 59.2rem;
      height: 42.6rem;
      margin: 0;
      border-radius: 2rem;
    }
  }
`
