import {
  StyledPageProductDescriptionMobile,
  StyledPageProductDescriptionDesktop,
} from "./style";
import { advertisementsMock, advertiserMock } from "../../services/mock";
import car from "../../assets/EXTERIOR.png";
import { StyledText, StyledTitle } from "../../styles/typography";
import { StyledButton } from "../../styles/button";
import Input from "../input";
import { Header } from "../Header";
import { Api } from "../../services/api";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";

interface userCardInformations {
  name: string;
  id: string;
  description: string;
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
  const [advertisementDescription, setAdvertisementDescription] =
    useState<Advertisement>();

  const { selectedCarDescriptionId } = useAuthContext();
  useEffect(() => {
    async function getAdvertisementByIdService(id: string) {
      try {
        return await Api.get(`advertisement/${id}`, {
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          console.log(res.data, "entrou-description-THEN");
          setAdvertisementDescription(res.data);
          return;
        });
      } catch (error) {
        console.log(error, "description");
        return;
      }
    }
    getAdvertisementByIdService(selectedCarDescriptionId);
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
              src={advertisementDescription?.images[0].image}
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
          <StyledButton buttonStyle="brand1">Comprar</StyledButton>
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
          <StyledButton buttonStyle="grey1">Ver todos anuncios</StyledButton>
        </div>

        <div className="containerCommentInformation">
          <div className="containerUserNewComment">
            <span className="initialsOfNameInCircleNewComment">TA</span>
            <StyledTitle tag="span">{advertiserMock.name}</StyledTitle>
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
                src={advertisementDescription?.images[0].image}
              />
            </figure>
          </div>
          <div className="containerInformationsCar">
            <span>{advertisementDescription?.model}</span>
            <div className="containerSpecialText">
              <span className="specialText">{advertisementsMock[0].year}</span>
              <span className="specialText">
                {advertisementDescription?.mileage}KM
              </span>
            </div>
            <StyledText fontWeight={600} tag="p">
              R$ {advertisementDescription?.price}
            </StyledText>
            <StyledButton buttonStyle="brand1">Comprar</StyledButton>
          </div>

          <div className="containerDescriptionCar">
            <StyledTitle tag="span">Descrição</StyledTitle>
            <StyledText tag="h7">
              {advertisementDescription?.description}
            </StyledText>
          </div>

          <div className="containerCommentInformation">
            <div className="containerUserNewComment">
              <span className="initialsOfNameInCircleNewComment">TA</span>
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
            <span className="initialsOfNameInCircle">TA</span>
            <StyledTitle tag="span">{advertiserMock.name}</StyledTitle>
            <StyledText tag="h7">
              {advertisementDescription?.user.description}
            </StyledText>
            <StyledButton buttonStyle="grey1">Ver todos anuncios</StyledButton>
          </div>
        </div>
      </StyledPageProductDescriptionDesktop>
    </>
  );
};
export default PageProductDescriptionComponent;
