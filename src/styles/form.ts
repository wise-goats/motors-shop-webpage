import "styled-components";
import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 44px 28px;

  width: 343px;
  max-width: 90%;
  height: 542px;

  @media (min-width: 600px) {
    width: 412px;
    padding: 44px;
  }
`;
