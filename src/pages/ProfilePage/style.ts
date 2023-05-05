import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  .TopContainer {
    display: flex;
    background-color: var(--brand-1);
    min-height: 60vh;
  }
  .bottomContainer {
    background-color: var(--grey-8);
    min-height: 1500px;
  }

  @media only screen and (min-width: 600px) {
    .bottomContainer {
      min-height: 1220px;
    }
  }
`;
