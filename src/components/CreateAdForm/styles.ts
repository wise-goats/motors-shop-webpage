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
`;

export default StyledForm;
