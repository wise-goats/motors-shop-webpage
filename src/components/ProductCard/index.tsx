import React from "react";
import StyledProductCard from "./style";
import { StyledText, StyledTitle } from "../../styles/typography";
import { iAdvertisement } from "../../interfaces";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
interface iProductCardProps {
  advertisement: iAdvertisement;
}

const ProductCard = ({ advertisement }: iProductCardProps) => {
  console.log(advertisement);
  const { setSelectedCarId } = useAuthContext();
  const navigate = useNavigate();
  return (
    <StyledProductCard>
      <main className="productInfoMain">
        <img
          src={advertisement.images[0]}
          alt={advertisement.model}
          title={advertisement.model}
          className="productImage"
        />

        <StyledTitle
          fontSize="20"
          fontWeight={700}
          tag="h2"
          className="productTitle"
        >
          {advertisement.model}
        </StyledTitle>
        <StyledText tag="p" className="productDescription">
          {advertisement.descripition}
        </StyledText>
      </main>

      <section className="advertiserSection">
        <img
          src={advertisement.user.profile_image}
          alt={advertisement.user.name}
          title={advertisement.user.name}
          className="advertiserImage"
          onClick={() => {
            setSelectedCarId(advertisement.user.id);
            navigate(`/profile/${advertisement.user.id}`);
          }}
        />
        <StyledTitle className="advertiserName" tag="h3">
          {advertisement.user.name}
        </StyledTitle>
      </section>

      <footer className="cardFooter">
        <div id="kmAndYearDiv">
          <StyledText className="specialText" tag="p">
            {advertisement.mileage + "KM"}
          </StyledText>
          <StyledText className="specialText" tag="p">
            {advertisement.year}
          </StyledText>
        </div>

        <StyledText fontWeight={600} tag="p">
          R$ {advertisement.price}
        </StyledText>
      </footer>
    </StyledProductCard>
  );
};

export default ProductCard;
