import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation createUser($email: String!, $username: String!, $password: String!) {
    createUser(email: $email, username: $username, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;
