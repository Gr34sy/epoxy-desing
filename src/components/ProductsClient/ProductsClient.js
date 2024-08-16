"use client";

// components
import { Grid } from "@/components/Grid/Grid";
import { ProductCard } from "@/components/ProductCard/ProductCard";

// hooks
import { useState, useEffect } from "react";
import { Checkbox } from "../CustomCheckbox/CustomCheckbox";
import { Select } from "../CustomSelect/CustomSelect";
export default function ProductsClient({ initialProducts }) {
  const [products, setProducts] = useState(initialProducts);

  const [sortOrder, setSortOrder] = useState("newest");
  const [filterPremium, setFilterPremium] = useState(false);

  // useEffect(() => {
  //   setProducts("newest");
  // }, [sortOrder]);

  function filterPremiumHandler(filterValue) {
    if (filterValue === true) {
      setProducts((products) => {
        return products.filter((product) => product.premium === filterValue);
      });
    } else {
      setProducts(initialProducts);
    }
  }

  return (
    <div className="products__container">
      <div className="search-params">
        <Checkbox action={filterPremiumHandler} />
        <Select action={(value) => setSortOrder(value)} />
      </div>

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
