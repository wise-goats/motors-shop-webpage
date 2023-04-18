import { Link } from "react-router-dom";
import { StyledHeader } from "./style";
import logo from "../../assets/logo.svg";
import React, { useState } from "react";
import { StyledButton } from "../../styles/buttons";
import mokeProfile from "../../assets/mokedProfile.svg";
import { StyledText, StyledTitle } from "../../styles/typography";

interface IHeaderProps {
  children?: React.ReactNode;
}

export const HeaderComponent = ({ children }: IHeaderProps) => {
  const [user, setUser] = useState({ isSeller: true, name: "Josiel Luz" });
  const [toast, setToast] = useState(false);
  const [divProfile, setDivProfile] = useState("");

  return (
    <StyledHeader>
      <Link to={"/"}>
        <img src={logo} alt="logo" />
      </Link>
      <div
        onClick={(event) => {
          setToast(!toast);
        }}
        className={divProfile}
      >
        {!user ? (
          <>
            <StyledButton buttonStyle="light" buttonSize="default">
              Fazer login
            </StyledButton>
            <StyledButton buttonStyle="outline2" buttonSize="small">
              Cadastrar
            </StyledButton>
          </>
        ) : (
          <>
            <img src={mokeProfile} alt="Profile" />
            <StyledText tag="h3" color="--grey-2" className="profile">
              {user.name}
            </StyledText>
            <nav className={`${!toast && "hide_toast"} profirl_options`}>
              <StyledText tag="p" color="--grey-2">
                Editar Perfil
              </StyledText>
              <StyledText tag="p" color="--grey-2">
                Editar Endereço
              </StyledText>
              {user.isSeller && (
                <StyledText tag="p" color="--grey-2">
                  Meus Anúcio
                </StyledText>
              )}
              <StyledText tag="p" color="--grey-2">
                Sair
              </StyledText>
            </nav>
          </>
        )}
      </div>
      <button
        className="open_profile"
        onClick={() => {
          divProfile == "" ? setDivProfile("open_div") : setDivProfile("");
        }}
      >
        {divProfile == "" ? "=" : "X"}
      </button>
    </StyledHeader>
  );
};
