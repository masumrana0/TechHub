import Image from "next/image";
import Link from "next/link";
import { AiOutlineStar } from "react-icons/ai";
const HomeCard = ({ product }) => {
  return (
    <Link href={`/productDetails/${product?._id}`}>
      <div className="card card-compact w-50  lg:w-96 bg-white shadow-xl ">
        <figure>
          <Image
            src={product?.img}
            width={300}
            height={300}
            alt="product img"
          />
        </figure>
        <div className="card-body">
          <p className="text-gray-400 font-bold">{product?.category}</p>
          <h2 className="card-title">{product?.productName}</h2>
          <div className="flex items-center py-5">
            <p className="text-3xl font-bold text-amber-600   ">
              {product?.price}
              {"\u09F3"}{" "}
            </p>
            <p className="text-2xl font-semibold text-right text-amber-600">
              {product?.status}
            </p>
          </div>
          <div className="card-actions justify-end ">
            <p className="flex items-center text-gray-400 ">
              {product?.averageRating}x
              <AiOutlineStar className="text-xl text-amber-600 " />
            </p>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeCard;
