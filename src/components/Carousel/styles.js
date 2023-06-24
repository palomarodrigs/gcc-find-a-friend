import styled from 'styled-components'

export const CarouselContainer = styled.div`
  .carousel-content {
    width: 25.6rem;
    height: 17.4rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;

    border-radius: 1.8rem;
    background-color: ${({ theme }) => theme.COLORS.WHITE};

    img {
      width: 100%;
    }

    span {
      color: ${({ theme }) => theme.COLORS.DARK_BLUE};
    }
  }

  .prev,
  .next {
    display: none;
  }

  .indicators {
    display: none;
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;

    .carousel-content {
      width: 38.4rem;
      height: 26.1rem;
      border-radius: 2.7rem;
      gap: 1.2rem;

      span {
        font-size: 24px;
        font-weight: 700;
      }
    }

    .navigation {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3.2rem;

      .prev,
      .next {
        display: block;
        max-width: 7.2rem;
        max-height: 7.2rem;
        padding: 2.4rem;
        border-radius: 1.5rem;
      }

      .prev {
        background-color: transparent;
        border: 0.1rem solid ${({ theme }) => theme.COLORS.WHITE};
        transition: 0.7s;

        svg {
          color: ${({ theme }) => theme.COLORS.WHITE};
        }
      }

      .prev:hover {
        background-color: ${({ theme }) => theme.COLORS.WHITE};

        svg {
          color: ${({ theme }) => theme.COLORS.DARK};
        }
      }
    }

    .indicators {
      display: flex;
      justify-content: center;
      margin-top: 2.5rem;
    }

    .indicator {
      max-width: 0.7rem;
      max-height: 0.7rem;
      opacity: 0.5;
      padding: 0;
      margin: 0 0.2rem;

      cursor: pointer;
      border-radius: 50%;
    }

    .indicator.active {
      opacity: 1;
      background-color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`
