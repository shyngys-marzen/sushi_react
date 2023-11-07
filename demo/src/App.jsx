import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Nav from "./layout/Nav";
import Cart from "./pages/Cart";

import sushi from "./assets/sushi.jpg";

import SushiPage from "./pages/SushiPage";

import "./App.css";

const App = () => {
  const [data, setData] = useState([
    {
      id: "01",
      title: "Красный дракон",
      weight: 300,
      price: 270,
      type: "firms",
      hot: true,
      count: 1,
      image: sushi,
    },
    {
      id: "02",
      title: "Осака",
      weight: 250,
      price: 130,
      type: "classic",
      hot: true,
      count: 1,
      image: sushi,
    },
    {
      id: "03",
      title: "Филадельфия",
      weight: 290,
      price: 320,
      type: "fila",
      hot: true,
      count: 1,
      image: sushi,
    },
    {
      id: "04",
      title: "Сакура",
      weight: 265,
      price: 190,
      type: "sets",
      hot: false,
      count: 1,
      image: sushi,
    },
    {
      id: "05",
      title: "Черный дракон",
      weight: 280,
      price: 310,
      type: "firms",
      hot: false,
      count: 1,
      image: sushi,
    },
    {
      id: "06",
      title: "Кимуро суши",
      weight: 265,
      price: 190,
      type: "classic",
      hot: false,
      count: 1,
      image: sushi,
    },
    {
      id: "07",
      title: "Унаги маки",
      weight: 300,
      price: 280,
      type: "fila",
      hot: true,
      count: 1,
      image: sushi,
    },
    {
      id: "08",
      title: "Якукдза",
      weight: 230,
      price: 220,
      type: "sets",
      hot: false,
      count: 1,
      image: sushi,
    },
  ]);

  const [sushiData, setSushiData] = useState([]);

  const [cart, setCart] = useState([]);

  const reRecordSushi = (result) => {
    setSushiData(result);
  };

  const sushiBuyItem = (sushi) => {
    setCart([...cart, sushi]);
  };

  return (
    <div className="app">
      <Nav />

      <Routes>
        <Route
          path="/sets"
          element={
            <SushiPage
              data={data}
              reRecordSushi={reRecordSushi}
              sushiData={sushiData}
              sushiBuyItem={sushiBuyItem}
            />
          }
        />
        <Route
          path="/classic"
          element={
            <SushiPage
              data={data}
              reRecordSushi={reRecordSushi}
              sushiData={sushiData}
              sushiBuyItem={sushiBuyItem}
            />
          }
        />

        <Route
          path="/firms"
          element={
            <SushiPage
              data={data}
              reRecordSushi={reRecordSushi}
              sushiData={sushiData}
              sushiBuyItem={sushiBuyItem}
            />
          }
        />

        <Route
          path="/fila"
          element={
            <SushiPage
              data={data}
              reRecordSushi={reRecordSushi}
              sushiData={sushiData}
              sushiBuyItem={sushiBuyItem}
            />
          }
        />

        <Route
          path="/hot"
          element={
            <SushiPage
              data={data}
              reRecordSushi={reRecordSushi}
              sushiData={sushiData}
              sushiBuyItem={sushiBuyItem}
            />
          }
        />

        <Route
          path="/all"
          element={
            <SushiPage
              data={data}
              reRecordSushi={reRecordSushi}
              sushiData={sushiData}
              sushiBuyItem={sushiBuyItem}
            />
          }
        />

        <Route path="/cart" element={<Cart cart={cart} />} />
      </Routes>
    </div>
  );
};

export default App;
