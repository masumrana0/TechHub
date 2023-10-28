import CategoryCard from "@/components/shared/CategoryCard";
import HomeCard from "@/components/shared/HomeCard";
import { useRouter } from "next/router";
const Products = ({ products }) => {
  const router = useRouter();
  if (!products) {
    return <span className="loading loading-dots loading-lg"></span>;
  }

  return (
    <div className="">
      <div className="bg-gray-300   flex flex-col lg:flex-row lg:flex-wrap gap-20 justify-center py-20   ">
        {products?.data.map((product) => (
          <HomeCard key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;

// Server side Randering
export const getServerSideProps = async (context) => {
  const { query } = context;
  const res = await fetch(
    `http://localhost:3000/api/product?category=${query.cardId}`
  );
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
};
