import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../card/cardSlice";

const ProductCard = ({ product }) => {

  const navigate = useNavigate();

    const detailProduct = () => {
        navigate(`/${product.id}`)
  }
  
  const dispatch = useDispatch()

  return (
    <div className="col mb-3">
      <div className="card p-3" >
              <img src={product.image} alt={product.name} className="card-image" height={300} onClick={detailProduct} />
              <div className="card-body">
                  <h3 className="card-title">{product.title.substring(0, 50)}</h3>
                  <p className="card-text"><strong>{product.price} D.A</strong> {product.rating.rate} <i className="fa fa-star"></i></p>
                  <p className="card-text">{product.description.substring(0,100)}</p>
                  <button className="btn btn-dark" onClick={() => dispatch(addToCart({product}))}>Add To Cart</button>
              </div>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
