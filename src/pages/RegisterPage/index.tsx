import { HeaderComponent } from "../../components/header";
import { StyledButton } from "../../styles/button";
import { StyledText, StyledTitle } from "../../styles/typography";
import { StyledMain } from "./styles";
import { StyledTextInput } from "../../styles/input";
import Form from "../../components/form";
import FooterComponent from "../../components/Footer";
import { toast } from "react-toastify";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useNavigate } from "react-router-dom";

import { Api } from "../../services/api";

interface INewUserRequest {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  isAdm: boolean;
  phone: string;
  cpf: string;
  birthDate: string;
  isSeller: boolean;
  description: string;
  addresses: IAddress;
}

interface IAddress {
  street: string;
  number: string;
  complement: string;
  state: string;
  city: string;
  zipcode: string;
}

export const RegisterPage = () => {
  const navigate = useNavigate();

  const registerUser = async (data: any) => {
    data.addresses.number = parseInt(data.addresses.number);
    data?.isSeller === "true"
      ? (data.isSeller = true)
      : (data.isSeller = false);
    console.log(data);
    console.log("oi");

    await Api.post("users", data)
      .then((res) => {
        console.log(res);
        res.data.name &&
          toast.success("Registro realizado com sucesso!", {
            position: "top-center",
            autoClose: 2,
          });
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  const addressSchema = z.object({
    street: z.string(),
    number: z.string().regex(/^\d+$/),
    complement: z.string().optional(),
    state: z.string(),
    city: z.string(),
    zipcode: z.string(),
  });
  const schema = z
    .object({
      name: z.string(),
      email: z.string().email(),
      isSeller: z.string(),
      cpf: z
        .string()
        .max(11)
        .regex(/^\d{11}$/)
        .trim()
        .optional(),
      phone: z.string().max(16),
      birthDate: z.string(),
      description: z.string(),
      password: z.string().max(15).trim(),
      passwordConfirm: z.string().max(15).trim(),
      addresses: addressSchema,
    })
    .refine((data) => data.password === data.passwordConfirm, {
      message: "As senhas devem ser iguais!",
      path: ["passwordConfirm"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INewUserRequest>({ resolver: zodResolver(schema) });
  console.log(errors);
  return (
    <>
      <HeaderComponent />
      <StyledMain>
        <Form onSubmit={handleSubmit(registerUser)}>
          <StyledTitle tag="h1" fontSize={24} fontWeight={600}>
            Cadastro
          </StyledTitle>

          <StyledTitle tag="h2" fontSize={16} fontWeight={600}>
            Informações pessoais
          </StyledTitle>

          <StyledText tag="label">
            Nome
            <StyledTextInput
              type="text"
              {...register("name")}
              placeholder="Digitar seu nome"
            />
            <StyledText tag="span" fontSize={13} color="--alert-1">
              {errors.name?.message}
            </StyledText>
          </StyledText>

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
            CPF
            <StyledTextInput
              type="text"
              {...register("cpf")}
              placeholder="00000000000"
            />
            <StyledText tag="span" fontSize={13} color="--alert-1">
              {errors.cpf?.message}
            </StyledText>
          </StyledText>

          <StyledText tag="label">
            Celular
            <StyledTextInput
              type="text"
              {...register("phone")}
              placeholder="(DDD)90000-0000"
            />
            <StyledText tag="span" fontSize={13} color="--alert-1">
              {errors.phone?.message}
            </StyledText>
          </StyledText>

          <StyledText tag="label">
            Data de Nascimento
            <StyledTextInput
              type="date"
              {...register("birthDate")}
              placeholder="00/00/00"
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
                placeholder="Digitar descrição"
              />
              <StyledText tag="span" fontSize={13} color="--alert-1">
                {errors.description?.message}
              </StyledText>
            </label>
          </div>

          <StyledTitle tag="h2" fontSize={16} fontWeight={600}>
            Informações de endereço
          </StyledTitle>
          {/* ADDRESS */}

          <StyledText tag="label">
            CEP
            <StyledTextInput
              type="text"
              {...register("addresses.zipcode")}
              placeholder="00000000000"
            />
            <StyledText tag="span" fontSize={13} color="--alert-1">
              {errors.addresses?.zipcode?.message}
            </StyledText>
          </StyledText>

          <div className="containerDivIsSeller">
            <StyledText tag="label">
              Estado
              <StyledTextInput
                type="text"
                {...register("addresses.state")}
                placeholder="Digitar Estado"
              />
              <StyledText tag="span" fontSize={13} color="--alert-1">
                {errors.addresses?.state?.message}
              </StyledText>
            </StyledText>

            <StyledText tag="label">
              Cidade
              <StyledTextInput
                type="text"
                {...register("addresses.city")}
                placeholder="Digitar a cidade"
              />
              <StyledText tag="span" fontSize={13} color="--alert-1">
                {errors.addresses?.city?.message}
              </StyledText>
            </StyledText>
          </div>

          <StyledText tag="label">
            Rua
            <StyledTextInput
              type="text"
              {...register("addresses.street")}
              placeholder="Digitar a rua"
            />
            <StyledText tag="span" fontSize={13} color="--alert-1">
              {errors.addresses?.street?.message}
            </StyledText>
          </StyledText>

          <div className="containerDivIsSeller">
            <StyledText tag="label">
              Número
              <StyledTextInput
                type="text"
                {...register("addresses.number")}
                placeholder="Digitar numero"
              />
              <StyledText tag="span" fontSize={13} color="--alert-1">
                {errors.addresses?.number?.message}
              </StyledText>
            </StyledText>
            <StyledText tag="label">
              Complemento
              <StyledTextInput
                type="text"
                {...register("addresses.complement")}
                placeholder="Digitar complemento"
              />
              <StyledText tag="span" fontSize={13} color="--alert-1">
                {errors.addresses?.complement?.message}
              </StyledText>
            </StyledText>
          </div>

          <StyledTitle tag="h2" fontSize={16} fontWeight={600}>
            Tipo de conta
          </StyledTitle>

          <div className="containerDivIsSeller">
            <label className="labelIsSeller">
              <input type="radio" value="true" {...register("isSeller")} />
              Comprador
            </label>
            <label className="labelIsSeller">
              <input type="radio" value="false" {...register("isSeller")} />
              Anunciante
            </label>
            {errors.isSeller?.message}
          </div>

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

          <StyledText tag="label">
            Confirmar senha
            <StyledTextInput
              type="password"
              {...register("passwordConfirm")}
              placeholder="Digitar senha"
            />
            <StyledText tag="span" fontSize={13} color="--alert-1">
              {errors.passwordConfirm?.message}
            </StyledText>
          </StyledText>

          <StyledButton buttonStyle="brand1">Finalizar cadastro</StyledButton>
        </Form>
      </StyledMain>
      <FooterComponent />
    </>
  );
};
