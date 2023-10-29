import HomeCard from "@/components/shared/HomeCard";
import { useRouter } from "next/router";

const Products = ({ products }) => {
  const router = useRouter();
  if (!products) {
    return <span className="loading loading-dots loading-lg"></span>;
  }
  console.log(products);
  return (
    <div className="">
      <div className="bg-gray-300 flex flex-col lg:flex-row lg:flex-wrap gap-20 justify-center py-20">
        {products.map((product) => (
          <HomeCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;

// SSG implemantation

export async function getStaticPaths() {
  const categories = [
    "CPU",
    "Motherboard",
    "RAM",
    "Storage",
    "PowerSupply",
    "Monitor",
    "GraphicsCard",
    "Casing",
    "Others",
  ];
  const paths = categories.map((category) => ({
    params: { categoriesData: category },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { categoriesData } = params;
  // Fetch data based on the category
  const res = await fetch(
    `http://localhost:3000/api/product?category=${categoriesData}`
  );
  const products = await res.json();

  return {
    props: {
      products: products.data,
    },
  };
}
