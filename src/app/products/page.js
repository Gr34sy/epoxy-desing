// components
import { Grid } from "@/components/Grid/Grid";
import { ProductCard } from "@/components/ProductCard/ProductCard";

// lib functions
import { getProducts } from "@/lib/getProducts";

export default async function Products() {
  const products = await getProducts();

  console.log(products);

  return (
    <main className="layout">
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
    </main>
  );
}
