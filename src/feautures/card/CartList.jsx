import React from "react";
import { addToCart, getAllCarts } from "./cardSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartList = () => {
  const cart = useSelector(getAllCarts);
  const dispatch = useDispatch()
  console.log("🚀 ~ file: CartList.jsx:8 ~ CartList ~ cart", cart);

  let content;

  const navigate = useNavigate();

  if (cart.length === 0) {
    return <p>No item select</p>;
  }

  const cartItem = cart.map((cart) => (
    <div className="card p-3 mt-3 mb-3" key={cart.id}>
      <div className="card-body">
        <h4
          className="cart-title"
          onClick={() => {
            navigate("/");
          }}
        >
          {cart.title}
        </h4>
        <p className="cart-title">Category : {cart.category}</p>
        <p className="cart-title">Price : {cart.price} D.A</p>
        <p className="cart-title">Quantite : {cart.qte}</p>

        <p className="cart-title"> Total : {cart.total} D.A</p>
      </div>
    </div>
  ));

  return (
    <div className="justify-content-center">
      <h1 className="text-center">Items</h1>
      <div className="col-8">{cartItem}</div>
    </div>
  );
};

export default CartList;
