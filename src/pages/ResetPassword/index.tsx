import React from "react";
import { Api } from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../../components/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { StyledText } from "../../styles/typography";
import { StyledButton } from "../../styles/button";
import { StyledTextInput } from "../../styles/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledModal } from "./style";
interface INewPassword {
  password: string;
}
const ResetPasswordPage = () => {
  const { id: resetToken } = useParams();
  const navigate = useNavigate();

  const schema = z.object({
    password: z.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INewPassword>({ resolver: zodResolver(schema) });

  const passwordChange = async (data: INewPassword, id: any) => {
    await Api.post(`users/validatetoken/${id}`, data)
      .then((res) => {
        res?.data?.message &&
          toast.success("Senha alterada. Seja bem vindo(a) novamente!", {
            autoClose: 7000,
            position: "top-center",
          });
        navigate("/login");
      })
      .catch((err) => {
        toast.error(`${err.response.data.message}`);
      });
  };
  const onSubmitCreateNewPassword = handleSubmit((data) => {
    passwordChange(data, resetToken); // passa o token como argumento aqui
  });
  return (
    <StyledModal>
      <Form onSubmit={onSubmitCreateNewPassword}>
        <StyledText tag="p">
          Tudo certo. Agora falta apenas criar uma nova senha
        </StyledText>

        <StyledText tag="label">
          Nova Senha:
          <StyledTextInput
            {...register("password")}
            placeholder="Digitar sua nova senha"
          />
          <StyledText>{errors.password?.message}</StyledText>
        </StyledText>

        <StyledButton submitType buttonStyle="brand1">
          Alterar Senha
        </StyledButton>
      </Form>
    </StyledModal>
  );
};

export default ResetPasswordPage;
