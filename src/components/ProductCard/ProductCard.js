import Image from "next/image";
import Link from "next/link";

export function ProductCard() {
  return (
    <div className="product-card">
      <Link href="/" className="product-card__wrapper">
        <div></div>
        <h3 className="product-card__title">Jagermeister</h3>
        <p className="product-card__price">120$</p>
      </Link>
    </div>
  );
}
