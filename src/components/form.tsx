import React from "react";
import { StyledForm } from "../styles/form";

interface iFormProps {
  children?: React.ReactNode;
  onSubmit?: () => void;
}
const Form = ({ children, onSubmit }: iFormProps) => {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
};

export default Form;
