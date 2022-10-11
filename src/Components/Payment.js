import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineHeart } from "react-icons/ai";
import { TiArrowForward } from "react-icons/ti";
import { BiCopy } from "react-icons/bi";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { GoChevronRight } from "react-icons/go";

import car from "../Images/car.svg";

function Payment() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      await axios
        .get("https://fakestoreapi.com/products")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    };

    return () => {
      getData();
    };
  }, []);

  let stl = {
    size: "mx-auto w-[93%] h-fit",
    top: "flex justify-between items-center w-full h-[60px]",
    title: "text-[35px]",
    browse: "text-red-500 uppercase mr-[5px]",
    box: "relative w-[255px] h-[500px] hover:shadow-xl mt-[50px]",
    heart: "hover:animate-beat text-red-500 text-[22px] absolute top-3 right-2",
    forward:
      "group flex justify-center items-center w-[35px] h-[35px]  text-red-500 text-[22px] absolute top-12 right-0",
    soc_media:
      "invisible group-hover:visible flex flex flex-col justify-center items-center absolute z-20 top-1 left-8 w-[220px] h-[200px] bg-white rounded-[5px] shadow-lg text-black ",
    text_so_media: "text-[18px] mb-[10px] hover:text-blue-600",
    icons: "text-[22px] inline mr-[10px] text-blue-600",
    img: "w-full h-[50%] object-contain",
    delivery:
      "absolute left-1 top-[215px] z-100 shadow-2xl  p-1.5 rounded-md  bg-black",
    price: "text-[22px] px-[12px] font-[500] py-[8px]",
    box_title: "text-[18px]  px-[12px] leading-[26px]",
    btn: "flex justify-between items-center absolute bottom-3 left-0 right-0 mx-auto w-[85%] h-[50px] z-30",
    btn_self:
      "rounded-full border-[1px] border-black shadow-lg w-[70%] h-[40px]",
  };
  return (
    <div className={stl.size}>
      <div className={stl.top}>
        <p className={stl.title}>Extremely Convenient Payment Plan</p>
        <a
          href="https://olcha.uz/oz/Extremely Convenient Payment Plan"
          className={stl.browse}
        >
          <p>
            Browse all <GoChevronRight className="inline" />
          </p>
        </a>
      </div>

      <div className=" w-full grid grid-cols-5">
        {data.slice(6, 20).map((product) => (
          <div className={stl.box}>
            <AiOutlineHeart className={stl.heart} title="Add to favorite" />
            <div className={stl.forward}>
              <TiArrowForward className="hover:bg-red-500 rounded-full w-[70%] h-[70%]" />
              <div className={stl.soc_media}>
                <p className={stl.text_so_media}>
                  <BiCopy className={stl.icons} /> Copy link
                </p>
                <p className={stl.text_so_media}>
                  <BsFacebook className={stl.icons} />
                  Facebook
                </p>
                <p className={stl.text_so_media}>
                  <BsInstagram className={stl.icons} />
                  Instagram
                </p>
                <p className={stl.text_so_media}>
                  <BsTelegram className={stl.icons} />
                  Telegram
                </p>
              </div>
            </div>
            <img src={product.image} alt="" className={stl.img} />
            <div className={stl.delivery}>
              <img
                src={car}
                width="20"
                height="20"
                decoding="async"
                alt="delivery"
              />
            </div>
            <p className={stl.price}>{product.price} $</p>
            <p className={stl.box_title}>{product.title}</p>
            <div className={stl.btn}>
              <button className={stl.btn_self}>Buy</button>
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
                  fill="#000"
                ></rect>{" "}
                <rect
                  x="8.25"
                  y="3"
                  width="2.5"
                  height="19"
                  rx="1.25"
                  fill="#000"
                ></rect>{" "}
                <rect
                  x="13.25"
                  y="11"
                  width="2.5"
                  height="11"
                  rx="1.25"
                  fill="#000"
                ></rect>{" "}
                <rect
                  x="18.25"
                  y="7"
                  width="2.5"
                  height="15"
                  rx="1.25"
                  fill="#000"
                ></rect>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Payment;
