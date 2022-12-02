import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllCarts } from "../card/cardSlice";
import ProductCard from "./ProductCard";
import { getAll, getError, getStatus } from "./productSlice";

const ProductList = () => {
  const prod = useSelector(getAll);
  const card = useSelector(getAllCarts);

  const [products, setProduct] = useState(prod);

  useEffect(() => {
    setProduct(prod);
  }, [prod]);

  const productStatus = useSelector(getStatus);

  const productError = useSelector(getError);

  const fakeProduct = prod.slice();

  const categories = [
    ...new Set(fakeProduct.map((product) => product.category)),
  ];

  const navigate = useNavigate();

  //   console.log(categories, prod);
  let content;

  if (productStatus === "loading") {
    content = <p>Loading ...</p>;
  } else if (productStatus === "refused") {
    content = <p>{productError}</p>;
  } else if (productStatus === "succedded") {
    content = products.map((product) => (
      <ProductCard product={product} key={product.id} />
    ));
  }

  const filterCategories = (
    <div className="btn-group d-flex justify-content-center mt-5">
      <button
        className="btn btn-outline-dark me-1"
        onClick={() => setProduct(prod)}
      >
        All
      </button>
      {categories.map((cat, index) => (
        <button
          className="btn btn-outline-dark me-1"
          key={index}
          onClick={() => categoryHandler(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );

  const categoryHandler = (name) =>
    setProduct(fakeProduct.filter((product) => product.category === name));

  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <h1 className="text-center me-3">Product List</h1>
        <button className="btn btn-dark px-5" onClick={() => navigate("/cart")}>
          Cart <i className="fa fa-star"></i> {card.length}
        </button>
      </div>

      {filterCategories}

      <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">{content}</div>
    </div>
  );
};

export default ProductList;
