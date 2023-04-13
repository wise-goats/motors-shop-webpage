import React from "react";

interface iBaseButtonProps {
  className?: string;
  tag?: "button" | "span";
  children?: React.ReactNode;
  buttonSize?: "big" | "default" | "small";
  buttonStyle?:
    | "grey1"
    | "negative"
    | "disabled"
    | "brand1"
    | "brandOpacity"
    | "light"
    | "outlineLight"
    | "outline1"
    | "outline2"
    | "outlineBrand"
    | "alert"
    | "success"
    | "brandDisabled";
}

const BaseButton = ({ children, className, tag }: iBaseButtonProps) => {
  return (
    <>
      {!tag && <button className={className}>{children}</button>}
      {tag === "button" && <button className={className}>{children}</button>}
      {tag === "span" && <span className={className}>{children}</span>}
    </>
  );
};
export default BaseButton;
