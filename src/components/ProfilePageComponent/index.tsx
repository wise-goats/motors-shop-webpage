import { StyledProfilePage } from "./style";
import { StyledText, StyledTitle } from "../../styles/typography";
import { StyledButton } from "../../styles/button";
import { useEffect, useState } from "react";
import { Api } from "../../services/api";
import { useAuthContext } from "../../contexts/AuthContext";
import Modal from "../Modal";
import CreateAdForm from "../CreateAdForm";
import UpdateAdForm from "../UpdateAdForm";
import { useNavigate, useParams } from "react-router-dom";

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
  const [modalCreate, setModalCreate] = useState<boolean>(false);
  const [modalUpdate, setModalUpdate] = useState<boolean>(false);
  const [carId, setCarId] = useState<string>("");
  const { id } = useParams();
  const navigate = useNavigate();
  const getInitials = (fullName: string): string => {
    const names = fullName.split(" ");
    const initials = names
      .slice(0, 2)
      .map((name) => name.charAt(0))
      .join("");
    return initials;
  };

  useEffect(() => {
    async function dataCardListProfile(id: string) {
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
    dataCardListProfile(id!);
  }, [modalUpdate, modalCreate]);

  return (
    <>
      {modalCreate && (
        <Modal
          title="Criar anuncio"
          handleModal={() => setModalCreate(!modalCreate)}
        >
          <CreateAdForm handleModal={setModalCreate} />
        </Modal>
      )}
      <StyledProfilePage>
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
            {id == user?.id && (
              <StyledButton
                onClick={() => setModalCreate(!modalCreate)}
                buttonStyle="outlineBrand"
              >
                Criar anuncio
              </StyledButton>
            )}
          </div>
        </div>

        <ul>
          {modalUpdate && (
            <Modal
              title="Editar anúncio"
              handleModal={() => setModalUpdate(!modalUpdate)}
            >
              <UpdateAdForm handleModal={setModalUpdate} id={carId} />
            </Modal>
          )}
          {carUserCommom?.advertisement.map((car) => (
            <li key={car.id} onClick={() => navigate(`/description/${car.id}`)}>
              <figure>
                {id !== user?.id && (
                  <span className="statusCar">
                    {car.isActive === true ? "Ativo" : "Inativo"}
                  </span>
                )}
                <img
                  className="imgCarCard"
                  src={`${car.images[0].image}`}
                  alt={`imagem ilustrativa de carro modelo${car?.model}`}
                />
              </figure>
              <StyledTitle tag="h6" fontWeight={600}>
                {car?.model}
              </StyledTitle>

              <StyledText color="--grey-2">{car?.description}</StyledText>
              {id !== user?.id && (
                <div className="containerNameCardAd">
                  <StyledText className="cicleCardSeller" tag="h3">
                    {getInitials(carUserCommom.name)}
                  </StyledText>
                  <StyledText tag="h3">{carUserCommom.name}</StyledText>
                </div>
              )}
              <div className="containerCarInformations">
                <div>
                  <span className="specialTextCard">{car?.mileage} KM</span>
                  <span className="specialTextCard">{car?.year}</span>
                </div>
                <StyledText fontWeight={600} tag="p">
                  R$ {car?.price}
                </StyledText>
              </div>
              {id == user?.id && (
                <div className="containerBtns">
                  <StyledButton
                    onClick={(e) => {
                      e.stopPropagation();
                      setCarId(car.id);
                      setModalUpdate(!modalUpdate);
                    }}
                    buttonStyle="outline1"
                  >
                    Editar
                  </StyledButton>
                  <StyledButton buttonStyle="outline1">
                    Ver detalhes
                  </StyledButton>
                </div>
              )}
            </li>
          ))}
        </ul>
      </StyledProfilePage>
    </>
  );
};
export default ProfilePageComponent;
