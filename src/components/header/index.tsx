import { Link, useNavigate } from "react-router-dom";
import { StyledHeader } from "./style";
import logo from "../../assets/logo.svg";
import React, { useState } from "react";
import { StyledButton } from "../../styles/button";
import mokeProfile from "../../assets/mokedProfile.svg";
import { StyledText, StyledTitle } from "../../styles/typography";
import { useAuthContext } from "../../contexts/AuthContext";
import Modal from "../Modal";
import EditAddressComponent from "../editAddress";
import UserUpdateForm from "../UserUpdateForm";

interface IHeaderProps {
  children?: React.ReactNode;
}

export const Header = ({ children }: IHeaderProps) => {
  // const [user, setUser] = useState({ isSeller: true, name: "Josiel Luz" });
  const { user, exit } = useAuthContext();
  const [toast, setToast] = useState(false);
  const [divProfile, setDivProfile] = useState("");
  const navigate = useNavigate();

  const [handleModal, setHandleModal] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string>();

  return (
    <StyledHeader>
      {handleModal && (
        <Modal
          title="Editar endereço"
          handleModal={() => setHandleModal(!handleModal)}
        >
          {modalContent == "address" && (
            <EditAddressComponent setHandleModal={setHandleModal} />
          )}
          {modalContent == "profile" && (
            <UserUpdateForm handleModal={setHandleModal} />
          )}
        </Modal>
      )}

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
            <StyledButton
              buttonStyle="light"
              buttonSize="default"
              onClick={() => {
                navigate("/login");
              }}
            >
              Fazer login
            </StyledButton>
            <StyledButton
              buttonStyle="outline2"
              buttonSize="small"
              onClick={() => {
                navigate("/register");
              }}
            >
              Cadastrar
            </StyledButton>
          </>
        ) : (
          <>
            <img src={mokeProfile} alt="Profile" />
            <StyledText tag="h3" color="--grey-2" className="profile">
              {user.name}
            </StyledText>
            <nav className={`${toast && "hide_toast"} profirl_options`}>
              <StyledText
                tag="p"
                color="--grey-2"
                onClick={() => {
                  setModalContent("profile");
                  setHandleModal(!handleModal);
                }}
              >
                Editar Perfil
              </StyledText>
              <StyledText
                onClick={() => {
                  setModalContent("address");
                  setHandleModal(!handleModal);
                }}
                tag="p"
                color="--grey-2"
              >
                Editar Endereço
              </StyledText>
              {user.isSeller && (
                <StyledText
                  onClick={() => navigate(`/profile/${user.id}`)}
                  tag="p"
                  color="--grey-2"
                >
                  Meus Anúcio
                </StyledText>
              )}
              <StyledText onClick={() => exit()} tag="p" color="--grey-2">
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
