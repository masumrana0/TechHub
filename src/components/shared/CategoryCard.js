import { storeCpu } from "@/Redux/Slices/productSlice";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineStar } from "react-icons/ai";
import { useDispatch } from "react-redux";

const CategoryCard = ({ product }) => {
  const dispatch = useDispatch();
  const handleStoreingProduct = () => {
    if (product.category == "CPU") {
      dispatch(storeCpu(product));
    } 
  };
  return (
    <Link href={`/productDetails/${product?._id}`}>
      <div className="flex justify-center">
        <div className=" card mx-3  lg:mx-0    lg:card-side  selection: bg-white lg:w-1/2 shadow-xl my-10 border-1 border-gray-500">
          <figure>
            <Image
              src={product?.img}
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </figure>
          <div className="card-body">
            <div className="flex">
              <p className="text-gray-400">{product?.category}</p>
              <p className="text-gray-400">{product?.status}</p>
              <p className="flex items-center text-gray-400 ">
                {product?.averageRating}x
                <AiOutlineStar className="text-xl text-amber-600 " />
              </p>
            </div>
            <h2 className="card-title">{product?.productName}</h2>
            <p className="text-3xl text-amber-600">
              {product?.price}
              {"\u09F3"}{" "}
            </p>
            <div>
              <p className="hidden lg:block">
                {product?.description.slice(1, 140)}........
              </p>
            </div>
            <div className="card-actions justify-end">
              <button
                onClick={handleStoreingProduct}
                className="btn btn-primary"
              >
                Add to Builder
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
