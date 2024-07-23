import { ProductCard } from "@/components/ProductCard/ProductCard";
import { getMainPageDetails } from "@/lib/getMainPageDetails";
import { Button } from "@/components/Button/Button";

import Image from "next/image";
import { redirect } from "next/navigation";
export default async function Home() {
  const details = await getMainPageDetails();

  console.log(details);

  return (
    <main className="homepage">
      <div className="hero">
        <div className="hero__content">
          <Image
            src={details.backgroundImg}
            fill
            alt="home decoration example"
            className="hero__img"
          />

          <h1 className="header hero__header">
            {details.title}
            <span>{details.subtitle}</span>
          </h1>
        </div>
      </div>

      <div className="order-cta layout">
        <ProductCard />

        <div className="order-cta__buttons">
          <Button link="/order" outlined>
            Zamów Teraz!
          </Button>

          <Button link="/products" outlined>
            Sprawdź kolekcję
          </Button>
        </div>
      </div>

      <div className="about-us">
        <div className="about-us__description">
          <h2>O nas</h2>
          <p>{details.description}</p>
        </div>
        <div className="about-us__gif">GIF</div>
      </div>
    </main>
  );
}
