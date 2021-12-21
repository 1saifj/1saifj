import React from "react";
import { useState } from "react";
import { VscMenu } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";

export const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  return (
    <div>
      {showHeader ? (
        <VscClose
          onClick={() => setShowHeader(!showHeader)}
          className="menu-icon position-fixed top-0 end-0"
        />
      ) : (
        <VscMenu
          onClick={() => setShowHeader(!showHeader)}
          className="menu-icon position-fixed top-0 end-0"
        />
      )}
      <ul className={` ${showHeader ? "show-header" : "hide-header"} n-box1`}>
        <li>
          <Link to="/"> Home</Link>
        </li>
        <li>
          <Link to="/projects"> Projects</Link>
        </li>
        <li>
          <Link to="/courses"> Courses</Link>
        </li>
      </ul>
    </div>
  );
};
