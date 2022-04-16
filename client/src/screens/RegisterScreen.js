import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import axios from "axios";
import { useMutation } from "@apollo/client";
import { CREATE_USER_MUTATION } from "../graphql/mutation";


const Register = () => {
  const navigate = useNavigate()
  const [createUser] = useMutation(CREATE_USER_MUTATION)
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user, //spread operator
      [name]: value,
    });
  };

  const handleFormSubmit = async e => {
    e.preventDefault()
    try {
      const {data} = await createUser({
        variables: {
          email: user.email,
          username: user.name,
          password: user.password
        }
      })
      localStorage.setItem("jwtAuthToken", data.createUser.token)
      localStorage.setItem("userDetails", JSON.stringify(data.createUser.user))
      console.log(data)
      navigate("/")
    } catch (error) {
      console.log(error)
      alert("error creating new user")
    }
  }

  return (
    <>
      <h1>Register</h1>
      <div class="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
        <div class="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
          Create a new account
        </div>
        <span class="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">
          Already have an account ?
          <Link
            to="/login"
            class="text-sm text-blue-500 underline hover:text-blue-700"
          >
            Sign in
          </Link>
        </span>
        <div class="p-6 mt-8">
          <form onSubmit={handleFormSubmit}>
            <div class="flex flex-col mb-2">
              <div class=" relative ">
                <input
                  type="text"
                  id="create-account-pseudo"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  placeholder="FullName"
                />
              </div>
            </div>
            <div class="flex gap-4 mb-2">
              <div class=" relative ">
                <input
                  type="text"
                  id="create-account-first-name"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>
            </div>
            <div class="flex flex-col mb-2">
              <div class=" relative ">
                <input
                  type="password"
                  id="create-account-email"
                  class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="password"
                />
              </div>
            </div>
            <div class="flex w-full my-4">
              <button
                type="submit"
                class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
