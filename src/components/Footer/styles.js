import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 18.7rem;
  padding: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.8rem;
  background-color: ${({ theme }) => theme.COLORS.RED_900};
  animation: downtop 1s 1.4s reverse backwards;

  .logo {
    img {
      width: 3.1rem;
    }

    p {
      display: none;
    }
  }

  .copyright {
    display: flex;
    gap: 2rem;

    span {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    height: 10rem;
    padding: 0 11.2rem;

    .logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      p {
        display: block;
      }
    }
  }

  @keyframes downtop {
    100% {
      opacity: 0;
      transform: translateY(15px);
    }
  }
`
