import styled from 'styled-components'

export const Container = styled.div`
  width: 32rem;
  height: 29.7rem;
  position: relative;
  padding: 9rem 3.2rem;

  display: flex;
  flex-direction: column;
  gap: 2.1rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_BLUE};

  img {
    width: 20rem;
    position: absolute;
  }

  img:nth-child(1) {
    top: 0;
    left: 0.6rem;
  }

  img:nth-child(2) {
    top: -1rem;
    right: 0;
  }

  span {
    font-size: 3rem;
    font-weight: 700;
    line-height: 110%;
  }

  .send-mail {
    display: flex;
    align-items: center;
    gap: 0.6rem;

    img {
      position: static;
      width: 2rem;
      height: 2rem;
    }

    a {
      color: ${({ theme }) => theme.COLORS.YELLOW};
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
    margin: 0 5rem;

    img {
      width: 40.5rem;
    }

    img:nth-child(1) {
      left: 5rem;
    }

    img:nth-child(2) {
      top: -2rem;
    }
  }

  @media (min-width: 1024px) {
    width: 123.1rem;
    height: 33.9rem;
    padding: 7.4rem 10rem;
    gap: 2.5rem;

    img {
      width: 76.3rem;
    }

    img:nth-child(1) {
      left: 8rem;
    }

    img:nth-child(2) {
      top: -4.4rem;
    }

    span {
      font-size: 4.8rem;
      z-index: 1;
    }

    .send-mail {
      img {
        width: 3.3rem;
        height: 3.3rem;
      }

      a {
        font-size: 2rem;
      }
    }
  }
`
