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
const PageProductDescriptionComponent = () => {
  return (
    <>
      <StyledPageProductDescriptionMobile>
        <div className="containerMobileImage">
          <figure>
            <img className="imageCenter" src={car} alt="" />
          </figure>
        </div>
        <div className="containerInformationsCar">
          <span>{advertisementsMock[0].model}</span>
          <div className="containerSpecialText">
            <span className="specialText">{advertisementsMock[0].year}</span>
            <span className="specialText">
              {advertisementsMock[0].mileage}KM
            </span>
          </div>
          <StyledText fontWeight={600} tag="p">
            R$ {advertisementsMock[0].price}
          </StyledText>
          <StyledButton buttonStyle="brand1">Comprar</StyledButton>
        </div>

        <div className="containerDescriptionCar">
          <StyledTitle tag="span">Descrição</StyledTitle>
          <StyledText tag="h7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolore
            quia iusto laborum accusantium sed libero ipsum. Eveniet tenetur
            accusantium facilis natus fuga vero est veritatis, voluptatum
            possimus labore voluptatibus.
          </StyledText>
        </div>

        <div className="containerImagesCar">
          <StyledTitle tag="span">Fotos</StyledTitle>

          <ul>
            {advertisementsMock[0].images.map((image, index) => (
              <li key={index}>
                <img src={image} alt="" />
              </li>
            ))}
          </ul>
        </div>

        <div className="containerUserInformation">
          <span className="initialsOfNameInCircle">TA</span>
          <StyledTitle tag="span">{advertiserMock.name}</StyledTitle>
          <StyledText tag="h7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
            dolor sit amet consectetur Lorem ipsum dolor sit amet adipisicing
            elitLorem ipsum dolor sit amet consectetur adipisicing elit Amet
            dolore quia iusto laborum aptatibus.
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

      {/* ou */}

      <StyledPageProductDescriptionDesktop>
        <div className="containerOneDesktop">
          <div className="containerMobileImage">
            <figure>
              <img className="imageCenter" src={car} alt="" />
            </figure>
          </div>
          <div className="containerInformationsCar">
            <span>{advertisementsMock[0].model}</span>
            <div className="containerSpecialText">
              <span className="specialText">{advertisementsMock[0].year}</span>
              <span className="specialText">
                {advertisementsMock[0].mileage}KM
              </span>
            </div>
            <StyledText fontWeight={600} tag="p">
              R$ {advertisementsMock[0].price}
            </StyledText>
            <StyledButton buttonStyle="brand1">Comprar</StyledButton>
          </div>

          <div className="containerDescriptionCar">
            <StyledTitle tag="span">Descrição</StyledTitle>
            <StyledText tag="h7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              dolore quia iusto laborum accusantium sed libero ipsum. Eveniet
              tenetur accusantium facilis natus fuga vero est veritatis,
              voluptatum possimus labore voluptatibus.
            </StyledText>
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
        </div>
        <div className="containerDesktop">
          <div className="containerImagesCar">
            <StyledTitle tag="span">Fotos</StyledTitle>

            <ul>
              {advertisementsMock[0].images.map((image, index) => (
                <li key={index}>
                  <img src={image} alt="" />
                </li>
              ))}
            </ul>
          </div>

          <div className="containerUserInformation">
            <span className="initialsOfNameInCircle">TA</span>
            <StyledTitle tag="span">{advertiserMock.name}</StyledTitle>
            <StyledText tag="h7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem
              ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
              adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing
              elit Amet dolore quia iusto laborum aptatibus.
            </StyledText>
            <StyledButton buttonStyle="grey1">Ver todos anuncios</StyledButton>
          </div>
        </div>
      </StyledPageProductDescriptionDesktop>
    </>
  );
};
export default PageProductDescriptionComponent;
