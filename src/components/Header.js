import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="nav-container">
      <div className="nav-header">
        <Link to="/" className="nav-item">
          Home
        </Link>
      </div>
    </div>
  );
};
export default Header;
