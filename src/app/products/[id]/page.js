import React from "react";
import getProductById from "@/lib/getProductById";
import Image from "next/image";

export default async function ProductDetailsPage({ params }) {
  const details = await getProductById(params.id);
  if (!details) {
    return <div className="product-details__not-found">Product not found</div>;
  }
  console.log(details);

  return (
    <div className="layout">
      <div className="product-details">
        <div className="product-details__image">
          <Image src={details.imageUrl} alt={details.name} fill />
        </div>

        <div>
          <h1 className="header product-details__title">{details.name}</h1>

          <div className="product-details__container">
            <p className="product-details__price">{details.price}zł</p>
            <p className="product-details__description">
              {details.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
