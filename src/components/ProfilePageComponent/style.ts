import styled from "styled-components";

export const StyledProfilePage = styled.div`
  /* height: 100%; */
  /* min-width: 100vw; */
  position: absolute;
  z-index: 555;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px 0 0 0;
  background-color: transparent;

  .containerInformationsUser {
    background-color: var(--grey-10);
    display: flex;
    .containerSecundary {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 20px;
    }
    justify-content: center;
    width: 90%;
    min-height: 65vh;
    padding: 20px;
    border-radius: 4px;
  }

  .specialText {
    padding: 8px;
    background-color: var(--brand-4);
    color: var(--brand-1);
  }

  .specialTextCard {
    padding: 8px;
    background-color: var(--brand-4);
    color: var(--brand-1);
  }
  .imageCicleName {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--brand-4);
    background-color: blue;
    width: 90px;
    height: 90px;
    border-radius: 100%;
  }
  .containerName {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 100vw;
    overflow-y: hidden;
    /* background-color: red; */
    gap: 10px;
  }

  li {
    display: flex;
    /* height: 300px; */
    flex-direction: column;
    /* min-width: 312px; */
    /* width: 100%; */
    padding: 20px;
    gap: 20px;
    figure {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--grey-7);

      .imgCarCard {
        width: 262px;
        height: 150.28px;
      }
    }

    .containerCarInformations {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      div {
        display: flex;
        flex-direction: row;
      }
    }
    .containerBtns {
      display: flex;
      flex-direction: row;
      gap: 20px;
    }
  }
  @media only screen and (min-width: 600px) {
    .containerInformationsUser {
      max-height: 20vh;
    }
    .containerInformationsUser {
      width: 80%;
    }

    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      max-width: 100vw;
      overflow-y: unset;
      flex-wrap: wrap;
      gap: 15px;
    }
    li {
      width: 22%;
    }
  }
`;
