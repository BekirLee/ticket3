import React from "react";
import { addItem } from "../../features/Basket/Basket";
import { useDispatch } from "react-redux";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddbasket = () => {
    dispatch(addItem(product));
  };
  return (
    <div>
      {console.log(product)}
      <div className="card" key={product._id}>
        <p>{product.name}</p>
        <button onClick={handleAddbasket}>Add basket</button>
      </div>
    </div>
  );
};

export default Product;
