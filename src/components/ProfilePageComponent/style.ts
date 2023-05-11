import styled from "styled-components";

export const StyledProfilePage = styled.div`
  height: 100vh;
  min-width: 100vw;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px 0 0 0;
  background: linear-gradient(
    to bottom,
    var(--brand-1) 0,
    var(--brand-1) 25%,
    var(--grey-7) 25%,
    var(--grey-7) 100vh
  );

  .containerInformationsUser {
    background-color: var(--grey-10);
    display: flex;
    height: 430px;
    .containerSecundary {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      gap: 20px;
    }
    justify-content: center;
    width: 90%;
    max-width: 1240px;
    padding: 20px;
    border-radius: 4px;

    @media (max-width: 1240px) {
      justify-content: flex-start;
    }
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
    width: 90%;
    gap: 24px;
    overflow-y: hidden;
    padding-bottom: 24px;

    @media (min-width: 1024px) {
      flex-wrap: wrap;
      overflow-y: initial;
    }
  }

  li {
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    width: 312px;
    max-width: 80%;
    min-height: 356px;
    background-color: var(--grey-7);
    cursor: pointer;

    @media (min-width: 1024px) {
      max-width: 24%;
    }

    figure {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--grey-7);
      position: relative;
      .statusCar {
        background-color: var(--brand-1);
        color: var(--white-fixed);
        position: absolute;
        top: 7px;
        left: 7px;
        padding: 5px;
        font-size: 14px;

        /* top: 5px; */
      }
      .imgCarCard {
        width: 100%;
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

  .cicleCardSeller {
    text-align: center;
    background-color: chocolate;
    border-radius: 50%;
    width: 38px;
    width: 38px;
    color: var(--white-fixed);
  }

  .containerNameCardAd {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
`;
