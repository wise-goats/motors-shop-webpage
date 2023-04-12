import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { StyledText, StyledTitle } from "./styles/typography";
import { StyledButton } from "./styles/buttons";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <App />
      {
        // --------MODELOS DE TEXTO E BOTOES-----------
        /* <StyledTitle tag="h1" color="--brand-1" fontWeight={700}>
        Texto h1
      </StyledTitle>
      <StyledTitle tag="h2" color="--alert-1" fontWeight={600}>
        Texto h2
      </StyledTitle>
      <StyledTitle tag="h3" color="--success-1" opacity={30}>
        Texto h3
      </StyledTitle>
      <StyledTitle tag="h4">Texto h4</StyledTitle>
      <StyledTitle tag="h5">Texto h5</StyledTitle>
      <StyledTitle tag="h6">Texto h6</StyledTitle>
      <StyledTitle tag="h7">Texto h7</StyledTitle>
      <StyledText tag="span">Texto span</StyledText>
      <StyledText tag="small">Texto small</StyledText>
      <StyledText tag="label">Texto label</StyledText>
      <StyledText tag="caption" color="--brand-1">
        Texto caption
      </StyledText>

      <StyledButton buttonStyle="grey1">Text</StyledButton>
      <StyledButton buttonStyle="negative">Text</StyledButton>
      <StyledButton buttonStyle="disabled">Text</StyledButton>
      <StyledButton buttonStyle="brand1">Text</StyledButton>
      <StyledButton buttonStyle="brandOpacity">Text</StyledButton>
      <StyledButton buttonStyle="light">Text</StyledButton>
      <StyledButton buttonStyle="outlineLight">Text</StyledButton>
      <StyledButton buttonStyle="outline1">Text</StyledButton>
      <StyledButton buttonStyle="outline2">Text</StyledButton>
      <StyledButton buttonStyle="outlineBrand">Text</StyledButton>
      <StyledButton buttonStyle="alert">Text</StyledButton>
      <StyledButton buttonStyle="success">Text</StyledButton>
      <StyledButton buttonStyle="brandDisabled">Text</StyledButton>
      <StyledButton>Text</StyledButton>
      <StyledButton buttonSize="big">Text</StyledButton>
      <StyledButton buttonSize="small">Text</StyledButton>
      <StyledButton buttonSize="default">Text</StyledButton> */
      }
    </BrowserRouter>
  </React.StrictMode>
);
