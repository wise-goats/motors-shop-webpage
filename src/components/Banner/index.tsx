import React from "react";
import { StyledText, StyledTitle } from "../../styles/typography";
import { StyledBanner } from "./style";
import banner from "../../assets/bannerhome.png";
const Banner = () => {
  return (
    <StyledBanner>
      <StyledTitle tag="h1">Motors Shop</StyledTitle>
      <StyledText>A melhor plataforma de anúncios de carros do país</StyledText>
      <img src={banner} alt="" />
    </StyledBanner>
  );
};

export default Banner;
