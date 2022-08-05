import React from "react";
import "./bottomnav.css";
import "../../FontAwesome";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BottomNav = () => {
  return (
    <nav className="wrapper">
      <div>
        <Link to="/" className="nav-link">
          <FontAwesomeIcon icon="fa-home" className="nav-item" />
          <p className="nav-item-description">홈</p>
        </Link>
      </div>
      <div>
        <Link to="/profile" className="nav-link">
          <FontAwesomeIcon icon="fa-circle-user" className="nav-item" />
          <p className="nav-item-description">내 프로필</p>
        </Link>
      </div>
      <div>
        <Link to="/chatlist" className="nav-link">
          <FontAwesomeIcon icon="fa-message" className="nav-item" />
          <p className="nav-item-description">채팅 목록</p>
        </Link>
      </div>
      <div>
        <Link to="/mymate" className="nav-link">
          <FontAwesomeIcon icon="fa-users" className="nav-item" />
          <p className="nav-item-description">나의 메이트</p>
        </Link>
      </div>
    </nav>
  );
};

export default BottomNav;
