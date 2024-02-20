import "./LeftBarStyles.css";
import {
  Bookmark,
  Chat,
  Group,
  HelpOutline,
  PlayCircleFilledOutlined,
  RssFeed,
  School,
  WorkOutline,
  Event,
} from "@material-ui/icons";
import Friend from "../../assets/user.jpeg";

const LeftBar = () => {
  return (
    <div className="leftContainer">
      <div className="leftWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="showMoreButton">Show More</button>
        <hr className="hrLine" />
        <ul className="friendListItems">
          <li className="friendListItem">
            <img src={Friend} alt="" className="sideBarImage" />
            <span className="friendName">John Doe</span>
          </li>
          <li className="friendListItem">
            <img src={Friend} alt="" className="sideBarImage" />
            <span className="friendName">John Doe</span>
          </li>
          <li className="friendListItem">
            <img src={Friend} alt="" className="sideBarImage" />
            <span className="friendName">John Doe</span>
          </li>
          <li className="friendListItem">
            <img src={Friend} alt="" className="sideBarImage" />
            <span className="friendName">John Doe</span>
          </li>
          <li className="friendListItem">
            <img src={Friend} alt="" className="sideBarImage" />
            <span className="friendName">John Doe</span>
          </li>
          <li className="friendListItem">
            <img src={Friend} alt="" className="sideBarImage" />
            <span className="friendName">John Doe</span>
          </li>
          <li className="friendListItem">
            <img src={Friend} alt="" className="sideBarImage" />
            <span className="friendName">John Doe</span>
          </li>
          <li className="friendListItem">
            <img src={Friend} alt="" className="sideBarImage" />
            <span className="friendName">John Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftBar;
