import React from "react";
import "./header.scss";

function Header() {
  return (
    <header>
      <nav className="navbar container">
        <div>
          <a className="navbar__img" href="#">
            Product
          </a>
        </div>
        <ul className="navbar__item">
          <li className="navbar__list">
            <a className="navbar__link" href="#">
              Home
            </a>
          </li>
          <li className="navbar__list">
            <a className="navbar__link" href="#">
              About
            </a>
          </li>
          <li className="navbar__list">
            <a className="navbar__link" href="#">
              Contact
            </a>
          </li>
          <li className="navbar__list">
            <a className="navbar__link" href="#">
              Blog
            </a>
          </li>
        </ul>
        <div className="navbar__btns">
          <button className="navbar__btn navbar__learn__more">Lear more</button>
          <button className="navbar__btn">Submit</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
