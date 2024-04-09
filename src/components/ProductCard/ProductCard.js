import Image from "next/image";
import Link from "next/link";

export function ProductCard({ title, price, img, isPremium }) {
  return (
    <div className="product-card">
      <Link href="/" className="product-card__wrapper">
       <div className="product-card__img">
       <Image
          src={img}
          alt={title}
          fill={true}
          style={{objectFit:"cover"}}
        />
       </div>

        <h3 className="product-card__title">{title}</h3>
        <p className="product-card__price">
          {price}$ {isPremium && <span>Premium</span>}
        </p>
      </Link>
    </div>
  );
}