import { auth } from "../../service/firebase";
import "./style.css";
import iconn from "../../img/millionaire-icon.png";

const Header = ({ children }) => {
  const handleLogout = () => {
    return auth.signOut();
  };
  return (
    <div>
      <div className="header">
        <img src={iconn} alt="" />
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>

      <div className="content">{children}</div>
    </div>
  );
};

export default Header;