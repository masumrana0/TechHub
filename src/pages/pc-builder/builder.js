import Link from "next/link";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { isAllFilup } from "@/Redux/Slices/productSlice";

const PcBuilder = () => {
  const dispatch = useDispatch();
  const isAllFilupStatus = useSelector((state) => state.product.isAllFilup);
  const [cpuData] = useSelector((state) => state.product.cpu);
  const [motherboardData] = useSelector((state) => state.product.motherborad);
  const [ramData] = useSelector((state) => state.product.ram);
  const [storageData] = useSelector((state) => state.product.storage);
  const [GrapihisCardData] = useSelector((state) => state.product.GrapihisCard);
  const [powerSupplyData] = useSelector((state) => state.product.powerSupply);
  const [casingData] = useSelector((state) => state.product.casing);
  const [monitorData] = useSelector((state) => state.product.monitor);

  const components = [
    cpuData,
    motherboardData,
    ramData,
    storageData,
    GrapihisCardData,
    powerSupplyData,
    casingData,
    monitorData,
  ];

  const handleCompleateBuild = () => {
    alert("Your PC Build is Compleate");
  };

  const totalPrice = components.reduce(
    (accumulator, component) => accumulator + (parseInt(component?.price) || 0),
    0
  );

  if (
    cpuData &&
    motherboardData &&
    ramData &&
    storageData &&
    powerSupplyData &&
    casingData &&
    monitorData
  ) {
    dispatch(isAllFilup(true));
  }

  return (
    <div className="flex justify-center my-10 px-3 sm:px-0">
      <div className="w-full sm:w-1/2 border-2 border-blue-400">
        <div className="flex justify-between items-center p-3">
          {" "}
          <h2 className="text-xl hidden lg:block font-bold">
            PC Builder- Build Your Computer -TechHub{" "}
          </h2>{" "}
          <h2 className="text-white text-xl font-extrabold bg-black py-3 px-6 rounded-lg text-center">
            {totalPrice}
            {"\u09F3"}
          </h2>
        </div>
        <div className="px-4 mt-5">
          <div className="bg-gray-500  font-bold  text-white">
            <h2>Choose Component</h2>
          </div>

          <div className="mt-5">
            {/* cpu card  */}
            <div className="flex justify-around border-2 border-blue-400 py-5 px-4 mb-4">
              <div>
                <h1>CPU</h1>
                <Image
                  className={`${!cpuData?.img && "hidden"}`}
                  src={cpuData?.img}
                  width={40}
                  height={40}
                  alt="product img"
                />
              </div>
              <div>
                <h3 className="text-lg">{cpuData?.productName}</h3>
                <p
                  className={`text-xl text-amber-600 ${
                    !cpuData?.price && "hidden"
                  }`}
                >
                  {cpuData?.price}
                  {"\u09F3"}{" "}
                </p>
              </div>
              <Link href={"/pc-builder/cpu"}>
                {" "}
                <button className="btn btn-outline">Choose</button>
              </Link>
            </div>

            {/* Motherboard card  */}
            <div className="flex justify-between border-2 border-blue-400 py-5 px-4  mb-4">
              <div className="">
                <h1 className=" ">Motherboard</h1>
                <Image
                  className={`${!motherboardData?.img && "hidden"}`}
                  src={motherboardData?.img}
                  width={40}
                  height={40}
                  alt="product img"
                  f
                />
              </div>
              <div>
                <h3 className="text-lg">{motherboardData?.productName}</h3>
                <p
                  className={`text-xl text-amber-600 ${
                    !motherboardData?.price && "hidden"
                  }`}
                >
                  {motherboardData?.price}
                  {"\u09F3"}{" "}
                </p>
              </div>

              <Link href={"/pc-builder/motherboard"}>
                {" "}
                <button className="btn btn-outline">Choose</button>
              </Link>
            </div>

            {/* Ram card  */}
            <div className="flex justify-between border-2 border-blue-400 py-5 px-4 mb-4">
              <div className="">
                <h1>Ram</h1>
                <Image
                  className={`${!ramData?.img && "hidden"}`}
                  src={ramData?.img}
                  width={40}
                  height={40}
                  alt="product img"
                />
              </div>

              <div className="px-3">
                <h3 className="text-lg">{ramData?.productName}</h3>
                <p className={`${!ramData?.img && "hidden"}`}>
                  {ramData?.price}
                  {"\u09F3"}{" "}
                </p>
              </div>

              <Link href={"/pc-builder/ram"}>
                {" "}
                <button className="btn btn-outline">Choose</button>
              </Link>
            </div>

            {/* GraphicsCard  */}
            <div className="flex justify-between border-2 border-blue-400 py-5 px-4 mb-4">
              <div>
                <h1>Graphics Card</h1>
                <Image
                  className={`${!GrapihisCardData?.img && "hidden"}`}
                  src={GrapihisCardData?.img}
                  width={40}
                  height={40}
                  alt="product img"
                />
              </div>
              <div className="px-3">
                <h3 className="text-lg">{GrapihisCardData?.productName}</h3>
                <p
                  className={`text-xl text-amber-600 ${
                    !cpuData?.price && "hidden"
                  }`}
                >
                  {GrapihisCardData?.price}
                  {"\u09F3"}{" "}
                </p>
              </div>

              <Link href={"/pc-builder/graphicscard"}>
                {" "}
                <button className="btn btn-outline">Choose</button>
              </Link>
            </div>

            {/* storage device  */}
            <div className="flex justify-between border-2 border-blue-400 py-5 px-4 mb-4">
              <div>
                <h1>Storage Device</h1>
                <Image
                  className={`${!storageData?.img && "hidden"}`}
                  src={storageData?.img}
                  width={40}
                  height={40}
                  alt="product img"
                />
              </div>
              <div className="px-3">
                <h3 className="text-lg">{storageData?.productName}</h3>
                <p
                  className={`text-xl text-amber-600 ${
                    !storageData?.price && "hidden"
                  }`}
                >
                  {storageData?.price}
                  {"\u09F3"}{" "}
                </p>
              </div>
              <Link href={"/pc-builder/storage"}>
                {" "}
                <button className="btn btn-outline">Choose</button>
              </Link>
            </div>

            {/* power Suply */}
            <div className="flex justify-between border-2 border-blue-400 py-5 px-4 mb-4">
              <div>
                <h1>Power Supply Unit</h1>
                <Image
                  className={`${!powerSupplyData?.img && "hidden"}`}
                  src={powerSupplyData?.img}
                  width={40}
                  height={40}
                  alt="product img"
                />
              </div>
              <div className="px-3">
                <h3 className="text-lg">{powerSupplyData?.productName}</h3>
                <p
                  c
                  className={`text-xl text-amber-600 ${
                    !powerSupplyData?.price && "hidden"
                  }`}
                >
                  {powerSupplyData?.price}
                  {"\u09F3"}{" "}
                </p>
              </div>
              <Link href={"/pc-builder/powerSupply"}>
                {" "}
                <button className="btn btn-outline">Choose</button>
              </Link>
            </div>

            {/* casing  */}
            <div className="flex justify-between border-2 border-blue-400 py-5 px-4 mb-4">
              <div>
                <h1>Casing</h1>
                <Image
                  className={`${!casingData?.img && "hidden"}`}
                  src={casingData?.img}
                  width={40}
                  height={40}
                  alt="product img"
                />
              </div>
              <div className="px-3">
                <h3 className="text-lg">{casingData?.productName}</h3>
                <p
                  className={`text-xl text-amber-600 ${
                    !casingData?.price && "hidden"
                  }`}
                >
                  {casingData?.price}
                  {"\u09F3"}{" "}
                </p>
              </div>
              <Link href={"/pc-builder/casing"}>
                {" "}
                <button className="btn btn-outline">Choose</button>
              </Link>
            </div>

            {/* monitor  */}
            <div className="flex justify-between border-2 border-blue-400 py-5 px-4 mb-4">
              <div>
                <h1>Monitor</h1>
                <Image
                  className={`${!monitorData?.img && "hidden"}`}
                  src={monitorData?.img}
                  width={40}
                  height={40}
                  alt="product img"
                />
              </div>
              <div className="px-3">
                <h3 className="text-lg">{monitorData?.productName}</h3>
                <p
                  className={`text-xl text-amber-600 ${
                    !monitorData?.price && "hidden"
                  }`}
                >
                  {monitorData?.price}
                  {"\u09F3"}{" "}
                </p>
              </div>
              <Link href={"/pc-builder/monitor"}>
                {" "}
                <button className="btn btn-outline">Choose</button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center items-center py-5">
            <button
              onClick={handleCompleateBuild}
              disabled={!isAllFilupStatus}
              className="btn btn-active btn-primary"
            >
              Build Your Pc
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PcBuilder;
