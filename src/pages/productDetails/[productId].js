import { useRouter } from "next/router";
import React from "react";

const ProductDetails = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h2>Page:{router.query.productId} </h2>
    </div>
  );
};

export default ProductDetails;
