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
  const { setSelectedCarId, setSelectedCarDescriptionId } = useAuthContext();
  const getInitials = (fullName: string): string => {
    const names = fullName.split(" ");
    const initials = names
      .slice(0, 2)
      .map((name) => name.charAt(0))
      .join("");
    return initials;
  };
  const navigate = useNavigate();
  return (
    <StyledProductCard
      onClick={() => {
        setSelectedCarDescriptionId(advertisement.id);
        navigate(`/description/${advertisement.id}`);
      }}
    >
      <main className="productInfoMain">
        <img
          src={advertisement.images[0].image}
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
        <span
          title={advertisement.user.name}
          className="initialsOfNameInCircle"
          onClick={(event) => {
            setSelectedCarId(advertisement.user.id);
            navigate(`/profile/${advertisement.user.id}`);
            event.stopPropagation();
          }}
        >
          {getInitials(advertisement.user.name)}
        </span>

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
