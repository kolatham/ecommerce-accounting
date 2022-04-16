import React from "react";
import {useParams} from "react-router-dom"
import {useQuery} from "@apollo/client"
import { GET_SINGLE_PRODUCT } from "../graphql/queries";
import products from "../products"


export default function productDescScreen({ match }) {
  const productId = useParams("id");
  const {data, loading} = useQuery(GET_SINGLE_PRODUCT, {
    variables: {
      id: productId.id
    }
  })
  console.log(data)
  
  // const productId = match.params.id;
  // if(loading) return <h1>loading....</h1>
  // if(!data) return <h1>Product not found</h1>
  // const product = data.getSingleProduct
  const product = products.find(({id}) => id === Number(productId.id))
  console.log(products)
  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <div className="card p-2 m-2">
            <h1> {product.name}</h1>
            <img src={product.image} className="img-fluid m-3 newImg" alt="product image" />
            <p>{product.description}</p>
          </div>
        </div>

        <div className="col-md-6 text-left">
          <div className="m-2">
            <h1>Price: {product.price}</h1>

            <hr />
            <h1>Select Quantity:</h1>

            <select>
              {[...Array(product.countInStock).keys()].map((x, i) => {
                return <option value={i + 1}>{i + 1}</option>;
              })}
            </select>
            <hr />
            <button className="btn btn-dark"> ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
    // </div>
    // </div>
    // </div>
  );
}
