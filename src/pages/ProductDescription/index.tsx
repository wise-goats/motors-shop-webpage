import { MainContainer } from "./style";
import PageProductDescriptionComponent from "../../components/ProductDescriptionComponent";

export const ProductDescription = () => {
  return (
    <MainContainer>
      <PageProductDescriptionComponent />
      <div className="TopContainer"></div>
      <div className="bottomContainer"></div>
    </MainContainer>
  );
};
