import styled from "styled-components";

export const StyledProductList = styled.ul`
  width: 100%;
  display: flex;
  overflow-x: auto;
  gap: 16px;

  @media (min-width: 1024px) {
    flex-wrap: wrap;
    overflow-x: initial;
  }
`;
