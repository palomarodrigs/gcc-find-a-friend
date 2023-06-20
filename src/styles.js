import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  #hero {
    height: 100vh;
  }

  #hero.menu-open {
    margin-top: 23rem;
  }

  #about-app {
    width: 100%;
    padding: 7rem 0;

    display: flex;
    flex-direction: column;

    background-color: ${({ theme }) => theme.COLORS.WHITE};

    h1 {
      width: 32rem;
      font-size: 3rem;
      color: ${({ theme }) => theme.COLORS.DARK_BLUE};
      margin: 0 0 2rem 5rem;
      animation: topdown 1s 0.2s backwards;
    }

    .cards {
      display: flex;
      flex-direction: column;
      align-items: center;
      animation: topdown 1s 0.4s backwards;
    }

    span {
      font-weight: 800;
    }
  }

  @media (min-width: 1024px) {
    #hero {
      height: 62.2rem;
    }

    #about-app {
      align-items: flex-start;
      padding: 10rem 11.2rem;

      h1 {
        width: 87.3rem;
        font-size: 4.8rem;
        margin: 0 0 8rem 0;
        animation: swipeleft 1s .3s backwards;
      }

      .cards {
        display: grid;
        gap: 3.2rem;
        grid-template-areas:
          'TopLeft TopRight Right'
          'Bottom Bottom Right';
        animation: swiperight 1s .4s backwards;

        div:nth-child(1) {
          grid-area: TopLeft;
        }

        div:nth-child(2) {
          grid-area: TopRight;
        }

        div:nth-child(3) {
          grid-area: Bottom;
        }

        div:nth-child(4) {
          grid-area: Right;
        }
      }
    }
  }

  @keyframes topdown {
    0% {
      opacity: 0;
      transform: translateY(-15px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes swipeleft {
    0% {
      opacity: 0;
      transform: translateX(-15px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes swiperight {
    0% {
      opacity: 0;
      transform: translateX(15px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`
