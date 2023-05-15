import React, { useState } from "react";
import Form from "../form";
import { useAuthContext } from "../../contexts/AuthContext";
import { userSchema, userUpdateSchema } from "../../schemas/user.schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { iUserUpdate } from "../../interfaces";
import { StyledText, StyledTitle } from "../../styles/typography";
import { StyledTextInput } from "../../styles/input";
import { StyledButton } from "../../styles/button";
import { Api } from "../../services/api";
import { useNavigate } from "react-router-dom";

interface iUserUpdateFormProps {
  handleModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleDeleteModal?: () => void;
}

const UserUpdateForm = ({
  handleModal,
  handleDeleteModal,
}: iUserUpdateFormProps) => {
  const { user, updateUser } = useAuthContext();
  const [confirmDelete, setConfirmDelete] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<iUserUpdate>({
    resolver: zodResolver(userUpdateSchema),
  });
  const navigate = useNavigate();

  const update = async (data: iUserUpdate) => {
    for (let key in data) {
      if (data.hasOwnProperty(key) && data[key] === "") {
        delete data[key];
      }
    }

    updateUser(data);
    handleModal(false);
    reset();
  };

  const deleteUser = async () => {
    const res = await Api.delete(`users/`);
    window.localStorage.clear();
    console.log(res.data);
    navigate("/");
  };

  return (
    <Form onSubmit={handleSubmit(update)}>
      <StyledText tag="label">
        Nome
        <input type="text" {...register("name")} defaultValue={user?.name} />
        <StyledText tag="span" fontSize={13} color="--alert-1">
          {errors.name?.message}
        </StyledText>
      </StyledText>

      <StyledText tag="label">
        Email
        <input type="email" {...register("email")} defaultValue={user?.email} />
        <StyledText tag="span" fontSize={13} color="--alert-1">
          {errors.email?.message}
        </StyledText>
      </StyledText>

      <StyledText tag="label">
        CPF
        <input type="text" {...register("cpf")} defaultValue={user?.cpf} />
        <StyledText tag="span" fontSize={13} color="--alert-1">
          {errors.cpf?.message}
        </StyledText>
      </StyledText>

      <StyledText tag="label">
        Celular
        <input type="text" {...register("phone")} defaultValue={user?.phone} />
        <StyledText tag="span" fontSize={13} color="--alert-1">
          {errors.phone?.message}
        </StyledText>
      </StyledText>

      <StyledText tag="label">
        Data de Nascimento
        <input
          type="date"
          {...register("birthDate")}
          defaultValue={user?.birthDate}
        />
        <StyledText tag="span" fontSize={13} color="--alert-1">
          {errors.birthDate?.message}
        </StyledText>
      </StyledText>
      <div className="containerDescription">
        <label>
          Descrição
          <textarea
            {...register("description")}
            defaultValue={user?.description}
          />
          <StyledText tag="span" fontSize={13} color="--alert-1">
            {errors.description?.message}
          </StyledText>
        </label>
      </div>
      <StyledButton buttonStyle="negative" onClick={() => handleModal(false)}>
        Cancelar
      </StyledButton>
      {confirmDelete ? (
        <StyledButton
          buttonStyle="alert-inverse"
          onClick={async () => {
            setConfirmDelete(false);
            deleteUser();
          }}
        >
          Confirmar
        </StyledButton>
      ) : (
        <StyledButton
          buttonStyle="alert"
          onClick={() => setConfirmDelete(true)}
        >
          Excluir Perfil
        </StyledButton>
      )}

      <StyledButton buttonStyle="brand1" submitType={true}>
        Salvar Alterações
      </StyledButton>
    </Form>
  );
};

export default UserUpdateForm;
