import Form from "../form";
import { StyledText } from "../../styles/typography";
import { StyledTextInput } from "../../styles/input";
import { StyledButton } from "../../styles/button";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Api } from "../../services/api";
import { toast } from "react-toastify";
import StyledForm from "./styles";
import { useAuthContext } from "../../contexts/AuthContext";

interface IAddressUpdated {
  street?: string;
  number?: string;
  complement?: string;
  state?: string;
  city?: string;
  zipcode?: string;
}

interface IEditAddressProps {
  setHandleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditAddressComponent = ({ setHandleModal }: IEditAddressProps) => {
  const { address, setAddress } = useAuthContext();

  const schema = z.object({
    street: z.string(),
    number: z.string(),
    complement: z.string(),
    state: z.string(),
    city: z.string(),
    zipcode: z.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddressUpdated>({
    resolver: zodResolver(schema),
    defaultValues: { ...address },
  });

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
        setHandleModal(false);
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
          <StyledButton
            onClick={() => setHandleModal(false)}
            buttonStyle="negative"
          >
            Cancelar
          </StyledButton>
          <StyledButton buttonStyle="brand1" submitType={true}>
            Salvar alterações
          </StyledButton>
        </div>
      </Form>
    </StyledForm>
  );
};

export default EditAddressComponent;
