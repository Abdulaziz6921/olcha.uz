import React from "react";
import Slider from "react-slick";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";

function Top_Slider() {
  const stl = {
    arrowRight:
      "top-0 bottom-0 my-auto text-[30px] bg-red-600 rounded-full text-white hover:text-red-600 hover:bg-white duration-500 absolute right-8",

    arrowLeft:
      "absolute left-0 top-0 bottom-0 my-auto text-[30px] bg-red-600 rounded-full text-white hover:text-red-600 hover:bg-white duration-500 ",

    size: " mx-auto w-[90%] md:w-[93%] h-fit my-[30px] md:my-[80px]",

    img: "w-full h-fit object-cover  rounded-[15px] ",
  };

  const SampleNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <BsArrowRightCircle className={stl.arrowRight} />
      </div>
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <BsArrowLeftCircle className={stl.arrowLeft} />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 700,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <div className={stl.size}>
      <div className={stl.innerSize}>
        <Slider {...settings}>
          <img
            src="https://olcha.uz/image/1400x360/sliders/ru/4vzRry4XvDNsWcPA3Q1luxBQrZjxQPapjYcMLVHNlRbBu4qwlKAnHkBlrTVj."
            alt=""
            className={stl.img}
          />
          <img
            src="https://olcha.uz/image/1400x360/sliders/ru/WXKkm0xYIEskTs5JQKq8kxqKkL6a6RkfujRuj5auKv6qcuy218DVVbCnNq4a."
            alt=""
            className={stl.img}
          />
          <img
            src="https://olcha.uz/image/1400x360/sliders/ru/oaYex8Aai3wxJfjgI5OkSJ1UJFK0RE0o8shjUZmBef8GoTj4sZUvfJ7f67El."
            alt=""
            className={stl.img}
          />
          <img
            src="https://olcha.uz/image/1400x360/sliders/ru/behBjzNn36dxEECs36WFi1wh6E06MqrIQab902xkFaEednPkChVIgLsXw29F."
            alt=""
            className={stl.img}
          />
          <img
            src="https://olcha.uz/image/1400x360/sliders/ru/2lJ3vvPIbqCDR2N5TwVo7yp88wkvvbbTb1Dn4WXQ7bagp4mMEWDO1PHBgG5j."
            alt=""
            className={stl.img}
          />
          <img
            src="https://olcha.uz/image/1400x360/sliders/ru/AvOFUyRuqF0qyf3Jvzm0QhGZWM8kkGdGlHXZxiHInFkpfq4dcvsAS4u30eTz."
            alt=""
            className={stl.img}
          />
          <img
            src="https://olcha.uz/image/1400x360/sliders/ru/hGwl7LdZ4PHz5UVJFsLQRS89yKThXbxkRqrGOxY7ebNvo6rW8TPAPpeUX7R4."
            alt=""
            className={stl.img}
          />
          <img
            src="https://olcha.uz/image/1400x360/sliders/ru/55duvcdTLcZvkrf2LaHmWe3ZIGuVdOGeXb6ouW9mHLYwDwRvzcVHkaBYpuRe.jpeg"
            alt=""
            className={stl.img}
          />
          <img
            src="https://olcha.uz/image/1400x360/sliders/ru/fwuNMeIFt1g8hz0CKilAI42YNJF3VMzsbAOJ06lGzm5Q48HM0UA0QfWvgZqK.jpeg"
            alt=""
            className={stl.img}
          />
        </Slider>
      </div>
    </div>
  );
}

export default Top_Slider;
