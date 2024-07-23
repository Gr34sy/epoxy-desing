// components
import { Grid } from "@/components/Grid/Grid";
import { ProductCard } from "@/components/ProductCard/ProductCard";

// lib functions
import { getProducts } from "@/lib/getProducts";

// images
import absolut from "../../assets/images/products/absolut.jpg";
import jagermeister from "../../assets/images/products/jagermeister.jpg";
import bombaj from "../../assets/images/products/bombaj.jpg";

export default async function Products() {
  const products = await getProducts();

  console.log(products);

  return (
    <main className="layout">
      <Grid>
        <ProductCard title="Absolut" price="120" img={absolut} isPremium />
        <ProductCard title="Jagermeister" price="120" img={jagermeister} />
        <ProductCard title="Bombaj" price="120" img={bombaj} />
        <ProductCard title="Absolut" price="120" img={absolut} isPremium />
        <ProductCard title="Jagermeister" price="120" img={jagermeister} />
        <ProductCard title="Bombaj" price="120" img={bombaj} />
        <ProductCard title="Absolut" price="120" img={absolut} isPremium />
        <ProductCard title="Jagermeister" price="120" img={jagermeister} />
        <ProductCard title="Bombaj" price="120" img={bombaj} />
      </Grid>
    </main>
  );
}
