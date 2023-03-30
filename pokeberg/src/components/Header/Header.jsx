import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <header className="header">
        <h1>Example Web Page</h1>
        <nav className="navbar">
          <ul className="elements">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export { Header };
