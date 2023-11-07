import React from "react";

import "./style.css";

const MenuItem = (props) => {
  return (
    <div className="menu_item">
      <img src={props.img} alt="" className="menu_img" />
      <p className="menu_title">{props.text}</p>
    </div>
  );
};

export default MenuItem;
