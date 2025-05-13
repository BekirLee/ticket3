import React from "react";
import { addItem, decrement, increment } from "../features/Basket/Basket";
import { useDispatch, useSelector } from "react-redux";

const Basket = () => {
  const dispatch = useDispatch();
  const basketItems = useSelector((state) => state.basket.items);

  return (
    <div>
      {basketItems.length === 0 ? (
        <p>Empty</p>
      ) : (
        basketItems.map((item) => (
          <div
            key={item.id}
            style={{ borderBottom: "1px solid #ccc", padding: "10px" }}
          >
            <h4>{item.name}</h4>
            <p>Fiyat: {item.price} USD</p>
            <p>Adet: {item.count}</p>
            <button onClick={() => dispatch(increment({ id: item.id }))}>
              +
            </button>
            <button onClick={() => dispatch(decrement({ id: item.id }))}>
              -
            </button>
            {/* <button onClick={() => dispatch(removeItem({ id: item.id }))}>
              Delete
            </button> */}
          </div>
        ))
      )}
    </div>
  );
};

export default Basket;
