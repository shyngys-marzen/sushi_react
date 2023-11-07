import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CardItem from "../components/CardItem";

import "./style.css";

const SushiPage = ({ sushiData, reRecordSushi, data, sushiBuyItem }) => {
  const location = useLocation();
  const [key, setKey] = useState("");

  const sushiBuy = (sushi) => {
    sushiBuyItem(sushi);
  };

  useEffect(() => {
    const key = location.pathname.replace("/", "");
    setKey(key);

    let result = [];

    if (key === "hot") {
      result = data.filter((el) => el.hot === true);
    } else if (key === "all") {
     console.log(data)
       reRecordSushi(data);
      
      return;
    } else {
      result = data.filter((el) => el.type === key);
    }

    reRecordSushi(result);
  }, [location]);

  return (
    <div className="pages">
      <p>Sushi type: {key}</p>
      <div className="cards">
        {sushiData.map((elem) => (
          <CardItem elem={elem} key={elem.id} sushiBuy={sushiBuy} />
        ))}
      </div>
    </div>
  );
};

export default SushiPage;
