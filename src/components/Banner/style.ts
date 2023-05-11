import styled from "styled-components";

export const StyledBanner = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%);
  width: 100%;
  height: 50%;
  min-height: 350px;
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  img {
    position: absolute;
    z-index: -1;
    width: 100%;
  }

  @media (min-width: 600px) {
    height: 540px;
  }

  p,
  h1 {
    color: var(--white-fixed);
  }
`;
