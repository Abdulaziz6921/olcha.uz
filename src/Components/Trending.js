import React from "react";
import { GoChevronRight } from "react-icons/go";
import Slider from "react-slick";

function Trending({ data, slideSettings, Product, stl }) {
  return (
    <div className={stl.size}>
      <div className={stl.top}>
        <p className={stl.title}>Trending products</p>
        <a href="https://olcha.uz/oz/new" className={stl.browse}>
          <p>
            Browse all <GoChevronRight className="inline" />
          </p>
        </a>
      </div>

      <div className=" w-full h-fit">
        <Slider {...slideSettings}>
          {data.slice(0, 15).map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Trending;
