import styled from "styled-components";

const StyledForm = styled.div`
  form {
    width: 570px;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    justify-content: flex-end;
  }

  div > label {
    width: 47%;
  }

  select {
    width: 100%;
    min-width: 110px;
    height: 48px;
    border: 1.5px solid var(--grey-7);
    border-radius: 4px;
    padding: 0 16px;
    color: var(--grey-2);
    /* background-color: var(--grey-7); */
    ::placeholder {
      color: var(--grey-3);
    }
    :focus {
      outline-color: var(--brand-1);
      background-color: var(--grey-7);
    }
  }

  button {
    width: max-content;
  }

  input {
    max-width: none;
  }

  textarea {
    width: 483px;
    min-width: 110px;
    max-width: 315px px;
    height: 61px;
    border: 1.5px solid var(--grey-7);
    border-radius: 4px;
    padding: 24px 16px;
    color: var(--grey-1);
    overflow-y: hidden;
  }

  .fipe_price {
    display: flex;
    align-items: center;

    width: 100%;
    min-width: 110px;
    height: 48px;
    padding: 0 16px;

    border: 1.5px solid var(--grey-7);
    border-radius: 4px;

    color: var(--grey-3);
    /* background-color: var(--grey-7); */
    ::placeholder {
      color: var(--grey-3);
    }
    :focus {
      outline-color: var(--brand-1);
      background-color: var(--grey-7);
    }
  }

  .btn_is_active {
    display: flex;
    justify-content: space-between;
    padding: 10px;

    button {
      width: 45%;
    }
  }

  .btn_submit {
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

    background-color: var(--brand-1);
    color: var(--white-fixed);

    &&:hover {
      background-color: var(--brand-2);
      border-color: var(--brand-2);
    }
  }
`;

export default StyledForm;
