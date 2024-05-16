import { useState } from "react";
import "./header.scss";
import img1 from "../../../assets/images/bars.svg";
import { NavLink } from "react-router-dom";

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
            <NavLink to={"/"}>Teachers</NavLink>
          </li>
          <li className="navbar__list">
            <NavLink to={"/students"}>Students</NavLink>
          </li>
          <li
            onClick={() => setShowlist(false)}
            className="navbar__item__close"
          >
            x
          </li>
        </ul>
        <div className="navbar__btns">
          <select name="" id="">
            <option value="All">All</option>
            <option value="Merried">Merried</option>
            <option value="Single">Single</option>
          </select>
          <select name="" id="">
            <option value="Order">Order</option>
            <option value="Alphabitic">Merried</option>
            <option value="Revorse">Revorse</option>
          </select>
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
