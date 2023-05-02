import { MainContainer } from "./style";
import ProfilePageComponent from "../../components/ProfilePageComponent";

export const ProfilePage = () => {
  return (
    <MainContainer>
      <ProfilePageComponent />
      <div className="TopContainer"></div>
      <div className="bottomContainer"></div>
    </MainContainer>
  );
};
