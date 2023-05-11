import styled, { css } from "styled-components";
import BaseButton from "../components/button";

export const StyledButton = styled(BaseButton)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 28px;
  gap: 10px;
  border: 1.5px solid transparent;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;

  ${({ buttonStyle }) => {
    switch (buttonStyle) {
      case "grey1":
        return css`
          background-color: var(--grey-0);
          color: var(--white-fixed);

          &&:hover {
            background-color: var(--grey-1);
            border-color: var(--grey-1);
          }
        `;
      case "negative":
        return css`
          background-color: var(--grey-6);
          color: var(--grey-2);

          &&:hover {
            background-color: var(--grey-5);
            border-color: var(--grey-5);
          }
        `;
      case "disabled":
        return css`
          background-color: var(--grey-5);
          color: var(--white-fixed);
          cursor: not-allowed;
        `;
      case "brand1":
        return css`
          background-color: var(--brand-1);
          color: var(--white-fixed);

          &&:hover {
            background-color: var(--brand-2);
            border-color: var(--brand-2);
          }
        `;
      case "brandOpacity":
        return css`
          background-color: var(--brand-4);
          color: var(--brand-1);
        `;
      case "light":
        return css`
          background-color: var(--grey-10);
          color: var(--grey-1);
        `;
      case "outlineLight":
        return css`
          background-color: transparent;
          color: var(--grey-10);

          &&:hover {
            background-color: var(--grey-10);
            border-color: var(--grey-10);
            color: var(--grey-1);
          }
        `;
      case "outline1":
        return css`
          background-color: transparent;
          color: var(--grey-1);
          border-color: var(--grey-1);

          &&:hover {
            background-color: var(--grey-1);
            border-color: var(--grey-1);
            color: var(--white-fixed);
          }
        `;
      case "outline2":
        return css`
          background-color: transparent;
          color: var(--grey-2);
          border-color: var(--grey-4);

          &&:hover {
            background-color: var(--grey-1);
            border-color: var(--grey-1);
            color: var(--white-fixed);
          }
        `;
      case "outlineBrand":
        return css`
          background-color: transparent;
          color: var(--brand-1);
          border-color: var(--brand-1);

          &&:hover {
            background-color: var(--brand-4);
          }
        `;
      case "alert":
        return css`
          background-color: var(--alert-3);
          color: var(--alert-1);
          border-color: var(--alert-3);

          &&:hover {
            background-color: var(--alert-2);
            border-color: var(--alert-2);
          }
        `;
      case "alert-inverse":
        return css`
          background-color: var(--alert-1);
          color: var(--alert-3);
          border-color: var(--alert-1);
        `;
      case "success":
        return css`
          background-color: var(--success-3);
          color: var(--success-1);
          border-color: var(--success-2);

          &&:hover {
            background-color: var(--success-2);
            border-color: var(--success-2);
          }
        `;
      case "brandDisabled":
        return css`
          background-color: var(--brand-3);
          color: var(--brand-4);
          cursor: not-allowed;
        `;
      default:
        return css`
          background-color: var(--brand-1);
          color: var(--white-fixed);

          &&:hover {
            background-color: var(--brand-2);
            border-color: var(--brand-2);
          }
        `;
    }
  }}

  ${({ buttonSize }) => {
    switch (buttonSize) {
      case "big":
        return css`
          width: 279px;
          height: 48px;
        `;
      case "default":
        return css`
          width: 146px;
          height: 48px;
        `;
      case "small":
        return css`
          width: 119px;
          height: 38px;
        `;
      default:
        return css`
          width: 146px;
          height: 48px;
        `;
    }
  }}
`;
