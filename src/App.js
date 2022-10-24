import Navbar from "./Components/Navbar.js";
import New from "./Components/New.js";
import Payment from "./Components/Payment.js";
import TopSlider from "./Components/Top_Slider.js";
import Trending from "./Components/Trending.js";
import { useState, useEffect } from "react";
import axios from "axios";
import { BsArrowRightCircle } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineHeart } from "react-icons/ai";
import { TiArrowForward } from "react-icons/ti";
import { BiCopy } from "react-icons/bi";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import car from "./Images/car.svg";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./Firebase/firebaseConfig.js";

function Product({ product }) {
  const [mouse, setMouse] = useState(false);
  const [mouseScreen, setMouseScreen] = useState(false);

  let stl = {
    box: " relative w-[190px] h-[520px] md:w-[255px] hover:shadow-custom mt-[20px] mb-[20px]",
    heart: "hover:animate-beat text-red-500 text-[22px] absolute top-3 right-2",
    forward:
      "flex justify-center items-center w-[35px] h-[35px] text-red-500  text-[22px] absolute top-12 right-0",
    soc_media: `${mouse ? "flex" : "hidden"} ${
      mouseScreen ? "right-8" : "left-8"
    } flex-col justify-center items-center absolute z-20 top-1  w-[220px] h-[200px] bg-white rounded-[5px] shadow-custom text-black
   text-[18px] leading-[40px]`,
    icons: " text-[22px] inline mr-[10px] text-blue-600",
    img: "w-full h-[50%] object-contain",
    delivery:
      "absolute left-1 top-[215px] z-100 shadow-2xl  p-1.5 rounded-md  bg-black",
    price: "text-[22px] px-[12px] font-[500] py-[8px]",
    box_title: "text-[18px]  px-[12px] leading-[26px]",
    btn: "flex justify-between items-center absolute bottom-3 left-0 right-0 mx-auto w-[85%] h-[50px] ",
    btn_self:
      "rounded-full border-[1px] border-black shadow-lg w-[70%] h-[40px]",
    text_so_media: "hover:text-blue-500",
  };
  const closeFunc = () => {
    setMouse(false);
  };
  const openFunc = (e) => {
    setMouse(true);
    if (
      (e.screenX > 1150 && window.innerWidth > 700) ||
      (e.screenX > 300 && window.innerWidth < 700)
    ) {
      setMouseScreen(true);
    } else {
      setMouseScreen(false);
    }
  };

  return (
    <div className={stl.box}>
      <AiOutlineHeart className={stl.heart} title="Add to favorite" />
      <div
        className={stl.forward}
        onMouseEnter={openFunc}
        onMouseLeave={closeFunc}
      >
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

      <img src={product.images[0]} alt="" className={stl.img} />

      <div className={stl.delivery}>
        <img src={car} width="20" height="20" decoding="async" alt="delivery" />
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
  );
}

const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <BsArrowRightCircle className="text-[30px] bg-red-600 rounded-full text-white hover:text-red-600 hover:bg-white duration-500 position absolute right-8" />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
};

const settings = {
  infinite: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
      },
    },
  ],
};

let stl = {
  size: "flex flex-col mx-auto w-[95%] md:w-[93%] h-fit mb-[50px]",
  top: "flex justify-between items-center w-full h-[60px]",
  title: "font-semibold text-[23px] md:text-[35px]",
  browse: "text-[15px] text-red-500 uppercase mr-[5px]",
};

function App() {
  const [data, setData] = useState([]);
  const [document, setDocument] = useState([]);
  console.log(document);
  useEffect(() => {
    const getData = async () => {
      await axios
        .get("https://dummyjson.com/products")
        .then((res) => setData(res.data.products))
        .catch((err) => console.log(err));
    };

    return () => {
      getData();
    };
  }, []);

  useEffect(() => {
    const getData = async () => {
      onSnapshot(
        collection(db, "products"),
        (snapshot) => {
          setDocument(snapshot.docs.map((doc) => doc.data()));
        },
        (error) => {
          console.log(error);
        }
      );
    };
    getData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <TopSlider />
      <Trending
        data={data}
        slideSettings={settings}
        Product={Product}
        stl={stl}
      />
      <New data={data} slideSettings={settings} Product={Product} stl={stl} />
      <Payment data={data} Product={Product} stl={stl} />
    </div>
  );
}

export default App;
