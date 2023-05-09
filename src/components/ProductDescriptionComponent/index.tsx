import {
  StyledPageProductDescriptionMobile,
  StyledPageProductDescriptionDesktop,
} from "./style";
import { StyledText, StyledTitle } from "../../styles/typography";
import { StyledButton } from "../../styles/button";
import Input from "../input";
import { Header } from "../Header";
import { Api } from "../../services/api";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import { Params } from "react-router-dom";

interface userCardInformations {
  name: string;
  id: string;
  description: string;
  phone: string;
}
interface image {
  image: string;
  id: string;
}
interface Advertisement {
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
  images: image[];
  user: userCardInformations;
}

const PageProductDescriptionComponent = () => {
  const { id } = useParams<Params>();
  const [advertisementDescription, setAdvertisementDescription] =
    useState<Advertisement>();
  const navigate = useNavigate();

  const handleBuyButtonClick = () => {
    const phoneNumber = advertisementDescription?.user.phone;
    const message = `Olá, tenho interesse no carro ${advertisementDescription?.model} anunciado no site.`; // mensagem para enviar ao vendedor
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const { selectedCarDescriptionId } = useAuthContext();
  useEffect(() => {
    async function getAdvertisementByIdService(id: any) {
      console.log(id);
      if (id === undefined) {
        console.log("undefined");
        navigate("/");
      }
      try {
        return await Api.get(`advertisement/${id}`, {
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          setAdvertisementDescription(res.data);
          return;
        });
      } catch (error) {
        // console.log(error, "description");
        navigate("/");
        return;
      }
    }
    getAdvertisementByIdService(id);
  }, []);

  const getInitials = (fullName: string): string => {
    const names = fullName.split(" ");
    const initials = names
      .slice(0, 2)
      .map((name) => name.charAt(0))
      .join("");
    return initials;
  };

  return (
    <>
      <StyledPageProductDescriptionMobile>
        <div className="containerMobileImage">
          <figure>
            <img
              className="imageCenter"
              src={advertisementDescription?.images[0]?.image}
              alt={`Foto de anuncio de carro, modelo ${advertisementDescription?.model}`}
            />
          </figure>
        </div>
        <div className="containerInformationsCar">
          <span>{advertisementDescription?.model}</span>
          <div className="containerSpecialText">
            <span className="specialText">
              {advertisementDescription?.year}
            </span>
            <span className="specialText">
              {advertisementDescription?.mileage}KM
            </span>
          </div>
          <StyledText fontWeight={600} tag="p">
            R$ {advertisementDescription?.price}
          </StyledText>
          <StyledButton buttonStyle="brand1" onClick={handleBuyButtonClick}>
            Comprar
          </StyledButton>
        </div>

        <div className="containerDescriptionCar">
          <StyledTitle tag="span">Descrição</StyledTitle>
          <StyledText tag="h7">
            {advertisementDescription?.description}
          </StyledText>
        </div>

        <div className="containerImagesCar">
          <StyledTitle tag="span">Fotos</StyledTitle>

          <ul>
            {advertisementDescription?.images.map((image, index) => (
              <li key={index}>
                <img src={`${image.image}`} alt="" />
              </li>
            ))}
          </ul>
        </div>

        <div className="containerUserInformation">
          <span className="initialsOfNameInCircle">
            {getInitials(
              advertisementDescription ? advertisementDescription.user.name : ""
            )}
          </span>
          <StyledTitle tag="span">
            {advertisementDescription?.user.name}
          </StyledTitle>
          <StyledText tag="h7">
            {advertisementDescription?.user.description}
          </StyledText>
          <StyledButton
            buttonStyle="grey1"
            onClick={() => {
              navigate(`/profile/:id`);
            }}
          >
            Ver todos anuncios
          </StyledButton>
        </div>

        <div className="containerCommentInformation">
          <div className="containerUserNewComment">
            <span className="initialsOfNameInCircleNewComment">
              {getInitials(advertisementDescription?.user.name || "")}
            </span>
            <StyledTitle tag="span">
              {advertisementDescription?.user.name}
            </StyledTitle>
          </div>

          <Input
            register={() => {}}
            type="textarea"
            placeholder="Digite algo..."
          />
          <StyledButton buttonStyle="brand1">Comentar</StyledButton>
          <div className="automaticComment">
            <button>Gostei muito!</button>
            <button>Incrível!</button>
            <button>Recomendarei para meus amigos!</button>
          </div>
        </div>
      </StyledPageProductDescriptionMobile>

      <StyledPageProductDescriptionDesktop>
        <div className="containerOneDesktop">
          <div className="containerMobileImage">
            <figure>
              <img
                className="imageCenter"
                src={advertisementDescription?.images[0]?.image}
              />
            </figure>
          </div>
          <div className="containerInformationsCar">
            <span>{advertisementDescription?.model}</span>
            <div className="containerSpecialText">
              <span className="specialText">
                {advertisementDescription?.year}
              </span>
              <span className="specialText">
                {advertisementDescription?.mileage}KM
              </span>
            </div>
            <StyledText fontWeight={600} tag="p">
              R$ {advertisementDescription?.price}
            </StyledText>
            <StyledButton buttonStyle="brand1" onClick={handleBuyButtonClick}>
              Comprar
            </StyledButton>
          </div>

          <div className="containerDescriptionCar">
            <StyledTitle tag="span">Descrição</StyledTitle>
            <StyledText tag="h7">
              {advertisementDescription?.description}
            </StyledText>
          </div>

          <div className="containerCommentInformation">
            <div className="containerUserNewComment">
              <span className="initialsOfNameInCircleNewComment">
                {getInitials(advertisementDescription?.user.name || "")}
              </span>
              <StyledTitle tag="span">
                {advertisementDescription?.user.name}
              </StyledTitle>
            </div>

            <Input
              register={() => {}}
              type="textarea"
              placeholder="Digite algo..."
            />
            <StyledButton buttonStyle="brand1">Comentar</StyledButton>
            <div className="automaticComment">
              <button>Gostei muito!</button>
              <button>Incrível!</button>
              <button>Recomendarei para meus amigos!</button>
            </div>
          </div>
        </div>
        <div className="containerDesktop">
          <div className="containerImagesCar">
            <StyledTitle tag="span">Fotos</StyledTitle>

            <ul>
              {advertisementDescription?.images.map((image, index) => (
                <li key={index}>
                  <img
                    src={image.image}
                    alt={`Imagem do carro de modelo${advertisementDescription?.model}`}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="containerUserInformation">
            <span className="initialsOfNameInCircle">
              {getInitials(advertisementDescription?.user.name || "")}
            </span>
            <StyledTitle tag="span">
              {advertisementDescription?.user.name}
            </StyledTitle>
            <StyledText tag="h7">
              {advertisementDescription?.user.description}
            </StyledText>
            <StyledButton
              buttonStyle="grey1"
              onClick={() => {
                navigate(`/profile/${advertisementDescription?.user?.id}`);
              }}
            >
              Ver todos anuncios
            </StyledButton>
          </div>
        </div>
      </StyledPageProductDescriptionDesktop>
    </>
  );
};
export default PageProductDescriptionComponent;
