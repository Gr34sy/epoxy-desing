import { getProducts } from '@/lib/getProducts';
import ProductsClient from '@/components/ProductsClient/ProductsClient';

export default async function Products() {
  const products = await getProducts();

  return (
    <main className="layout">
      <h1 className="header">Stała oferta</h1>
      <ProductsClient initialProducts={products} />
    </main>
  );
}
