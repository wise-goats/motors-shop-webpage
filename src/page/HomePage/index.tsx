import React, { useState } from "react";
import { StyledButton } from "../../styles/button";
import Modal from "../../components/Modal";
import Form from "../../components/form";
import { StyledText } from "../../styles/typography";
import Input from "../../components/input";

export default () => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const handleModal = () => {
    setIsModal(!isModal);
  };
  return (
    <>
      <StyledButton
        onClick={(e) => {
          setIsModal(!isModal);
        }}
      >
        Abrir Modal
      </StyledButton>
      {isModal && (
        <Modal
          title="Titulo"
          handleModal={() => {
            handleModal();
          }}
        >
          <Form>
            <StyledText tag="label">Label</StyledText>
            <Input register={() => {}} placeholder="placeholder..." />
            <StyledText tag="label">Label</StyledText>
            <Input register={() => {}} placeholder="placeholder..." />
            <StyledButton>Botão</StyledButton>
          </Form>
        </Modal>
      )}
      <h1>Home Page</h1>;
    </>
  );
};
