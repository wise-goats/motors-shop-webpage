import { StyledButton } from "../../styles/button";
import { StyledText, StyledTitle } from "../../styles/typography";
import { StyledMain } from "./styles";
import { StyledTextInput } from "../../styles/input";
import Form from "../../components/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthContext } from "../../contexts/AuthContext";
import { iUserRegister } from "../../interfaces";
import { userCreateSchema, userSchema } from "../../schemas/user.schemas";

export const RegisterPage = () => {
  const { registerUser } = useAuthContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iUserRegister>({ resolver: zodResolver(userCreateSchema) });
  console.log(errors);

  const newRegister = async (data: iUserRegister) => {
    registerUser(data);
    reset();
  };
  return (
    <>
      <StyledMain>
        <Form onSubmit={handleSubmit(newRegister)}>
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

          <StyledButton buttonStyle="brand1" submitType={true}>Finalizar cadastro</StyledButton>
        </Form>
      </StyledMain>
    </>
  );
};
