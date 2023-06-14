import styled from 'styled-components'

export const FriendsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > .friends {
    animation: topdown 1s 0.2s backwards;

    #friend1,
    #friend2,
    #friend3,
    #friend4 {
      position: relative;
    }

    #friend2 {
      left: -14px;
    }

    #friend3 {
      left: -28px;
    }

    #friend4 {
      left: -42px;
    }
  }

  > .friends-city {
    display: block;
    animation: downtop 1s 0.1s reverse backwards;
    p {
      font-size: 1.4rem;
      span {
        font-weight: 800;
      }
    }
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;

    > .friends {
      animation: swipeleft 1s 0.2s backwards;
    }

    > .friends-city {
      position: absolute;
      left: 22.5rem;
      animation: swiperight 1s 0.2s backwards;

      p {
        font-size: 1.6rem;
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
