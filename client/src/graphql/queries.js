import {gql} from "@apollo/client"

export const GET_SINGLE_PRODUCT = gql`
query getSingleProduct($id: ID!) {
  getSingleProduct(id: $id) {
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
export const GET_ALL_PRODUCT = gql`
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

