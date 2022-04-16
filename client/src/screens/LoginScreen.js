import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN_MUTATION } from "../graphql/mutation";
const LoginScreen = () => {
  const navigate = useNavigate();
  const [loginUser] = useMutation(LOGIN_MUTATION);
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) =>
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({
        variables: {
          ...userDetails,
        },
      });
      localStorage.setItem("jwtAuthToken", data.login.token);
      navigate("/")
      window.location.reload()
    } catch (error) {
      console.log(error);
      alert("error logging in");
    }
  };
  return (
    <>
      <div className="container">
        <h1>Login components</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleInputChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginScreen;
