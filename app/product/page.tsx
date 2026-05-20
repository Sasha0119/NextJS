import { getProducts } from "@/lib/api";
import { Product } from "@/lib/types";
import Image from "next/image";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Mahsulotlar</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.slice(0, 18).map((product: Product) => (
          <div key={product.id} className="bg-white rounded-xl shadow p-4">
            <div className="w-full h-48 mb-4 relative">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <h3 className="font-semibold text-sm">{product.title}</h3>
            <p className="text-blue-600 font-bold mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}