import { StyledCommomProfilePage, StyledProfilePage } from "./style";
import { StyledText, StyledTitle } from "../../styles/typography";
import { StyledButton } from "../../styles/button";
import { useEffect, useState } from "react";
import { Api } from "../../services/api";
import { useAuthContext } from "../../contexts/AuthContext";
import { Params, useParams } from "react-router-dom";

interface userCardInformations {
  name: string;
  id: string;
}
interface image {
  image: string;
  id: string;
}
interface CardCar {
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
}

interface User {
  id: string;
  name: string;
  email: string;
  isSeller: boolean;
  phone: string;
  description: string;
  advertisement: Advertisement[];
}
const ProfilePageComponent = () => {
  const { selectedCarId, user } = useAuthContext();
  const [carUserCommom, setCarUserCommom] = useState<User>();

  const getInitials = (fullName: string): string => {
    const names = fullName.split(" ");
    const initials = names
      .slice(0, 2)
      .map((name) => name.charAt(0))
      .join("");
    return initials;
  };
  const { id } = useParams<Params>();
  useEffect(() => {
    async function dataCardListProfile(id: any) {
      try {
        return await Api.get(`users/${id}`, {
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res) => {
          setCarUserCommom(res.data);
          return;
        });
      } catch (error) {
        console.log(error);
        return;
      }
    }
    dataCardListProfile(id);
  }, []);

  return selectedCarId === user?.id ? (
    <>
      <StyledProfilePage>
        <div className="containerInformationsUser">
          <div className="containerSecundary">
            <span className="imageCicleName">SL</span>
            <div className="containerName">
              <span>{carUserCommom?.name}</span>
              <span className="specialText">Anunciante</span>
            </div>
            <StyledText tag="h7">{carUserCommom?.description}</StyledText>

            <StyledButton buttonStyle="outlineBrand">
              Criar anuncio
            </StyledButton>
          </div>
        </div>

        <ul>
          {carUserCommom?.advertisement.map((car) => (
            <li>
              <figure>
                <img
                  className="imgCarCard"
                  src={`${car.images[0].image}`}
                  alt={`imagem ilustrativa de carro modelo${car?.model}`}
                />
              </figure>
              <span>{car?.model}</span>

              <StyledText tag="h7">{car?.description}</StyledText>
              <div className="containerCarInformations">
                <div>
                  <span className="specialTextCard">{car?.mileage} KM</span>
                  <span className="specialTextCard">{car?.year}</span>
                </div>
                <StyledText fontWeight={600} tag="p">
                  R$ {car?.price}
                </StyledText>
              </div>
              <div className="containerBtns">
                <StyledButton buttonStyle="outline1">Editar</StyledButton>
                <StyledButton buttonStyle="outline1">Ver detalhes</StyledButton>
              </div>
            </li>
          ))}
        </ul>
      </StyledProfilePage>
    </>
  ) : (
    <>
      <StyledCommomProfilePage>
        <div className="containerInformationsUser">
          <div className="containerSecundary">
            <span className="imageCicleName">
              {getInitials(carUserCommom ? carUserCommom?.name : "")}
            </span>
            <div className="containerName">
              <span>{carUserCommom?.name}</span>
              <span className="specialText">Anunciante</span>
            </div>
            <StyledText tag="h7">{carUserCommom?.description}</StyledText>
          </div>
        </div>

        <ul>
          {carUserCommom?.advertisement.map((car) => (
            <li key={car.id}>
              <figure>
                <span className="statusCar">
                  {car.isActive === true ? "Ativo" : "Inativo"}
                </span>
                <img
                  className="imgCarCard"
                  src={`${car?.images[0].image}`}
                  alt={`${car?.model} model car image`}
                />
              </figure>
              <span>{car?.model}</span>
              <StyledText tag="h7">{car?.description}</StyledText>
              <div className="containerNameCardAd">
                <StyledText className="cicleCardSeller" tag="h3">
                  {getInitials(carUserCommom.name)}
                </StyledText>
                <StyledText tag="h3">{carUserCommom.name}</StyledText>
              </div>

              <div className="containerCarInformations">
                <div>
                  <span className="specialTextCard">{car?.mileage} KM</span>
                  <span className="specialTextCard">{car?.year}</span>
                </div>

                <StyledText fontWeight={600} tag="p">
                  R$ {car?.price}
                </StyledText>
              </div>
            </li>
          ))}
        </ul>
      </StyledCommomProfilePage>
    </>
  );
};
export default ProfilePageComponent;
