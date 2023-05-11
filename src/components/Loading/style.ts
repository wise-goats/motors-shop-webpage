import styled from "styled-components";

export const StyledLoading = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  overflow: hidden;
  position: relative;
  .loader {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 6px solid var(--brand-1);
    border-bottom-color: transparent;
    mix-blend-mode: overlay;
    animation: rotate 1s ease-in-out infinite;
    pointer-events: none;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
