import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";

const products = initialData.products

export default function Home() {
  return (
    <>

    {/* Título */}
    <Title 
      title="Shop"
      subtitle="A virtual store for the best products"
      className="mb-2"
      />

    {/* Lista de productos */}
    <ProductGrid products={products} /> 
    </>
  );
}
