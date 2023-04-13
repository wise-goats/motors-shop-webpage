import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { StyledText, StyledTitle } from "./styles/typography";
import { StyledButton } from "./styles/button";
import { StyledTextArea, StyledTextInput } from "./styles/input";
import Input from "./components/input";
import { StyledSelect } from "./styles/select";
import Form from "./components/form";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <App />
      // --------MODELOS DE COMPONENTES BASE-----------
      <Form
        onSubmit={() => {
          return console.log("oi");
        }}
      >
        <Input register={() => {}} placeholder="Digite algo..." />
        <Input
          register={() => {}}
          type="password"
          placeholder="Digite algo..."
        />
        <Input
          register={() => {}}
          type="textarea"
          placeholder="Digite algo..."
        />
        <StyledSelect name="select">
          <option value="">Selecione um valor...</option>
          <option value="">2</option>
        </StyledSelect>
        <button type="submit">oioioi</button>
      </Form>
      <StyledTitle tag="h1" color="--brand-1" fontWeight={700}>
        Texto h1
      </StyledTitle>
      <br />
      <StyledTitle tag="h2" color="--alert-1" fontWeight={600}>
        Texto h2
      </StyledTitle>
      <br />
      <StyledTitle tag="h3" color="--success-1" opacity={30}>
        Texto h3
      </StyledTitle>
      <br />
      <StyledTitle tag="h4">Texto h4</StyledTitle>
      <br />
      <StyledTitle tag="h5">Texto h5</StyledTitle>
      <br />
      <StyledTitle tag="h6">Texto h6</StyledTitle>
      <br />
      <StyledTitle tag="h7">Texto h7</StyledTitle>
      <br />
      <StyledText tag="span">Texto span</StyledText>
      <br />
      <StyledText tag="small">Texto small</StyledText>
      <br />
      <StyledText tag="label">Texto label</StyledText>
      <br />
      <StyledText tag="caption" color="--brand-1">
        Texto caption
      </StyledText>
      <br />
      <StyledButton buttonStyle="grey1">Text</StyledButton>
      <br />
      <StyledButton buttonStyle="negative">Text</StyledButton>
      <br />
      <StyledButton buttonStyle="disabled">Text</StyledButton>
      <br />
      <StyledButton buttonStyle="brand1">Text</StyledButton>
      <br />
      <StyledButton buttonStyle="brandOpacity">Text</StyledButton>
      <br />
      <StyledButton buttonStyle="light">Text</StyledButton>
      <br />
      <StyledButton buttonStyle="outlineLight">Text</StyledButton>
      <br />
      <StyledButton buttonStyle="outline1">Text</StyledButton>
      <br />
      <StyledButton buttonStyle="outline2">Text</StyledButton>
      <br />
      <StyledButton buttonStyle="outlineBrand">Text</StyledButton>
      <br />
      <StyledButton buttonStyle="alert">Text</StyledButton>
      <br />
      <StyledButton buttonStyle="success">Text</StyledButton>
      <br />
      <StyledButton buttonStyle="brandDisabled">Text</StyledButton>
      <br />
      <StyledButton>Text</StyledButton>
      <br />
      <StyledButton buttonSize="big">Text</StyledButton>
      <br />
      <StyledButton buttonSize="small">Text</StyledButton>
      <br />
      <StyledButton buttonSize="default">Text</StyledButton>
    </BrowserRouter>
  </React.StrictMode>
);
