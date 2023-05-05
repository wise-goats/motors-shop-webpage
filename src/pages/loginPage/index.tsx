import { Header } from "../../components/Header";
import { StyledButton } from "../../styles/button";
import { StyledText, StyledTitle } from "../../styles/typography";
import { StyledMain } from "./styles";
import { StyledTextInput } from "../../styles/input";
import Form from "../../components/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

interface ILogin {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const { userLogin } = useAuthContext();

  const schema = z.object({
    email: z.string().email("Deve ser um email válido"),
    password: z.string(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ILogin>({ resolver: zodResolver(schema) });

  const login = async (data: ILogin) => {
    userLogin(data);
    reset();
  };

  return (
    <>
      <StyledMain>
        <Form onSubmit={handleSubmit(login)}>
          <StyledTitle tag="h2" fontSize={24} fontWeight={600}>
            Login
          </StyledTitle>
          <StyledText tag="label">
            Email
            <StyledTextInput
              type="email"
              {...register("email")}
              placeholder="Digitar email"
            />
            <StyledText tag="span" fontSize={13} color="--alert-1">
              {errors.email?.message}
            </StyledText>
          </StyledText>
          <StyledText tag="label">
            Senha
            <StyledTextInput
              type="password"
              {...register("password")}
              placeholder="Digitar senha"
            />
            <StyledText tag="span" fontSize={13} color="--alert-1">
              {errors.password?.message}
            </StyledText>
          </StyledText>
          <StyledText tag="span" fontSize={14} color="--grey-2">
            Esqueci minha senha
          </StyledText>

          <StyledButton buttonStyle="brand1" submitType={true}>
            Entrar
          </StyledButton>
          <StyledText tag="p" fontSize={14} color="--grey-2">
            Ainda não possui conta?
          </StyledText>
          <Link to="/register">Cadastrar</Link>
        </Form>
      </StyledMain>
    </>
  );
};
