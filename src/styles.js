import styled from 'styled-components'

export const Container = styled.div`
  #hero.menu-open {
    margin-top: 23rem;
  }

  main {
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.COLORS.WHITE};

    #about-app {
      width: 100%;
      padding: 7rem 5rem;

      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        width: 32rem;
        font-size: 3rem;
        color: ${({ theme }) => theme.COLORS.DARK_BLUE};
        margin-bottom: 2rem;
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

    #friends-available {
      display: flex;
      flex-direction: column;
      align-items: center;

      padding: 2rem 0 0;

      .friends-content {
        width: 32rem;
        height: 66.5rem;
        padding: 6rem 3.2rem;

        border-radius: 2rem;
        background-color: ${({ theme }) => theme.COLORS.RED_800};
        animation: topdown 1s 0.5s backwards;

        h2 {
          font-size: 3rem;
          line-height: 90%;
          text-align: center;
          margin-bottom: 4rem;
          color: ${({ theme }) => theme.COLORS.YELLOW};
          animation: topdown 1s 0.6s backwards;
        }

        p {
          line-height: 110%;
          letter-spacing: -0.32px;
          margin-bottom: 2rem;
          animation: topdown 1s 0.7s backwards;
        }

        button {
          margin-bottom: 3rem;
          animation: topdown 1s 0.8s backwards;
        }

        .carousel-container {
          animation: topdown 1s 0.9s backwards;
        }
      }
    }

    #about-findafriend {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 8rem 5rem 0;

      h2 {
        font-size: 3rem;
        line-height: 110%;
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.COLORS.DARK_BLUE};
        animation: topdown 1s 1s backwards;
      }

      h2 span {
        display: block;
        word-break: break-word;
      }

      p {
        font-size: 2rem;
        line-height: 110%;
        margin-bottom: 6rem;
        color: ${({ theme }) => theme.COLORS.DARK_BLUE};
        animation: topdown 1s 1.1s backwards;
      }

      .card-creator {
        animation: topdown 1s 1.2s backwards;
      }
    }

    #contact {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5.3rem 0;
      animation: topdown 1s 1.3s backwards;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      #about-app {
        h1 {
          width: 100%;
        }

        .cards {
          display: grid;
          gap: 3.2rem;
          grid-template-areas:
            'CardTopLeft CardTopRight'
            'CardBottomLeft CardBottomRight';

          div:nth-child(1) {
            grid-area: CardTopLeft;
          }

          div:nth-child(2) {
            grid-area: CardTopRight;
          }

          div:nth-child(3) {
            grid-area: CardBottomLeft;
          }

          div:nth-child(4) {
            grid-area: CardBottomRight;
            margin: 0;
          }
        }
      }

      #friends-available {
        margin: 0 5rem;

        .friends-content {
          width: 100%;
          height: 50rem;

          display: grid;
          grid-template-columns: 1fr 1fr;
          justify-items: center;
          align-content: center;
          align-items: end;
          gap: 2rem;

          h2 {
            text-align: left;
            margin-bottom: 7rem;
          }

          button {
            margin: 0;
          }

          p {
            /* margin: 0; */
          }

          /* display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center; */
        }
      }

      #about-findafriend {
        .card-creator div {
          display: flex;
        }
      }
    }

    @media (min-width: 1024px) {
      #hero {
        height: 62.2rem;
      }

      #about-app {
        align-items: center;
        padding: 10rem 11.2rem;

        h1 {
          width: 87.3rem;
          font-size: 4.8rem;
          margin: 0 34rem 8rem 0;
          animation: swipeleft 1s 0.3s backwards;
        }

        .cards {
          display: grid;
          gap: 3.2rem;
          grid-template-areas:
            'TopLeft TopRight Right'
            'Bottom Bottom Right';
          animation: swiperight 1s 0.4s backwards;

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

      #friends-available {
        .friends-content {
          position: relative;
          width: 121.6rem;
          height: 62.8rem;
          padding: 10rem 10.4rem;

          display: grid;
          grid-template-areas:
            'TITLE TEXT'
            'BUTTON CAROUSEL';
          animation: topdown 1s 0.5s backwards;

          h2 {
            grid-area: TITLE;
            width: 41.6rem;
            font-size: 4.8rem;
            text-align: left;
            margin: 0 10rem 5.5rem 0;
            animation: swipeleft 1s 0.6s backwards;
          }

          button {
            grid-area: BUTTON;
            width: 23.1rem;
            height: 7.2rem;
            animation: swipeleft 1s 0.7s backwards;
          }

          p {
            grid-area: TEXT;
            width: 49rem;
            font-size: 2rem;
            letter-spacing: -0.4px;
            animation: topdown 1s 0.8s backwards;
          }

          .carousel-container {
            position: absolute;
            right: 6rem;
            bottom: 3rem;
            animation: swiperight 1s 0.9s backwards;
          }
        }
      }

      #about-findafriend {
        padding: 8rem 11.3rem 0;

        .about {
          display: flex;
          margin: 0 10rem 6rem 0;

          h2 {
            max-width: 41.6rem;
            font-size: 4.8rem;
            line-height: 90%;
            margin: 0;
            animation: swipeleft 1s 1s backwards;
          }

          h2 span {
            display: inline;
            white-space: normal;
          }

          p {
            max-width: 69.2rem;
            letter-spacing: -0.4px;
            animation: swiperight 1s 1.1s backwards;
          }
        }

        .card-creator div {
          display: flex;
          animation: swiperight 1s 1.2s backwards;
        }
      }

      #contact {
        padding: 14rem 11.2rem 17.5rem;
        animation: swipeleft 1s 1.3s backwards;
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
