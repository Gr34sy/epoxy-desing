"use client";

// components
import { Grid } from "@/components/Grid/Grid";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { SearchParams } from "./SearchParams";

// hooks
import { useState } from "react";
export default function ProductsClient({ initialProducts }) {
  const [products, setProducts] = useState(initialProducts);

  return (
    <div>
      <SearchParams />
      <Grid>
        {products.map((product) => {
          return (
            <ProductCard
              key={product._id.toString()}
              id={product._id.toString()}
              title={product.name}
              price={product.price}
              img={product.imageUrl}
              isPremium={product.premium ? product.premium : false}
            />
          );
        })}
      </Grid>
    </div>
  );
}
