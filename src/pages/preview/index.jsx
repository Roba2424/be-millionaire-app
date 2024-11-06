import { Button } from "antd";
import "./style.css";
import { Link } from "react-router-dom";
import { ROUTE_CONSTANTS } from "../../core/utils/constants/index";

const Preview = () => {
  return (
    <div>
      <h2>Preview Page</h2>
      <Button>
        <Link to={ROUTE_CONSTANTS.GAME}>Start Game</Link>
      </Button>
    </div>
  );
};

export default Preview;
