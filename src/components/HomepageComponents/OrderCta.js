import { Button } from "../Button/Button";
import { ProductCard } from "../ProductCard/ProductCard";

const OrderCta = ({ product }) => {
  return (
    <div>
      <h2 className="header">Sprawdź nasze produkty</h2>
      <div className="order-cta layout">
        <div className="order-cta__product">
          <ProductCard
            title={product.name}
            description={product.description}
            isPremium={product.premium}
            price={product.price}
            img={product.imageUrl}
          />
        </div>

        <div className="order-cta__buttons">
          <Button link="/order" outlined>
            Zamów Teraz!
          </Button>

          <Button link="/products" outlined>
            Kolekcja
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderCta;
