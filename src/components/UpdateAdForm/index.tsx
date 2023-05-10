import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { StyledTextInput } from "../../styles/input";
import { StyledText } from "../../styles/typography";
import Form from "../form";
import { StyledButton } from "../../styles/button";
import StyledForm from "./style";

import { Api } from "../../services/api";
import { FipeApi } from "../../services/fipeApi";
import { toast } from "react-toastify";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface IFormCar {
  id: string;
  name: string;
  brand: string;
  year: string;
  fuel: number;
  value: number;
}

interface IAdForm {
  mileage: number;
  color: string;
  price: number;
  description: string;
}

interface IImage {
  image: string;
}

interface IUpgradeAdProps {
  id: string;
  handleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface iAdvertisement {
  id: string;
  brand: string;
  model: string;
  year: number;
  fuel: string;
  mileage: number;
  color: string;
  fipePrice: number;
  price: number;
  description: string;
  isActive: boolean;
}

const UpdateAdForm = ({ id, handleModal }: IUpgradeAdProps) => {
  const [advertisement, setAdvertisement] = useState<iAdvertisement>();

  const [cars, setCars] = useState<IFormCar[]>([]);
  const [carsName, setCarsName] = useState<string[]>([]);
  const [carsYear, setCarsYear] = useState<string[]>([]);
  const [carsFuel, setCarsFuel] = useState<number[]>([]);

  const [brand, setBrand] = useState<string>();
  const [name, setName] = useState<string>();
  const [year, setYear] = useState<string>();
  const [fuel, setFuel] = useState<number>();
  const [fipePrice, setFipePrice] = useState<number>();
  const [image, setImage] = useState<IImage[]>([]);
  const [isActive, setIsActive] = useState<boolean>(true);

  const [showFipePrice, setShowFipePrice] = useState<string>();
  const [imgCount, setImgCount] = useState<number>(1);

  const brands = [
    "chevrolet",
    "citroën",
    "fiat",
    "ford",
    "honda",
    "hyundai",
    "nissan",
    "peugeot",
    "renault",
    "toyota",
    "volkswagen",
  ];

  const schema = z.object({
    mileage: z.number(),
    color: z.string(),
    price: z.number(),
    description: z.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAdForm>({ resolver: zodResolver(schema) });

  const getImgUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    for (let i = 0; i < image.length; i++) {
      if (
        (image.length > 0 && e.target.value == image[i].image) ||
        e.target.value == ""
      ) {
        return {};
      }
    }

    setImage([...image, { image: e.target.value }]);
  };

  const updateAdeAdvertisement = async (formData: any) => {
    let fuelName = "Flex";
    if (fuel == 2) {
      fuelName = "Híbrido";
    } else if (fuel == 3) {
      fuelName = "Elétrico";
    }
    const data = {
      ...formData,
      brand: brand,
      model: name,
      year: Number(year),
      fuel: fuelName,
      fipePrice: fipePrice,
      images: image,
      isActive: isActive,
    };

    await Api.patch(`advertisement/${id}`, data)
      .then((res) => {
        handleModal(false);
        toast.success("Anúncio editado com sucesso");
      })
      .catch((err) => {
        toast.error(`${err.responce.data.message}`);
      });
  };

  const deleteAdvertisement = async () => {
    await Api.delete(`advertisement/${id}`)
      .then((res) => {
        handleModal(false);
        toast.success("Anúncio deletado com sucesso");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Falha ao deletar anúncio");
      });
  };

  const getCars = async (brand: string) => {
    await FipeApi.get(`/?brand=${brand}`)
      .then((res) => {
        setCars(res.data);
      })
      .catch((err) => console.log(err));
  };

  const addImputImage = () => {
    setImgCount(imgCount + 1);
  };

  useEffect(() => {
    const getAdvertisement = async () => {
      await Api.get(`advertisement/${id}`).then((res) => {
        setAdvertisement(res.data);
        setImage(res.data.images);
        const fuel = res.data.fuel;
        if (fuel == "Flex") {
          setFuel(1);
        } else if (fuel == "Híbrido") {
          setFuel(2);
        } else if (fuel == "Elétrico") {
          setFuel(3);
        }
      });
    };

    getAdvertisement();

    getCars(brands[1]);
    setBrand(brands[1]);
  }, []);

  useEffect(() => {
    const getFipePrice = async () => {
      await FipeApi(
        `/unique/?brand=${brand}&name=${name}&year=${year}&fuel=${fuel}`
      )
        .then((res) => {
          const fipe = String(res.data.value).split("");
          fipe.splice(-3, 0, ".");
          setShowFipePrice(fipe.join(""));

          setFipePrice(res.data.value);
        })
        .catch((err) => {
          setFipePrice(undefined);
          setShowFipePrice(undefined);
        });
    };

    getFipePrice();
  }, [year, fuel, name]);

  useEffect(() => {
    const getName = () => {
      let arr: string[] = [];

      cars.forEach((elen) => {
        if (!arr.includes(elen.name)) {
          arr.push(elen.name);
        }
      });

      setCarsName(arr);
    };
    const getYear = () => {
      let arr: string[] = [];

      cars.forEach((elen) => {
        if (!arr.includes(elen.year)) {
          arr.push(elen.year);
        }
      });

      setCarsYear(arr);
    };

    const getFuel = () => {
      let arr: number[] = [];

      cars.forEach((elen) => {
        if (!arr.includes(elen.fuel)) {
          arr.push(elen.fuel);
        }
      });

      setCarsFuel(arr);
    };

    getName();
    getYear();
    getFuel();
  }, [cars]);

  return (
    <StyledForm>
      <Form onSubmit={handleSubmit(updateAdeAdvertisement)}>
        <StyledText tag="p">Informações do veícolo</StyledText>
        <StyledText tag="label">
          Marca
          <select
            onBlur={(e) => {
              getCars(e.target.value);
              setBrand(e.target.value);
            }}
          >
            <option>Selecionar</option>
            {brands.map((elen) => {
              return (
                <option key={elen} value={elen}>
                  {elen}
                </option>
              );
            })}
          </select>
        </StyledText>
        <StyledText tag="label">
          modelo
          <select
            onBlur={(e) => {
              setName(e.target.value);
            }}
          >
            <option>Selecionar</option>
            {carsName.map((elem) => {
              return (
                <option key={elem} value={elem}>
                  {elem}
                </option>
              );
            })}
          </select>
        </StyledText>
        <div>
          <StyledText tag="label">
            Ano
            <select
              onBlur={(e) => {
                setYear(e.target.value);
              }}
            >
              <option>Selecionar</option>
              {carsYear.map((elem) => {
                return (
                  <option key={elem} value={elem}>
                    {elem}
                  </option>
                );
              })}
            </select>
          </StyledText>
          <StyledText tag="label">
            Combustivel
            <select
              onBlur={(e) => {
                setFuel(Number(e.target.value));
              }}
            >
              <option>Selecionar</option>
              {carsFuel.map((elem) => {
                return (
                  <option key={elem} value={elem}>
                    {elem == 1 && "Flex"}
                    {elem == 2 && "Híbrido"}
                    {elem == 3 && "Elétrico"}
                  </option>
                );
              })}
            </select>
          </StyledText>
          <StyledText tag="label">
            Quilometragem
            <StyledTextInput
              {...register("mileage", { valueAsNumber: true })}
              type="number"
              placeholder={`${advertisement?.mileage}`}
            />
          </StyledText>
          <StyledText tag="span" fontSize={13} color="--alert-1">
            {errors.mileage?.message}
          </StyledText>
          <StyledText tag="label">
            Cor
            <StyledTextInput
              {...register("color")}
              placeholder={`${advertisement?.color}`}
            />
          </StyledText>
          <StyledText tag="span" fontSize={13} color="--alert-1">
            {errors.color?.message}
          </StyledText>
          <StyledText tag="label">
            Preço tabela FIPE
            <StyledText tag="p" className="fipe_price">
              {showFipePrice !== undefined
                ? `R$ ${showFipePrice},00`
                : "R$ 00,00"}
            </StyledText>
          </StyledText>
          <StyledText tag="label">
            Preço
            <StyledTextInput
              {...register("price", { valueAsNumber: true })}
              type="number"
              placeholder={`${advertisement?.price}`}
            />
          </StyledText>
        </div>
        <StyledText tag="label">
          Descrição
          <textarea
            {...register("description")}
            placeholder={`${advertisement?.description}`}
          />
        </StyledText>
        <StyledText tag="p">
          Publicado
          <div className="btn_is_active">
            <StyledButton
              onClick={() => setIsActive(true)}
              buttonStyle={isActive ? "brand1" : "outline1"}
            >
              Sim
            </StyledButton>
            <StyledButton
              onClick={() => setIsActive(false)}
              buttonStyle={isActive ? "outline1" : "brand1"}
            >
              Não
            </StyledButton>
          </div>
        </StyledText>
        <StyledText tag="label">
          Imagen da capa
          <StyledTextInput
            onBlur={(e) => getImgUrl(e)}
            placeholder="https://image.com"
          />
        </StyledText>
        {Array.from({ length: imgCount }, (_, index) => {
          return (
            <StyledText key={index} tag="label">
              {`${index + 1}° imagen da galeria`}
              <StyledTextInput
                onBlur={(e) => getImgUrl(e)}
                placeholder="https://image.com"
              />
            </StyledText>
          );
        })}

        <StyledButton
          onClick={() => {
            addImputImage();
          }}
          buttonStyle="brandOpacity"
          buttonSize="small"
        >
          Adicionar campo para imagem da galeria
        </StyledButton>
        <div>
          <StyledButton
            onClick={() => deleteAdvertisement()}
            buttonStyle="alert"
          >
            Excluir Anúncio
          </StyledButton>
          <button className="btn_submit" type="submit">
            Salvar Alterações
          </button>
        </div>
      </Form>
    </StyledForm>
  );
};

export default UpdateAdForm;
