import { StyledProfilePage } from "./style";
import { advertisementsMock, advertiserMock } from "../../services/mock";
import car from "../../assets/EXTERIOR.png";
import { StyledText, StyledTitle } from "../../styles/typography";
import { StyledButton } from "../../styles/button";
import Input from "../input";

const ProfilePageComponent = () => {
  return (
    <>
      <StyledProfilePage>
        <div className="containerInformationsUser">
          <div className="containerSecundary">
            <span className="imageCicleName">SL</span>
            <div className="containerName">
              <span>Samuel Leão</span>
              <span className="specialText">Anunciante</span>
            </div>
            <StyledText tag="h7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              dolore quia iusto laborum accusantium sed libero ipsum. Eveniet
              tenetur accusantium facilis natus fuga vero est veritatis,
              voluptatum possimus labore voluptatibus.
            </StyledText>

            <StyledButton buttonStyle="outlineBrand">
              Criar anuncio
            </StyledButton>
          </div>
        </div>

        <ul>
          <li>
            <figure>
              <img
                className="imgCarCard"
                src="https://bloximages.chicago2.vip.townnews.com/nwitimes.com/content/tncms/assets/v3/editorial/4/f2/4f277f47-c14f-5629-bf0e-c4ea9bc5869d/4e29d0f88485c.image.jpg"
                alt=""
              />
            </figure>
            <span>Mercedes Bendz</span>

            <StyledText tag="h7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              dolore quia iusto laborum accusantium sed libero ipsum. Eveniet
              tenetur accusantium facilis natus fuga vero est veritatis,
              voluptatum possimus labore voluptatibus.
            </StyledText>
            <div className="containerCarInformations">
              <div>
                <span className="specialTextCard">0 KM</span>
                <span className="specialTextCard">2019</span>
              </div>
              <StyledText fontWeight={600} tag="p">
                R$ 80000
              </StyledText>
            </div>
            <div className="containerBtns">
              <StyledButton buttonStyle="outline1">Editar</StyledButton>
              <StyledButton buttonStyle="outline1">Ver detalhes</StyledButton>
            </div>
          </li>

          <li>
            <figure>
              <img
                className="imgCarCard"
                src="https://bloximages.chicago2.vip.townnews.com/nwitimes.com/content/tncms/assets/v3/editorial/4/f2/4f277f47-c14f-5629-bf0e-c4ea9bc5869d/4e29d0f88485c.image.jpg"
                alt=""
              />
            </figure>
            <span>Mercedes Bendz</span>

            <StyledText tag="h7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              dolore quia iusto laborum accusantium sed libero ipsum. Eveniet
              tenetur accusantium facilis natus fuga vero est veritatis,
              voluptatum possimus labore voluptatibus.
            </StyledText>
            <div className="containerCarInformations">
              <div>
                <span className="specialTextCard">0 KM</span>
                <span className="specialTextCard">2019</span>
              </div>
              <StyledText fontWeight={600} tag="p">
                R$ 80000
              </StyledText>
            </div>
            <div className="containerBtns">
              <StyledButton buttonStyle="outline1">Editar</StyledButton>
              <StyledButton buttonStyle="outline1">Ver detalhes</StyledButton>
            </div>
          </li>

          <li>
            <figure>
              <img
                className="imgCarCard"
                src="https://bloximages.chicago2.vip.townnews.com/nwitimes.com/content/tncms/assets/v3/editorial/4/f2/4f277f47-c14f-5629-bf0e-c4ea9bc5869d/4e29d0f88485c.image.jpg"
                alt=""
              />
            </figure>
            <span>Mercedes Bendz</span>

            <StyledText tag="h7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              dolore quia iusto laborum accusantium sed libero ipsum. Eveniet
              tenetur accusantium facilis natus fuga vero est veritatis,
              voluptatum possimus labore voluptatibus.
            </StyledText>
            <div className="containerCarInformations">
              <div>
                <span className="specialTextCard">0 KM</span>
                <span className="specialTextCard">2019</span>
              </div>
              <StyledText fontWeight={600} tag="p">
                R$ 80000
              </StyledText>
            </div>
            <div className="containerBtns">
              <StyledButton buttonStyle="outline1">Editar</StyledButton>
              <StyledButton buttonStyle="outline1">Ver detalhes</StyledButton>
            </div>
          </li>

          <li>
            <figure>
              <img
                className="imgCarCard"
                src="https://bloximages.chicago2.vip.townnews.com/nwitimes.com/content/tncms/assets/v3/editorial/4/f2/4f277f47-c14f-5629-bf0e-c4ea9bc5869d/4e29d0f88485c.image.jpg"
                alt=""
              />
            </figure>
            <span>Mercedes Bendz</span>

            <StyledText tag="h7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              dolore quia iusto laborum accusantium sed libero ipsum. Eveniet
              tenetur accusantium facilis natus fuga vero est veritatis,
              voluptatum possimus labore voluptatibus.
            </StyledText>
            <div className="containerCarInformations">
              <div>
                <span className="specialTextCard">0 KM</span>
                <span className="specialTextCard">2019</span>
              </div>
              <StyledText fontWeight={600} tag="p">
                R$ 80000
              </StyledText>
            </div>
            <div className="containerBtns">
              <StyledButton buttonStyle="outline1">Editar</StyledButton>
              <StyledButton buttonStyle="outline1">Ver detalhes</StyledButton>
            </div>
          </li>

          <li>
            <figure>
              <img
                className="imgCarCard"
                src="https://bloximages.chicago2.vip.townnews.com/nwitimes.com/content/tncms/assets/v3/editorial/4/f2/4f277f47-c14f-5629-bf0e-c4ea9bc5869d/4e29d0f88485c.image.jpg"
                alt=""
              />
            </figure>
            <span>Mercedes Bendz</span>

            <StyledText tag="h7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              dolore quia iusto laborum accusantium sed libero ipsum. Eveniet
              tenetur accusantium facilis natus fuga vero est veritatis,
              voluptatum possimus labore voluptatibus.
            </StyledText>
            <div className="containerCarInformations">
              <div>
                <span className="specialTextCard">0 KM</span>
                <span className="specialTextCard">2019</span>
              </div>
              <StyledText fontWeight={600} tag="p">
                R$ 80000
              </StyledText>
            </div>
            <div className="containerBtns">
              <StyledButton buttonStyle="outline1">Editar</StyledButton>
              <StyledButton buttonStyle="outline1">Ver detalhes</StyledButton>
            </div>
          </li>
          <li>
            <figure>
              <img
                className="imgCarCard"
                src="https://bloximages.chicago2.vip.townnews.com/nwitimes.com/content/tncms/assets/v3/editorial/4/f2/4f277f47-c14f-5629-bf0e-c4ea9bc5869d/4e29d0f88485c.image.jpg"
                alt=""
              />
            </figure>
            <span>Mercedes Bendz</span>

            <StyledText tag="h7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              dolore quia iusto laborum accusantium sed libero ipsum. Eveniet
              tenetur accusantium facilis natus fuga vero est veritatis,
              voluptatum possimus labore voluptatibus.
            </StyledText>
            <div className="containerCarInformations">
              <div>
                <span className="specialTextCard">0 KM</span>
                <span className="specialTextCard">2019</span>
              </div>
              <StyledText fontWeight={600} tag="p">
                R$ 80000
              </StyledText>
            </div>
            <div className="containerBtns">
              <StyledButton buttonStyle="outline1">Editar</StyledButton>
              <StyledButton buttonStyle="outline1">Ver detalhes</StyledButton>
            </div>
          </li>
          <li>
            <figure>
              <img
                className="imgCarCard"
                src="https://bloximages.chicago2.vip.townnews.com/nwitimes.com/content/tncms/assets/v3/editorial/4/f2/4f277f47-c14f-5629-bf0e-c4ea9bc5869d/4e29d0f88485c.image.jpg"
                alt=""
              />
            </figure>
            <span>Mercedes Bendz</span>

            <StyledText tag="h7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              dolore quia iusto laborum accusantium sed libero ipsum. Eveniet
              tenetur accusantium facilis natus fuga vero est veritatis,
              voluptatum possimus labore voluptatibus.
            </StyledText>
            <div className="containerCarInformations">
              <div>
                <span className="specialTextCard">0 KM</span>
                <span className="specialTextCard">2019</span>
              </div>
              <StyledText fontWeight={600} tag="p">
                R$ 80000
              </StyledText>
            </div>
            <div className="containerBtns">
              <StyledButton buttonStyle="outline1">Editar</StyledButton>
              <StyledButton buttonStyle="outline1">Ver detalhes</StyledButton>
            </div>
          </li>
          <li>
            <figure>
              <img
                className="imgCarCard"
                src="https://bloximages.chicago2.vip.townnews.com/nwitimes.com/content/tncms/assets/v3/editorial/4/f2/4f277f47-c14f-5629-bf0e-c4ea9bc5869d/4e29d0f88485c.image.jpg"
                alt=""
              />
            </figure>
            <span>Mercedes Bendz</span>

            <StyledText tag="h7">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              dolore quia iusto laborum accusantium sed libero ipsum. Eveniet
              tenetur accusantium facilis natus fuga vero est veritatis,
              voluptatum possimus labore voluptatibus.
            </StyledText>
            <div className="containerCarInformations">
              <div>
                <span className="specialTextCard">0 KM</span>
                <span className="specialTextCard">2019</span>
              </div>
              <StyledText fontWeight={600} tag="p">
                R$ 80000
              </StyledText>
            </div>
            <div className="containerBtns">
              <StyledButton buttonStyle="outline1">Editar</StyledButton>
              <StyledButton buttonStyle="outline1">Ver detalhes</StyledButton>
            </div>
          </li>
        </ul>
      </StyledProfilePage>
    </>
  );
};
export default ProfilePageComponent;
