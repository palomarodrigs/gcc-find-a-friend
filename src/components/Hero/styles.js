import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5.2rem 0;
  background-color: ${({ theme }) => theme.COLORS.RED_800};

  > .main-section {
    padding: 0 2.2rem;

    h1 {
      font-size: 4.4rem;
      margin: 3.5rem 0 5rem;
      animation: swipeleft 1s 0.3s backwards;
    }

    .main-text {
      display: none;
    }
  }

  > .cards-section {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: swiperight 1s 0.3s backwards;

    img {
      width: 100%;
    }

    button {
      width: 23.9rem;
      position: absolute;
      bottom: 2rem;
      animation: downtop 1s 0.4s reverse backwards;
    }

    .cards-desktop {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 5.2rem 11.2rem;

    > .main-section {
      padding: 0;
      h1 {
        font-size: 7.2rem;
        margin-bottom: 8.1rem;
      }

      .main-text {
        display: block;
        font-size: 2.4rem;
        font-weight: 600;
        animation: swipeleft 1s 0.4s backwards;
      }
    }

    .cards-section {
      .cards-desktop {
        width: 522px;
        display: block;
        position: absolute;
        left: -41.0rem;
        bottom: -5.1rem;
        animation: swiperight 1s 0.5s backwards;
      }

      button {
        width: 35.2rem;
        bottom: 3.4rem;
        left: -36.6rem;
        transition: 0.5s;
      }

      button:hover {
        transform: scale(1.1);
      }

      .cards-mobile {
        display: none;
      }
    }
  }

  @keyframes downtop {
    100% {
      opacity: 0;
      transform: translateY(15px);
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
