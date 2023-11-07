import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <p>Cart layout</p>
      <div className="carts">
        {cart.map((el) => (
          <div key={el.id}>
            <p>{el.title}</p>
            <p>{el.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
