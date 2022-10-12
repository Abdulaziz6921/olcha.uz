import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="p-20 h-screen w-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gradient-to-r from-[#E66346] to-[#98508E]">
        <div className="content text-3xl text-center md:text-left">
          <Link to="/" className="text-6xl text-white font-bold">
            Olcha
          </Link>
          <p className="text-xl mt-[20px] font-semibold font-[cursive]">
            An Exciting place for the whole family to shop
          </p>
        </div>
        <div className="container mx-auto flex flex-col items-center">
          <form className="shadow-lg w-fit px-[40px] flex flex-col bg-white h-fit">
            <h1 className="text-center text-[30px] pt-[30px] ">
              Login or create an account
            </h1>
            <label htmlFor="phone_number" className="text-red-500 my-[15px] ">
              Phone Number
            </label>
            <input
              type="text"
              className="mb-3 py-3 px-4 border-2 border-red-500 focus:outline-none rounded-full"
            />
            <label htmlFor="password" className="text-red-500 my-[15px] ">
              Password
            </label>
            <input
              type="text"
              className="mb-3 py-3 px-4 border-2 border-red-500 focus:outline-none rounded-full"
            />
            <a href="email.com" className="text-right mb-5 mt-8">
              Forgot Password?
            </a>
            <button className="w-full bg-gradient-to-r from-[#E66346] to-[#98508E] text-white p-3 rounded-full font-semibold text-lg">
              Login
            </button>

            <hr />
            <Link to="/register">
              <button className="w-full bg-white mt-4 mb-12 border border-black p-3 rounded-full font-semibold text-lg">
                Create an account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
