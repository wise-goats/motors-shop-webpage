import styled from "styled-components";

export const StyledHeader = styled.header`
  & {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 8%;
    border-bottom: 2px solid var(--grey-6);
    height: 70px;
    width: 100%;
    position: fixed;

    background-color: var(--grey-10);
  }

  .hide_toast {
    display: none;
  }

  & > div {
    height: 100%;
    border-left: 2px solid var(--grey-6);

    display: flex;
    align-items: center;
    gap: 15px;
    padding-left: 15px;
  }

  & > div > img {
    border-radius: 50%;
    height: 40px;
    width: 40px;
  }

  .profile {
    cursor: pointer;
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: absolute;
    top: 60px;
    right: 60px;
    background-color: var(--grey-10);
    box-shadow: 0px 4px 40px -10px;
    padding: 20px;
    border-radius: 4px;
  }

  nav > p {
    cursor: pointer;
  }

  @media (max-width: 650px) {
    & > div {
      display: none;
    }

    & > div > img {
      display: none;
    }

    & > div > h3 {
      display: none;
    }

    .hide_toast {
      display: flex;
    }

    .profirl_options {
      position: initial;
      box-shadow: none;
      padding: 0;
      gap: 15px;
    }

    .open_profile {
      color: var(--grey-0);
      font-size: 25px;
      font-weight: 600;
    }

    .open_div {
      display: flex;
      position: absolute;
      left: 0;
      right: 0;
      top: 65px;
      background-color: var(--grey-10);
      flex-direction: column;
      box-shadow: 0px 27px 40px -10px;
      align-items: flex-start;
      height: max-content;
      padding: 20px 6%;
    }
  }

  @media (min-width: 650px) {
    .open_profile {
      display: none;
    }
  }
`;
