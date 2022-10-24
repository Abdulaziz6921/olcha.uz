import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function Register() {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
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
        <button
          onClick={signInWithGoogle}
          className="border-2 border-black p-2"
        >
          Google
        </button>

        <form className="shadow-lg w-[400px] px-[40px] flex flex-col bg-white h-fit">
          <h1 className="text-center text-[30px] pt-[30px] ">Register</h1>
          <label htmlFor="phone_number" className="text-red-500 my-[15px] ">
            Phone Number
          </label>
          <input
            type="number"
            className="mb-3 py-3 px-4 border-2 border-red-500 focus:outline-none rounded-full"
          />
          <label htmlFor="password" className="text-red-500 my-[15px] ">
            Password
          </label>
          <input
            type="text"
            placeholder="Enter the code from the message"
            className="mb-3 py-3 px-4 border-2 border-red-500 focus:outline-none rounded-full"
          />

          <p className="inline text-right mb-5 mt-8 text-[13px]">
            Haven't received the code yet?{" "}
            <a href="email.com" className="hover:text-red-500">
              Send it again?
            </a>
          </p>

          <button className="w-full bg-gradient-to-r from-[#E66346] to-[#98508E] text-white p-3 rounded-full font-semibold text-lg mb-[20px]">
            Register
          </button>
          <Link to="/login">
            <button className="w-full bg-white text-black p-3 rounded-full border border-black font-semibold text-lg mb-[50px]">
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
