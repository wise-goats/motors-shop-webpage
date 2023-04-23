import styled from "styled-components";

export const StyledMain = styled.main`
  padding: 120px 3% 70px 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--grey-7);
  height: 100%;

  & > form {
    border-radius: 4px;
    height: auto;
  }

  & > form > button {
    width: 100%;
  }

  & > form > span {
    text-align: end;
    padding-right: 35px;
    margin: -20px 0 -10px;
  }

  & > form > p {
    text-align: center;
  }

  & > form > a {
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
    background-color: transparent;
    color: var(--grey-1);
    border-color: var(--grey-4);

    &&:hover {
      background-color: var(--grey-1);
      border-color: var(--grey-1);
      color: var(--white-fixed);
    }
  }
  /* button {
    width: 30px;
    background-color: red;
  } */

  input[type="radio"] {
    display: none;
  }

  .labelIsSeller {
    display: inline-block;
    background-color: #eee;
    border: 1px solid #ccc;
    padding: 0.5em;
    cursor: pointer;
    width: 50%;
  }

  input[type="radio"]:checked + label {
    background-color: #ccc;
  }

  .containerDivIsSeller {
    display: flex;
    justify-content: space-between;
    gap: 5px;
  }

  .containerDescription {
    display: flex;
    flex-direction: column;
    textarea {
      min-width: 100%;
      max-width: 100%;
      min-height: 90px;
      max-height: 90px;
    }
  }
`;
