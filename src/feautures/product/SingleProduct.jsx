import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { getSingleProduct } from './productSlice';
import { useDispatch } from 'react-redux';
import { addToCart } from '../card/cardSlice';

const SingleProduct = () => {
    const { id } = useParams()
    const single = useSelector(state => getSingleProduct(state, Number(id)))
    const product = single[0];
    const dispatch = useDispatch()
    // console.log(product, id, typeof (product))
    
    if (!product) {
        return <p>No product item </p>
    }
  return (
      <div className='row'>
          <div className="col-6">
              <img src={product.image} alt={product.title} />
          </div>
          <div className="col-6">
              <h3 className="text-center ">{product.category}</h3>
              <h1 className="text-center">{product.title}</h1>
              <p><strong>{product.price} D.A</strong></p>
              <p><strong>{product.rating.rate} <i className="fa fa-star"></i></strong></p>
              <p>{product.description}</p>
              <button className="btn btn-dark" onClick={() => {dispatch(addToCart({product}))}}>Add TO Cart</button>
          </div>
    </div>
  )
}

export default SingleProduct