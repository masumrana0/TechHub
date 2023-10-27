import Link from "next/link";

const CategoriesCard = () => {
  return (
    <div className=" grid lg:grid-cols-3 gap-5  ">
      <Link href={"/products/cpu"}>
        <div className="card   w-50 lg:w-96   bg-blue-600 text-white font-bold">
          <div className="card-body items-center text-center">
            <p className="card-title">CPU / Processor</p>
          </div>
        </div>
      </Link>
      <Link href={"/products/motherboard"}>
        <div className="card   w-50 lg:w-96   bg-blue-600 text-white font-bold">
          <div className="card-body items-center text-center">
            <p className="card-title">Motherboard</p>
          </div>
        </div>
      </Link>
      <Link href={"/products/ram"}>
        <div className="card   w-50 lg:w-96   bg-blue-600 text-white font-bold">
          <div className="card-body items-center text-center">
            <p className="card-title">RAM</p>
          </div>
        </div>
      </Link>
      <Link href={"/products/graphicsCard"}>
        <div className="card   w-50 lg:w-96   bg-blue-600 text-white font-bold">
          <div className="card-body items-center text-center">
            <p className="card-title">Graphics Card</p>
          </div>
        </div>
      </Link>
      <Link href={"/products/PowerSupply"}>
        <div className="card   w-50 lg:w-96 bg-blue-600 text-white font-bold">
          <div className="card-body items-center text-center">
            <p className="card-title">Power Supply Unit</p>
          </div>
        </div>
      </Link>
      <Link href={"/products/storage"}>
        <div className="card   w-50 lg:w-96 bg-blue-600 text-white font-bold">
          <div className="card-body items-center text-center">
            <p className="card-title">Storage Device</p>
          </div>
        </div>
      </Link>
      <Link href={"/products/monitor"}>
        <div className="card   w-50 lg:w-96 bg-blue-600 text-white font-bold">
          <div className="card-body items-center text-center">
            <p className="card-title">Monitor</p>
          </div>
        </div>
      </Link>
      <Link href={"/products/casing"}>
        <div className="card   w-50 lg:w-96 bg-blue-600 text-white font-bold">
          <div className="card-body items-center text-center">
            <p className="card-title">Casing</p>
          </div>
        </div>
      </Link>
      <Link href={"/products/others"}>
        <div className="card   w-50 lg:w-96   bg-blue-600 text-white font-bold">
          <div className="card-body items-center text-center">
            <p className="card-title">Others</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoriesCard;
