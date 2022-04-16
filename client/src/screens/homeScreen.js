import React from "react";
import Product from "../components/product";
import {useQuery, gql} from "@apollo/client"
import products from "../products"

const GET_ALL_PRODUCT = gql`
query getAllProduct {
  getProducts {
    _id
    title
    image
    description
    link
    reviews
    ratings
  }
}
`

export default function homeScreen() {
  const {data, loading} = useQuery(GET_ALL_PRODUCT)
  console.log(data)
  if (loading) return <h1>loading...</h1>
  return (
    <div>
      <div className="row justify-content-center">
        {products.map((product) => {
          return <Product key= {product.id} product ={product} />;
        })}
      </div>
    </div>
  );
}
