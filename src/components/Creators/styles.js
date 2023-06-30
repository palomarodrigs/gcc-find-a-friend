import styled from 'styled-components'

export const Container = styled.div`
  .content {
    width: 27.8rem;
    height: 28.4rem;
    padding: 1rem 1rem 2.2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.2rem;

    border-radius: 2rem;
    border: 0.1rem solid ${({ theme }) => theme.COLORS.BORDER};
    background-color: ${({ theme }) => theme.COLORS.ROSE};

    .info {
      display: flex;
      flex-direction: column;
      align-items: center;

      span {
        font-size: 1.8rem;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.DARK_BLUE};
      }

      span:nth-child(2) {
        font-weight: 400;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .content {
      width: 16rem;
      height: 18rem;
      margin-right: 1rem;

      img {
        width: 100%;
      }

      .info {
        span {
          font-size: 1.4rem;
        }
      }

      &:first-child {
        margin-left: 1rem;
      }
    }
  }

  @media (min-width: 1024px) {
    .content {
      margin-right: 3.7rem;

      &:last-child {
        margin: 0;
      }
    }
  }
`
