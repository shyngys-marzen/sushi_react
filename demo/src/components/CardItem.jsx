import React from "react";

import hot from "../assets/logo/flame.svg";

import "./style.css";

const CardItem = ({ elem, sushiBuy }) => {
  const sushiBuyCard = () => {
    sushiBuy(elem);
  };

  return (
    <div className="card">
      <div className="card_info">
        <img src={elem.image} alt="" className="card_image" />
        <div className="info">
          <p className="card_name">{elem.title}</p>
          <p className="card_weigth">
            Вес: <span className="card_weigth_count">{elem.weight}</span>г
          </p>
          <p className="card_weigth">
            Тип: <span className="card_weigth_count">{elem.type}</span>
          </p>
        </div>
      </div>
      <div className="price_buy">
        <p className="item_price">{elem.price} тнг</p>
        <button className="item_buy" onClick={sushiBuyCard}>
          Заказать
        </button>
        {elem.hot && <img src={hot} alt="hot" className="hot_logo" />}
      </div>
    </div>
  );
};

export default CardItem;
