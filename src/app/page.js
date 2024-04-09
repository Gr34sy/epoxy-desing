import { ProductCard } from "@/components/ProductCard/ProductCard";

export default function Home() {
  return (
    <main className="page">
      <div>
        <h1 className="header">
          Strona w trakcie przebudowy! <br/>
          <span>Zapraszamy Niebawem</span>
        </h1>
      </div>
      <ProductCard />
    </main>
  );
}
