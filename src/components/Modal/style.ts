import styled from "styled-components";

export const StyledModalContainer = styled.div`
  display: flex;
  flex-direction: center;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);

  z-index: 10;
`;
export const StyledModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 90%;
  max-width: 520px;

  background-color: var(--white-fixed);
  border-radius: 8px;
`;

export const SyledModalHeader = styled.header`
  display: flex;
  justify-content: space-between;

  padding: 24px 18px;
`;

export const StyledModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 24px 32px 24px;
`;
