import React, { useContext } from "react";
import olcha from "../Images/logo.png";
import { FaBars } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillBagPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { UserContextApi } from "../Context/UserContext";
import { auth } from "../Firebase/firebaseConfig";
import { signOut } from "firebase/auth";

function Navbar() {
  const { CurrentUser } = useContext(UserContextApi);
  console.log(CurrentUser);

  let stl = {
    size: "sticky z-[110] top-0 w-full h-[80px] bg-gradient-to-r from-[#E66346] to-[#98508E]",
    inner_size:
      " text-white flex justify-between items-center mx-auto w-[95%] md:w-[91%] h-full ",
    img: "hidden md:block w-[140px] h-[24px] object-contain",
    btn: "text-[18px] flex justify-center items-center w-[40px] h-[40px] md:w-[150px] md:h-[73%] border-2 border-white rounded-[5px] md:rounded-full",
    input:
      "text-black flex  w-[65%] h-[55%] md:w-[540px] md:h-[65%] border-2 border-white rounded-full",
    input_self: "w-[87%] h-full rounded-l-full indent-[23px] outline-none",
    search:
      "text-white text-[21px] flex justify-center items-center bg-[#EB1537] w-[13%] h-full rounded-r-full",

    additions:
      "flex flex-col justify-center items-center w-fit px-[5px] h-[85%] text-[18px]",
    additions2:
      "hidden md:flex flex-col justify-center items-center w-fit px-[5px] h-[85%] text-[18px]",
  };

  return (
    <div className={stl.size}>
      <div className={stl.inner_size}>
        <img src={olcha} alt="" className={stl.img} />

        <button className={stl.btn}>
          <p className="hidden md:block">Catalogue</p>
          <FaBars className="ml-0 md:ml-[17px]" />
        </button>
        <div className={stl.input}>
          <input
            type="search"
            placeholder="Search products"
            className={stl.input_self}
          />
          <div className={stl.search}>
            <FiSearch />
          </div>
        </div>

        <div className="group  relative h-full flex items-center cursor-pointer">
          {CurrentUser && (
            <div className="hidden group-hover:flex w-[100px] top-[80px] left-[30px] h-[100px] bg-blue-200 rounded-[10px] absolute items-center text-[20px] justify-center text-black">
              {CurrentUser && (
                <button
                  className="bg-red-400 p-2 rounded-[8px] hover:bg-red-600"
                  onClick={() => signOut(auth)}
                >
                  Sign Out
                </button>
              )}
            </div>
          )}

          {CurrentUser ? (
            <div className={stl.additions}>
              <img
                src={CurrentUser.photoURL}
                referrerPolicy="true"
                className="border-black w-[50px] h-[50px]"
                alt=""
              />
              <h1>
                {CurrentUser.email.slice(0, CurrentUser.email.indexOf("@"))}
              </h1>
            </div>
          ) : (
            <Link to="login" className={stl.additions}>
              <FaUser />
              <p className="hidden md:block">Log in</p>
            </Link>
          )}
        </div>

        <div className={stl.additions2}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="3.25"
              y="15"
              width="2.5"
              height="7"
              rx="1.25"
              fill="#fff"
            ></rect>{" "}
            <rect
              x="8.25"
              y="3"
              width="2.5"
              height="19"
              rx="1.25"
              fill="#fff"
            ></rect>{" "}
            <rect
              x="13.25"
              y="11"
              width="2.5"
              height="11"
              rx="1.25"
              fill="#fff"
            ></rect>{" "}
            <rect
              x="18.25"
              y="7"
              width="2.5"
              height="15"
              rx="1.25"
              fill="#fff"
            ></rect>
          </svg>
          <p>Compare</p>
        </div>
        <div className={stl.additions2}>
          <AiOutlineHeart />
          <p>Favorites</p>
        </div>
        <div className={stl.additions}>
          <BsFillBagPlusFill />
          <p className="hidden md:block">Basket</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
