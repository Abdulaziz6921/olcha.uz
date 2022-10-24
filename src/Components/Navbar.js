import React, { useContext, useState } from "react";
import olcha from "../Images/logo.png";
import { FaBars } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { AiOutlineHeart, AiFillCloseCircle } from "react-icons/ai";
import { BsFillBagPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { UserContextApi } from "../Context/UserContext";
import { auth } from "../Firebase/firebaseConfig";
import { signOut } from "firebase/auth";

function Navbar() {
  const { CurrentUser } = useContext(UserContextApi);

  const [open, setOpen] = useState(true);

  let stl = {
    size: "sticky z-[110] top-0 w-full h-[80px] bg-gradient-to-r from-[#E66346] to-[#98508E]",
    inner_size:
      " text-white flex justify-between items-center mx-auto w-[95%] md:w-[91%] h-full ",
    img: "hidden md:block w-[140px] h-[24px] object-contain",
    btn: "text-[18px] flex justify-center items-center w-[40px] h-[40px] md:w-[150px] md:h-[73%] border-2 border-white rounded-[5px] md:rounded-full",
    sidebar: `${
      open ? "translate-x-[-1800px]" : "translate-x-[0] duration-500"
    } flex  w-[90%] md:w-[95%] h-[100vh] border-2 border-red-600 absolute top-0 left-0 z-[4] bg-white`,

    xMark: "text-[35px] text-red-500 absolute top-0 right-[-40px]",

    leftSide:
      "overflow-x-auto flex flex-col justify-between pl-[20px] w-[30%] h-full border-2 border-blue-700",

    leftLi:
      "w-[95%] h-fit py-[5px] pl-[10px] pr-[70px]  text-black rounded-[10px] hover:bg-red-600 hover:text-white mb-[7px]",

    rightSide: "w-[70%] h-full border-2 border-blue-700",

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

        <button className={stl.btn} onClick={() => setOpen(false)}>
          <p className="hidden md:block">Catalogue</p>
          <FaBars className="ml-0 md:ml-[17px]" />
        </button>

        <div className={stl.sidebar}>
          <AiFillCloseCircle
            onClick={() => setOpen(true)}
            className={stl.xMark}
          />

          <ul className={stl.leftSide}>
            <a href="fksljflsk">
              <li className={stl.leftLi}>
                Smartphones, phones, gadgets, accessories
              </li>
            </a>
            <a href="fksljflsk">
              <li className={stl.leftLi}>Household Appliances</li>
            </a>
            <a href="fksljflsk">
              <li className={stl.leftLi}>Laptops, printers, computers</li>
            </a>
            <a href="fksljflsk">
              <li className={stl.leftLi}>TVs, photo-video and audio</li>
            </a>
            <a href="fksljflsk">
              <li className={stl.leftLi}>Clothing and footwear</li>
            </a>
            <a href="fksljflsk">
              <li className={stl.leftLi}>Furniture</li>
            </a>
            <a href="fksljflsk">
              <li className={stl.leftLi}>For gamers</li>
            </a>
            <a href="fksljflsk">
              <li className={stl.leftLi}>Everything for the kitchen</li>
            </a>
            <a href="fksljflsk">
              <li className={stl.leftLi}>Books</li>
            </a>
            <a href="fksljflsk">
              <li className={stl.leftLi}>
                Everything for office, home and garden
              </li>
            </a>
            <a href="fksljflsk">
              <li className={stl.leftLi}>
                Everything for renovation and construction
              </li>
            </a>
            <a href="fksljflsk">
              <li className={stl.leftLi}>Sports Goods</li>
            </a>
            <a href="fksljflsk">
              <li className={stl.leftLi}>Auto Products</li>
            </a>
            <a href="fksljflsk">
              <li className={stl.leftLi}>Beauty & Health</li>
            </a>
            <a href="fksljflsk">
              <li className={stl.leftLi}>Toys and goods for children</li>
            </a>
            <a href="fksljflsk">
              <li className={stl.leftLi}>Stationery</li>
            </a>
            <a href="fksljflsk">
              <li className={stl.leftLi}>Electric transport</li>
            </a>
            <a href="fksljflsk">
              <li className={stl.leftLi}>Gifts and souvenirs</li>
            </a>
            <a href="fksljflsk">
              <li className={stl.leftLi}>Smart Home</li>
            </a>
            <a href="fksljflsk">
              <li className={stl.leftLi}>Advantageous offers</li>
            </a>
          </ul>
          <div className={stl.rightSide}></div>
        </div>
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

        <div className="group relative h-full flex items-center cursor-pointer">
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
