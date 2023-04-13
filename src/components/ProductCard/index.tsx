import React from "react";
import StyledProductCard from "./style";
import { StyledText, StyledTitle } from "../../styles/typography";

interface iProductCardProps {}

const lorem = `Lorem ipsum dolor sit amet, 
consectetur adipiscing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna 
aliqua. In nibh mauris cursus mattis molestie 
a iaculis at. Sit amet cursus sit amet. At tellus
 at urna condimentum. Sed vulputate mi sit amet mauris. 
 Consequat nisl vel pretium lectus quam id leo in. 
 Et ultrices neque ornare aenean euismod elementum nisi quis. 
 Sem nulla pharetra diam sit amet nisl suscipit adipiscing. 
 Nunc vel risus commodo viverra. Libero justo laoreet sit amet. 
 Phasellus vestibulum lorem sed risus ultricies tristique nulla 
 aliquet enim.`;

const ProductCard = ({}: iProductCardProps) => {
  return (
    <StyledProductCard>
      <main className="productInfoMain">
        <img
          src={"https://picsum.photos/400"}
          alt={"Nome do Produto"}
          title={"Nome do Produto"}
          className="productImage"
        />

        <StyledTitle
          fontSize="20"
          fontWeight={700}
          tag="h2"
          className="productTitle"
        >
          {"Nome do Produto"}
        </StyledTitle>
        <StyledText tag="p" className="productDescription">
          {lorem}
        </StyledText>
      </main>

      <section className="advertiserSection">
        <img
          src={"https://picsum.photos/400"}
          alt={"Nome do Anunciante"}
          title={"Nome do Anunciante"}
          className="advertiserImage"
        />
        <StyledTitle className="advertiserName" tag="h3">
          {"Nome do Anunciante"}
        </StyledTitle>
      </section>

      <footer className="cardFooter">
        <div id="kmAndYearDiv">
          <StyledText className="specialText" tag="p">
            0 KM
          </StyledText>
          <StyledText className="specialText" tag="p">
            2019
          </StyledText>
        </div>

        <StyledText fontWeight={600} tag="p">
          R$ {"00.000,00"}
        </StyledText>
      </footer>
    </StyledProductCard>
  );
};

export default ProductCard;
