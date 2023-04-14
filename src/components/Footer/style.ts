import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100vw;
  height: 376px;
  background-color: var(--grey-0);
  padding: 45px 59px;
  color: var(--white-fixed);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    height: 26.336000442504883px;
    width: 153.02349853515625px;
    left: 0px;
    top: 0px;
    border-radius: 0px;
  }
  button {
    background-color: var(--grey-1);
    color: var(--white-fixed);
    height: 50px;
    width: 56px;
    border-radius: 4px;
  }

  @media only screen and (min-width: 600px) {
    flex-direction: row;
    height: 140px;
  }
`;
