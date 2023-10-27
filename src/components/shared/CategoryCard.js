import Image from "next/image";
const CategoryCard = ({ product }) => {
  console.log(product);
  return (
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
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
