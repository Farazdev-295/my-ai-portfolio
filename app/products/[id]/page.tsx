import { Suspense } from 'react';
import { Product } from '@/types/index';
import Link from 'next/link';

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

async function getProductDetail(id: string): Promise<Product> {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  
  if (!res.ok) {
    throw new Error('Failed to fetch product details');
  }

  return res.json();
}

// 1. Params ko yahan unwrap (await) karenge
async function ProductContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; 
  const product = await getProductDetail(id);

  return (
    <div className="border rounded-lg p-6 shadow-md bg-white mt-4">
      {product.thumbnail && (
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
      )}
      <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-2xl font-bold text-green-600 mb-2">\${product.price}</p>
    </div>
  );
}

// 2. Main Page component ab 'async' nahi hai (Yeh error khatam kar dega)
export default function ProductDetailPage({ params }: ProductPageProps) {
  return (
    <main className="max-w-3xl mx-auto p-6">
      <Link href="/products" className="text-blue-500 hover:underline mb-4 inline-block">
        ← Back to Products
      </Link>

      {/* Suspense ke andar params ko as a prop pass kar diya */}
      <Suspense fallback={<div className="p-4 text-gray-500">Loading product details...</div>}>
        <ProductContent params={params} />
      </Suspense>
    </main>
  );
}