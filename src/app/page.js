// components
import { Grid } from "@/components/Grid/Grid";
import { ProductCard } from "@/components/ProductCard/ProductCard";

// images
import absolut from "../assets/images/products/absolut.jpg";
import jagermeister from "../assets/images/products/jagermeister.jpg";
import bombaj from "../assets/images/products/bombaj.jpg";

export default function Home() {
  return (
    <main className="page">
      {/* <div>
        <h1 className="header">
          Strona w trakcie przebudowy! <br/>
          <span>Zapraszamy Niebawem</span>
        </h1>
      </div> */}

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
