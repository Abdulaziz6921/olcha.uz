import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

function TopSlider() {
  let stl = {
    size: " w-full h-[93vh] border-4 border-blue-500",
    swiper: "w-[91%] h-[100px] mt-[20px] mx-auto border-2 border-green-700 ",
    swiper_slide:
      " flex justify-center items-center border-2 border-red-700 text-center ",
  };
  return (
    <div className={stl.size}>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={stl.swiper}
      >
        <SwiperSlide className={stl.swiper_slide}>
          <img
            src="https://www.epam.com/content/dam/epam/locations/offices/Office-Canada_305x314.jpg"
            alt=""
          />
        </SwiperSlide>
        <div className={stl.swiper_slide}></div>
        <SwiperSlide className={stl.swiper_slide}>
          <img
            src="https://www.epam.com/content/dam/epam/locations/offices/Office-Canada_305x314.jpg"
            alt=""
            className={stl.img}
          />
        </SwiperSlide>
        <SwiperSlide className={stl.swiper_slide}>
          <img
            src="https://www.epam.com/content/dam/epam/locations/offices/Office-Canada_305x314.jpg"
            alt=""
            className={stl.img}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default TopSlider;
