import "./TopBarStyles.css";
import {
  Search,
  CancelOutlined,
  Chat,
  Notifications,
  Person,
} from "@material-ui/icons";
import useTopBar from "./useTopBar";
import profile from "../../assets/user.jpeg";

const TopBar = () => {
  const { name, handleChange, handleInput } = useTopBar();
  return (
    <div className="topBarContainer">
      <div className="leftContainer">
        <h4 className="topBarLogo">React Social</h4>
      </div>
      <div className="centerContainer">
        <Search className="searchIcon" />
        <input
          placeholder="Search The World Here...."
          type="text"
          className="searchInput"
          value={name}
          onChange={handleChange}
        />
        {name.trim().length !== 0 && (
          <button className="topBarCancelButton" onClick={handleInput}>
            <CancelOutlined className="topBarCancelIcon" />
          </button>
        )}
      </div>
      <div className="rightContainer">
        <div className="linkContainer">
          <span className=" linkText">Homepage</span>
          <span className="linkText">Timeline</span>
        </div>
        <div className="iconsContainer">
          <div className="iconContainer">
            <Chat className="icon" />
            <span className="iconBadge">1</span>
          </div>
          <div className="iconContainer">
            <Person className="icon" />
            <span className="iconBadge">1</span>
          </div>
          <div className="iconContainer">
            <Notifications className="icon" />
            <span className="iconBadge">1</span>
          </div>
        </div>
        <div className="profileContainer">
          <img src={profile} alt="Profile Image" className="profileImage" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
