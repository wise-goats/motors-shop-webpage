import styled from "styled-components";

export const StyledSelect = styled.select`
  width: 100%;
  min-width: 110px;
  max-width: 315px;
  height: 48px;
  border: 1.5px solid var(--grey-7);
  border-radius: 4px;
  padding: 0px 16px;

  option {
    color: var(--grey-1);
    background-color: var(--grey-7);
  }

  :focus {
    outline-color: var(--brand-1);
  }
`;
