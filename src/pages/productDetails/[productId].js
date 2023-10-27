import Image from "next/image";
import { useRouter } from "next/router";

import React from "react";
import { BiLogoFacebook, BiSave, BiAddToQueue } from "react-icons/bi";

const ProductDetails = ({ product }) => {
  const data = product?.data;

  return (
    <div className="container mx-auto py-20">
      <div className="flex justify-between mx-4 lg:mx-0  items-center bg-gray-100  p-3 rounded-xl shadow-xl ">
        <p className="flex items-center  lg:text-2xl hover:text-amber-600 ">
          Share <BiLogoFacebook />{" "}
        </p>
        <div className="flex items-center gap-5">
          <p className="flex items-center  lg:text-2xl hover:text-amber-600">
            <BiSave />
            Save
          </p>
          <p className="flex items-center  lg:text-2xl hover:text-amber-600">
            <BiAddToQueue /> Add to Compare
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row  py-10  gap-2 ">
        <div className="lg:w-1/3">
          <Image
            src={data?.img}
            className="w-full"
            width={500}
            height={500}
            alt="product-img"
          />
        </div>
        <div className="px-4 lg:px-0  lg:w-2/3 ">
          <h2 className="lg:text-3xl text-xl font-semibold">
            {data?.productName}
          </h2>
          <div className="mt-4 flex flex-wrap  gap-2 lg:gap-10">
            <span className="text-lg lg:text-lg bg-gray-200 font-bold p-2 lg:py-2 lg:px-3 rounded-2xl">
              Price: {data?.price} {"\u09F3"}
            </span>
            <span className="text-lg lg:text-lg bg-gray-200 font-bold p-2 lg:py-2 lg:px-3 rounded-2xl">
              Regular Price: {parseInt(data?.price) + 500} {"\u09F3"}
            </span>
            <span className="text-lg lg:text-lg bg-gray-200 font-bold p-2 lg:py-2 lg:px-3 rounded-2xl">
              {data?.status}
            </span>
          </div>
          <div className="mt-8">
            <h2 className="lg:text-3xl text-2xl font-semibold">Key Features</h2>
            {data?.keyFeatures?.map((feature, index) => (
              <p key={index} className="lg:text-lg  my-2">
                {feature}
              </p>
            ))}

            <span
              className="border-b border-amber-600 text-amber-600 cursor-pointer  "
              id="description"
            >
              View More Info
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

// server side randering
export async function getServerSideProps(context) {
  const { query } = context;

  const res = await fetch(
    `http://localhost:3000/api/product/?id=${query.productId}`
  );
  const product = await res.json();

  return { props: { product } };
}
