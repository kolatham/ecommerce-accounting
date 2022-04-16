import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";

export default function Product({ product }) {
  return (
    <div className="col-md-3 m-5 card p-2">
      <div>
        <Link to={`product/${product.id}`}>
          <img src={product.image} alt="test" className="img-fluid" />
          <h1>{product.name}</h1>
          <Rating
            style={{ color: "#56548C !important" }}
            initialRating={product.rating}
            empty="fa fa-star-o fa-2x"
            full="fa fa-star fa-2x"
            readonly={true}
          />

          <h1>Price: {product.price}</h1>
        </Link>
      </div>
    </div>
  );
}
