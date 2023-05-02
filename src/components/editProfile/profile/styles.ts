import styled from "styled-components";

const StyledForm = styled.div`
  form {
    width: max-content;
  }

  input {
    max-width: none;
  }

  textarea {
    width: 100%;
    height: 48px;
    border: 1.5px solid var(--grey-7);
    border-radius: 4px;
    padding: 24px 16px;
    color: var(--grey-1);
    overflow-y: hidden;
  }

  button {
    width: max-content;
  }

  .button_box {
    display: flex;
    width: max-content;
    gap: 10px;
  }

  @media (max-width: 650px) {
    .delete_btn {
      display: none;
    }
  }
`;

export default StyledForm;
