import React from "react";
import { StyledForm } from "../styles/form";

interface iFormProps {
  children?: React.ReactNode;
  onSubmit?: () => void;
  className?: string;
}
const Form = ({ children, onSubmit, className }: iFormProps) => {
  return (
    <StyledForm onSubmit={onSubmit} className={className}>
      {children}
    </StyledForm>
  );
};

export default Form;
