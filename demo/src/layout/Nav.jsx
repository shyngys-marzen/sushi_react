import React from "react";
import { Link } from "react-router-dom";
import MenuItem from "../components/MenuItem";

import logo from "../assets/logo/logo.png";

import item1 from "../assets/logo/logo_1.svg";
import item2 from "../assets/logo/logo_2.svg";
import item3 from "../assets/logo/logo_3.svg";
import item4 from "../assets/logo/logo_4.svg";
import item5 from "../assets/logo/flame.svg";

import "./style.css";

const Nav = () => {
  const menuItems = [
    { text: "Сэты", img: item1 },
    { text: "Классические роллы", img: item2 },
    { text: "Фирменные роллы", img: item3 },
    { text: "Филадельфия", img: item4 },
    { text: "Горячие предложения", img: item5 },
  ];

  return (
    <div className="nav">
      <div className="nav_wrapper">
        <img src={logo} alt="" />

        <div className="menu">
          {/* Fisrt */}

          <Link to="/sets">
            <MenuItem text="Сэты" img={item1} />
          </Link>

          <Link to="/classic">
            <MenuItem text="Классические роллы" img={item2} />
          </Link>

          <Link to="/firms">
            <MenuItem text="Фирменные роллы" img={item3} />
          </Link>

          <Link to="/fila">
            <MenuItem text="Филадельфия" img={item4} />
          </Link>

          <Link to="/hot">
            <MenuItem text="Горячие предложения" img={item5} />
          </Link>

          <Link to="/all">
            <MenuItem text="Все" img="" />
          </Link>

          <Link to="/cart">
            <MenuItem text="Корзина" img="" />
          </Link>

          {/* Second */}
          {/* {menuItems.map((elem, index) => (
            <MenuItem text={elem.text} img={elem.img} key={index} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Nav;
