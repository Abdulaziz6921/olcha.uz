import React from "react";
import { GoChevronRight } from "react-icons/go";

function Payment({ data, Product, stl }) {
  return (
    <div className={stl.size}>
      <div className={stl.top}>
        <p className={stl.title}>Favorible Installment</p>
        <a
          href="https://olcha.uz/oz/Extremely Convenient Payment Plan"
          className={stl.browse}
        >
          <p>
            Browse all <GoChevronRight className="inline" />
          </p>
        </a>
      </div>

      <div className=" w-full grid grid-cols-2 md:grid-cols-5">
        {data
          .slice(6)
          .reverse()
          .map((product) => (
            <Product product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
}

export default Payment;
