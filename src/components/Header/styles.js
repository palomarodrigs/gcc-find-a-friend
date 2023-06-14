import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 8rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem 2rem;

  background-color: ${({ theme }) => theme.COLORS.RED_900};

  img {
    animation: swipeleft 1s;
  }

  > ul {
    display: none;
  }

  > .menu {
    position: relative;

    nav {
      position: absolute;
      top: 2rem;
      left: -36rem;
      z-index: 1;

      width: 42rem;
      height: 23rem;
      padding: 2rem 2.8rem;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2.7rem;

      border-radius: 0rem 0rem 2rem 2rem;
      background-color: ${({ theme }) => theme.COLORS.RED_900};

      transform: translateY(4.0rem);
      transition: transform 0.3s;

      .line {
        width: 34rem;
        opacity: 0.2;
        border: 0.1rem solid ${({ theme }) => theme.COLORS.WHITE};
      }

      ul {
        position: absolute;
        top: 3.7rem;
        left: 2.8rem;

        display: flex;
        flex-direction: column;
        gap: 1.2rem;

        /* animation: topdown 1s 0.3s backwards; */

        a {
          font-size: 1.8rem;
          font-weight: 700;
          opacity: 0.5;
          color: ${({ theme }) => theme.COLORS.WHITE};
        }

        a:hover {
          opacity: 1;
        }
      }
    }

    button {
      width: 4rem;
      height: 4rem;

      padding: 1.2rem;

      border-radius: 0.8rem;
      background-color: ${({ theme }) => theme.COLORS.WHITE};
      animation: swiperight 1s;

      #close {
        color: ${({ theme }) => theme.COLORS.RED_800};
      }
    }
  }

  @media (min-width: 1024px) {
    background-color: ${({ theme }) => theme.COLORS.RED_800};
    padding: 4rem 11.2rem;

    > img {
      width: 15rem;
    }

    > button {
      display: none;
    }

    ul {
      display: flex;
      align-items: center;
      gap: 6.2rem;
      animation: swiperight 1s;
    }

    a {
      font-size: 1.8rem;
      font-weight: 600;
      opacity: 0.5;
      color: ${({ theme }) => theme.COLORS.WHITE};
      transition: 0.7s;
    }

    a:hover {
      opacity: 1;
    }

    .menu {
      display: none;
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
