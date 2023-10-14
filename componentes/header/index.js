import React  from "react";
import Nike from "../../images/logotipogeneral.png";
import 'boxicons';
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className="logo">
          <img src={Nike} alt="logo" width="250" />
        </div>
      </Link>

      <ul>
        <li>
          <Link to="/">INICIO</Link>
        </li>

        <li>
          <Link to="/productos">PRODUCTOS</Link>
        </li>

        <li>
          <a href="#" >CONECTAR WALLET</a>
        </li>
      </ul>

      <div className="cart" >
        <box-icon name="cart"></box-icon>
        <span className="item__total">0</span>
      </div>
    </header>
  );
}