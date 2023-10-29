import Image from "next/image";
import img1 from "/public/5.jpg";
import img2 from "/public/2.jpg";
import img3 from "/public/3.jpg";
import img4 from "/public/4.jpg";
import HomeCard from "@/components/shared/HomeCard";
import CategoriesCard from "@/components/Ui/CategoriesCard";

const HomePage = ({ products }) => {
  return (
    <div className="bg-gray-200 pb-20">
      <header>
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <Image
              className="lg:w-full lg:h-[600px]"
              src={img2}
              alt="Picture of the author"
              height={500}
              width={500}
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <Image
              className="lg:w-full lg:h-[600px]"
              src={img1}
              alt="Picture of the author"
              height={500}
              width={500}
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <Image
              className="lg:w-full lg:h-[600px]"
              src={img3}
              alt="Picture of the author"
              height={500}
              width={500}
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <Image
              className="lg:w-full lg:h-[600px]"
              src={img4}
              alt="Picture of the author"
              height={500}
              width={500}
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
      {/* Featured product  */}
      <div className="my-7  ">
        <p className="text-center text-4xl mb-10 font-bold">
          Featured PC Component.
        </p>
        <div className="container mx-auto mt-10">
          <div className="grid  lg:grid-cols-3 gap-5 mx-5 lg:mx-0">
            {products?.data?.map((product) => (
              <HomeCard key={product?._id} product={product} />
            ))}
          </div>
        </div>
      </div>
      {/* Featured Categories */}
      <div className="container mx-auto py-20">
        <p className="text-center text-5xl mb-10 font-bold">
          9 Featured Categories
        </p>
        <div className="mx-5 lg:mx-0">
          <CategoriesCard />
        </div>
      </div>
    </div>
  );
};

// SSG implementation
export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/product?limit=6");
  const data = await res.json();
  return { props: { products: data } };
}
export default HomePage;
