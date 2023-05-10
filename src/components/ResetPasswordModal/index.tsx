import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { StyledTextInput } from "../../styles/input";
import { StyledText } from "../../styles/typography";
import Form from "../form";
import { StyledButton } from "../../styles/button";
import StyledForm from "./styles";
import { Api } from "../../services/api";
import { toast } from "react-toastify";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledModalContainer } from "../Modal/style";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { useAuthContext } from "../../contexts/AuthContext";

interface IEmailReset {
  email: string;
}

const ResetPasswordForm = () => {
  const { setHandleModalResetPassword } = useAuthContext();
  const schema = z.object({
    email: z.string().email("Digite um email válido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IEmailReset>({ resolver: zodResolver(schema) });

  const sendingEmailToResetPassword = async (data: IEmailReset, id: any) => {
    await Api.post(`users/resetpassword`, data)
      .then((res) => {
        res?.data?.message &&
          toast.success(
            "Foi enviado um link para redefenir sua senha, confira a caixa de entrada do seu EMAIL.",
            { autoClose: 7000, position: "top-center" }
          );
        setHandleModalResetPassword(false);
        console.log(res);
      })
      .catch((err) => {
        toast.error(`${err.response.data.message}`);
      });
  };

  return (
    <StyledModalContainer>
      <StyledForm>
        <Form onSubmit={handleSubmit(sendingEmailToResetPassword)}>
          <span className="btnClose">
            <AiOutlineCloseSquare
              className="btnCloseReactIcon"
              onClick={() => setHandleModalResetPassword(false)}
            />
          </span>

          <StyledText tag="p">Recuperação de senha.</StyledText>

          <StyledText tag="label">
            Email:
            <StyledTextInput
              {...register("email")}
              placeholder="Digitar seu email"
            />
            <StyledText>{errors.email?.message}</StyledText>
          </StyledText>

          <StyledButton submitType buttonStyle="brand1">
            CONFIRMAR
          </StyledButton>
        </Form>
      </StyledForm>
    </StyledModalContainer>
  );
};

export default ResetPasswordForm;
