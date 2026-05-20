import { getProducts } from "@/lib/api";
import { Product } from "@/lib/types";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  let products: Product[] = [];
  let error: string | null = null;

  try {
    products = await getProducts();
  } catch (err) {
    error = err instanceof Error ? err.message : "Failed to fetch products";
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Mahsulotlar</h1>
      
      {error ? (
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
          <p className="text-red-600 mb-2">Mahsulotlarni yuklashda xatolik yuz berdi</p>
          <p className="text-red-500 text-sm">{error}</p>
          <p className="text-gray-600 text-sm mt-2">Iltimos, keyinroq qayta urinib ko&apos;ring</p>
        </div>
      ) : products.length === 0 ? (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
          <p className="text-gray-600">Mahsulotlar topilmadi</p>
        </div>
      ) : (
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
      )}
    </div>
  );
}