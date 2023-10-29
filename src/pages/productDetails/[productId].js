import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiLogoFacebook, BiSave, BiAddToQueue } from "react-icons/bi";

const ProductDetails = ({ product }) => {
  const data = product?.data;

  const [isReviewOpen, setReviewOpen] = useState(false);
  const [isDescriptionOpen, setDescriptionOpen] = useState(true);
  const handleDescriptionOpen = () => {
    setDescriptionOpen(true);
    setReviewOpen(false);
  };

  const handleReviewOpen = () => {
    setDescriptionOpen(false);
    setReviewOpen(true);
  };

  return (
    <div className="mt-20">
      <div className="container mx-auto ">
        {/* upper part  */}
        <div className=" flex justify-between mx-4 lg:mx-0  items-center bg-gray-100  p-3 rounded-xl shadow-xl ">
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
              <span className="text-lg lg:text-lg bg-gray-200 font-bold p-2 lg:py-2 lg:px-3 rounded-2xl">
                {data?.category}
              </span>
            </div>
            <div className="mt-8">
              <h2 className="lg:text-3xl text-2xl font-semibold">
                Key Features
              </h2>
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
              <span className="flex items-center text-gray-400 ">
                IndividualRating: {data?.IndividualRating}x
                <AiOutlineStar className="text-xl text-amber-600 " />
              </span>
              <span className="flex items-center text-gray-400 ">
                averageRating: {data?.averageRating}x
                <AiOutlineStar className="text-xl text-amber-600 " />
              </span>
            </div>
            <div className="py-4">
              <h2 className="text-3xl font-bold">Payment Options</h2>
              <div className="border border-violet-500 w-72 px-5 py-2 mt-4 ">
                <h3 className="text-3xl font-bold">
                  {data?.price} {"\u09F3"}
                </h3>
                <p> Cash Discount Price</p>
                <p className="text-gray-400">Online / Cash Payment</p>
              </div>
              <div className="flex justify-center">
                <button className="btn px-20 mt-3 ">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* lower part */}
      <div className="my-20 w-full bg-gray-300">
        <div className="container mx-auto">
          <div className="flex gap-5 py-3">
            <button
              onClick={handleDescriptionOpen}
              className={`btn btn-outline text-white  ${
                isDescriptionOpen && "bg-red-500  "
              }`}
            >
              Description
            </button>
            <button
              onClick={handleReviewOpen}
              className={`btn btn-outline text-white  ${
                isReviewOpen && "bg-red-500  "
              }`}
            >
              Review
            </button>
          </div>
          {isDescriptionOpen ? (
            <div className="bg-white mt-5 p-5">
              <h2 className="text-3xl font-bold mb-6 ">Description</h2>
              <h3 h3 className="lg:text-3xl text-xl font-semibold">
                {data?.productName}
              </h3>
              <p className="text-lg mt-3 ">{data?.description}</p>
            </div>
          ) : (
            <div>
              <div className=" mx-auto bg-white">
                <h2 className="text-3xl font-bold mb-6 ">Product Review</h2>
                <div className="py-10">
                  <div className="shadaw-lg border-2  p-3 mx-5 rounded-lg shadow-lg bg-gray-100 mb-3 ">
                    <p className="text-gray-700"> its a good products</p>
                  </div>
                  <div className="shadaw-lg border-2  p-3 mx-5 rounded-lg shadow-lg bg-gray-100 mb-3 ">
                    <p className="text-gray-700"> its a good products</p>
                  </div>
                </div>
              </div>
              <div className="mx-3  py-10">
                <form className="mt-20  ">
                  <textarea
                    name="comment"
                    placeholder="Enter Your Opinion in this book"
                    className="w-full  lg:w-1/2  h-48 border  border-gray-300 bg-white rounded-md py-2 px-3 mb-2"
                  ></textarea>
                </form>
                <button type="submit" className="btn btn-outline  text-white  ">
                  submit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

// SSG  Implementation
export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/product`);
  const products = await res.json();
  const paths = products?.data?.map((product) => ({
    params: { productId: product._id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { params } = context;

  const res = await fetch(
    `http://localhost:3000/api/product/?id=${params.productId}`
  );
  const product = await res.json();

  return { props: { product } };
}
