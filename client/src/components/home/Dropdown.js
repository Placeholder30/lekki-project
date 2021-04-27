import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/Context";

function Dropdown({ setShowDropdown, handleLogout }) {
  const userData = useContext(UserContext);
  return (
    <div
      onMouseLeave={() => {
        setShowDropdown(false);
      }}
      className="drop-down"
    >
      {!userData?.authenticated && (
        <Link to="/register">
          <div>Register</div>
        </Link>
      )}
      <Link to="/orders">
        <div>Orders</div>
      </Link>
      {userData?.authenticated && (
        <Link
          to="/logout"
          onClick={(e) => {
            e.preventDefault();
            handleLogout();
          }}
        >
          <div>Logout</div>
        </Link>
      )}
    </div>
  );
}

export default Dropdown;
