import Image from "next/image";
import Link from "next/link";

export function ProductCard({ id, title, price, img, isPremium, lg }) {
  return (
    <div className="product-card">
      <Link href={`/products/${id}`} className="product-card__wrapper">
        <div
          className={
            lg ? "product-card__img product-card__img--lg" : "product-card__img"
          }
        >
          <Image
            src={img}
            alt={title}
            fill={true}
            style={{ objectFit: "cover" }}
            sizes="(max-width: 544px)  100vw, (max-width:800px) 50vw, 33vw"
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
