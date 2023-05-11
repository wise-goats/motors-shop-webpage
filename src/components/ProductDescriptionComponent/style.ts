import styled from "styled-components";

export const StyledPageProductDescription = styled.div`
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
    var(--brand-1) 40%,
    var(--grey-7) 40%,
    var(--grey-7) 100vh
  );

  .announcerContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    .leftContainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }
    .rightContainer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }
    @media (min-width: 1024px) {
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
    }
  }

  .commentSection {
    display: flex;
    flex-direction: column;
    gap: 32px;
    color: var(--grey-2);
    background-color: var(--grey-10);
    border-radius: 4px;
    width: 90%;
    padding: 25px 20px;

    & .commentCard {
      display: flex;
      flex-direction: column;
      gap: 32px;
      position: relative;
      .deleteComment {
        position: absolute;
        top: 5px;
        right: 5px;
      }
    }

    & .initialsOfNameInCircle {
      background-color: #fffe1f;
      color: var(--white-fixed);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 100%;
      font-size: 26px;
    }

    & .commentHeader {
      display: flex;
      gap: 12px;
    }
  }

  .containerImage {
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
    display: flex;
    flex-direction: column;
    gap: 32px;
    color: var(--grey-2);
    background-color: var(--grey-10);
    border-radius: 4px;
    width: 90%;
    height: 355px;
    padding: 25px 20px;
  }
  .containerImagesCar {
    background-color: var(--grey-10);
    display: flex;
    border-radius: 4px;
    flex-direction: column;
    width: 90%;
    height: 355px;
    padding: 25px 20px;
    ul {
      display: flex;
      flex-wrap: wrap;
      gap: 3%;
      padding: 25px 0 0 0;
      li {
        border-radius: 4px;
        height: 90px;
        width: 90px;
        border-radius: 4px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 4px;
        }
      }
    }
  }

  .commentForm {
    width: 90%;
    padding: 0;
    min-height: 128px;
    @media (min-width: 1024px) {
      position: relative;
      button {
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
    input {
      width: 100%;
      height: 100%;
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

  .link_profile {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 28px;
    gap: 10px;
    border: 1.5px solid transparent;
    border-radius: 4px;
    font-weight: 600;
    font-size: 16px;
    cursor: pointer;
    width: 279px;
    height: 48px;
    background-color: var(--grey-0);
    color: var(--white-fixed);

    &&:hover {
      background-color: var(--grey-1);
      border-color: var(--grey-1);
    }
  }
`;
