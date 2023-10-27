import CategoryCard from "@/components/shared/CategoryCard";
import { useRouter } from "next/router";
const Products = ({ products }) => {
  const router = useRouter();
  if (!products) {
    return <span className="loading loading-dots loading-lg"></span>;
  }

  return (
    <div className="bg-gray-300">
      {products?.data.map((product) => (
        <CategoryCard key={product?.key} product={product} />
      ))}
    </div>
  );
};

export default Products;

// Server side Randering
export const getServerSideProps = async (context) => {
  const { query } = context;
  const res = await fetch(
    `http://localhost:3000/api/product?category=${query.category}`
  );
  const data = await res.json();
  console.log(data);
  return {
    props: {
      products: data,
    },
  };
};
