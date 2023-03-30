import React from "react";
import { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggleMenu = () => {
    setisOpen((open) => !open);
  };

  return (
    <>
      <header className={`header ${isOpen ? 'is-open-header' : ""}`}>
        <h1>Example Web Page</h1>
        <nav className="navbar">
          <ul className={`elements ${isOpen ? 'is-open' : ""}`}>
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
        <div className="trigger" onClick={toggleMenu}>{isOpen ? "Close" : "Open"}</div>
        </nav>
      </header>
    </>
  );
};

export { Header };
