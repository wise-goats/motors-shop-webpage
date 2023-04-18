import React from "react";
import {
  StyledModalContainer,
  StyledModalBody,
  StyledModalContent,
  SyledModalHeader,
} from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { StyledTitle } from "../../styles/typography";
interface iModalProps {
  children: React.ReactNode;
  handleModal: () => void;
  title: string;
}
const Modal = ({ children, handleModal, title }: iModalProps) => {
  return (
    <StyledModalContainer>
      <StyledModalBody>
        <SyledModalHeader>
          <StyledTitle tag="h7" fontWeight={500}>
            {title}
          </StyledTitle>
          <button className="close-modal" onClick={handleModal}>
            <AiOutlineClose />
          </button>
        </SyledModalHeader>
        <StyledModalContent>{children}</StyledModalContent>
      </StyledModalBody>
    </StyledModalContainer>
  );
};

export default Modal;
