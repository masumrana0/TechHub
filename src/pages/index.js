import Image from "next/image";
import img1 from "/public/5.jpg";
import img2 from "/public/2.jpg";
import img3 from "/public/3.jpg";
import img4 from "/public/4.jpg";

const HomePage = () => {
  return (
    <div>
      <header>
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <Image
              className="lg:w-full lg:h-[600px]"
              src={img2}
              alt="Picture of the author"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <Image
              className="lg:w-full lg:h-[600px]"
              src={img1}
              alt="Picture of the author"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <Image
              className="lg:w-full lg:h-[600px]"
              src={img3}
              alt="Picture of the author"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <Image
              className="lg:w-full lg:h-[600px]"
              src={img4}
              alt="Picture of the author"
            />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
