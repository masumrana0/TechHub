import { BsCpu, BsFillCpuFill } from "react-icons/fa";
const PcBuilder = () => {
  return (
    <div className="flex justify-center my-10 px-3 sm:px-0">
      <div className="w-full sm:w-1/2 border-2 border-blue-400">
        <div className="flex justify-between items-center p-3">
          {" "}
          <h2 className="text-xl hidden lg:block font-bold">
            PC Builder- Build Your Computer -TechHub{" "}
          </h2>{" "}
          <h2 className="text-white text-xl font-extrabold bg-black py-3 px-6 rounded-lg text-center">
            1800{"\u09F3"}
          </h2>
        </div>
        <div className="px-4 mt-5">
          <div className="bg-gray-500    font-bold  text-white">
            <h2>Choose Component</h2>
          </div>

          <div className="mt-5">
            <div className="flex justify-between border-2 border-blue-400 py-5 px-4 mb-4">
              <h1>CPU</h1>
              <button className="btn btn-outline">Choose</button>
            </div>
            <div className="flex justify-between border-2 border-blue-400 py-5 px-4 mb-4">
              <h1>Motherboard</h1>
              <button className="btn btn-outline">Choose</button>
            </div>
            <div className="flex justify-between border-2 border-blue-400 py-5 px-4 mb-4">
              <h1>RAM</h1>
              <button className="btn btn-outline">Choose</button>
            </div>
            <div className="flex justify-between border-2 border-blue-400 py-5 px-4 mb-4">
              <h1>Grapics Card</h1>
              <button className="btn btn-outline">Choose</button>
            </div>
            <div className="flex justify-between border-2 border-blue-400 py-5 px-4 mb-4">
              <h1>Storage Device</h1>
              <button className="btn btn-outline">Choose</button>
            </div>
            <div className="flex justify-between border-2 border-blue-400 py-5 px-4 mb-4">
              <h1>Power Supply Unit</h1>
              <button className="btn btn-outline">Choose</button>
            </div>
            <div className="flex justify-between border-2 border-blue-400 py-5 px-4 mb-4">
              <h1>Casing</h1>
              <button className="btn btn-outline">Choose</button>
            </div>
            <div className="flex justify-between border-2 border-blue-400 py-5 px-4 mb-4">
              <h1>Monitor</h1>
              <button className="btn btn-outline">Choose</button>
            </div>
          </div>
          <div className="flex justify-center items-center py-5">
            <button className="btn btn-active btn-primary   ">
              Build Your Pc
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PcBuilder;
