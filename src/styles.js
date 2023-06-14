import styled  from "styled-components"

export const Container = styled.div`
  main.menu-open {
    transform: translateY(23rem);
    transition: transform 0.3s;
  }

  @media (min-width: 1024px) {
    /* > main {
      padding: 5.2rem 11.2rem;
    } */
  }
`