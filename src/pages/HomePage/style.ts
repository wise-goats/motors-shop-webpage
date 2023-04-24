import styled from "styled-components";

export const StyledHomePage = styled.div`
  .advertisements {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 60px;
    align-items: center;
    margin-bottom: 60px;
    position: relative;
    background-color: var(--white-fixed);

    @media (min-width: 1024px) {
      flex-direction: row-reverse;
      align-items: initial;
      padding-top: 16px;
    }

    .flex {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 60px;
      width: 100%;
      button {
        align-self: center;
        @media (min-width: 1024px) {
          display: none;
        }
      }
      @media (min-width: 1024px) {
        width: 70%;
      }
    }
  }

  .filters {
    background-color: var(--white-fixed);

    height: 100%;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    overflow-y: auto;

    @media (min-width: 600px) {
      position: initial;
    }
  }

  .filter-section {
    padding-left: 30px;

    & > ul {
      padding-left: 10px;
      .selected {
        color: var(--brand-1);
        text-decoration: underline;
      }
      & > p {
        font-size: 21px;
        color: #868e96;
      }
    }
  }

  .hide {
    display: none;

    @media (min-width: 1024px) {
      display: flex;
    }
  }
`;
