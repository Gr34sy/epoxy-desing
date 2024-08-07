import React from "react";
import getProductById from "@/lib/getProductById";

export default async function ProductDetailsPage({ params }) {
  const details = await getProductById(params.id);
  if (!details) {
    return <div className="product-details__not-found">Product not found</div>;
  }
  console.log(details);

  return <div>{details.name}</div>;
}
