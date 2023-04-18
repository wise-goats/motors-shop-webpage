import React from "react";

interface iBaseButtonProps {
  className?: string;
  onClick?: (event: any) => void;
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

const BaseButton = ({
  children,
  className,
  tag,
  onClick,
}: iBaseButtonProps) => {
  return (
    <>
      {!tag && (
        <button className={className} onClick={onClick}>
          {children}
        </button>
      )}
      {tag === "button" && (
        <button className={className} onClick={onClick}>
          {children}
        </button>
      )}
      {tag === "span" && (
        <span className={className} onClick={onClick}>
          {children}
        </span>
      )}
    </>
  );
};
export default BaseButton;
