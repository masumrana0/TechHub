import CategoryCard from "@/components/shared/CategoryCard";
import React from "react";

const ProductCategory = ({ products }) => {
  return (
    <div>
      {" "}
      {products?.data?.map((product) => (
        <CategoryCard key={product?._id} product={product} />
      ))}
    </div>
  );
};

export default ProductCategory;

// Server side Randering
export const getServerSideProps = async (context) => {
  const { query } = context;
  const res = await fetch(
    `http://localhost:3000/api/product?category=${query.productcategory}`
  );
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
};
