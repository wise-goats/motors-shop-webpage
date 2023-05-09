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
import Form from "../form";
import { newCommentSchema } from "../../schemas/user.schemas";
import { IComment, iCommentRegister } from "../../interfaces";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledTextInput } from "../../styles/input";
import { useParams } from "react-router-dom";

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
  const [comments, setComments] = useState<IComment[]>([]);
  const { selectedCarDescriptionId, registerComment } = useAuthContext();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iCommentRegister>({ resolver: zodResolver(newCommentSchema) });
  console.log(errors);

  useEffect(() => {
    async function getAdvertisementByIdService() {
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
        console.log(error, "description");
      }
    }
    async function getAdvertiseComments() {
      try {
        return await Api.get(`advertisement/${id}/comment`).then((res) => {
          setComments(res.data[0].comments);
        });
      } catch (error) {
        console.log(error);
      }
    }

    getAdvertisementByIdService();
    getAdvertiseComments();
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

        <div>
          <StyledTitle tag="span">Comentários</StyledTitle>
          {comments &&
            comments.map((c) => <div key={c.id}>{c.description}</div>)}
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

          <Form onSubmit={handleSubmit(newComment)}>
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
            {comments &&
              comments.map((c) => <div key={c.id}>{c.description}</div>)}
            <Form onSubmit={handleSubmit(newComment)}>
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
