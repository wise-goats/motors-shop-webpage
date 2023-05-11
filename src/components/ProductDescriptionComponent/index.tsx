import { StyledPageProductDescription } from "./style";
import { advertisementsMock, advertiserMock } from "../../services/mock";
import car from "../../assets/EXTERIOR.png";
import { StyledText, StyledTitle } from "../../styles/typography";
import { StyledButton } from "../../styles/button";
import Input from "../input";
import { Header } from "../Header";
import { Api } from "../../services/api";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import Form from "../form";
import { newCommentSchema } from "../../schemas/user.schemas";
import { IComment, iCommentRegister } from "../../interfaces";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledTextInput } from "../../styles/input";
import { useNavigate, useParams } from "react-router-dom";
import { useAdvertisementContext } from "../../contexts/AdvertisementContext";
import Modal from "../Modal";
import { Link } from "react-router-dom";

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
export interface Advertisement {
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
  // const [advertisementDescription, setAdvertisementDescription] =
  //   useState<Advertisement>();
  // const [comments, setComments] = useState<IComment[]>([]);

  const [imgModal, setIMgModal] = useState<string>("");

  const { user } = useAuthContext();
  const navigate = useNavigate();
  const {
    advertisementDescription,
    getAdvertiseComments,
    getAdvertisementByIdService,
    registerComment,
    setAdvertisementDescription,
    comments,
    setComments,
  } = useAdvertisementContext();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iCommentRegister>({ resolver: zodResolver(newCommentSchema) });

  const handleBuyButtonClick = () => {
    const phoneNumber = advertisementDescription?.user.phone;
    const message = `Olá, tenho interesse no carro ${advertisementDescription?.model} anunciado no site.`; // mensagem para enviar ao vendedor
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    async function getInfos() {
      await getAdvertisementByIdService(id!);
      await getAdvertiseComments(id!);
    }
    getInfos();
  }, []);

  const getInitials = (fullName: string): string => {
    const names = fullName.split(" ");
    const initials = names
      .slice(0, 2)
      .map((name) => name.charAt(0))
      .join("");
    return initials;
  };

  const newComment = async (data: iCommentRegister) => {
    registerComment(data, id!);
    reset();
  };
  return (
    <>
      {advertisementDescription.brand && (
        <StyledPageProductDescription>
          <div className="announcerContainer">
            <div className="leftContainer">
              <div className="containerImage">
                <figure>
                  <img
                    className="imageCenter"
                    src={
                      advertisementDescription?.images[0]?.image &&
                      advertisementDescription?.images[0]?.image
                    }
                    alt={`Foto de anuncio de carro, modelo ${advertisementDescription?.model}`}
                  />
                </figure>
              </div>
              <div className="containerInformationsCar">
                <StyledTitle tag="h6" fontWeight={600}>
                  {advertisementDescription?.model}
                </StyledTitle>
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
                <StyledButton
                  buttonStyle="brand1"
                  onClick={handleBuyButtonClick}
                >
                  Comprar
                </StyledButton>
              </div>

              <div className="containerDescriptionCar">
                <StyledTitle tag="h6" fontWeight={600}>
                  Descrição
                </StyledTitle>
                <StyledText tag="h7">
                  {advertisementDescription?.description}
                </StyledText>
              </div>
            </div>
            <div className="rightContainer">
              <div className="containerImagesCar">
                <StyledTitle tag="h6" fontWeight={600}>
                  Fotos
                </StyledTitle>

                <ul>
                  {advertisementDescription?.images.map((image, index) => (
                    <li key={index}>
                      {imgModal !== "" && (
                        <Modal
                          title="Imagen do veícolo"
                          handleModal={() => setIMgModal("")}
                        >
                          <img src={`${imgModal}`} alt="" />
                        </Modal>
                      )}
                      <img
                        onClick={() => setIMgModal(image.image)}
                        src={`${image.image}`}
                        alt=""
                      />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="containerUserInformation">
                <span className="initialsOfNameInCircle">
                  {getInitials(
                    advertisementDescription
                      ? advertisementDescription.user.name
                      : ""
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
                  buttonSize="big"
                  onClick={() => {
                    navigate(`/profile/${advertisementDescription?.user?.id}`);
                  }}
                >
                  Ver todos anuncios
                </StyledButton>

              </div>
            </div>
          </div>
          <div className="commentSection">
            <StyledTitle tag="h6" fontWeight={600}>
              Comentários
            </StyledTitle>
            {comments &&
              comments.map((c) => (
                <div key={c.id} className="commentCard">
                  <div className="commentHeader">
                    <span className="initialsOfNameInCircle">
                      {getInitials(c.user.name)}
                    </span>
                    <StyledText>{c.user.name}</StyledText>
                  </div>
                  <StyledText fontSize={14}>{c.description}</StyledText>
                </div>
              ))}
          </div>
          <div className="containerCommentInformation">
            <div className="containerUserNewComment">
              <span className="initialsOfNameInCircleNewComment">
                {user && getInitials(user.name)}
              </span>
              <StyledTitle tag="span">{user?.name}</StyledTitle>
            </div>

            <Form onSubmit={handleSubmit(newComment)} className="commentForm">
              <StyledTextInput
                {...register("description")}
                type="textarea"
                placeholder="Digite algo..."
              />
              <StyledButton buttonStyle="brand1" submitType={true}>
                Comentar
              </StyledButton>
            </Form>
            <div className="automaticComment">
              <button>Gostei muito!</button>
              <button>Incrível!</button>
              <button>Recomendarei para meus amigos!</button>
            </div>
          </div>
        </StyledPageProductDescription>
      )}
    </>
  );
};
export default PageProductDescriptionComponent;
