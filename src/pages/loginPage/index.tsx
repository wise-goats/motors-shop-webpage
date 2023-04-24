import { Header } from "../../components/Header";
import { StyledButton } from "../../styles/button";
import { StyledText, StyledTitle } from "../../styles/typography";
import { StyledMain } from "./styles";
import { StyledTextInput } from "../../styles/input";
import Form from "../../components/form";
import FooterComponent from "../../components/Footer";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Link, useNavigate } from "react-router-dom";

import { Api } from "../../services/api";
import { toast } from "react-toastify";

interface ILogin {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const navigate = useNavigate();

  const login = async (data: ILogin) => {
    console.log(data);
    await Api.post("/login", data)
      .then((res) => {
        toast("Bem vindo", {
          type: "success",
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        localStorage.setItem("@MYTOKEN", res.data.token);
        navigate("/");
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
        console.log(err);
      });
  };

  const schema = z.object({
    email: z.string().email("Deve ser um email válido"),
    password: z.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({ resolver: zodResolver(schema) });

  return (
    <>
      <Header />
      <StyledMain>
        <Form onSubmit={handleSubmit(login)}>
          <StyledTitle tag="h2" fontSize={24} fontWeight={600}>
            Login
          </StyledTitle>
          <StyledText tag="label">
            Email
            <StyledTextInput
              type="email"
              //register={() => {}}
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
              //register={() => {}}
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

          <StyledButton buttonStyle="brand1">Entrar</StyledButton>
          <StyledText tag="p" fontSize={14} color="--grey-2">
            Ainda não possui conta?
          </StyledText>
          <Link to="/register">Cadastrar</Link>
        </Form>
      </StyledMain>
      <FooterComponent />
    </>
  );
};
