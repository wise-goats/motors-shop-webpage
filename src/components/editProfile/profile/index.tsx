import Form from "../../form";
import { StyledText } from "../../../styles/typography";
import { StyledTextInput } from "../../../styles/input";
import { StyledButton } from "../../../styles/button";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { Api } from "../../../services/api";
import { toast } from "react-toastify";
import StyledForm from "./styles";

interface IEditProfileForm {
  name?: string;
  email?: string;
  phone?: string;
  cpf?: string;
  birthDate?: string;
  description?: string;
}

const EditProfileComponent = () => {
  const [birthDate, setBirthDate] = useState();

  const schema = z.object({
    name: z.string().nullable(),
    email: z.string().nullable(),
    phone: z.string().nullable(),
    cpf: z.string().nullable(),
    birthDate: z.string().nullable(),
    description: z.string().nullable(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEditProfileForm>({ resolver: zodResolver(schema) });

  const updateUser = async (data: IEditProfileForm) => {
    await Api.patch("/users", data)
      .then((res) => {
        toast("Usuario editado com sucesso", {
          type: "error",
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => {
        toast(`${err.message}`, {
          type: "error",
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const deleteUser = async () => {
    await Api.delete("users")
      .then((res) => {
        toast("Usuario excluído com sucesso", {
          type: "error",
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => {
        toast(`${err.message}`, {
          type: "error",
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <StyledForm>
      <Form onSubmit={handleSubmit(updateUser)}>
        <StyledText tag="p">Infomações pessoais</StyledText>
        <StyledText tag="label">
          Nome
          <StyledTextInput
            placeholder="Digite seu nome"
            {...register("name")}
          />
        </StyledText>
        <StyledText tag="label">
          Email
          <StyledTextInput
            placeholder="Digite seu email"
            {...register("email")}
          />
        </StyledText>
        <StyledText tag="label">
          CPF
          <StyledTextInput placeholder="Digite seu cpf" {...register("cpf")} />
        </StyledText>
        <StyledText tag="label">
          Celular
          <StyledTextInput
            placeholder="Digite seu número de telefone"
            {...register("phone")}
          />
        </StyledText>
        <StyledText tag="label">
          Data de nacimento
          <StyledTextInput
            type="date"
            placeholder="dd/mm/yyyy"
            {...register("birthDate")}
          />
          <StyledText tag="span" color="--alert-1">
            {errors.birthDate?.message}
          </StyledText>
        </StyledText>
        <StyledText tag="label">
          Descrição
          <textarea
            placeholder="Digitar descrição"
            {...register("description")}
          />
        </StyledText>
        <div className="button_box">
          <StyledButton buttonStyle="negative">Cancelar</StyledButton>
          <StyledButton
            className="delete_btn"
            buttonStyle="alert"
            onClick={() => deleteUser()}
          >
            Excluir Perfil
          </StyledButton>
          <StyledButton buttonStyle="brand1">Salvar alterações</StyledButton>
        </div>
      </Form>
    </StyledForm>
  );
};

export default EditProfileComponent;
