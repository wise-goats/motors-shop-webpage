import styled from "styled-components";

export const StyledPageProductDescriptionMobile = styled.div`
  min-height: 100vh;
  height: 100%;
  min-width: 100vw;
  position: absolute;
  z-index: 555;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px 0 0 0;
  background-color: transparent;

  .containerMobileImage {
    background-color: var(--grey-10);
    display: flex;
    justify-content: center;
    width: 90%;
    padding: 20px;
    border-radius: 4px;
  }

  figure {
    display: flex;
    justify-content: center;
    background-color: var(--grey-10);
    .imageCenter {
      width: 80%;
      height: 252px;
    }
  }

  .containerInformationsCar {
    background-color: var(--grey-10);
    display: flex;
    border-radius: 4px;
    justify-content: space-between;
    flex-direction: column;
    gap: 25px;
    width: 90%;
    height: 326px;
    padding: 25px 20px;
  }
  .specialText {
    padding: 8px;
    background-color: var(--brand-4);
    color: var(--brand-1);
  }
  .containerSpecialText {
    display: flex;
    flex-direction: row;
    gap: 15px;
  }

  .containerDescriptionCar {
    background-color: var(--grey-10);
    display: flex;
    border-radius: 4px;
    justify-content: space-between;
    flex-direction: column;
    width: 90%;
    height: 326px;
    padding: 25px 20px;
  }
  .containerImagesCar {
    background-color: var(--grey-10);
    display: flex;
    border-radius: 4px;
    flex-direction: column;
    width: 90%;
    height: 326px;
    padding: 25px 20px;
    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 3%;
      padding: 25px 0 0 0;
      li {
        border-radius: 4px;
        height: 90px;
        width: 30%;
        img {
          width: 100%;
          height: 54px;
        }
      }
    }
  }
  .containerUserInformation {
    background-color: var(--grey-10);
    display: flex;
    border-radius: 4px;
    justify-content: space-between;
    flex-direction: column;
    gap: 25px;
    width: 90%;
    height: 326px;
    padding: 25px 20px;
    align-items: center;

    .initialsOfNameInCircle {
      background-color: #fffe1f;
      color: var(--white-fixed);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 77px;
      height: 77px;
      border-radius: 100%;
      font-size: 26px;
    }
  }
  .containerCommentInformation {
    background-color: var(--grey-10);
    display: flex;
    border-radius: 4px;
    justify-content: space-between;
    flex-direction: column;
    gap: 25px;
    width: 90%;
    min-height: 326px;
    padding: 25px 20px;

    .containerUserNewComment {
      display: flex;
      flex-direction: row;
      gap: 5px;
      align-items: center;
    }
    .initialsOfNameInCircleNewComment {
      background-color: #acf41f;
      color: var(--white-fixed);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 100%;
      font-size: 14px;
    }

    .automaticComment {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      button {
        display: flex;
        align-items: center;
        background-color: var(--grey-7);
        height: 24px;
        color: var(--grey-3);
        border-radius: 24px;
        padding: 12px;
      }
    }
  }

  @media only screen and (min-width: 600px) {
    display: none;
  }
`;

export const StyledPageProductDescriptionDesktop = styled.div`
  @media only screen and (max-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 600px) {
    min-height: 100vh;
    /* height: 100%; */
    min-width: 100vw;
    position: absolute;
    z-index: 555;
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 20px 0 0 0;
    background-color: transparent;

    .containerOneDesktop {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }
    .containerDesktop {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    .containerMobileImage {
      background-color: var(--grey-10);
      display: flex;
      justify-content: center;
      width: 90%;
      padding: 20px;
      border-radius: 4px;
    }

    figure {
      display: flex;
      justify-content: center;
      background-color: var(--grey-10);
      .imageCenter {
        width: 80%;
        height: 252px;
      }
    }

    .containerInformationsCar {
      background-color: var(--grey-10);
      display: flex;
      border-radius: 4px;
      justify-content: space-between;
      flex-direction: column;
      gap: 25px;
      width: 90%;
      height: 326px;
      padding: 25px 20px;
    }
    .specialText {
      padding: 8px;
      background-color: var(--brand-4);
      color: var(--brand-1);
    }
    .containerSpecialText {
      display: flex;
      flex-direction: row;
      gap: 15px;
    }

    .containerDescriptionCar {
      background-color: var(--grey-10);
      display: flex;
      border-radius: 4px;
      justify-content: space-around;
      flex-direction: column;
      width: 90%;
      height: 326px;
      padding: 25px 20px;
    }

    .containerCommentInformation {
      background-color: var(--grey-10);
      display: flex;
      border-radius: 4px;
      justify-content: space-between;
      flex-direction: column;
      gap: 25px;
      width: 90%;
      min-height: 326px;
      padding: 25px 20px;

      .containerUserNewComment {
        display: flex;
        flex-direction: row;
        gap: 5px;
        align-items: center;
      }
      .initialsOfNameInCircleNewComment {
        background-color: #acf41f;
        color: var(--white-fixed);
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        border-radius: 100%;
        font-size: 14px;
      }
      .automaticComment {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        button {
          display: flex;
          align-items: center;
          background-color: var(--grey-7);
          height: 24px;
          color: var(--grey-3);
          border-radius: 24px;
          padding: 12px;
        }
      }
    }
  }

  .containerImagesCar {
    background-color: var(--grey-10);
    display: flex;
    border-radius: 4px;
    flex-direction: column;
    width: 90%;
    height: 326px;
    padding: 25px 20px;
    ul {
      display: flex;
      flex-wrap: wrap;
      height: 100%;
      gap: 3%;
      padding: 25px 0 0 0;
      li {
        border-radius: 4px;
        height: 90px;
        width: 30%;
        img {
          width: 100%;
          height: 54px;
        }
      }
    }
  }
  .containerUserInformation {
    background-color: var(--grey-10);
    display: flex;
    border-radius: 4px;
    justify-content: space-between;
    flex-direction: column;
    gap: 25px;
    width: 90%;
    height: 326px;
    padding: 25px 20px;
    align-items: center;

    .initialsOfNameInCircle {
      background-color: #fffe1f;
      color: var(--white-fixed);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 77px;
      height: 77px;
      border-radius: 100%;
      font-size: 26px;
    }
  }

  .containerTwoDesktop {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  /* .containerDesktopImagesAndDescription{
  display: flex;
  flex-direction: column;
  gap: 20px;
} */
`;
