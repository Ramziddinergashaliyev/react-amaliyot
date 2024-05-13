import { useState } from "react";
import "./header.scss";
import img1 from "../../../assets/images/bars.svg";

function Header({ setShowmodal }) {
  const [showlist, setShowlist] = useState(false);
  function propsCard() {
    setShowmodal(true);

    console.log();
  }
  return (
    <header className="header">
      <nav className="navbar container">
        <div>
          <a className="navbar__img" href="#">
            Product
          </a>
        </div>
        <ul className={`navbar__item ${showlist ? "navbar__show" : ""}`}>
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
          <li
            onClick={() => setShowlist(false)}
            className="navbar__item__close"
          >
            x
          </li>
        </ul>
        <div className="navbar__btns">
          <button className="navbar__btn navbar__learn__more">Lear more</button>
          <button onClick={propsCard} className="navbar__btn">
            Show modal
          </button>
          <button
            onClick={() => setShowlist(true)}
            className="navbar__hamburger"
          >
            <img src={img1} alt="" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
