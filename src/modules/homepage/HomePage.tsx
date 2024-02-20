import { Feed, LeftBar, RightBar, TopBar } from "../../components";
import "./HomePageStyles.css";

const HomePage = () => {
  return (
    <>
      <TopBar />
      <div className="homeContainer">
        <LeftBar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
};

export default HomePage;
