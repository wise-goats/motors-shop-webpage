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
  className?: string;
}
const Modal = ({ children, handleModal, title, className }: iModalProps) => {
  return (
    <StyledModalContainer>
      <StyledModalBody
        className={className ? className + " modal-body" : "modal-body"}
      >
        <SyledModalHeader>
          <StyledTitle tag="h4" fontWeight={500}>
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
