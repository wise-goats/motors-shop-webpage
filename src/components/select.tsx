import React from "react";
import { StyledSelect } from "../styles/select";

interface iSelectProps {
  register: () => void | object;
  className?: string;
  children?: React.ReactNode;
  name?: string;
  id?: string;
}

const Select = ({ register, className, children, name, id }: iSelectProps) => {
  return (
    <StyledSelect {...register()} name={name} id={id} className={className}>
      {children}
    </StyledSelect>
  );
};

export default Select;
