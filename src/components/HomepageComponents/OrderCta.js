import { Button } from '../Button/Button';
import { ProductCard } from '../ProductCard/ProductCard';

const OrderCta = ({ product }) => {
  return (
    <div className="order-cta">
      <h2 className="header">Sprawdź nasze produkty</h2>
      <div className="order-cta_container layout">
        <div className="order-cta_container__product">
          <ProductCard
            lg
            id={product._id.toString()}
            title={product.name}
            description={product.description}
            isPremium={product.premium}
            price={product.price}
            img={product.imageUrl}
          />
        </div>

        <div className="order-cta__buttons">
          <Button link="/products" outlined>
            Kolekcja
          </Button>

          <Button link="/order">Zamów Teraz!</Button>
        </div>
      </div>
    </div>
  );
};

export default OrderCta;
