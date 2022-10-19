import React from "react";
import { GoChevronRight } from "react-icons/go";
import Slider from "react-slick";

function New({ data, Product, slideSettings, stl }) {
  return (
    <div className={stl.size}>
      <div className={stl.top}>
        <p className={stl.title}>New products</p>
        <a href="https://olcha.uz/oz/new" className={stl.browse}>
          <p>
            Browse all <GoChevronRight className="inline" />
          </p>
        </a>
      </div>

      <div className=" w-full h-fit ">
        <Slider {...slideSettings}>
          {data.slice(5).map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default New;
