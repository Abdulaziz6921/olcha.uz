import React from "react";
import { GoChevronRight } from "react-icons/go";
import Product from "./Product";

function Payment({ data }) {
  let stl = {
    size: "mx-auto w-[93%] h-fit",
    top: "flex justify-between items-center w-full h-[60px]",
    title: "text-[35px]",
    browse: "text-red-500 uppercase mr-[5px]",
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
          <Product product={product} />
        ))}
      </div>
    </div>
  );
}

export default Payment;
