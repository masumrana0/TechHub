import {
  storeCasing,
  storeCpu,
  storeGraphicCard,
  storeMonitor,
  storeMotherBoard,
  storePowerSupply,
  storeRam,
  storeStorage,
} from "@/Redux/Slices/productSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineStar } from "react-icons/ai";
import { useDispatch } from "react-redux";

const CategoryCard = ({ product }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleStoreingProduct = (eve) => {
    event.stopPropagation();
    router.push("/pc-builder/builder");
    if (product?.category == "CPU") {
      dispatch(storeCpu(product));
    } else if (product?.category == "Motherboard") {
      dispatch(storeMotherBoard(product));
    } else if (product?.category == "RAM") {
      dispatch(storeRam(product));
    } else if (product?.category == "Storage") {
      dispatch(storeStorage(product));
    } else if (product?.category == "PowerSupply") {
      dispatch(storePowerSupply(product));
    } else if (product?.category == "Monitor") {
      dispatch(storeMonitor(product));
    } else if (product?.category == "Casing") {
      dispatch(storeCasing(product));
    } else if (product?.category == "GraphicsCard") {
      dispatch(storeGraphicCard(product));
    }
  };

  return (
    <div>
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

            <div className="card-actions  justify-end">
              <Link href={`/productDetails/${product?._id}`}>
                {" "}
                <button className="btn  text-white ">Details</button>
              </Link>
              <button
                onClick={handleStoreingProduct}
                className="btn text-white"
              >
                Add to Builder
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
