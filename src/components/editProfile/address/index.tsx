import Form from "../../form";
import { StyledText } from "../../../styles/typography";
import { StyledTextInput } from "../../../styles/input";
import { StyledButton } from "../../../styles/button";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Api } from "../../../services/api";
import { toast } from "react-toastify";
import StyledForm from "./styles";

interface IAddressUpdated {
  street?: string;
  number?: number;
  complement?: string;
  state?: string;
  city?: string;
  zipcode?: string;
}

const EditAddressComponent = () => {
  const schema = z.object({
    street: z.string(),
    number: z.number(),
    complement: z.string(),
    state: z.string(),
    city: z.string(),
    zipcode: z.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddressUpdated>({ resolver: zodResolver(schema) });

  const updateAddress = async (data: IAddressUpdated) => {
    await Api.patch("/users/address", data)
      .then((res) => {
        toast("Endereço alterado com sucesso", {
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
      <Form onSubmit={handleSubmit(updateAddress)}>
        <StyledText tag="p">Infomações de endereço</StyledText>
        <StyledText tag="label">
          CEP
          <StyledTextInput
            placeholder="Digite seu CEP"
            {...register("zipcode")}
          />
        </StyledText>
        <div>
          <StyledText tag="label">
            Estado
            <StyledTextInput
              placeholder="Digite seu estado"
              {...register("state")}
            />
          </StyledText>
          <StyledText tag="label">
            Cidade
            <StyledTextInput
              placeholder="Digite sua cidade"
              {...register("city")}
            />
          </StyledText>
        </div>
        <StyledText tag="label">
          Rua
          <StyledTextInput
            placeholder="Digite sua rua"
            {...register("street")}
          />
        </StyledText>
        <div>
          <StyledText tag="label">
            Número
            <StyledTextInput
              type="number"
              placeholder="Digite o número"
              {...register("number", { valueAsNumber: true })}
            />
          </StyledText>
          <StyledText tag="label">
            Complemento
            <StyledTextInput
              placeholder="Digitar complemento"
              {...register("complement")}
            />
          </StyledText>
        </div>

        <div>
          <StyledButton buttonStyle="negative">Cancelar</StyledButton>
          <StyledButton buttonStyle="brand1">Salvar alterações</StyledButton>
        </div>
      </Form>
    </StyledForm>
  );
};

export default EditAddressComponent;
